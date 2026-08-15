"use client";

import { AlertTriangle, Flame, ArrowRight, Ban, TrendingDown, ShieldAlert } from "lucide-react";

export default function PainPointsSection({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 44px auto" }}>
          <div className="badge-blue" style={{ background: "rgba(229, 115, 115, 0.12)", borderColor: "rgba(229, 115, 115, 0.3)", color: "#fca5a5" }}>
            <AlertTriangle size={15} color="#e57373" /> Gargalos no Atendimento & Vendas das PMEs
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)", fontWeight: 800, marginBottom: "16px" }}>
            Cansado de Receber <span style={{ color: "#e57373" }}>Curiosos no WhatsApp</span> e Ver Anúncios sem Retorno?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Ter contatos soltos no WhatsApp não significa caixa no final do mês. A solução da DS IA substitui curiosos por <strong>leads qualificados</strong> e estabelece <strong>recorrência de vendas</strong>.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid-3" style={{ marginBottom: "36px" }}>
          
          <div className="glass-card" style={{ padding: "28px 20px", border: "1px solid rgba(229, 115, 115, 0.3)", background: "rgba(229, 115, 115, 0.03)" }}>
            <div style={{ background: "rgba(229, 115, 115, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <Ban size={22} color="#e57373" />
            </div>
            <h3 style={{ fontSize: "1.15rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
              1. Curiosos sem Orçamento
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
              Sua equipe perde tempo respondendo quem só pergunta o preço. Sem a calibração de dados nas <strong>IAs e buscas ativas do Google</strong>, você perde os clientes dispostos a contratar.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "28px 20px", border: "1px solid rgba(240, 180, 41, 0.3)", background: "rgba(240, 180, 41, 0.03)" }}>
            <div style={{ background: "rgba(240, 180, 41, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <TrendingDown size={22} color="#f0b429" />
            </div>
            <h3 style={{ fontSize: "1.15rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
              2. Tráfego sem Recorrência
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
              Investir em anúncios sem um site de altíssima velocidade e sem processo de recompra faz seu caixa dependente de campanhas pagas para sempre.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "28px 20px", border: "1px solid var(--border-pastel-blue)", background: "rgba(124, 158, 188, 0.03)" }}>
            <div style={{ background: "rgba(124, 158, 188, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
              <ShieldAlert size={22} color="var(--pastel-blue-light)" />
            </div>
            <h3 style={{ fontSize: "1.15rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
              3. Posts Genéricos sem Foco em Lucro
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
              Artes bonitas em redes sociais trazem curtidas, mas não colocam dinheiro no caixa da empresa nem atraem decisões de diretores B2B.
            </p>
          </div>

        </div>

        {/* Solution Banner */}
        <div className="pain-solution-banner" style={{
          background: "linear-gradient(135deg, rgba(28, 34, 48, 0.95) 0%, rgba(129, 172, 157, 0.12) 100%)",
          border: "1px solid var(--border-pastel-teal)",
          borderRadius: "var(--radius-lg)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px",
          padding: "32px"
        }}>
          <div style={{ maxWidth: "700px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--pastel-teal)", fontWeight: 700, fontSize: "0.88rem", marginBottom: "8px" }}>
              <Flame size={16} /> A Virada Estratégica com a DS IA
            </div>
            <h3 style={{ fontSize: "1.45rem", color: "#fff", fontWeight: 800, marginBottom: "8px" }}>
              Qualifique Seus Leads e Aumente o Lucro por Cliente
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5 }}>
              Posicionamos seu negócio no <strong>ChatGPT, Gemini, Perplexity e Google</strong>, garantindo contatos qualificados e uma estrutura preparada para recompras contínuas.
            </p>
          </div>

          <div style={{ width: "100%", maxWidth: "260px" }} className="banner-btn-box">
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "0.92rem", padding: "14px 24px", width: "100%", justifyContent: "center" }}>
              Solicitar Diagnóstico (R$ 494) <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
