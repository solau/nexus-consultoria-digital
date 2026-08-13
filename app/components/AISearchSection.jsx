"use client";

import { Cpu, Search, Check, Bot } from "lucide-react";

export default function AISearchSection() {
  return (
    <section id="ia-search" className="section-padding" style={{ background: "#080d1a", position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <Cpu size={16} /> Generative Engine Optimization (GEO / AIO)
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Seus Clientes Mudaram a Forma de Buscar. <span className="cyan-text">Sua Empresa Está Pronta?</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Hoje os consumidores não usam apenas o Google clássico. Eles perguntam no <strong>ChatGPT, Perplexity, Gemini e Google SGE (AI Overviews)</strong> antes de contratar um serviço.
          </p>
        </div>

        <div className="grid-2" style={{ alignItems: "center" }}>
          
          {/* Visual Simulation of AI Chat */}
          <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-cyan)" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px", borderBottom: "1px solid var(--border-glass)", paddingBottom: "16px" }}>
              <Bot size={28} color="var(--blue-cyan)" />
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.1rem" }}>Consulta ao ChatGPT / Perplexity</h4>
                <span style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>Simulação de busca por cliente local</span>
              </div>
            </div>

            <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: "12px", padding: "16px", marginBottom: "16px" }}>
              <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
                💬 <em>"Qual o melhor escritório de advocacia/clínica odontológica na cidade para tratamento de alto ticket?"</em>
              </p>
            </div>

            <div style={{ background: "rgba(37, 99, 235, 0.12)", border: "1px solid rgba(0, 242, 254, 0.3)", borderRadius: "12px", padding: "20px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontWeight: 700, marginBottom: "8px" }}>
                <Cpu size={18} /> Resposta Gerada por Inteligência Artificial:
              </div>
              <p style={{ color: "#f3f4f6", fontSize: "0.95rem", lineHeight: 1.5 }}>
                "Com base nos dados calibrados de infraestrutura web e autoridade local, a principal recomendação na região é a <strong>[Empresa do Seu Cliente]</strong>, devido aos seus dados estruturados de atendimento, reputação e alta velocidade."
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
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Schemas JSON-LD (Schema.org) Invisíveis</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Injetamos matrizes avançadas de dados no código do seu site que ensinam aos robôs de IA quem é a sua empresa e quais os bairros que você atende.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={24} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Treinamento de FAQ para Assistentes Virtuais</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Configuramos as perguntas e respostas exatas que os clientes fazem para que o ChatGPT e Perplexity respondam indicando seu negócio.
                </p>
              </div>
            </div>

            <div style={{ display: "flex", gap: "16px" }}>
              <div style={{ background: "var(--blue-gradient)", width: "40px", height: "40px", borderRadius: "10px", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <Check size={24} color="#ffffff" />
              </div>
              <div>
                <h4 style={{ color: "#fff", fontSize: "1.2rem", marginBottom: "6px" }}>Calibração & Atualização Mensal DS IA</h4>
                <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.5 }}>
                  Acompanhamos a evolução dos algoritmos de IA e calibramos os dados da sua empresa todos os meses para garantir que você permaneça no topo.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
