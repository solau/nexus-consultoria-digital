"use client";

import { monthlyPackages } from "../data/monthlyPackages";
import { Check, ArrowRight, Star, ShieldCheck } from "lucide-react";

export default function MonthlyPlans({ onOpenModal }) {
  const growthPlan = monthlyPackages[0];

  return (
    <section id="assessoria" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <Star size={16} /> Programa de Recorrência Executiva
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Assessoria Executiva <span className="teal-text">Growth DS IA</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            A estrutura completa de desenvolvimento, infraestrutura de IA e governança comercial para escalar sua PME.
          </p>
        </div>

        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          
          <div
            className="glass-card growth-card"
            style={{
              border: "1px solid var(--border-pastel-teal)",
              background: "linear-gradient(135deg, rgba(28, 34, 48, 0.95) 0%, rgba(129, 172, 157, 0.1) 100%)",
              boxShadow: "var(--shadow-premium)",
              position: "relative"
            }}
          >
            
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--teal-gradient)",
              color: "#ffffff",
              padding: "6px 20px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.05em",
              marginBottom: "20px"
            }}>
              {growthPlan.badge}
            </div>

            <h3 style={{ fontSize: "2rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
              {growthPlan.name}
            </h3>
            <p style={{ fontSize: "1rem", color: "var(--pastel-blue-light)", marginBottom: "28px", fontWeight: 500 }}>
              {growthPlan.subtitle}
            </p>

            <div className="growth-features-grid" style={{
              marginBottom: "28px",
              paddingBottom: "20px",
              borderBottom: "1px solid var(--border-glass)"
            }}>
              {growthPlan.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.92rem", color: "var(--text-main)", lineHeight: 1.45 }}>
                  <div style={{ background: "rgba(129, 172, 157, 0.2)", borderRadius: "50%", padding: "3px", flexShrink: 0, marginTop: "2px" }}>
                    <Check size={14} color="var(--pastel-teal)" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div className="growth-footer-row" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--text-muted)", fontSize: "0.88rem" }}>
                <ShieldCheck size={18} color="var(--pastel-teal)" />
                <span>Atendimento presencial/online com consultor sênior DS IA</span>
              </div>

              <button
                className="btn-blue"
                onClick={onOpenModal}
                style={{ padding: "14px 28px", fontSize: "0.95rem" }}
              >
                Solicitar Apresentação Executiva <ArrowRight size={18} />
              </button>
            </div>

          </div>

        </div>

      </div>

      <style jsx>{`
        .growth-card {
          padding: 40px 32px;
        }
        .growth-features-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }
        @media (max-width: 768px) {
          .growth-card {
            padding: 24px 18px !important;
          }
          .growth-features-grid {
            grid-template-columns: 1fr !important;
            gap: 14px !important;
          }
          .growth-footer-row {
            flex-direction: column !important;
            align-items: stretch !important;
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
