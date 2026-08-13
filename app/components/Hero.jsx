"use client";

import { Cpu, ArrowRight, CheckCircle2, Flame, RefreshCw } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero-section" style={{
      position: "relative",
      paddingTop: "140px",
      paddingBottom: "80px",
      overflow: "hidden"
    }}>
      {/* Glow Effects */}
      <div className="bg-glow-radial" style={{ top: "-100px", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        
        <div style={{ maxWidth: "880px", margin: "0 auto", textAlign: "center" }}>
          
          <div className="badge-blue" style={{ margin: "0 auto 24px auto" }}>
            <Cpu size={16} /> DS IA — Otimização para Todas as Inteligências Artificiais
          </div>

          <h1 style={{
            fontSize: "clamp(2rem, 4.8vw, 4.1rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            letterSpacing: "-0.03em"
          }}>
            Conectamos Sua Empresa a <span className="cyan-text">Todas as Inteligências Artificiais</span> para Trazer <span className="blue-text">Leads Cada Vez Mais Quentes</span>
          </h1>

          <p style={{
            fontSize: "clamp(1rem, 2vw, 1.25rem)",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: "36px",
            maxWidth: "780px",
            margin: "0 auto 36px auto"
          }}>
            Sem blá-blá-blá técnico. Nossa consultoria faz o seu negócio ser recomendado pelo <strong>ChatGPT, Perplexity, Gemini, Claude, Copilot e Google SGE</strong>, atraindo clientes prontos para fechar e aumentando a <strong>recorrência das suas vendas</strong>.
          </p>

          {/* CTA Group */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
              Agendar Diagnóstico Executivo (R$ 494) <ArrowRight size={20} />
            </button>
            <a href="#diagnostico" className="btn-outline" style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
              Ver Entregáveis do Raio-X
            </a>
          </div>

          {/* Key Metrics Pill - Responsive Grid */}
          <div className="hero-metrics-grid" style={{
            marginTop: "50px",
            background: "rgba(11, 19, 38, 0.75)",
            backdropFilter: "blur(12px)",
            padding: "24px",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(0, 242, 254, 0.2)"
          }}>
            <div className="metric-box">
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--blue-cyan)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <Flame size={22} color="var(--blue-cyan)" /> Leads Quentes
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>Clientes Prontos Para Comprar</div>
            </div>

            <div className="metric-box middle">
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "#fff" }}>Todas as IAs</div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>ChatGPT, Perplexity, Gemini & Copilot</div>
            </div>

            <div className="metric-box">
              <div style={{ fontSize: "1.8rem", fontWeight: 800, color: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <RefreshCw size={22} color="var(--blue-light)" /> + Recorrência
              </div>
              <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginTop: "4px" }}>Estrutura para Recompra Contínua</div>
            </div>
          </div>

          {/* Quick Checkpoints */}
          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
            marginTop: "28px",
            flexWrap: "wrap",
            fontSize: "0.88rem",
            color: "var(--text-muted)"
          }}>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} color="var(--blue-cyan)" /> Linguagem simples e foco em conversão
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} color="var(--blue-cyan)" /> Site rápido + Hospedagem SSL inclusa
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle2 size={16} color="var(--blue-cyan)" /> Soluções comerciais homologadas
            </span>
          </div>

        </div>

      </div>

      <style jsx>{`
        .hero-metrics-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .metric-box.middle {
          border-left: 1px solid var(--border-glass);
          border-right: 1px solid var(--border-glass);
        }
        @media (max-width: 768px) {
          .hero-section {
            padding-top: 110px !important;
            padding-bottom: 50px !important;
          }
          .hero-metrics-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .metric-box.middle {
            border-left: none !important;
            border-right: none !important;
            border-top: 1px solid var(--border-glass) !important;
            border-bottom: 1px solid var(--border-glass) !important;
            padding: 16px 0 !important;
          }
        }
      `}</style>
    </section>
  );
}
