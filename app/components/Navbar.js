"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Business", href: "/business" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav style={{ 
      backgroundColor: isHome ? "transparent" : "rgba(10,22,40,0.97)",
      backdropFilter: isHome ? "none" : "blur(8px)",
      padding: "0 2rem", 
      position: isHome ? "absolute" : "sticky",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100 
    }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "65px" }}>
        <div>
          <div style={{ fontFamily: "Barlow Condensed, sans-serif", fontWeight: 800, fontSize: "1.1rem", color: "#F5C000", letterSpacing: "1px", lineHeight: 1.1 }}>
            RezSolution Services
          </div>
          <div style={{ color: "#AAAAAA", fontSize: "0.62rem", letterSpacing: "1.5px" }}>Fast. Reliable. For Our Nation.</div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "1.75rem" }} className="desktop-nav">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{ color: "#CCCCCC", textDecoration: "none", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "0.9rem" }}>
              {link.label}
            </Link>
          ))}
          <a href="/order" style={{
            backgroundColor: "#F5C000",
            color: "#0A1628",
            padding: "0.45rem 1.1rem",
            borderRadius: "4px",
            fontFamily: "Barlow Condensed, sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            textDecoration: "none",
            letterSpacing: "1px",
          }}>ORDER NOW</a>
        </div>

        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
        </button>
      </div>

      {menuOpen && (
        <div style={{ background: "rgba(10,22,40,0.99)", padding: "1rem 0", display: "flex", flexDirection: "column", gap: "0" }} className="mobile-menu">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: "#CCCCCC", textDecoration: "none", fontFamily: "Barlow, sans-serif", fontWeight: 500, fontSize: "1rem", padding: "0.85rem 0", borderBottom: "1px solid #1a2a3a", display: "block" }}>
              {link.label}
            </Link>
          ))}
          <a href="/order" onClick={() => setMenuOpen(false)} style={{ backgroundColor: "#F5C000", color: "#0A1628", padding: "0.85rem 1.5rem", borderRadius: "4px", fontFamily: "Barlow Condensed, sans-serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", letterSpacing: "1px", display: "block", textAlign: "center", marginTop: "0.75rem" }}>ORDER NOW</a>
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
