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

  function handleLogin(e) {
    e.preventDefault();
    setError("");
    setLoading(true);
    setTimeout(() => {
      if (username === "admin" && password === "admin") {
        setLoggedIn(true);
      } else {
        setError("Invalid username or password.");
      }
      setLoading(false);
    }, 1000);
  }

  if (loggedIn) return <Dashboard onLogout={() => setLoggedIn(false)} />;

  return (
    <main style={{ backgroundColor: "#0a0a0a", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ backgroundColor: "#1C1C1C", border: "2px solid #F5C000", borderRadius: "8px", padding: "3rem", width: "100%", maxWidth: "420px" }}>
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <h1 style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: "2rem", color: "#F5C000", marginBottom: "0.25rem" }}>RezSolution</h1>
          <p style={{ color: "#AAAAAA", fontSize: "0.9rem" }}>Admin Login</p>
        </div>
        {error && (
          <div style={{ backgroundColor: "#2a0a0a", border: "1px solid #D42B2B", borderRadius: "4px", padding: "0.75rem 1rem", color: "#D42B2B", fontSize: "0.9rem", marginBottom: "1rem" }}>{error}</div>
        )}
        <form onSubmit={handleLogin} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          <div>
            <label style={{ color: "#CCCCCC", fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" }}>Username</label>
            <input value={username} onChange={e => setUsername(e.target.value)} placeholder="admin" style={{ width: "100%", backgroundColor: "#111111", border: "1px solid #444444", borderRadius: "4px", padding: "0.75rem 1rem", color: "#FFFFFF", fontFamily: "Barlow", fontSize: "1rem", outline: "none" }} required />
          </div>
          <div>
            <label style={{ color: "#CCCCCC", fontSize: "0.9rem", display: "block", marginBottom: "0.4rem" }}>Password</label>
            <div style={{ position: "relative" }}>
              <input type={showPassword ? "text" : "password"} value={password} onChange={e => setPassword(e.target.value)} placeholder="password" style={{ width: "100%", backgroundColor: "#111111", border: "1px solid #444444", borderRadius: "4px", padding: "0.75rem 3rem 0.75rem 1rem", color: "#FFFFFF", fontFamily: "Barlow", fontSize: "1rem", outline: "none" }} required />
              <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: "absolute", right: "0.75rem", top: "50%", transform: "translateY(-50%)", background: "none", border: "none", color: "#AAAAAA", cursor: "pointer", fontSize: "0.85rem" }}>
                {showPassword ? "HIDE" : "SHOW"}
              </button>
            </div>
          </div>
          <button type="submit" disabled={loading} style={{ backgroundColor: "#F5C000", color: "#1C1C1C", padding: "0.9rem", borderRadius: "4px", fontFamily: "Barlow Condensed", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1 }}>
            {loading ? "SIGNING IN..." : "SIGN IN"}
          </button>
        </form>
        <p style={{ color: "#555555", fontSize: "0.8rem", textAlign: "center", marginTop: "1.5rem" }}>Demo credentials: admin / admin</p>
      </div>
    </main>
  );
}
