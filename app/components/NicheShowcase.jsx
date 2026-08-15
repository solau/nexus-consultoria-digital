"use client";

import { targetNiches } from "../data/targetNiches";
import { Target, CheckCircle2 } from "lucide-react";

export default function NicheShowcase({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px auto" }}>
          <div className="badge-blue">
            <Target size={16} /> Estratégia de Mercado DS IA
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Desenhado para Empresas onde <span className="teal-text">1 Único Cliente Cobre o Investimento</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Estratégias sob medida para PMEs com alto ticket médio que exigem autoridade máxima no Google e ChatGPT.
          </p>
        </div>

        {/* Niche Banner Collage Image */}
        <div style={{
          marginBottom: "48px",
          borderRadius: "var(--radius-md)",
          overflow: "hidden",
          border: "1px solid var(--border-pastel-blue)",
          boxShadow: "var(--shadow-premium)"
        }}>
          <img 
            src="/images/pme_niches_banner.png" 
            alt="Nichos de Alto Ticket Atendidos pela DS IA" 
            style={{ width: "100%", height: "240px", objectFit: "cover", display: "block" }}
          />
        </div>

        <div className="grid-3">
          {targetNiches.map((niche) => (
            <div key={niche.id} className="glass-card" style={{ padding: "28px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              
              <div>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                  <span style={{ fontSize: "1.5rem", fontWeight: 900, color: "var(--pastel-blue-light)" }}>
                    {niche.rank}
                  </span>
                  <span style={{ background: "rgba(129, 172, 157, 0.12)", border: "1px solid var(--border-pastel-teal)", color: "var(--pastel-sage)", padding: "4px 10px", borderRadius: "99px", fontSize: "0.78rem", fontWeight: 700 }}>
                    Ticket: {niche.ticket}
                  </span>
                </div>

                <h3 style={{ fontSize: "1.2rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
                  {niche.title}
                </h3>

                <p style={{ color: "var(--text-dim)", fontSize: "0.86rem", marginBottom: "16px", lineHeight: 1.45 }}>
                  {niche.examples}
                </p>
              </div>

              <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "14px", marginTop: "12px" }}>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, display: "flex", alignItems: "flex-start", gap: "8px" }}>
                  <CheckCircle2 size={16} color="var(--pastel-teal)" style={{ shrink: 0, marginTop: "2px" }} />
                  <span>{niche.why}</span>
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
