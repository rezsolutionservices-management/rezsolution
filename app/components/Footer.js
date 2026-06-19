import Link from "next/link";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1628", borderTop: "3px solid #F5C000", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", gap: "3rem", flexWrap: "wrap", justifyContent: "space-between" }}>
        <div style={{ flex: "2", minWidth: "220px" }}>
          <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.5rem", color: "#F5C000", marginBottom: "0.25rem" }}>RezSolution Services</div>
          <div style={{ color: "#AAAAAA", fontSize: "0.75rem", letterSpacing: "1.5px", marginBottom: "0.75rem" }}>Fast. Reliable. For Our Nation.</div>
          <p style={{ color: "#AAAAAA", fontSize: "0.9rem", lineHeight: 1.7, maxWidth: "280px" }}>
            Last-mile courier and delivery for CMO Nations and Southwestern Ontario. Solo-operated, community-focused.
          </p>
        </div>
        <div style={{ flex: "1", minWidth: "140px" }}>
          <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>Quick Links</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {[{ label: "Home", href: "/" }, { label: "Services", href: "/services" }, { label: "Order Now", href: "/order" }, { label: "Business Accounts", href: "/business" }, { label: "About", href: "/about" }, { label: "Contact", href: "/contact" }].map(link => (
              <Link key={link.href} href={link.href} style={{ color: "#AAAAAA", textDecoration: "none", fontSize: "0.9rem" }}>{link.label}</Link>
            ))}
          </div>
        </div>
        <div style={{ flex: "1", minWidth: "180px" }}>
          <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>Contact</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            <span style={{ color: "#AAAAAA", fontSize: "0.9rem" }}>Phone: Coming soon</span>
            <span style={{ color: "#AAAAAA", fontSize: "0.9rem", wordBreak: "break-all" }}>Email: RezSolutionServices@gmail.com</span>
            <span style={{ color: "#AAAAAA", fontSize: "0.9rem" }}>Facebook: Coming soon</span>
            <span style={{ color: "#AAAAAA", fontSize: "0.9rem" }}>Location: Southwestern Ontario</span>
          </div>
        </div>
        <div style={{ flex: "1", minWidth: "180px" }}>
          <h4 style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", color: "#FFFFFF", letterSpacing: "2px", textTransform: "uppercase", marginBottom: "1rem" }}>CMO Coverage</h4>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
            {["Chippewas of the Thames", "Munsee-Delaware Nation", "Oneida Nation of the Thames"].map(nation => (
              <span key={nation} style={{ color: "#AAAAAA", fontSize: "0.9rem" }}>{nation}</span>
            ))}
          </div>
        </div>
      </div>
      <div style={{ maxWidth: "1100px", margin: "2rem auto 0", paddingTop: "1.5rem", borderTop: "1px solid #1a2a3a", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "0.5rem" }}>
        <span style={{ color: "#555555", fontSize: "0.85rem" }}>© {new Date().getFullYear()} RezSolution Services. All rights reserved.</span>
        <span style={{ color: "#555555", fontSize: "0.85rem" }}>Serving CMO Nations & Southwestern Ontario</span>
      </div>
    </footer>
  );
}
