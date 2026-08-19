"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "var(--bg-glass)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid var(--border-glass)",
      padding: "16px 0"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            overflow: "hidden",
            boxShadow: "0 4px 15px rgba(245, 166, 35, 0.15)",
            position: "relative"
          }}>
            <Image src="/logo.jpg" alt="Dendê IA Logo" fill style={{ objectFit: "cover" }} />
          </div>
          <div>
            <span style={{ fontSize: "1.45rem", fontWeight: "900", color: "var(--text-main)", letterSpacing: "-0.03em" }}>
              Dendê <span className="dende-text">IA</span>
            </span>
            <span style={{ display: "block", fontSize: "0.65rem", color: "var(--text-muted)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              ESTRATÉGIA DIGITAL & AI
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="#o-que-fazemos" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>O que fazemos</a>
          <a href="#como-funciona" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Como funciona</a>
          <a href="#contato" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Contato</a>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button className="btn-dende" onClick={onOpenModal} style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
            Agendar Diagnóstico <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "var(--text-main)", cursor: "pointer", display: "none" }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border-dende)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <a href="#o-que-fazemos" onClick={() => setMobileOpen(false)} style={{ color: "var(--text-main)", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>O que fazemos</a>
          <a href="#como-funciona" onClick={() => setMobileOpen(false)} style={{ color: "var(--text-main)", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Como funciona</a>
          <a href="#contato" onClick={() => setMobileOpen(false)} style={{ color: "var(--text-main)", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Contato</a>
        </div>
      )}

      <style jsx>{`
        @media (max-width: 960px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-toggle {
            display: block !important;
          }
        }
      `}</style>
    </header>
  );
}
