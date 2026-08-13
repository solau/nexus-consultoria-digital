"use client";

import { useState } from "react";
import { Cpu, Menu, X, ArrowRight } from "lucide-react";

export default function Navbar({ onOpenModal }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 100,
      background: "rgba(5, 9, 20, 0.88)",
      backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)",
      borderBottom: "1px solid rgba(0, 242, 254, 0.15)",
      padding: "16px 0"
    }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        
        {/* Brand Logo */}
        <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <div style={{
            width: "42px",
            height: "42px",
            borderRadius: "12px",
            background: "var(--blue-gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 0 20px rgba(0, 242, 254, 0.4)"
          }}>
            <Cpu size={24} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: "1.45rem", fontWeight: "900", color: "#fff", letterSpacing: "-0.03em" }}>
              DS <span className="cyan-text">IA</span>
            </span>
            <span style={{ display: "block", fontSize: "0.65rem", color: "var(--blue-light)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              DIGITAL STRATEGY & AI
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "32px" }}>
          <a href="#diagnostico" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s" }}>Diagnóstico Executivo</a>
          <a href="#ia-search" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s" }}>Tecnologia IA</a>
          <a href="#planos" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s" }}>Planos Mensais</a>
          <a href="#softwares" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s" }}>Sistemas CRM & ERP</a>
          <a href="#parceiros" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.95rem", fontWeight: "500", transition: "color 0.2s" }}>Soluções Certificadas</a>
        </nav>

        {/* CTA Button */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button className="btn-blue" onClick={onOpenModal} style={{ padding: "10px 22px", fontSize: "0.9rem" }}>
            Agendar Diagnóstico <ArrowRight size={16} />
          </button>
          
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "#fff", cursor: "pointer", display: "none" }}
            className="mobile-toggle"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

      </div>

      <style jsx>{`
        @media (max-width: 900px) {
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
