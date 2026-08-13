"use client";

import { Cpu, ArrowRight, CheckCircle2, Flame, RefreshCw } from "lucide-react";

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
            <Cpu size={16} /> DS IA — Otimização para Todas as Inteligências Artificiais
          </div>

          <h1 style={{
            fontSize: "clamp(2.4rem, 4.8vw, 4.1rem)",
            fontWeight: 800,
            lineHeight: 1.15,
            marginBottom: "24px",
            letterSpacing: "-0.03em"
          }}>
            Conectamos Sua Empresa a <span className="cyan-text">Todas as Inteligências Artificiais</span> para Trazer <span className="blue-text">Leads Cada Vez Mais Quentes</span>
          </h1>

          <p style={{
            fontSize: "clamp(1.1rem, 2vw, 1.3rem)",
            color: "var(--text-muted)",
            lineHeight: 1.6,
            marginBottom: "40px",
            maxWidth: "780px",
            margin: "0 auto 40px auto"
          }}>
            Sem blá-blá-blá técnico. Nossa consultoria faz o seu negócio ser recomendado pelo <strong>ChatGPT, Perplexity, Gemini, Claude, Copilot e Google SGE</strong>, atraindo clientes prontos para fechar e aumentando a <strong>recorrência das suas vendas</strong>.
          </p>

          {/* CTA Group */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "1.1rem", padding: "18px 36px" }}>
              Agendar Diagnóstico Executivo (R$ 494) <ArrowRight size={20} />
            </button>
            <a href="#diagnostico" className="btn-outline" style={{ fontSize: "1.1rem", padding: "18px 36px" }}>
              Ver Entregáveis do Raio-X
            </a>
          </div>

          {/* Key Metrics Pill */}
          <div style={{
            marginTop: "60px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "24px",
            background: "rgba(11, 19, 38, 0.75)",
            backdropFilter: "blur(12px)",
            padding: "28px 32px",
            borderRadius: "var(--radius-md)",
            border: "1px solid rgba(0, 242, 254, 0.2)"
          }}>
            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue-cyan)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <Flame size={24} color="var(--blue-cyan)" /> Leads Quentes
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "6px" }}>Clientes que Já Chegam Prontos Para Comprar</div>
            </div>

            <div style={{ textAlign: "center", borderLeft: "1px solid var(--border-glass)", borderRight: "1px solid var(--border-glass)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "#fff" }}>Todas as IAs</div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "6px" }}>ChatGPT, Perplexity, Gemini, Claude & Copilot</div>
            </div>

            <div style={{ textAlign: "center" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--blue-light)", display: "flex", alignItems: "center", justifyContent: "center", gap: "6px" }}>
                <RefreshCw size={24} color="var(--blue-light)" /> + Recorrência
              </div>
              <div style={{ fontSize: "0.875rem", color: "var(--text-muted)", marginTop: "6px" }}>Estrutura para Clientes Comprarem Sempre</div>
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
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Linguagem simples e foco em conversão real
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Site rápido + Hospedagem contínua inclusa
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <CheckCircle2 size={18} color="var(--blue-cyan)" /> Soluções comerciais homologadas
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
