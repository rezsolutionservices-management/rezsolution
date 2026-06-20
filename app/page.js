export default function Home() {
  return (
    <main>

      {/* Hero Section */}
      <section style={{
        position: "relative",
        height: "700px",
        marginTop: "-65px",
        paddingTop: "65px",
        overflow: "hidden",
        backgroundColor: "#0A1628",
        display: "flex",
        alignItems: "center",
      }}>
        <img src="/hero.jpg" alt="RezSolution delivery vehicle" style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "70%",
          objectFit: "cover",
          objectPosition: "30% center",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to right, #0A1628 25%, rgba(10,22,40,0.8) 45%, rgba(10,22,40,0.15) 70%, rgba(10,22,40,0) 100%)",
        }} />
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #0A1628 0%, transparent 30%)",
        }} />
        <div style={{
          position: "relative",
          zIndex: 2,
          padding: "80px 3rem 0",
          maxWidth: "560px",
        }}>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", marginBottom: "1.25rem" }} />
          <h1 style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(2.5rem, 5vw, 4rem)",
            color: "#FFFFFF",
            lineHeight: 1.1,
            marginBottom: "1rem",
          }}>
            Delivering for<br />
            <span style={{ color: "#F5C000" }}>Our Nation.</span>
          </h1>
          <p style={{
            color: "#CCCCCC",
            fontSize: "1.05rem",
            lineHeight: 1.7,
            marginBottom: "1.75rem",
            maxWidth: "420px",
          }}>
            Fast, reliable courier services across Chippewas of the Thames, Munsee-Delaware, Oneida Nation and Southwestern Ontario.
          </p>
          <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1.75rem", flexWrap: "wrap" }}>
            {["Fast & Reliable", "Community Focused", "Trusted & Secure"].map(badge => (
              <div key={badge} style={{ display: "flex", alignItems: "center", gap: "0.4rem", color: "#CCCCCC", fontSize: "0.85rem" }}>
                <div style={{ width: "6px", height: "6px", backgroundColor: "#F5C000", borderRadius: "50%" }} />
                {badge}
              </div>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="/order" style={{
              backgroundColor: "#F5C000",
              color: "#0A1628",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              fontFamily: "Barlow Condensed, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "1px",
            }}>ORDER NOW</a>
            <a href="/services" style={{
              backgroundColor: "transparent",
              color: "#FFFFFF",
              padding: "0.85rem 2rem",
              borderRadius: "4px",
              border: "2px solid rgba(255,255,255,0.4)",
              fontFamily: "Barlow Condensed, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
              textDecoration: "none",
              letterSpacing: "1px",
            }}>SEE SERVICES</a>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Simple, Transparent Pricing</p>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.75rem" }}>
            Affordable & Straightforward.
          </h2>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", margin: "0 auto" }} />
        </div>
        <div style={{ display: "flex", gap: "2rem", maxWidth: "900px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center", alignItems: "stretch" }}>

          {/* CMO Rate */}
          <div style={{
            backgroundColor: "#F4F5F7",
            border: "2px solid #F5C000",
            borderRadius: "8px",
            padding: "2.5rem",
            flex: "1",
            minWidth: "280px",
            maxWidth: "420px",
            position: "relative",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{
              position: "absolute",
              top: "-14px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#F5C000",
              color: "#0A1628",
              fontFamily: "Barlow Condensed, sans-serif",
              fontWeight: 700,
              fontSize: "0.8rem",
              letterSpacing: "2px",
              padding: "4px 16px",
              borderRadius: "20px",
              whiteSpace: "nowrap",
            }}>CMO ON-RESERVE ORDERS</div>
            <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#F5C000", marginBottom: "0.5rem", marginTop: "0.5rem" }}>Community Rate</h3>
            <div style={{ fontSize: "3rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#0A1628", lineHeight: 1, marginBottom: "0.25rem" }}>$10</div>
            <p style={{ color: "#666666", fontSize: "0.9rem", marginBottom: "1.5rem" }}>flat rate per delivery</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "auto" }}>
              {[
                "Both pickup & drop-off on-reserve",
                "Applies to all 3 CMO nations",
                "Detected automatically by address",
                "No forms or verification needed",
              ].map(item => (
                <li key={item} style={{ color: "#444444", fontSize: "0.95rem", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "#F5C000" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Standard Rate */}
          <div style={{
            backgroundColor: "#F4F5F7",
            border: "1px solid #DDDDDD",
            borderRadius: "8px",
            padding: "2.5rem",
            flex: "1",
            minWidth: "280px",
            maxWidth: "420px",
            display: "flex",
            flexDirection: "column",
          }}>
            <div style={{ height: "14px" }} />
            <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#0A1628", marginBottom: "0.5rem" }}>Standard Rate</h3>
            <div style={{ fontSize: "3rem", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, color: "#0A1628", lineHeight: 1, marginBottom: "0.25rem" }}>
              $0.38<span style={{ fontSize: "1.2rem" }}>/km</span>
            </div>
            <p style={{ color: "#666666", fontSize: "0.9rem", marginBottom: "1.5rem" }}>Distance-based pricing · $10 minimum</p>
            <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", marginTop: "auto" }}>
              {[
                "Southwestern Ontario coverage",
                "Transparent pricing, no hidden fees",
                "Package surcharges from $2-$6",
                "Priority delivery available",
              ].map(item => (
                <li key={item} style={{ color: "#444444", fontSize: "0.95rem", display: "flex", gap: "0.5rem" }}>
                  <span style={{ color: "#888888" }}>✓</span> {item}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section style={{ backgroundColor: "#F4F5F7", padding: "5rem 2rem" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem" }}>What We Deliver</p>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.75rem" }}>
            We Deliver What Matters.
          </h2>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", margin: "0 auto" }} />
        </div>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "1.5rem",
          maxWidth: "1000px",
          margin: "0 auto",
        }}>
          {[
            { color: "#2563EB", icon: "🍔", label: "Food Order", desc: "Hot meals from local spots" },
            { color: "#D97706", icon: "🏪", label: "Smoke & Snack", desc: "ID verified at delivery" },
            { color: "#059669", icon: "🛒", label: "Groceries", desc: "Full shopping runs" },
            { color: "#374151", icon: "📦", label: "General Parcel", desc: "Packages & courier" },
            { color: "#DC2626", icon: "💊", label: "Pharmacy / Rx", desc: "Prescription pickup & drop" },
            { color: "#7C3AED", icon: "📄", label: "Documents", desc: "Secure document delivery" },
{ color: "#DC2626", icon: "🏥", label: "Medical Courier", desc: "Confidential healthcare delivery" },
          ].map(item => (
            <a key={item.label} href="/services" style={{
              backgroundColor: "#FFFFFF",
              border: "1px solid #E5E7EB",
              borderRadius: "8px",
              padding: "1.75rem 1.5rem",
              textDecoration: "none",
              textAlign: "center",
              display: "block",
            }}>
              <div style={{
                width: "52px",
                height: "52px",
                backgroundColor: item.color + "18",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 0.75rem",
                fontSize: "1.5rem",
              }}>
                {item.icon}
              </div>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0A1628", marginBottom: "0.4rem" }}>{item.label}</div>
              <div style={{ color: "#666666", fontSize: "0.85rem" }}>{item.desc}</div>
            </a>
          ))}
        </div>
      </section>

      {/* CMO Strip */}
      <section style={{ backgroundColor: "#D42B2B", padding: "3rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(1.5rem, 3vw, 2.5rem)", color: "#FFFFFF", marginBottom: "0.75rem" }}>
          Proudly Serving CMO Territory
        </h2>
        <p style={{ color: "#FFDDDD", fontSize: "1rem", marginBottom: "2rem" }}>
          Community rate applies when both pickup and drop-off are on-reserve within any CMO nation.
        </p>
        <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          {["Chippewas of the Thames First Nation", "Munsee-Delaware Nation", "Oneida Nation of the Thames"].map(nation => (
            <div key={nation} style={{
              backgroundColor: "rgba(255,255,255,0.15)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "4px",
              padding: "0.75rem 1.5rem",
              color: "#FFFFFF",
              fontFamily: "Barlow Condensed, sans-serif",
              fontWeight: 700,
              fontSize: "1rem",
            }}>{nation}</div>
          ))}
        </div>
      </section>

    </main>
  );
}
