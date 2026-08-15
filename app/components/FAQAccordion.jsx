"use client";

import { useState } from "react";
import { faqsList } from "../data/faqs";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function FAQAccordion() {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <HelpCircle size={15} /> Esclarecimentos Executivos
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Perguntas <span className="teal-text">Frequentes</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Respostas práticas sobre a contratação do Diagnóstico Executivo (R$ 494) e a governança DS IA.
          </p>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "12px" }}>
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "20px 24px",
                  cursor: "pointer",
                  border: isOpen ? "1px solid var(--border-pastel-teal)" : "1px solid var(--border-glass)"
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: "1.05rem", color: isOpen ? "var(--pastel-blue-light)" : "#fff", fontWeight: 700 }}>
                    {faq.question}
                  </h3>
                  {isOpen ? <ChevronUp size={18} color="var(--pastel-teal)" /> : <ChevronDown size={18} color="var(--text-muted)" />}
                </div>

                {isOpen && (
                  <p style={{ marginTop: "12px", color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.55, borderTop: "1px solid var(--border-glass)", paddingTop: "12px" }}>
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
