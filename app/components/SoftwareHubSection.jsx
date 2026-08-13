"use client";

import { softwarePlatforms } from "../data/softwareHub";
import { Database, CheckCircle2, ArrowUpRight, Zap } from "lucide-react";

export default function SoftwareHubSection({ onOpenModal }) {
  return (
    <section id="softwares" className="section-padding" style={{ background: "#0c0e14" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-gold">
            <Database size={16} /> Ecossistema de Softwares Homologados
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Indicação de CRMs & <span className="gold-text">ERP Bling com Desconto</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Conectamos a sua empresa às melhores ferramentas do mercado global para automatizar o WhatsApp, emitir notas fiscais e controlar vendas.
          </p>
        </div>

        <div className="grid-2">
          {softwarePlatforms.map((sw) => (
            <div key={sw.id} className="glass-card" style={{ padding: "32px", border: sw.popular ? "1px solid var(--border-gold)" : "1px solid var(--border-glass)" }}>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--gold-light)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {sw.category}
                </span>
                <span style={{ background: "rgba(217, 179, 64, 0.15)", color: "var(--gold-light)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700 }}>
                  {sw.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
                {sw.name}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-primary)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "16px" }}>
                <Zap size={18} /> {sw.benefit}
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                {sw.description}
              </p>

              <button className="btn-outline" onClick={onOpenModal} style={{ width: "100%", justifyContent: "center", padding: "12px 20px", fontSize: "0.9rem" }}>
                Solicitar Indicação & Cupom de Desconto <ArrowUpRight size={16} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
