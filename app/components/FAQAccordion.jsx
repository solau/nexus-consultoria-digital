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
    <section className="section-padding" style={{ background: "#080d1a" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <HelpCircle size={16} /> FAQ Executivo DS IA
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Perguntas <span className="cyan-text">Frequentes</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Tire suas dúvidas sobre a consultoria, o diagnóstico executivo e a tecnologia de IA.
          </p>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "16px" }}>
          {faqsList.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="glass-card"
                style={{
                  padding: "24px",
                  cursor: "pointer",
                  border: isOpen ? "1px solid var(--border-cyan)" : "1px solid var(--border-glass)"
                }}
                onClick={() => toggle(idx)}
              >
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                  <h3 style={{ fontSize: "1.15rem", color: isOpen ? "var(--blue-cyan)" : "#fff", fontWeight: 700 }}>
                    {faq.question}
                  </h3>
                  {isOpen ? <ChevronUp size={20} color="var(--blue-cyan)" /> : <ChevronDown size={20} color="var(--text-muted)" />}
                </div>

                {isOpen && (
                  <p style={{ marginTop: "16px", color: "var(--text-muted)", fontSize: "0.98rem", lineHeight: 1.6, borderTop: "1px solid var(--border-glass)", paddingTop: "16px" }}>
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
