"use client";

import { useState } from "react";
import { CheckCircle2, Cpu, Laptop, Users } from "lucide-react";

export default function DeliverablesChecklist() {
  const [activeTab, setActiveTab] = useState("mensal");

  return (
    <section className="section-padding" style={{ background: "#080d1a" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px auto" }}>
          <div className="badge-blue">
            <CheckCircle2 size={16} /> Entregáveis Concretos DS IA
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            O Que a Sua Empresa <span className="cyan-text">Recebe em Mãos</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Transparência executiva total no Diagnóstico Executivo (R$ 494,00) e no Acompanhamento Recorrente Mensal.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <button
            onClick={() => setActiveTab("mensal")}
            style={{
              padding: "14px 28px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "mensal" ? "var(--blue-gradient)" : "rgba(255,255,255,0.05)",
              color: activeTab === "mensal" ? "#ffffff" : "var(--text-muted)",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.2s ease"
            }}
          >
            Assinatura Mensal Recorrente (Sites + IA)
          </button>
          <button
            onClick={() => setActiveTab("diagnostico")}
            style={{
              padding: "14px 28px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "diagnostico" ? "var(--blue-gradient)" : "rgba(255,255,255,0.05)",
              color: activeTab === "diagnostico" ? "#ffffff" : "var(--text-muted)",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.2s ease"
            }}
          >
            Diagnóstico Executivo Pago (R$ 494,00)
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === "mensal" ? (
          <div className="grid-3">
            
            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ background: "rgba(37,99,235,0.2)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Laptop size={28} color="var(--blue-cyan)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>1. Plataforma Web & Hospedagem</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Desenvolvimento & Hospedagem SSL</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Carregamento em menos de 1,5s</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Alterações de banners e fotos ilimitadas</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Monitoramento Uptime 24/7</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-cyan)" }}>
              <div style={{ background: "rgba(37,99,235,0.2)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Cpu size={28} color="var(--blue-cyan)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>2. Infraestrutura Contínua para IA</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Calibração mensal dos Schemas JSON-LD</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Treinamento de FAQ para TODAS as IAs</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Mapeamento de bairros e microrregiões</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Injeção de dados estruturados Schema.org</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ background: "rgba(37,99,235,0.2)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Users size={28} color="var(--blue-cyan)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>3. Comitê Mensal & Governança</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> 1 Reunião Estratégica Mensal (60 min)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Relatório Mensal de Autoridade Digital</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Cobrança de prazos das soluções certificadas</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--blue-cyan)" /> Direcionamento estratégico DS IA</li>
              </ul>
            </div>

          </div>
        ) : (
          <div className="grid-2">
            
            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--blue-light)", marginBottom: "16px" }}>
                📄 Relatório de Raio-X de Lucratividade
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Relatório executivo completo contendo a nota de maturidade digital da sua empresa (0 a 100) e o cálculo em Reais do lucro reprimido desperdiçado todos os meses.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--blue-light)", marginBottom: "16px" }}>
                🤖 Auditoria de Prontidão para IA (AI Readiness)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Mapeamento das respostas fornecidas pelo ChatGPT, Perplexity, Gemini, Claude e Copilot quando clientes da sua cidade buscam pelos seus serviços.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--blue-light)", marginBottom: "16px" }}>
                🗺️ Plano de Ação Estratégico de 90 Dias
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                O roteiro prático e transparente do que precisa ser corrigido na sua empresa (Site novo, Fotografias, Anúncios, Automação de Atendimento) sem desperdiçar orçamento.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--blue-light)", marginBottom: "16px" }}>
                🗣️ Reunião Estratégica de Entrega (60 min)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Encontro presencial ou online individual onde nosso consultor apresenta os resultados, responde às suas dúvidas e direciona as soluções homologadas.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
