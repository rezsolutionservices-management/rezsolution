export default function Services() {
  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>What We Offer</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>Our Delivery Services</h1>
        <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: "550px", margin: "0 auto", lineHeight: 1.7 }}>
          Six delivery types, one reliable operator. CMO community rate or standard — your quote is calculated automatically.
        </p>
      </section>

      {/* Service Cards */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { color: "#2563EB", icon: "🍔", label: "Food Order", surcharge: "+$3", desc: "Hot meals from local restaurants, home kitchens, or CMO eatery partners. Two-step payment — delivery fee upfront, food cost billed after pickup.", note: null },
            { color: "#D97706", icon: "🏪", label: "Smoke & Snack Run", surcharge: "+$2", desc: "Tobacco products and convenience snacks delivered to your door. Item list submitted at order, delivery fee paid upfront.", note: "ID verification required at delivery. Order handed only to the person who placed it." },
            { color: "#059669", icon: "🛒", label: "Groceries", surcharge: "+$3", desc: "Full grocery shopping runs. Submit your list, pay delivery fee upfront, grocery cost billed separately after pickup.", note: null },
            { color: "#374151", icon: "📦", label: "General Parcel", surcharge: "$0", desc: "Packages, courier items, and general goods. Pick up from one address and drop off at another — straightforward and reliable.", note: null },
            { color: "#DC2626", icon: "💊", label: "Pharmacy / Rx", surcharge: "$0", desc: "Prescription pickup and delivery from your pharmacy. We handle the pickup so you don't have to make the trip.", note: null },
            { color: "#7C3AED", icon: "📄", label: "Documents", surcharge: "$0", desc: "Secure document delivery — contracts, forms, legal papers. No package surcharge on documents.", note: null },
          ].map(service => (
            <div key={service.label} style={{ backgroundColor: "#F4F5F7", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "2rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <div style={{ width: "44px", height: "44px", backgroundColor: service.color + "18", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                    {service.icon}
                  </div>
                  <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0A1628" }}>{service.label}</h3>
                </div>
                <span style={{ backgroundColor: service.surcharge === "$0" ? "#E5E7EB" : "#FEF3C7", color: service.surcharge === "$0" ? "#666666" : "#92400E", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.9rem", padding: "4px 12px", borderRadius: "20px", whiteSpace: "nowrap" }}>
                  {service.surcharge} surcharge
                </span>
              </div>
              <p style={{ color: "#555555", fontSize: "0.95rem", lineHeight: 1.6 }}>{service.desc}</p>
              {service.note && (
                <div style={{ backgroundColor: "#FEF3C7", border: "1px solid #F5C000", borderRadius: "4px", padding: "0.75rem 1rem", color: "#92400E", fontSize: "0.85rem", lineHeight: 1.5 }}>
                  {service.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* How It Works */}
      <section style={{ backgroundColor: "#F4F5F7", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Simple Process</p>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.75rem" }}>How It Works</h2>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", margin: "0 auto" }} />
        </div>
        <div style={{ display: "flex", gap: "2rem", maxWidth: "1000px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { step: "01", title: "Place Your Order", desc: "Fill out the order form with your pickup and drop-off addresses. Your rate is calculated automatically." },
            { step: "02", title: "Pay Delivery Fee", desc: "Delivery fee is collected upfront via e-transfer to confirm your order and protect operator time." },
            { step: "03", title: "We Shop For You", desc: "For shopping orders, we head out and pick up your items. Once we have the total, we send it to you and collect payment before delivery." },
            { step: "04", title: "Delivered to Your Door", desc: "Once payment is confirmed, we bring your order straight to your door. Fast, reliable, every time." },
          ].map(item => (
            <div key={item.step} style={{ flex: "1", minWidth: "200px", maxWidth: "220px", textAlign: "center" }}>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "3rem", color: "#F5C000", lineHeight: 1, marginBottom: "0.75rem" }}>{item.step}</div>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#0A1628", marginBottom: "0.5rem" }}>{item.title}</h3>
              <p style={{ color: "#666666", fontSize: "0.9rem", lineHeight: 1.6 }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CMO Strip */}
      <section style={{ backgroundColor: "#D42B2B", padding: "3rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "0.75rem" }}>Proudly Serving CMO Territory</h2>
        <p style={{ color: "#FFDDDD", fontSize: "1rem", marginBottom: "2rem" }}>Community rate applies when both pickup and drop-off are on-reserve within any CMO nation.</p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["Chippewas of the Thames First Nation", "Munsee-Delaware Nation", "Oneida Nation of the Thames"].map(nation => (
            <div key={nation} style={{ backgroundColor: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)", borderRadius: "4px", padding: "0.75rem 1.5rem", color: "#FFFFFF", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem" }}>{nation}</div>
          ))}
        </div>
      </section>

    </main>
  );
}
