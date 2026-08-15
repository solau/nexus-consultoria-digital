"use client";

import { useState } from "react";
import { XCircle, CheckCircle2, Zap, ArrowRight } from "lucide-react";

export default function BeforeAfterComparison({ onOpenModal }) {
  const [activeTab, setActiveTab] = useState("after");

  return (
    <section className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 36px auto" }}>
          <div className="badge-blue">
            <Zap size={15} /> Comparativo de Impacto Comercial
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "12px" }}>
            Sua Empresa <span className="teal-text">Sem DS IA vs Com DS IA</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.02rem" }}>
            Veja a transformação direta no seu fluxo de clientes e no caixa em menos de 5 segundos.
          </p>
        </div>

        {/* Toggle Controls */}
        <div style={{ display: "flex", justifyContent: "center", gap: "12px", marginBottom: "32px" }}>
          <button
            onClick={() => setActiveTab("before")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "before" ? "rgba(229, 115, 115, 0.15)" : "rgba(255,255,255,0.04)",
              border: "1px solid " + (activeTab === "before" ? "rgba(229, 115, 115, 0.4)" : "var(--border-glass)"),
              color: activeTab === "before" ? "#fca5a5" : "var(--text-muted)",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.92rem",
              transition: "all 0.2s ease"
            }}
          >
            ❌ Como Está Hoje (Sem DS IA)
          </button>
          <button
            onClick={() => setActiveTab("after")}
            style={{
              padding: "12px 24px",
              borderRadius: "var(--radius-full)",
              background: activeTab === "after" ? "var(--teal-gradient)" : "rgba(255,255,255,0.04)",
              border: "1px solid " + (activeTab === "after" ? "var(--pastel-teal)" : "var(--border-glass)"),
              color: activeTab === "after" ? "#ffffff" : "var(--text-muted)",
              fontWeight: 700,
              cursor: "pointer",
              fontSize: "0.92rem",
              transition: "all 0.2s ease"
            }}
          >
            ✅ Como Fica (Com DS IA)
          </button>
        </div>

        {/* Dynamic Display Grid */}
        <div style={{ maxWidth: "960px", margin: "0 auto" }}>
          {activeTab === "before" ? (
            <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(229, 115, 115, 0.3)", background: "rgba(229, 115, 115, 0.03)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "#fca5a5", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <XCircle size={24} color="#e57373" /> Os Gargalos da Estrutura Tradicional:
              </h3>
              
              <div className="grid-2">
                <div style={{ background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(229, 115, 115, 0.15)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🔍 Invisível no ChatGPT & Gemini</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Quando potenciais clientes pesquisam por fornecedores na sua cidade nas IAs, sua empresa nem é citada.
                  </p>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(229, 115, 115, 0.15)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>💬 WhatsApp Cheio de Curiosos</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Sua equipe perde tempo precioso atendendo mensagens de pessoas que só querem saber o preço e somem.
                  </p>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(229, 115, 115, 0.15)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>💸 Dependência Cega de Tráfego Pago</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Se parar de pagar anúncios no Google ou Instagram, as vendas caem a zero no dia seguinte.
                  </p>
                </div>

                <div style={{ background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(229, 115, 115, 0.15)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🐢 Site Lento e sem Destaque no Google</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Site demorado no celular e sem a estrutura necessária para aparecer nas primeiras posições de busca.
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="glass-card" style={{ padding: "36px", border: "1px solid var(--border-pastel-teal)", background: "linear-gradient(135deg, rgba(28, 34, 48, 0.95) 0%, rgba(129, 172, 157, 0.1) 100%)" }}>
              <h3 style={{ fontSize: "1.4rem", color: "var(--pastel-teal)", fontWeight: 800, marginBottom: "20px", display: "flex", alignItems: "center", gap: "10px" }}>
                <CheckCircle2 size={24} color="var(--pastel-teal)" /> O Novo Padrão de Autoridade com a DS IA:
              </h3>
              
              <div className="grid-2" style={{ marginBottom: "24px" }}>
                <div style={{ background: "rgba(28, 34, 48, 0.8)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-pastel-teal)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🤖 Recomendação Ativa em TODAS as IAs</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Seu negócio é indicado no ChatGPT, Gemini, Perplexity e Copilot como referência local.
                  </p>
                </div>

                <div style={{ background: "rgba(28, 34, 48, 0.8)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-pastel-teal)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🎯 Leads Qualificados e com Poder de Compra</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Contatos chegam ao seu WhatsApp sabendo exatamente o valor do seu serviço e prontos para fechar.
                  </p>
                </div>

                <div style={{ background: "rgba(28, 34, 48, 0.8)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-pastel-teal)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>🚀 1 Novo Cliente Já Paga Todo o Contrato</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Foco nos nichos de alto ticket onde 1 único fechamento cobre todo o investimento anual.
                  </p>
                </div>

                <div style={{ background: "rgba(28, 34, 48, 0.8)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-pastel-teal)" }}>
                  <div style={{ fontWeight: 700, color: "#fff", marginBottom: "6px" }}>⚡ Diagnóstico Pago em 48h sem Pegadinhas</div>
                  <p style={{ color: "var(--text-muted)", fontSize: "0.86rem", lineHeight: 1.45 }}>
                    Raio-X de R$ 494 entrega a auditoria e o plano de ação de 90 dias com total clareza.
                  </p>
                </div>
              </div>

              <div style={{ textAlign: "center" }}>
                <button className="btn-blue" onClick={onOpenModal} style={{ padding: "14px 28px", fontSize: "0.95rem" }}>
                  Mudar para o Padrão DS IA (R$ 494) <ArrowRight size={18} />
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
}
