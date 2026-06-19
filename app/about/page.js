export default function About() {
  return (
    <main style={{ backgroundColor: "#F4F5F7" }}>

      {/* Hero */}
      <section style={{ backgroundColor: "#0A1628", padding: "4rem 2rem", textAlign: "center", borderBottom: "4px solid #F5C000" }}>
        <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "1rem" }}>Who We Are</p>
        <h1 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2.5rem, 6vw, 4rem)", color: "#FFFFFF", lineHeight: 1.1, marginBottom: "1rem" }}>
          Built for the Community.<br /><span style={{ color: "#F5C000" }}>Run by the Community.</span>
        </h1>
        <p style={{ color: "#CCCCCC", fontSize: "1.1rem", maxWidth: "550px", margin: "0 auto", lineHeight: 1.7 }}>
          RezSolution Services is a solo-operated last-mile courier business rooted in Southwestern Ontario and built around the CMO nations.
        </p>
      </section>

      {/* Owner Card */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", backgroundColor: "#F4F5F7", border: "2px solid #F5C000", borderRadius: "8px", padding: "3rem", textAlign: "center" }}>
          <div style={{ width: "100px", height: "100px", borderRadius: "50%", backgroundColor: "#E5E7EB", border: "3px solid #F5C000", margin: "0 auto 1.5rem", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "2.5rem" }}>
            DA
          </div>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "2rem", color: "#0A1628", marginBottom: "0.25rem" }}>Daniel Albert</h2>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1.5rem" }}>Owner & Operator</p>
          <p style={{ color: "#666666", fontSize: "1rem", lineHeight: 1.8, fontStyle: "italic" }}>Bio coming soon — check back shortly.</p>
        </div>
      </section>

      {/* Mission Pillars */}
      <section style={{ backgroundColor: "#F4F5F7", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Values</p>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.75rem" }}>What Drives Us</h2>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", margin: "0 auto" }} />
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "2rem", maxWidth: "1100px", margin: "0 auto" }}>
          {[
            { color: "#2563EB", title: "Community First", desc: "Built around the CMO nations — Chippewas of the Thames, Munsee-Delaware, and Oneida Nation. The $10 community rate exists because access matters." },
            { color: "#059669", title: "Reliability", desc: "When we say we are coming, we are coming. Solo-operated means one point of accountability — the owner." },
            { color: "#F5C000", title: "Transparency", desc: "No hidden fees, no surprise charges. Your quote is calculated upfront and explained clearly before you confirm." },
            { color: "#7C3AED", title: "Discretion", desc: "Your orders stay your business. We handle deliveries professionally and with respect for your privacy." },
            { color: "#D97706", title: "Local Knowledge", desc: "We know the roads, the communities, and the people. That local knowledge means faster, smarter deliveries." },
            { color: "#DC2626", title: "Easy to Reach", desc: "No call centres, no bots. You deal directly with the owner — by phone, email, or Facebook." },
          ].map(pillar => (
            <div key={pillar.title} style={{ backgroundColor: "#FFFFFF", border: "1px solid #E5E7EB", borderRadius: "8px", padding: "2rem", borderTop: "3px solid " + pillar.color }}>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#0A1628", marginBottom: "0.5rem" }}>{pillar.title}</h3>
              <p style={{ color: "#666666", fontSize: "0.95rem", lineHeight: 1.6 }}>{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CMO Nations */}
      <section style={{ backgroundColor: "#FFFFFF", padding: "5rem 2rem", borderBottom: "4px solid #F5C000" }}>
        <div style={{ textAlign: "center", marginBottom: "3rem" }}>
          <p style={{ color: "#F5C000", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "3px", textTransform: "uppercase", marginBottom: "0.75rem" }}>Our Territory</p>
          <h2 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 4vw, 3rem)", color: "#0A1628", marginBottom: "0.75rem" }}>The Communities We Serve</h2>
          <div style={{ width: "40px", height: "3px", backgroundColor: "#F5C000", margin: "0 auto 0.75rem" }} />
          <p style={{ color: "#666666", fontSize: "1rem", maxWidth: "500px", margin: "0 auto" }}>All three CMO nations are located near Muncey, Ontario — the heart of our coverage area.</p>
        </div>
        <div style={{ display: "flex", gap: "2rem", maxWidth: "1100px", margin: "0 auto", flexWrap: "wrap", justifyContent: "center" }}>
          {[
            { name: "Chippewas of the Thames First Nation", abbr: "COTTFN", desc: "Located near Muncey, Ontario. Home to a vibrant community with strong cultural roots and growing local businesses." },
            { name: "Munsee-Delaware Nation", abbr: "MDN", desc: "Located near Muncey, Ontario. A close-knit community with deep historical ties to the region." },
            { name: "Oneida Nation of the Thames", abbr: "ONOT", desc: "Located near Muncey, Ontario. A community of the Haudenosaunee Confederacy with a strong sense of identity and place." },
          ].map(nation => (
            <div key={nation.name} style={{ backgroundColor: "#F4F5F7", border: "2px solid #D42B2B", borderRadius: "8px", padding: "2rem", flex: "1", minWidth: "260px", maxWidth: "340px" }}>
              <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#D42B2B", marginBottom: "0.5rem" }}>{nation.abbr}</div>
              <h3 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#0A1628", marginBottom: "1rem" }}>{nation.name}</h3>
              <p style={{ color: "#666666", fontSize: "0.9rem", lineHeight: 1.6 }}>{nation.desc}</p>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
