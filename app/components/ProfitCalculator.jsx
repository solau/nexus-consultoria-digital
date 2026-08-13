"use client";

import { useState } from "react";
import { TrendingUp, Calculator, ArrowRight } from "lucide-react";

export default function ProfitCalculator({ onOpenModal }) {
  const [ticket, setTicket] = useState(2500);
  const [currentLeads, setCurrentLeads] = useState(20);

  // Estimations
  const estimatedNewLeads = Math.round(currentLeads * 1.8);
  const estimatedExtraRevenue = Math.round((estimatedNewLeads - currentLeads) * 0.25 * ticket);

  return (
    <section className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 60px auto" }}>
          <div className="badge-gold">
            <Calculator size={16} /> Simulador Financeiro de ROI
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Calcule o Seu <span className="gold-text">Potencial de Faturamento Extra</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Simule o aumento de faturamento estimado ao corrigir sua presença digital e passar a ser recomendado no ChatGPT.
          </p>
        </div>

        <div className="glass-card" style={{ maxWidth: "840px", margin: "0 auto", padding: "40px", border: "1px solid var(--border-gold)" }}>
          
          <div className="grid-2" style={{ marginBottom: "40px", gap: "40px" }}>
            
            {/* Controls */}
            <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
              
              <div>
                <label style={{ display: "flex", justifyContent: "space-between", color: "#fff", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
                  <span>Ticket Médio da Sua Empresa (R$)</span>
                  <span style={{ color: "var(--gold-light)", fontWeight: 800 }}>R$ {ticket.toLocaleString("pt-BR")}</span>
                </label>
                <input
                  type="range"
                  min="500"
                  max="15000"
                  step="500"
                  value={ticket}
                  onChange={(e) => setTicket(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--gold-primary)", cursor: "pointer" }}
                />
              </div>

              <div>
                <label style={{ display: "flex", justifyContent: "space-between", color: "#fff", fontSize: "0.95rem", fontWeight: 600, marginBottom: "12px" }}>
                  <span>Leads/Contatos por Mês no WhatsApp</span>
                  <span style={{ color: "var(--gold-light)", fontWeight: 800 }}>{currentLeads} contatos</span>
                </label>
                <input
                  type="range"
                  min="5"
                  max="150"
                  step="5"
                  value={currentLeads}
                  onChange={(e) => setCurrentLeads(Number(e.target.value))}
                  style={{ width: "100%", accentColor: "var(--gold-primary)", cursor: "pointer" }}
                />
              </div>

            </div>

            {/* Simulated Result Box */}
            <div style={{ background: "rgba(0,0,0,0.4)", borderRadius: "16px", padding: "28px", border: "1px solid var(--border-glass)", display: "flex", flexDirection: "column", justifyContent: "center" }}>
              <span style={{ fontSize: "0.85rem", color: "var(--text-muted)", display: "block", marginBottom: "6px" }}>Faturamento Extra Mensal Estimado</span>
              <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "var(--gold-light)", lineHeight: 1.1, marginBottom: "12px" }}>
                + R$ {estimatedExtraRevenue.toLocaleString("pt-BR")}
              </span>
              <span style={{ fontSize: "0.85rem", color: "#10b981", fontWeight: 600 }}>
                🚀 Projeção de {estimatedNewLeads} leads qualificados/mês via IA e busca local
              </span>
            </div>

          </div>

          <div style={{ textAlign: "center" }}>
            <button className="btn-gold" onClick={onOpenModal} style={{ fontSize: "1.05rem", padding: "16px 36px" }}>
              Quero Alcançar Esse Faturamento Extra <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
