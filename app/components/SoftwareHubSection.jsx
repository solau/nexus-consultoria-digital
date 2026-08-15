"use client";

import { softwarePlatforms } from "../data/softwareHub";
import { Database, ArrowUpRight, Zap } from "lucide-react";

export default function SoftwareHubSection({ onOpenModal }) {
  return (
    <section id="sistemas" className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <Database size={16} /> Ecossistema Integrado de Sistemas
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Plataformas de <span className="teal-text">CRM & ERP Empresarial</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Supervisão e implantação de softwares homologados para gestão de orçamentos no WhatsApp, notas fiscais e conciliação financeira.
          </p>
        </div>

        <div className="grid-2">
          {softwarePlatforms.map((sw) => (
            <div key={sw.id} className="glass-card" style={{ padding: "28px", border: sw.popular ? "1px solid var(--border-pastel-teal)" : "1px solid var(--border-glass)" }}>
              
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "14px" }}>
                <span style={{ fontSize: "0.78rem", color: "var(--pastel-blue-light)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                  {sw.category}
                </span>
                <span style={{ background: "rgba(129, 172, 157, 0.15)", color: "var(--pastel-sage)", padding: "4px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: 700 }}>
                  {sw.badge}
                </span>
              </div>

              <h3 style={{ fontSize: "1.3rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
                {sw.name}
              </h3>

              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--pastel-teal)", fontWeight: 700, fontSize: "0.9rem", marginBottom: "14px" }}>
                <Zap size={16} /> {sw.benefit}
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "20px" }}>
                {sw.description}
              </p>

              <button className="btn-outline" onClick={onOpenModal} style={{ width: "100%", justifyContent: "center", padding: "10px 18px", fontSize: "0.88rem" }}>
                Solicitar Diagnóstico de Implantação <ArrowUpRight size={15} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
