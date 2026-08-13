"use client";

import { targetNiches } from "../data/targetNiches";
import { Target, Award, ArrowUpRight } from "lucide-react";

export default function NicheShowcase({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ background: "#0c0e14" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-gold">
            <Target size={16} /> Especialização de Mercado
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Os 5 Nichos de <span className="gold-text">Alto Ticket</span> Atendidos
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Estruturas de presença digital customizadas para empresas com alto valor percebido de venda.
          </p>
        </div>

        <div className="grid-3">
          {targetNiches.map((niche) => (
            <div key={niche.id} className="glass-card" style={{ padding: "32px" }}>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontSize: "1.8rem", fontWeight: 900, color: "var(--gold-light)" }}>
                  {niche.rank}
                </span>
                <span style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border-glass)", color: "var(--text-muted)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.8rem" }}>
                  Ticket: {niche.ticket}
                </span>
              </div>

              <h3 style={{ fontSize: "1.3rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
                {niche.title}
              </h3>

              <p style={{ color: "var(--text-dim)", fontSize: "0.88rem", marginBottom: "16px" }}>
                {niche.examples}
              </p>

              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5, borderTop: "1px solid var(--border-glass)", paddingTop: "16px" }}>
                💡 <strong>Por que contrata:</strong> {niche.why}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
