"use client";

import { Cpu, Check, Bot, Sparkles } from "lucide-react";

export default function AISearchSection() {
  return (
    <section id="tecnologia-ia" className="section-padding" style={{ background: "var(--bg-dark)", position: "relative", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <Cpu size={16} /> Presença em Inteligência Artificial (GEO)
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Recomendado no <span className="teal-text">ChatGPT, Perplexity & Gemini</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
            Seus clientes buscam fornecedores direto pelos assistentes de IA. A DS IA conecta sua empresa para ser a primeira escolha recomendada.
          </p>
        </div>

        {/* AI Badges Bar */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "12px",
          flexWrap: "wrap",
          marginBottom: "40px"
        }}>
          {["ChatGPT", "Perplexity AI", "Google Gemini", "Claude AI", "Microsoft Copilot", "Google AI Overviews"].map((aiName, idx) => (
            <div key={idx} style={{
              background: "rgba(124, 158, 188, 0.12)",
              border: "1px solid var(--border-pastel-blue)",
              padding: "8px 18px",
              borderRadius: "var(--radius-full)",
              color: "var(--pastel-blue-light)",
              fontSize: "0.88rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              gap: "6px"
            }}>
              <Sparkles size={14} color="var(--pastel-teal)" /> {aiName}
            </div>
          ))}
        </div>

        <div className="grid-2" style={{ alignItems: "center" }}>
          
          {/* Visual Simulation of AI Chat */}
          <div className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-pastel-teal)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "14px" }}>
              <Bot size={26} color="var(--pastel-teal)" />
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.05rem", fontWeight: 700 }}>Simulação de Consulta em IA</h4>
                <span style={{ fontSize: "0.78rem", color: "var(--text-muted)" }}>Recomendação em tempo real para cliente comprador</span>
              </div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.3)", borderRadius: "10px", padding: "14px", marginBottom: "14px" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem" }}>
                💬 <em>"Qual o melhor especialista / fornecedor na minha cidade para contratar hoje?"</em>
              </p>
            </div>

            <div style={{ background: "rgba(129, 172, 157, 0.12)", border: "1px solid var(--border-pastel-teal)", borderRadius: "10px", padding: "16px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--pastel-teal)", fontWeight: 700, marginBottom: "6px", fontSize: "0.85rem" }}>
                <Cpu size={16} /> Resposta Recomendada pela IA:
              </div>
              <p style={{ color: "#f3f4f6", fontSize: "0.88rem", lineHeight: 1.5 }}>
                "Com base nos dados calibrados e autoridade digital, a empresa recomendada na região é a <strong>[Empresa do Seu Cliente]</strong>, devido ao alto padrão de atendimento e avaliações de credibilidade."
              </p>
            </div>
          </div>

          {/* Key Value Points */}
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            
            <div style={{ display: "flex", gap: "14px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={20} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "4px", fontWeight: 700 }}>Leads de Alta Qualidade</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  Leads vindos do ChatGPT chegam decididos e sem leilão de preço.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              <div style={{ background: "var(--teal-gradient)", width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={20} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "4px", fontWeight: 700 }}>Recorrência & Recomendação Contínua</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  Dados estruturados Schema.org garantem que as IAs continuem recomendando a sua marca.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "14px" }}>
              <div style={{ background: "var(--gold-gradient)", width: "36px", height: "36px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={20} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem", marginBottom: "4px", fontWeight: 700 }}>Foco Pragmático em Vendas</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                  Consultoria sem complicação técnica, focada no resultado financeiro da sua PME.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
