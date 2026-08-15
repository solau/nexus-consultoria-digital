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
      background: "rgba(19, 23, 34, 0.92)",
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
            background: "var(--blue-gradient)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 4px 15px rgba(124, 158, 188, 0.3)"
          }}>
            <Cpu size={24} color="#ffffff" />
          </div>
          <div>
            <span style={{ fontSize: "1.45rem", fontWeight: "900", color: "#fff", letterSpacing: "-0.03em" }}>
              DS <span className="teal-text">IA</span>
            </span>
            <span style={{ display: "block", fontSize: "0.65rem", color: "var(--pastel-blue-light)", letterSpacing: "0.15em", textTransform: "uppercase", fontWeight: 700 }}>
              DIGITAL STRATEGY & AI
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="desktop-menu" style={{ display: "flex", alignItems: "center", gap: "24px" }}>
          <a href="#diagnostico" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Diagnóstico (R$ 494)</a>
          <a href="#entregaveis" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Entregáveis</a>
          <a href="#tecnologia-ia" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Presença em IA</a>
          <a href="#assessoria" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Assessoria Growth</a>
          <a href="#solucoes-certificadas" style={{ color: "var(--text-muted)", textDecoration: "none", fontSize: "0.92rem", fontWeight: "500", transition: "color 0.2s" }}>Ecossistema de Soluções</a>
        </nav>

        {/* CTA Button & Mobile Toggle */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <button className="btn-blue" onClick={onOpenModal} style={{ padding: "10px 22px", fontSize: "0.88rem" }}>
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

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div style={{
          background: "var(--bg-card)",
          borderBottom: "1px solid var(--border-pastel-blue)",
          padding: "24px",
          display: "flex",
          flexDirection: "column",
          gap: "16px"
        }}>
          <a href="#diagnostico" onClick={() => setMobileOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Diagnóstico Executivo</a>
          <a href="#entregaveis" onClick={() => setMobileOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Entregáveis</a>
          <a href="#tecnologia-ia" onClick={() => setMobileOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Presença em IA</a>
          <a href="#assessoria" onClick={() => setMobileOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Assessoria Growth</a>
          <a href="#solucoes-certificadas" onClick={() => setMobileOpen(false)} style={{ color: "#fff", textDecoration: "none", fontSize: "1rem", fontWeight: "600" }}>Ecossistema de Soluções</a>
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

