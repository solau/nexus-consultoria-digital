"use client";

import { useState } from "react";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion() {
  const faqs = [
    {
      question: "AIO substitui o SEO tradicional?",
      answer: "Não — os dois são complementares. Um site bem otimizado para SEO já tem parte da base para AIO. A diferença está em como o conteúdo é estruturado e sinalizado para que IAs o reconheçam como fonte confiável, e não apenas como uma página ranqueável. SEO posiciona você em listas de links; AIO faz você ser citado diretamente nas respostas."
    },
    {
      question: "Quanto tempo leva para aparecer nas respostas das IAs?",
      answer: "Depende da autoridade atual do domínio, da qualidade do conteúdo existente e da competitividade do tema. Em geral, as primeiras citações aparecem entre 4 e 12 semanas após as otimizações técnicas e de conteúdo. O sinal concreto de progresso é monitorado com pesquisas periódicas nas IAs sobre as perguntas-chave do seu mercado."
    },
    {
      question: "Preciso refazer todo o meu site?",
      answer: "Na maioria dos casos, não. Trabalhamos sobre o que já existe — reestruturando conteúdo, adicionando marcações técnicas e ajustando a arquitetura de informação. O objetivo é amplificar o que já funciona, não começar do zero."
    },
    {
      question: "Como vou saber se estou sendo citado pelas IAs?",
      answer: "A forma mais direta é pesquisar manualmente no ChatGPT, Perplexity e Google AI Overviews as perguntas que seu público faz sobre o seu mercado — e verificar se sua empresa aparece. No nosso serviço de monitoramento, fazemos isso de forma sistemática e periódica, com relatórios de evolução ao longo do tempo."
    },
    {
      question: "O que é GEO? É a mesma coisa que AIO?",
      answer: "GEO (Generative Engine Optimization) é o termo acadêmico para a mesma prática, usado principalmente em contextos de pesquisa e publicações internacionais. AIO é o termo mais adotado no mercado. Ambos descrevem o trabalho de otimizar conteúdo e estrutura técnica para ser citado por IAs generativas."
    }
  ];

  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-padding" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-dende">
            <HelpCircle size={15} /> Esclarecimentos
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Perguntas <span className="dende-text">frequentes</span>
          </h2>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "20px 24px",
                  cursor: "pointer",
                  border: isOpen ? "1px solid var(--border-dende)" : "1px solid var(--border-glass)"
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: "1.05rem", color: isOpen ? "var(--dende-main)" : "var(--text-main)", fontWeight: 700 }}>
                    {faq.question}
                  </h3>
                  {isOpen ? <ChevronUp size={18} color="var(--dende-main)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                </div>

                {isOpen && (
                  <p style={{ marginTop: "12px", color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.55, borderTop: "1px solid var(--border-glass)", paddingTop: "12px" }}>
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
