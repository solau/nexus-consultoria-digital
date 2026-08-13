"use client";

import { Cpu, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section style={{
      position: "relative",
      paddingTop: "160px",
      paddingBottom: "100px",
      overflow: "hidden"
    }}>
      {/* Glow Effects */}
      <div className="bg-glow-radial" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          
          <div className="badge-blue" style={{ margin: "0 auto 24px auto" }}>
            <Cpu size={16} /> DS IA — Digital Strategy & Artificial Intelligence
          </div>

          <h1 style={{
            fontSize: "clamp(2.5rem, 5vw, 4.2rem)",
            fontWeight: 800,
            lineHeight: 1.1,
            marginBottom: "24px",
            letterSpacing: "-0.03em"
          }}>
            Transformamos a Presença Digital da sua empresa em uma <span className="cyan-text">Máquina Previsível de Lucros</span> e Recomendação em IAs
          </h1>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: "40px",
            maxWidth: "760px",
            margin: "0 auto 40px auto"
          }}>
            Identificamos os vazamentos de faturamento do seu negócio com nosso <strong>Diagnóstico Executivo Pago</strong>, construímos seu <strong>Site de Alta Velocidade otimizado para o ChatGPT/Google</strong> e direcionamos nosso ecossistema de soluções de alta conversão.
          </p>

          {/* CTA Group */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "1.1rem", padding: "18px 36px" }}>
              Agendar Diagnóstico Executivo (R$ 297) <ArrowRight size={20} />
            </button>
            <a href="#simulador" className="btn-outline" style={{ fontSize: "1.1rem", padding: "18px 36px" }}>
              Fazer Simulador de Lucro Prévio
            </a>
          </div>

          {/* Key Metrics Pill */}
          <div style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            background: "rgba(11, 19, 38, 0.7)",
            backdropFilter: "blur(12px)",
            padding: "28px 32px",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(0, 242, 254, 0.2)"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue-cyan)" }}>+180%</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "4px" }}>Aumento Médio em Vendas Qualificadas</div>
            </div>
            <div style={{ textAlign: "center", borderLeft: "1px solid var(--border-glass)", borderRight: "1px solid var(--border-glass)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fff" }}>ChatGPT & SGE</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "4px" }}>Recomendação Ativa nos Motores de IA</div>
            </div>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue-light)" }}>85%</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "4px" }}>Retenção Mensal de Empresas Parceiras</div>
            </div>
          </div>

          {/* Quick Checkpoints */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "32px",
            marginTop: "32px",
            flexWrap: "wrap",
            fontSize: "0.9rem",
            color: "var(--text-muted)"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Sem fidelidade abusiva
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Site Próprio + Hospedagem SSL inclusa
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Soluções Certificadas Homologadas
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
