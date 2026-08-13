"use client";

import { monthlyPackages } from "../data/monthlyPackages";
import { Check, ArrowRight, Star, Cpu, ShieldCheck, Zap, Flame, RefreshCw } from "lucide-react";

export default function MonthlyPlans({ onOpenModal }) {
  const growthPlan = monthlyPackages[0];

  return (
    <section id="planos" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px auto" }}>
          <div className="badge-blue">
            <Star size={16} /> Acompanhamento Executivo Contínuo
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            A Solução Definitiva de <span className="cyan-text">Tecnologia & Aceleração</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Tudo o que a sua empresa precisa para dominar as buscas de IA, atrair leads quentes e aumentar a recorrência de vendas em um único programa de assessoria.
          </p>
        </div>

        <div style={{ maxWidth: "920px", margin: "0 auto" }}>
          
          <div
            className="glass-card"
            style={{
              padding: "48px 40px",
              border: "2px solid var(--blue-cyan)",
              background: "linear-gradient(135deg, rgba(11, 19, 38, 0.9) 0%, rgba(37, 99, 235, 0.15) 100%)",
              boxShadow: "var(--shadow-blue), 0 0 40px rgba(0, 242, 254, 0.2)",
              position: "relative"
            }}
          >
            
            <div style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "var(--blue-gradient)",
              color: "#ffffff",
              padding: "6px 20px",
              borderRadius: "var(--radius-full)",
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "0.05em",
              marginBottom: "20px"
            }}>
              {growthPlan.badge}
            </div>

            <h3 style={{ fontSize: "2.2rem", fontWeight: 800, color: "#fff", marginBottom: "10px" }}>
              {growthPlan.name}
            </h3>
            <p style={{ fontSize: "1.1rem", color: "var(--blue-light)", marginBottom: "36px", fontWeight: 500 }}>
              {growthPlan.subtitle}
            </p>

            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(2, 1fr)",
              gap: "20px",
              marginBottom: "40px",
              paddingBottom: "32px",
              borderBottom: "1px solid var(--border-glass)"
            }}>
              {growthPlan.features.map((feat, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "12px", fontSize: "0.98rem", color: "var(--text-main)", lineHeight: 1.5 }}>
                  <div style={{ background: "rgba(0, 242, 254, 0.2)", borderRadius: "50%", padding: "3px", flexShrink: 0, marginTop: "2px" }}>
                    <Check size={16} color="var(--blue-cyan)" />
                  </div>
                  <span>{feat}</span>
                </div>
              ))}
            </div>

            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "24px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "var(--text-muted)", fontSize: "0.9rem" }}>
                <ShieldCheck size={20} color="var(--blue-cyan)" />
                <span>Atendimento executivo individualizado com nosso consultor sênior</span>
              </div>

              <button
                className="btn-blue"
                onClick={onOpenModal}
                style={{ padding: "18px 36px", fontSize: "1.05rem" }}
              >
                {growthPlan.callToAction} <ArrowRight size={20} />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
