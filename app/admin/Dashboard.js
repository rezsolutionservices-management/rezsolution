"use client";
import { useState, useEffect } from "react";

const STATUS_COLORS = { new: "#D97706", "in-progress": "#2563EB", delivered: "#059669" };
const STATUS_BG = { new: "#FEF3C7", "in-progress": "#EFF6FF", delivered: "#ECFDF5" };

function todayStr() {
  return new Date().toISOString().split("T")[0];
}

export default function Dashboard({ onLogout }) {
  const [orders, setOrders] = useState([]);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [expanded, setExpanded] = useState(null);
  const [date, setDate] = useState(todayStr());
  const [loading, setLoading] = useState(true);

  async function loadOrders(selectedDate) {
    setLoading(true);
    try {
      const res = await fetch("/api/orders?date=" + selectedDate);
      const data = await res.json();
      if (data.success) setOrders(data.data || []);
    } catch (e) {
      console.error(e);
    }
    setLoading(false);
  }

  useEffect(() => { loadOrders(date); }, [date]);

  async function updateStatus(id, status) {
    setOrders(orders.map(o => o.id === id ? { ...o, status } : o));
    await fetch("/api/orders", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, status }),
    });
  }

  const filtered = orders.filter(o => {
    const matchFilter = filter === "all" || o.status === filter;
    const matchSearch = o.name?.toLowerCase().includes(search.toLowerCase()) || String(o.id).includes(search);
    return matchFilter && matchSearch;
  });

  const stats = {
    new: orders.filter(o => o.status === "new").length,
    inProgress: orders.filter(o => o.status === "in-progress").length,
    delivered: orders.filter(o => o.status === "delivered").length,
    fees: orders.reduce((sum, o) => sum + (o.fee || 0), 0),
  };

  return (
    <main style={{ backgroundColor: "#F4F5F7", minHeight: "100vh", padding: "2rem" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628" }}>Admin Dashboard</h1>
            <p style={{ color: "#999999", fontSize: "0.85rem" }}>RezSolution Services</p>
          </div>
          <div style={{ display: "flex", gap: "1rem", alignItems: "center", flexWrap: "wrap" }}>
            <input type="date" value={date} onChange={e => setDate(e.target.value)} style={{ backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.5rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", outline: "none", cursor: "pointer" }} />
            <button onClick={() => setDate(todayStr())} style={{ backgroundColor: "#F5C000", border: "none", borderRadius: "4px", color: "#0A1628", padding: "0.5rem 1rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer" }}>Today</button>
            <button onClick={onLogout} style={{ backgroundColor: "transparent", border: "1px solid #DDDDDD", borderRadius: "4px", color: "#666666", padding: "0.5rem 1rem", fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", cursor: "pointer" }}>Log Out</button>
          </div>
        </div>

        {/* Stat Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "1rem", marginBottom: "2rem" }}>
          {[
            { label: "New Orders", value: stats.new, color: "#D97706", bg: "#FEF3C7" },
            { label: "In Progress", value: stats.inProgress, color: "#2563EB", bg: "#EFF6FF" },
            { label: "Delivered", value: stats.delivered, color: "#059669", bg: "#ECFDF5" },
            { label: "Total Fees", value: "$" + stats.fees.toFixed(2), color: "#0A1628", bg: "#FFFFFF" },
          ].map(stat => (
            <div key={stat.label} style={{ backgroundColor: stat.bg, border: "1px solid #E5E7EB", borderRadius: "8px", padding: "1.5rem" }}>
              <p style={{ color: "#999999", fontSize: "0.85rem", marginBottom: "0.5rem" }}>{stat.label}</p>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: stat.color }}>{stat.value}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: "flex", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap", alignItems: "center" }}>
          {["all", "new", "in-progress", "delivered"].map(f => (
            <button key={f} onClick={() => setFilter(f)} style={{ padding: "0.5rem 1.25rem", borderRadius: "4px", border: filter === f ? "2px solid #F5C000" : "1px solid #DDDDDD", backgroundColor: filter === f ? "#FEF3C7" : "#FFFFFF", color: filter === f ? "#92400E" : "#666666", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer", textTransform: "capitalize" }}>
              {f === "all" ? "All Orders" : f.replace("-", " ")}
            </button>
          ))}
          <input value={search} onChange={e => setSearch(e.target.value)} placeholder="Search by name or order ID..." style={{ marginLeft: "auto", backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.5rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "0.9rem", outline: "none", minWidth: "220px" }} />
        </div>

        {/* Orders */}
        <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
          {loading ? (
            <div style={{ textAlign: "center", padding: "4rem", color: "#999999" }}>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.5rem" }}>Loading orders...</p>
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ textAlign: "center", padding: "4rem", backgroundColor: "#FFFFFF", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
              <p style={{ fontFamily: "Barlow Condensed, sans-serif", fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>No orders for this date</p>
              <p style={{ fontSize: "0.9rem", color: "#999999" }}>Try selecting a different date or check back later.</p>
            </div>
          ) : filtered.map(order => (
            <div key={order.id} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "8px", overflow: "hidden" }}>
              <div style={{ padding: "1.25rem 1.5rem", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#F5C000", minWidth: "60px", backgroundColor: "#0A1628", padding: "4px 10px", borderRadius: "4px" }}>#{order.id}</span>
                <span style={{ color: "#0A1628", fontWeight: 500, flex: 1, minWidth: "120px" }}>{order.name}</span>
                <span style={{ color: "#666666", fontSize: "0.9rem", minWidth: "100px" }}>{order.phone}</span>
                <span style={{ color: "#666666", fontSize: "0.9rem", flex: 1, minWidth: "140px" }}>{order.package_type}</span>
                <span style={{ color: "#999999", fontSize: "0.85rem", flex: 2, minWidth: "200px" }}>{order.pickup} to {order.dropoff}</span>
                <span style={{ color: "#0A1628", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, minWidth: "70px" }}>${(order.fee || 0).toFixed(2)}</span>
                <select value={order.status} onChange={e => updateStatus(order.id, e.target.value)} style={{ backgroundColor: STATUS_BG[order.status] || "#F4F5F7", border: "1px solid " + (STATUS_COLORS[order.status] || "#DDDDDD"), borderRadius: "4px", color: STATUS_COLORS[order.status] || "#333333", padding: "0.4rem 0.75rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.9rem", cursor: "pointer", outline: "none" }}>
                  <option value="new">New</option>
                  <option value="in-progress">In Progress</option>
                  <option value="delivered">Delivered</option>
                </select>
                {order.items && (
                  <button onClick={() => setExpanded(expanded === order.id ? null : order.id)} style={{ background: "none", border: "1px solid #DDDDDD", borderRadius: "4px", color: "#666666", padding: "0.4rem 0.75rem", fontFamily: "Barlow, sans-serif", fontSize: "0.85rem", cursor: "pointer" }}>
                    {expanded === order.id ? "Hide Items" : "View Items"}
                  </button>
                )}
              </div>
              {expanded === order.id && order.items && (
                <div style={{ backgroundColor: "#F4F5F7", borderTop: "1px solid #E5E7EB", padding: "1rem 1.5rem" }}>
                  <p style={{ color: "#999999", fontSize: "0.85rem", marginBottom: "0.5rem" }}>Items:</p>
                  <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                    {(() => { try { return JSON.parse(order.items).map((item, i) => (
                      <span key={i} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "4px", padding: "0.3rem 0.75rem", color: "#333333", fontSize: "0.85rem" }}>{item.qty}x {item.name}</span>
                    )); } catch { return <span style={{ color: "#999999", fontSize: "0.85rem" }}>{order.items}</span>; } })()}
                  </div>
                  {order.notes && <p style={{ color: "#666666", fontSize: "0.85rem", marginTop: "0.75rem" }}>Notes: {order.notes}</p>}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}
