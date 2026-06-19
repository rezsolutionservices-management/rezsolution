"use client";
import { useState } from "react";

export default function Business() {
  const [activeTab, setActiveTab] = useState("business");
  const [bizForm, setBizForm] = useState({ name: "", company: "", email: "", phone: "", volume: "", notes: "" });
  const [eateryForm, setEateryForm] = useState({ name: "", eatery: "", phone: "", email: "", nation: "", type: "", volume: "", hours: "", food: "", billing: "" });
  const [bizSubmitted, setBizSubmitted] = useState(false);
  const [eaterySubmitted, setEaterySubmitted] = useState(false);

  function handleBizChange(e) { setBizForm({ ...bizForm, [e.target.name]: e.target.value }); }
  function handleEateryChange(e) { setEateryForm({ ...eateryForm, [e.target.name]: e.target.value }); }
  function handleBizSubmit(e) { e.preventDefault(); setBizSubmitted(true); }
  function handleEaterySubmit(e) { e.preventDefault(); setEaterySubmitted(true); }

  const inputStyle = { width: "100%", backgroundColor: "#FFFFFF", border: "1px solid #DDDDDD", borderRadius: "4px", padding: "0.75rem 1rem", color: "#333333", fontFamily: "Barlow, sans-serif", fontSize: "1rem", outline: "none", marginTop: "0.4rem" };
  const labelStyle = { color: "#555555", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "0.9rem", display: "block" };
  const fieldStyle = { display: "flex", flexDirection: "column", gap: "0.25rem" };

  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>Partner With Us</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>Business Accounts</h1>
        <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: "550px", margin: "0 auto", lineHeight: 1.7 }}>
          Streamlined delivery for businesses and CMO food partners. Regular pickups, flexible billing, and a direct line to your driver.
        </p>
      </section>

      {/* Tabs */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "0 2rem", borderBottom: "1px solid #E5E7EB" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex" }}>
          {[{ id: "business", label: "Business Account" }, { id: "eatery", label: "CMO Eatery Partner" }].map(tab => (
            <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{ padding: "1.25rem 2rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", borderBottom: activeTab === tab.id ? "3px solid #F5C000" : "3px solid transparent", backgroundColor: "transparent", color: activeTab === tab.id ? "#0A1628" : "#999999", cursor: "pointer" }}>
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Content */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>

          {activeTab === "business" && (
            <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "240px" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628", marginBottom: "1rem" }}>Business Account Program</h2>
                <p style={{ color: "#666666", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>Regular delivery needs? Set up a business account for streamlined ordering, flexible billing, and priority service.</p>
                {["Priority scheduling", "Flexible weekly or monthly billing", "Direct line to your driver", "Consistent, reliable service", "Standard rate applies"].map(item => (
                  <div key={item} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <span style={{ color: "#F5C000", fontWeight: 700 }}>+</span>
                    <span style={{ color: "#555555", fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ flex: "2", minWidth: "280px" }}>
                {bizSubmitted ? (
                  <div style={{ backgroundColor: "#ECFDF5", border: "2px solid #059669", borderRadius: "8px", padding: "2.5rem", textAlign: "center" }}>
                    <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>Application Received!</h3>
                    <p style={{ color: "#666666" }}>Thanks {bizForm.name} — we will be in touch shortly to set up your account.</p>
                  </div>
                ) : (
                  <form onSubmit={handleBizSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", backgroundColor: "#F4F5F7", padding: "2rem", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                    <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0A1628" }}>Sign Up</h3>
                    {[{ name: "name", label: "Contact Name", type: "text" }, { name: "company", label: "Business Name", type: "text" }, { name: "email", label: "Email Address", type: "email" }, { name: "phone", label: "Phone Number", type: "tel" }].map(f => (
                      <div key={f.name} style={fieldStyle}>
                        <label style={labelStyle}>{f.label}</label>
                        <input type={f.type} name={f.name} value={bizForm[f.name]} onChange={handleBizChange} style={inputStyle} required />
                      </div>
                    ))}
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Estimated Weekly Deliveries</label>
                      <select name="volume" value={bizForm.volume} onChange={handleBizChange} style={inputStyle}>
                        <option value="">Select...</option>
                        <option>1-5</option><option>6-15</option><option>16-30</option><option>30+</option>
                      </select>
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Additional Notes</label>
                      <textarea name="notes" value={bizForm.notes} onChange={handleBizChange} rows={3} style={{ ...inputStyle, resize: "vertical" }} />
                    </div>
                    <button type="submit" style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.9rem 2rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>SUBMIT APPLICATION</button>
                  </form>
                )}
              </div>
            </div>
          )}

          {activeTab === "eatery" && (
            <div style={{ display: "flex", gap: "4rem", flexWrap: "wrap" }}>
              <div style={{ flex: "1", minWidth: "240px" }}>
                <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628", marginBottom: "1rem" }}>CMO Eatery Partner Program</h2>
                <p style={{ color: "#666666", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: "1.5rem" }}>A dedicated delivery tier for food businesses operating on CMO territory. Cafes, home kitchens, catering, band kitchens, and food trucks welcome.</p>
                {["Direct booking line", "Flexible billing options", "Listed on RezSolution site", "Negotiated delivery rate", "Built for CMO food businesses"].map(item => (
                  <div key={item} style={{ display: "flex", gap: "0.5rem", marginBottom: "0.6rem" }}>
                    <span style={{ color: "#F5C000", fontWeight: 700 }}>+</span>
                    <span style={{ color: "#555555", fontSize: "0.95rem" }}>{item}</span>
                  </div>
                ))}
                <div style={{ backgroundColor: "#FEF3C7", border: "1px solid #F5C000", borderRadius: "6px", padding: "1rem", marginTop: "1.5rem" }}>
                  <p style={{ color: "#92400E", fontSize: "0.85rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700 }}>NOTE ON RATES</p>
                  <p style={{ color: "#92400E", fontSize: "0.85rem", marginTop: "0.25rem" }}>Eatery partner delivery rates are negotiated per partner and not publicly published.</p>
                </div>
              </div>
              <div style={{ flex: "2", minWidth: "280px" }}>
                {eaterySubmitted ? (
                  <div style={{ backgroundColor: "#ECFDF5", border: "2px solid #059669", borderRadius: "8px", padding: "2.5rem", textAlign: "center" }}>
                    <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>Application Received!</h3>
                    <p style={{ color: "#666666" }}>Thanks {eateryForm.name} — we will be in touch to discuss your delivery partnership.</p>
                  </div>
                ) : (
                  <form onSubmit={handleEaterySubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem", backgroundColor: "#F4F5F7", padding: "2rem", borderRadius: "8px", border: "1px solid #E5E7EB" }}>
                    <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.5rem", color: "#0A1628" }}>Eatery Partner Sign Up</h3>
                    {[{ name: "name", label: "Your Name", type: "text" }, { name: "eatery", label: "Eatery Name", type: "text" }, { name: "phone", label: "Phone Number", type: "tel" }, { name: "email", label: "Email Address", type: "email" }].map(f => (
                      <div key={f.name} style={fieldStyle}>
                        <label style={labelStyle}>{f.label}</label>
                        <input type={f.type} name={f.name} value={eateryForm[f.name]} onChange={handleEateryChange} style={inputStyle} required />
                      </div>
                    ))}
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Which CMO Nation?</label>
                      <select name="nation" value={eateryForm.nation} onChange={handleEateryChange} style={inputStyle}>
                        <option value="">Select...</option>
                        <option>Chippewas of the Thames First Nation</option>
                        <option>Munsee-Delaware Nation</option>
                        <option>Oneida Nation of the Thames</option>
                      </select>
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Business Type</label>
                      <select name="type" value={eateryForm.type} onChange={handleEateryChange} style={inputStyle}>
                        <option value="">Select...</option>
                        <option>Cafe</option><option>Home Kitchen</option><option>Catering</option><option>Band Kitchen</option><option>Food Truck</option><option>Other</option>
                      </select>
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Estimated Weekly Orders</label>
                      <select name="volume" value={eateryForm.volume} onChange={handleEateryChange} style={inputStyle}>
                        <option value="">Select...</option>
                        <option>1-10</option><option>11-30</option><option>31-60</option><option>60+</option>
                      </select>
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Operating Hours</label>
                      <input type="text" name="hours" value={eateryForm.hours} onChange={handleEateryChange} style={inputStyle} placeholder="e.g. Mon-Fri 9am-5pm" />
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>What do you serve?</label>
                      <textarea name="food" value={eateryForm.food} onChange={handleEateryChange} rows={2} style={{ ...inputStyle, resize: "vertical" }} placeholder="Brief description of your menu" />
                    </div>
                    <div style={fieldStyle}>
                      <label style={labelStyle}>Preferred Billing</label>
                      <select name="billing" value={eateryForm.billing} onChange={handleEateryChange} style={inputStyle}>
                        <option value="">Select...</option>
                        <option>Per delivery</option><option>Weekly</option><option>Monthly</option>
                      </select>
                    </div>
                    <button type="submit" style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.9rem 2rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "1px", border: "none", cursor: "pointer", alignSelf: "flex-start" }}>SUBMIT APPLICATION</button>
                  </form>
                )}
              </div>
            </div>
          )}

        </div>
      </section>

    </main>
  );
}
