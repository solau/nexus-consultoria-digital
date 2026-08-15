"use client";

import { useState } from "react";
import { CheckCircle2, Cpu, Laptop, Users, ShieldCheck } from "lucide-react";

export default function DeliverablesChecklist() {
  const [activeTab, setActiveTab] = useState("diagnostico");

  return (
    <section id="entregaveis" className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <CheckCircle2 size={16} /> Entregáveis Concretos DS IA
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            O Que Sua Empresa <span className="teal-text">Recebe em Mãos</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Transparência executiva total no Diagnóstico de Entrada (R$ 494) e na Assessoria Recorrente.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "36px", flexWrap: "wrap" }}>
          <button
            onClick={() => setActiveTab("diagnostico")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "diagnostico" ? "var(--blue-gradient)" : "rgba(255,255,255,0.04)",
              color: activeTab === "diagnostico" ? "#ffffff" : "var(--text-muted)",
              fontWeight: 700,
              border: "1px solid " + (activeTab === "diagnostico" ? "var(--pastel-blue)" : "var(--border-glass)"),
              cursor: "pointer",
              fontSize: "0.92rem",
              transition: "all 0.2s ease"
            }}
          >
            Diagnóstico Executivo (R$ 494)
          </button>
          <button
            onClick={() => setActiveTab("mensal")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "mensal" ? "var(--teal-gradient)" : "rgba(255,255,255,0.04)",
              color: activeTab === "mensal" ? "#ffffff" : "var(--text-muted)",
              fontWeight: 700,
              border: "1px solid " + (activeTab === "mensal" ? "var(--pastel-teal)" : "var(--border-glass)"),
              cursor: "pointer",
              fontSize: "0.92rem",
              transition: "all 0.2s ease"
            }}
          >
            Assessoria Growth (Assinatura Recorrente)
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === "diagnostico" ? (
          <div className="grid-2">
            
            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-blue)" }}>
              <div style={{ background: "rgba(124, 158, 188, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <ShieldCheck size={24} color="var(--pastel-blue-light)" />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--pastel-blue-light)", marginBottom: "10px", fontWeight: 700 }}>
                1. Relatório de Raio-X de Lucratividade
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                Pontuação geral da maturidade digital (0 a 100) e cálculo do valor em Reais perdido mensalmente por falhas de posicionamento.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-blue)" }}>
              <div style={{ background: "rgba(124, 158, 188, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Cpu size={24} color="var(--pastel-blue-light)" />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--pastel-blue-light)", marginBottom: "10px", fontWeight: 700 }}>
                2. Auditoria de Prontidão para IA (AI Readiness)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                Status real da visibilidade da sua empresa no ChatGPT, Perplexity, Gemini, Claude e Copilot na sua região.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-blue)" }}>
              <div style={{ background: "rgba(124, 158, 188, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Laptop size={24} color="var(--pastel-blue-light)" />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--pastel-blue-light)", marginBottom: "10px", fontWeight: 700 }}>
                3. Plano de Ação Estratégico de 90 Dias
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                Roadmap prático com os ajustes prioritários no site, fotos, anúncios e automações de atendimento sem desperdício de caixa.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-blue)" }}>
              <div style={{ background: "rgba(124, 158, 188, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Users size={24} color="var(--pastel-blue-light)" />
              </div>
              <h3 style={{ fontSize: "1.2rem", color: "var(--pastel-blue-light)", marginBottom: "10px", fontWeight: 700 }}>
                4. Reunião Estratégica de Entrega (60 min)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55 }}>
                Apresentação individual dos resultados em 48h pelo consultor sênior, alinhando os próximos passos de implementação.
              </p>
            </div>

          </div>
        ) : (
          <div className="grid-3">
            
            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-teal)" }}>
              <div style={{ background: "rgba(129, 172, 157, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Laptop size={24} color="var(--pastel-teal)" />
              </div>
              <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "10px", fontWeight: 700 }}>Plataforma Web Executiva</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Hospedagem ultrarrápida (&lt;1.5s) e SSL</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Manutenção 24/7 e suporte contínuo</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Atualização de banners e novos serviços</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-teal)" }}>
              <div style={{ background: "rgba(129, 172, 157, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Cpu size={24} color="var(--pastel-teal)" />
              </div>
              <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "10px", fontWeight: 700 }}>Infraestrutura para IA (GEO)</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Atualização mensal de Schemas JSON-LD</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Treinamento de FAQs estratégicos para IAs</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Mapeamento mensal de microrregiões</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-teal)" }}>
              <div style={{ background: "rgba(129, 172, 157, 0.15)", width: "42px", height: "42px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "16px" }}>
                <Users size={24} color="var(--pastel-teal)" />
              </div>
              <h3 style={{ fontSize: "1.15rem", color: "#fff", marginBottom: "10px", fontWeight: 700 }}>Comitê Mensal & Governança</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", color: "var(--text-muted)", fontSize: "0.88rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Reunião mensal de alinhamento (60 min)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Gestão de metas das soluções homologadas</li>
                <li style={{ display: "flex", alignItems: "center", gap: "6px" }}><CheckCircle2 size={15} color="var(--pastel-teal)" /> Relatório visual de autoridade digital</li>
              </ul>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
