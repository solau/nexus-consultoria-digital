"use client";

import { partnerCategories } from "../data/partnerCategories";
import { Users, ShieldCheck, ArrowRight } from "lucide-react";

export default function PartnerHub({ onOpenModal }) {
  return (
    <section id="parceiros" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-gold">
            <Users size={16} /> Rede Homologada com Selo de Qualidade
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Os 8 Parceiros Estratégicos de <span className="gold-text">Alto Impacto em Vendas</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Você não precisa contratar funcionários ou procurar profissionais desconhecidos. Conectamos sua empresa à nossa rede selecionada.
          </p>
        </div>

        <div className="grid-4">
          {partnerCategories.map((partner) => (
            <div key={partner.id} className="glass-card" style={{ padding: "28px", display: "flex", flexDirection: "column" }}>
              
              <span style={{ fontSize: "0.75rem", color: "var(--gold-light)", fontWeight: 700, textTransform: "uppercase", marginBottom: "12px", letterSpacing: "0.05em" }}>
                {partner.badge}
              </span>

              <h4 style={{ fontSize: "1.15rem", color: "#fff", fontWeight: 800, marginBottom: "10px", lineHeight: 1.3 }}>
                {partner.title}
              </h4>

              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "20px", flexGrow: 1 }}>
                {partner.description}
              </p>

              <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border-glass)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--text-dim)", fontWeight: 600 }}>{partner.type}</span>
                <ShieldCheck size={16} color="var(--gold-primary)" />
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
