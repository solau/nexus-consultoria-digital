"use client";

import { softwarePlatforms } from "../data/softwareHub";
import { Database, ArrowUpRight, Zap } from "lucide-react";

export default function SoftwareHubSection({ onOpenModal }) {
  return (
    <section id="softwares" className="section-padding" style={{ background: "#080d1a" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <Database size={16} /> Ecossistema de Soluções Empresariais
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Sistemas Integrados de <span className="cyan-text">CRM & ERP Empresarial</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Conectamos a sua empresa às plataformas mais seguras do mercado global para automatizar o atendimento no WhatsApp, emitir notas fiscais e controlar vendas.
          </p>
        </div>

        <div className="grid-2">
          {softwarePlatforms.map((sw) => (
            <div key={sw.id} className="glass-card" style={{ padding: "32px", border: sw.popular ? "1px solid var(--border-cyan)" : "1px solid var(--border-glass)" }}>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "16px" }}>
                <span style={{ fontSize: "0.8rem", color: "var(--blue-cyan)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {sw.category}
                </span>
                <span style={{ background: "rgba(37, 99, 235, 0.2)", color: "var(--blue-light)", padding: "4px 12px", borderRadius: "12px", fontSize: "0.75rem", fontWeight: 700 }}>
                  {sw.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.5rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
                {sw.name}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "16px" }}>
                <Zap size={18} /> {sw.benefit}
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "24px" }}>
                {sw.description}
              </p>

              <button className="btn-outline" onClick={onOpenModal} style={{ width: "100%", justifyContent: "center", padding: "12px 20px", fontSize: "0.9rem" }}>
                Solicitar Implantação & Direcionamento <ArrowUpRight size={16} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
