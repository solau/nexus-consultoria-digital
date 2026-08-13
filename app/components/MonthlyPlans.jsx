"use client";

import { monthlyPackages } from "../data/monthlyPackages";
import { Check, ArrowRight, Star } from "lucide-react";

export default function MonthlyPlans({ onOpenModal }) {
  return (
    <section id="planos" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <Star size={16} /> Planos Mensais Recorrentes DS IA
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Investimento Transparente em <span className="cyan-text">Tecnologia & IA</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Desenvolvimento do site, hospedagem de alta velocidade, infraestrutura contínua de IA e acompanhamento executivo.
          </p>
        </div>

        <div className="grid-3" style={{ alignItems: "stretch" }}>
          {monthlyPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="glass-card"
              style={{
                padding: "40px 32px",
                display: "flex",
                flexDirection: "column",
                position: "relative",
                border: pkg.highlight ? "2px solid var(--blue-cyan)" : "1px solid var(--border-glass)",
                background: pkg.highlight ? "rgba(37, 99, 235, 0.1)" : "var(--bg-glass)",
                boxShadow: pkg.highlight ? "var(--shadow-blue)" : "none"
              }}
            >
              {pkg.badge && (
                <div style={{
                  position: "absolute",
                  top: "-16px",
                  right: "24px",
                  background: pkg.highlight ? "var(--blue-gradient)" : "rgba(255,255,255,0.1)",
                  color: "#ffffff",
                  padding: "4px 16px",
                  borderRadius: "var(--radius-full)",
                  fontSize: "0.8rem",
                  fontWeight: 800,
                  letterSpacing: "0.05em"
                }}>
                  {pkg.badge}
                </div>
              )}

              <h3 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
                {pkg.name}
              </h3>
              <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginBottom: "24px", minHeight: "40px" }}>
                {pkg.subtitle}
              </p>

              <div style={{ marginBottom: "24px", paddingBottom: "24px", borderBottom: "1px solid var(--border-glass)" }}>
                <span style={{ fontSize: "3rem", fontWeight: 900, color: "var(--blue-cyan)" }}>{pkg.price}</span>
                <span style={{ fontSize: "1rem", color: "var(--text-muted)" }}>{pkg.period}</span>
                <span style={{ display: "block", fontSize: "0.85rem", color: "var(--blue-light)", marginTop: "6px", fontWeight: 600 }}>
                  + {pkg.setup}
                </span>
              </div>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px", marginBottom: "40px", flexGrow: 1 }}>
                {pkg.features.map((feat, idx) => (
                  <li key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.95rem", color: "var(--text-main)", lineHeight: 1.4 }}>
                    <div style={{ background: "rgba(0, 242, 254, 0.2)", borderRadius: "50%", padding: "2px", flexShrink: 0, marginTop: "2px" }}>
                      <Check size={14} color="var(--blue-cyan)" />
                    </div>
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>

              <button
                className={pkg.highlight ? "btn-blue" : "btn-outline"}
                onClick={onOpenModal}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Contratar {pkg.name} <ArrowRight size={18} />
              </button>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
