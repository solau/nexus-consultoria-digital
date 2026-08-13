"use client";

import { useState } from "react";
import { X, MessageCircle, ShieldCheck } from "lucide-react";

export default function ScheduleModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [packageChoice, setPackageChoice] = useState("essential");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageName = packageChoice === "essential" ? "Diagnóstico Essential (R$ 297,00)" : "Diagnóstico Executive (R$ 497,00)";
    const message = `Olá! Meu nome é ${name}, da empresa ${company}. Gostaria de agendar o ${packageName} com a equipe da DS IA para estruturar a presença digital e otimização de IA do meu negócio. Telefone: ${phone}`;
    const whatsappUrl = `https://wa.me/5571999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
    onClose();
  };

  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      background: "rgba(3, 6, 14, 0.88)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div className="glass-card" style={{
        maxWidth: "540px",
        width: "100%",
        padding: "36px",
        position: "relative",
        border: "1px solid var(--border-cyan)",
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.9)"
      }}>
        
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            background: "none",
            border: "none",
            color: "var(--text-muted)",
            cursor: "pointer"
          }}
        >
          <X size={24} />
        </button>

        <h3 style={{ fontSize: "1.6rem", fontWeight: 800, color: "#fff", marginBottom: "8px" }}>
          Agendar Diagnóstico Executivo DS IA
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", marginBottom: "24px" }}>
          Preencha os dados abaixo para direcionar seu atendimento diretamente ao consultor sênior no WhatsApp.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>Seu Nome Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dr. Roberto Silva"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>Nome da Empresa / Clínica</label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Ex: Clínica Silva Odontologia"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>WhatsApp de Contato</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(71) 99999-9999"
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.95rem",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "6px" }}>Escolha a Opção do Diagnóstico</label>
            <select
              value={packageChoice}
              onChange={(e) => setPackageChoice(e.target.value)}
              style={{
                width: "100%",
                padding: "14px",
                borderRadius: "var(--radius-sm)",
                background: "#0b1326",
                border: "1px solid var(--border-cyan)",
                color: "var(--blue-cyan)",
                fontSize: "0.95rem",
                outline: "none",
                fontWeight: 600
              }}
            >
              <option value="essential">Diagnóstico Essential — R$ 297,00 (Raio-X + Relatório em 48h)</option>
              <option value="executive">Diagnóstico Executive — R$ 497,00 (Raio-X + Concorrentes + Plano IA)</option>
            </select>
          </div>

          <button type="submit" className="btn-blue" style={{ marginTop: "12px", justifyContent: "center", padding: "16px" }}>
            Continuar no WhatsApp <MessageCircle size={20} />
          </button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "8px", fontSize: "0.8rem", color: "var(--text-dim)", marginTop: "8px" }}>
            <ShieldCheck size={14} color="var(--blue-cyan)" /> Atendimento exclusivo DS IA. Sem fidelidade abusiva.
          </div>

        </form>

      </div>
    </div>
  );
}
