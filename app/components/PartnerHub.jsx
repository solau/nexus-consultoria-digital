"use client";

import { partnerCategories } from "../data/partnerCategories";
import { Users, ShieldCheck } from "lucide-react";

export default function PartnerHub({ onOpenModal }) {
  return (
    <section id="solucoes-certificadas" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 44px auto" }}>
          <div className="badge-blue">
            <Users size={16} /> Rede Homologada com Garantia DS IA
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            As 8 Soluções Certificadas de <span className="teal-text">Crescimento 360°</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Direcionamento e cobrança de metas da rede de parceiros especializados sob supervisão direta da DS IA.
          </p>
        </div>

        <div className="grid-4">
          {partnerCategories.map((partner) => (
            <div key={partner.id} className="glass-card" style={{ padding: "24px", display: "flex", flexDirection: "column", border: "1px solid var(--border-glass)" }}>
              
              <span style={{ fontSize: "0.75rem", color: "var(--pastel-blue-light)", fontWeight: 700, textTransform: "uppercase", marginBottom: "10px", letterSpacing: "0.05em" }}>
                {partner.badge}
              </span>

              <h4 style={{ fontSize: "1.1rem", color: "#fff", fontWeight: 800, marginBottom: "8px", lineHeight: 1.3 }}>
                {partner.title}
              </h4>

              <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45, marginBottom: "16px", flexGrow: 1 }}>
                {partner.description}
              </p>

              <div style={{ paddingTop: "10px", borderTop: "1px solid var(--border-glass)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.75rem", color: "var(--text-dim)", fontWeight: 600 }}>{partner.type}</span>
                <ShieldCheck size={16} color="var(--pastel-teal)" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
