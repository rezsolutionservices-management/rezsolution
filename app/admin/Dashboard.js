"use client";
import { useState } from "react";

const STATUS_COLORS = { new: "#F5C000", "in-progress": "#4A90D9", delivered: "#2E7D32" };
const STATUS_BG = { new: "#2a2000", "in-progress": "#0a1a2a", delivered: "#1a3a1a" };

export default function Dashboard({ onLogout }) {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);

  function updateStatus(id, status) {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
  }

  const filtered = orders.filter(o => {
    const matchFilter = filter === "all" || o.status === filter;
    const matchSearch = o.name.toLowerCase().includes(search.toLowerCase()) || o.id.toLowerCase().includes(search.toLowerCase());
    return matchFilter && matchSearch;
  });

  const stats = {
    new: orders.filter(o => o.status === "new").length,
    inProgress: orders.filter(o => o.status === "in-progress").length,
    delivered: orders.filter(o => o.status === "delivered").length,
    fees: orders.reduce((sum, o) => sum + o.fee, 0),
  };

  return (
    <main style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <h1 style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: "2rem", color: "#F5C000" }}>Admin Dashboard</h1>
          <button onClick={onLogout} style={{ backgroundColor: "transparent", border: "1px solid #444444", borderRadius: "4px", color: "#AAAAAA", padding: "0.5rem 1rem", fontFamily: "Barlow", fontSize: "0.9rem", cursor: "pointer" }}>Log Out</button>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "New Orders", value: stats.new, color: "#F5C000" },
            { label: "In Progress", value: stats.inProgress, color: "#4A90D9" },
            { label: "Delivered", value: stats.delivered, color: "#2E7D32" },
            { label: "Total Fees", value: "$" + stats.fees.toFixed(2), color: "#FFFFFF" },
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: "#1C1C1C", border: "1px solid #333333", borderRadius: "8px", padding: "1.5rem" }}>
              <p style={{ color: "#AAAAAA", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{stat.label}</p>
              <p style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: "2rem", color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "1rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          {["all", "new", "in-progress", "delivered"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "0.5rem 1.25rem", borderRadius: "4px", border: filter === f ? "2px solid #F5C000" : "2px solid #444444", backgroundColor: filter === f ? "#2a2000" : "transparent", color: filter === f ? "#F5C000" : "#AAAAAA", fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", textTransform: "capitalize" }}>
              {f === "all" ? "All Orders" : f.replace("-", " ")}
            </button>
          ))}
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or order ID..." style={{ marginLeft: "auto", backgroundColor: "#1C1C1C", border: "1px solid #444444", borderRadius: "4px", padding: "0.5rem 1rem", color: "#FFFFFF", fontFamily: "Barlow", fontSize: "0.9rem", outline: "none", minWidth: "220px" }} />
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#555555" }}>
              <p style={{ fontFamily: "Barlow Condensed", fontSize: "1.5rem", marginBottom: "0.5rem" }}>No orders yet</p>
              <p style={{ fontSize: "0.9rem" }}>Orders placed through your site will appear here.</p>
            </div>
          ) : filtered.map(order => (
            <div key={order.id} style={{ backgroundColor: "#1C1C1C", border: "1px solid #333333", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: "0.95rem", color: "#F5C000", minWidth: "90px" }}>{order.id}</span>
                <span style={{ color: "#FFFFFF", fontWeight: 500, flex: 1, minWidth: "120px" }}>{order.name}</span>
                <span style={{ color: "#AAAAAA", fontSize: "0.9rem", flex: 1, minWidth: "140px" }}>{order.type}</span>
                <span style={{ color: "#AAAAAA", fontSize: "0.85rem", flex: 2, minWidth: "200px" }}>{order.pickup} to {order.dropoff}</span>
                <span style={{ color: "#FFFFFF", fontFamily: "Barlow Condensed", fontWeight: 700, minWidth: "70px" }}>${order.fee.toFixed(2)}</span>
                <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)} style={{ backgroundColor: STATUS_BG[order.status], border: "1px solid " + STATUS_COLORS[order.status], borderRadius: "4px", color: STATUS_COLORS[order.status], padding: "0.4rem 0.75rem", fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", outline: "none" }}>
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="delivered">Delivered</option>
                </select>
                {order.items && order.items.length > 0 && (
                  <button onClick={() => setExpanded(expanded === order.id ? null : order.id)} style={{ background: "none", border: "1px solid #444444", borderRadius: "4px", color: "#AAAAAA", padding: "0.4rem 0.75rem", fontFamily: "Barlow", fontSize: "0.85rem", cursor: "pointer" }}>
                    {expanded === order.id ? "Hide Items" : "View Items"}
                  </button>
                )}
              </div>
              {expanded === order.id && order.items && order.items.length > 0 && (
                <div style={{ backgroundColor: "#111111", borderTop: "1px solid #333333", padding: "1rem 1.5rem" }}>
                  <p style={{ color: "#AAAAAA", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Items:</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {order.items.map((item, i) => (
                      <span key={i} style={{ backgroundColor: "#1C1C1C", border: "1px solid #444444", borderRadius: "4px", padding: "0.3rem 0.75rem", color: "#CCCCCC", fontSize: "0.85rem" }}>{item}</span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
