"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Order Now", href: "/order" },
    { label: "Business", href: "/business" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav style={{ backgroundColor: "#1C1C1C", borderBottom: "3px solid #F5C000", padding: "0 2rem", position: "sticky", top: 0, zIndex: 100 }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "70px" }}>
        <div style={{ fontFamily: "Barlow Condensed", fontWeight: 800, fontSize: "1.5rem", color: "#F5C000", letterSpacing: "1px" }}>
          RezSolution Services
        </div>

        {/* Desktop Links */}
        <div style={{ display: "flex", gap: "2rem" }} className="desktop-nav">
          {links.map(link => (
            <Link key={link.href} href={link.href} style={{ color: "#FFFFFF", textDecoration: "none", fontFamily: "Barlow", fontWeight: 500, fontSize: "0.95rem", letterSpacing: "0.5px" }}>
              {link.label}
            </Link>
          ))}
        </div>

        {/* Hamburger Button */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger" style={{ display: "none", flexDirection: "column", gap: "5px", background: "none", border: "none", cursor: "pointer", padding: "4px" }}>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
          <span style={{ display: "block", width: "24px", height: "2px", backgroundColor: "#F5C000" }}></span>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{ borderTop: "1px solid #333333", padding: "1rem 0", display: "flex", flexDirection: "column", gap: "0" }} className="mobile-menu">
          {links.map(link => (
            <Link key={link.href} href={link.href} onClick={() => setMenuOpen(false)} style={{ color: "#FFFFFF", textDecoration: "none", fontFamily: "Barlow", fontWeight: 500, fontSize: "1rem", padding: "0.85rem 0", borderBottom: "1px solid #222222", display: "block" }}>
              {link.label}
            </Link>
          ))}
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
