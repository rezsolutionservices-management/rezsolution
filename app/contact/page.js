"use client";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }
    setError("");
    setLoading(true);
    try {
      const res = await fetch("https://formspree.io/f/mlgkygaz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        setError("Something went wrong. Please try again or contact us directly.");
      }
    } catch {
      setError("Something went wrong. Please try again or contact us directly.");
    }
    setLoading(false);
  }

  const inputStyle = { width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none" };
  const labelStyle = { color: "#555555", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "0.9rem", display: "block", marginBottom: "0.5rem" };

  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>Get In Touch</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>We are Here When You Need Us</h1>
        <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: "500px", margin: "0 auto", lineHeight: 1.7 }}>
          Questions, quotes, or just want to know if we cover your area — reach out any time.
        </p>
      </section>

      {/* Contact Content */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ display: "flex", gap: "4rem", maxWidth: "1100px", margin: "0 auto", flexWrap: "wrap" }}>

          <div style={{ flex: "2", minWidth: "280px" }}>
            <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628", marginBottom: "2rem" }}>Send Us a Message</h2>

            {submitted ? (
              <div style={{ backgroundColor: "#ECFDF5", border: "2px solid #059669", borderRadius: "8px", padding: "2.5rem", textAlign: "center" }}>
                <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>Message Sent!</h3>
                <p style={{ color: "#666666", fontSize: "1rem" }}>Thanks {form.name} — we will get back to you as soon as possible.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                {error && (
                  <div style={{ backgroundColor: "#FEF2F2", border: "1px solid #DC2626", borderRadius: "4px", padding: "0.75rem 1rem", color: "#DC2626", fontSize: "0.9rem" }}>{error}</div>
                )}
                {[
                  { name: "name", label: "Full Name *", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email Address *", type: "email", placeholder: "your@email.com" },
                  { name: "phone", label: "Phone Number (optional)", type: "tel", placeholder: "(519) 000-0000" },
                ].map(field => (
                  <div key={field.name}>
                    <label style={labelStyle}>{field.label}</label>
                    <input type={field.type} name={field.name} placeholder={field.placeholder} value={form[field.name]} onChange={handleChange} style={inputStyle} />
                  </div>
                ))}
                <div>
                  <label style={labelStyle}>Message *</label>
                  <textarea name="message" placeholder="What can we help you with?" value={form.message} onChange={handleChange} rows={5} style={{ ...inputStyle, resize: "vertical" }} />
                </div>
                <button type="submit" disabled={loading} style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.9rem 2.5rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.7 : 1, alignSelf: "flex-start" }}>
                  {loading ? "SENDING..." : "SEND MESSAGE"}
                </button>
              </form>
            )}
          </div>

          <div style={{ flex: "1", minWidth: "240px", display: "flex", flexDirection: "column", gap: "2rem" }}>
            <div style={{ backgroundColor: "#F4F5F7", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0A1628", marginBottom: "1rem" }}>Contact Info</h3>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                {[
                  { label: "Email", value: "RezSolutionServices@gmail.com" },
                  { label: "Facebook", value: "RezSolution Services" },
                  { label: "Phone", value: "Provided upon order or via Messenger" },
                ].map(item => (
                  <div key={item.label}>
                    <div style={{ color: "#999999", fontSize: "0.8rem", marginBottom: "0.1rem" }}>{item.label}</div>
                    <div style={{ color: "#333333", fontSize: "0.95rem", wordBreak: "break-all" }}>{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ backgroundColor: "#F4F5F7", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0A1628", marginBottom: "1rem" }}>Hours</h3>
              <p style={{ color: "#666666", fontSize: "0.95rem", lineHeight: 1.7 }}>
                Monday - Sunday<br />Flexible hours<br />
                <span style={{ color: "#999999", fontSize: "0.85rem" }}>Contact us to confirm availability</span>
              </p>
            </div>

            <div style={{ backgroundColor: "#0A1628", borderRadius: "8px", padding: "1.5rem" }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#FFFFFF", marginBottom: "0.5rem" }}>Ready to order?</h3>
              <p style={{ color: "#AAAAAA", fontSize: "0.9rem", marginBottom: "1rem" }}>Skip the form and place your order directly.</p>
              <a href="/order" style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.7rem 1.5rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", letterSpacing: "1px", display: "inline-block" }}>ORDER NOW</a>
            </div>
          </div>

        </div>
      </section>

    </main>
  );
}
