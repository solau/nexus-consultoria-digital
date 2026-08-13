"use client";

import { Cpu, Check, Bot, Globe, Sparkles } from "lucide-react";

export default function AISearchSection() {
  return (
    <section id="ia-search" className="section-padding" style={{ background: "#080d1a", position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <Cpu size={16} /> Ecossistema Multimodal de Inteligência Artificial
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Não é Apenas ChatGPT. Sua Empresa Recomendada em <span className="cyan-text">TODAS as Inteligências Artificiais</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Seus clientes usam diferentes assistentes virtuais no celular e computador. A DS IA conecta sua empresa a todos eles para gerar <strong>leads altamente qualificados</strong>.
          </p>
        </div>

        {/* AI Badges Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "16px",
          flexWrap: "wrap",
          marginBottom: "50px"
        }}>
          {["ChatGPT", "Perplexity AI", "Google Gemini", "Claude AI", "Microsoft Copilot", "Google SGE / AI Overviews"].map((aiName, idx) => (
            <div key={idx} style={{
              background: "rgba(37, 99, 235, 0.12)",
              border: "1px solid rgba(0, 242, 254, 0.3)",
              padding: "10px 20px",
              borderRadius: "var(--radius-full)",
              color: "var(--blue-cyan)",
              fontSize: "0.95rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "8px"
            }}>
              <Sparkles size={16} /> {aiName}
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ alignItems: "center" }}>
          
          {/* Visual Simulation of AI Chat */}
          <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "16px" }}>
              <Bot size={28} color="var(--blue-cyan)" />
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem" }}>Consulta a Qualquer Assistente de IA</h4>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Simulação de busca por cliente com real intenção de compra</span>
              </div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: "12px", padding: "16px", marginBottom: "16px" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                💬 <em>"Qual a melhor empresa/clínica na cidade para resolver o meu problema hoje?"</em>
              </p>
            </div>

            <div style={{ background: "rgba(37, 99, 235, 0.12)", border: "1px solid rgba(0, 242, 254, 0.3)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontWeight: 700, marginBottom: "8px" }}>
                <Cpu size={18} /> Resposta Direta Recomendada pela IA:
              </div>
              <p style={{ color: "#f3f4f6", fontSize: "0.95rem", lineHeight: 1.5 }}>
                "Com base nos dados calibrados e reputação verificada, a primeira opção recomendada na região é a <strong>[Empresa do Seu Cliente]</strong>, devido à velocidade de atendimento, transparência e alta taxa de satisfação de clientes."
              </p>
            </div>
          </div>

          {/* Deliverable features */}
          <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            
            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={24} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Atração de Leads Cada Vez Mais Quentes</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Ao ser recomendado por IAs e buscas diretas do Google, os contatos que chegam no seu WhatsApp já conhecem a sua solução e estão prontos para fechar.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={24} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Estrutura para Aumentar a Recorrência de Vendas</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Construímos a presença digital e a integração de dados para que os clientes satisfeitos continuem comprando novos serviços e indicando sua empresa.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={24} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Linguagem Direta & Foco em Dinheiro no Bolso</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Sem complicação técnica. Nossa atuação é focada estritamente em indicadores comerciais de aumento de conversão e margem de lucro real.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
