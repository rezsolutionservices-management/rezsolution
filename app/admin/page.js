"use client";
import { useState } from "react";
import Dashboard from "./Dashboard";

export default function Admin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/admin-login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setLoggedIn(true);
      } else {
        setError("Invalid username or password.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
    setLoading(false);
  }

  if (loggedIn) return <Dashboard onLogout={() => setLoggedIn(false)} />;

  return (
    <main style={{ backgroundColor: "#F4F5F7", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "3rem", width: "100%", maxWidth: "420px", boxShadow: "0 4px 24px rgba(10,22,40,0.08)" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <div style={{ width: "56px", height: "56px", backgroundColor: "#0A1628", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1rem" }}>
            <div style={{ width: "24px", height: "24px", backgroundColor: "#F5C000", borderRadius: "4px" }} />
          </div>
          <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: "#0A1628", marginBottom: "0.25rem" }}>RezSolution</h1>
          <p style={{ color: "#999999", fontSize: "0.9rem" }}>Admin Portal</p>
        </div>
        {error && (
          <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #DC2626", borderRadius: "4px", padding: "0.75rem 1rem", color: "#DC2626", fontSize: "0.9rem", marginBottom: "1rem" }}>{error}</div>
        )}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ color: "#555555", fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" }}>Username</label>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="admin" style={{ width: "100%", backgroundColor: "#F4F5F7", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none" }} required />
          </div>
          <div>
            <label style={{ color: "#555555", fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="password" style={{ width: "100%", backgroundColor: "#F4F5F7", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 3rem 0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none" }} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#999999", cursor: "pointer", fontSize: "0.85rem" }}>
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.9rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
      </div>
    </main>
  );
}
