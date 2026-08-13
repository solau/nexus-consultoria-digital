"use client";

import { useState } from "react";
import { CheckCircle2, ShieldAlert, Cpu, Laptop, Users, RefreshCw, BarChart3 } from "lucide-react";

export default function DeliverablesChecklist() {
  const [activeTab, setActiveTab] = useState("mensal");

  return (
    <section className="section-padding" style={{ background: "#0c0e14" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px auto" }}>
          <div className="badge-gold">
            <CheckCircle2 size={16} /> Entregáveis Concretos da Nexus
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            O Que a Sua Empresa <span className="gold-text">Recebe em Mãos</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Transparência total no Diagnóstico Executivo e no Acompanhamento Recorrente Mensal.
          </p>
        </div>

        {/* Tab Switcher */}
        <div style={{ display: "flex", justifyContent: "center", gap: "16px", marginBottom: "40px" }}>
          <button
            onClick={() => setActiveTab("mensal")}
            style={{
              padding: "14px 28px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "mensal" ? "var(--gold-gradient)" : "rgba(255,255,255,0.05)",
              color: activeTab === "mensal" ? "#08090c" : "#fff",
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
              background: activeTab === "diagnostico" ? "var(--gold-gradient)" : "rgba(255,255,255,0.05)",
              color: activeTab === "diagnostico" ? "#08090c" : "#fff",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              fontSize: "1rem",
              transition: "all 0.2s ease"
            }}
          >
            Diagnóstico Executivo Pago (Entrada)
          </button>
        </div>

        {/* Content Tabs */}
        {activeTab === "mensal" ? (
          <div className="grid-3">
            
            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ background: "rgba(217,179,64,0.15)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Laptop size={28} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>1. Plataforma Web & Hospedagem</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Desenvolvimento & Hospedagem SSL</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Carregamento em menos de 1,5s</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Alterações de banners e fotos ilimitadas</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Monitoramento Uptime 24/7</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-gold)" }}>
              <div style={{ background: "rgba(217,179,64,0.15)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Cpu size={28} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>2. Infraestrutura Contínua para IA</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Calibração mensal dos Schemas JSON-LD</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Treinamento de FAQ para o ChatGPT/Perplexity</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Mapeamento de bairros e microrregiões</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Injeção de dados estruturados Schema.org</li>
              </ul>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <div style={{ background: "rgba(217,179,64,0.15)", width: "50px", height: "50px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "20px" }}>
                <Users size={28} color="var(--gold-primary)" />
              </div>
              <h3 style={{ fontSize: "1.25rem", color: "#fff", marginBottom: "12px" }}>3. Comitê Mensal & Governança</h3>
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", color: "var(--text-muted)", fontSize: "0.95rem" }}>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> 1 Reunião Estratégica Mensal (60 min)</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Relatório Mensal de Autoridade Digital</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Cobrança de prazos dos parceiros de tráfego/fotos</li>
                <li style={{ display: "flex", alignItems: "center", gap: "8px" }}><CheckCircle2 size={16} color="var(--gold-primary)" /> Direcionamento estratégico contínuo</li>
              </ul>
            </div>

          </div>
        ) : (
          <div className="grid-2">
            
            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--gold-light)", marginBottom: "16px" }}>
                📄 Relatório de Raio-X de Lucratividade
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Relatório executivo completo em PDF contendo a nota de maturidade digital da sua empresa (0 a 100) e o cálculo em Reais do lucro reprimido desperdiçado todos os meses por falhas na internet.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--gold-light)", marginBottom: "16px" }}>
                🤖 Auditoria de Prontidão para IA (AI Readiness)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Mapeamento das respostas fornecidas pelo ChatGPT, Perplexity e Google SGE quando clientes da sua cidade buscam pelos seus serviços no celular.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--gold-light)", marginBottom: "16px" }}>
                🗺️ Plano de Ação Estratégico de 90 Dias
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                O roteiro prático e transparente do que precisa ser corrigido na sua empresa (Site novo, Fotografias, Tráfego Pago, Automação Kommo/CRM) sem desperdiçar dinheiro.
              </p>
            </div>

            <div className="glass-card" style={{ padding: "32px" }}>
              <h3 style={{ fontSize: "1.3rem", color: "var(--gold-light)", marginBottom: "16px" }}>
                🗣️ Reunião Estratégica de Entrega (60 min)
              </h3>
              <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6, marginBottom: "16px" }}>
                Encontro presencial ou online individual onde nosso consultor apresenta os resultados, responde às suas dúvidas e conecta os parceiros homologados certos.
              </p>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
