"use client";

import { Clock, DollarSign, Award, Target } from "lucide-react";

export default function QuickStatsBanner() {
  const stats = [
    {
      value: "48h",
      label: "Entrega do Raio-X",
      subtext: "Diagnóstico completo da sua presença digital",
      icon: Clock,
      color: "var(--pastel-blue-light)"
    },
    {
      value: "R$ 494",
      label: "Diagnóstico Único",
      subtext: "Entrada sem contrato de fidelidade longa",
      icon: DollarSign,
      color: "var(--pastel-teal)"
    },
    {
      value: "1º Lugar",
      label: "Recomendado em IA",
      subtext: "ChatGPT, Gemini, Perplexity & Copilot",
      icon: Award,
      color: "var(--pastel-gold)"
    },
    {
      value: "1 Cliente",
      label: "Retorno do Investimento",
      subtext: "1 único contrato fechado já cobre o ano",
      icon: Target,
      color: "var(--pastel-blue-light)"
    }
  ];

  return (
    <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-glass)", borderBottom: "1px solid var(--border-glass)", padding: "36px 0" }}>
      <div className="container">
        
        <div className="grid-4">
          {stats.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="stat-card-snack">
                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", marginBottom: "8px" }}>
                  <Icon size={20} color={item.color} />
                  <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {item.label}
                  </span>
                </div>

                <div className="stat-number-giant" style={{ color: item.color, marginBottom: "4px" }}>
                  {item.value}
                </div>

                <div style={{ fontSize: "0.82rem", color: "var(--text-muted)", lineHeight: 1.35 }}>
                  {item.subtext}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
