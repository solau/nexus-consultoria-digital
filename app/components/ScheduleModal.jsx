"use client";

import { useState } from "react";
import { X, MessageCircle, ShieldCheck } from "lucide-react";

export default function ScheduleModal({ isOpen, onClose }) {
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const packageName = "Diagnóstico Executivo DS IA (R$ 494,00)";
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
      background: "rgba(19, 23, 34, 0.88)",
      backdropFilter: "blur(12px)",
      zIndex: 1000,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "20px"
    }}>
      <div className="glass-card" style={{
        maxWidth: "520px",
        width: "100%",
        padding: "32px",
        position: "relative",
        border: "1px solid var(--border-pastel-blue)",
        boxShadow: "var(--shadow-premium)"
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

        <h3 style={{ fontSize: "1.45rem", fontWeight: 800, color: "#fff", marginBottom: "6px" }}>
          Agendar Diagnóstico Executivo (R$ 494,00)
        </h3>
        <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", marginBottom: "20px" }}>
          Preencha seus dados para direcionar seu agendamento ao nosso consultor no WhatsApp.
        </p>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
          
          <div>
            <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "4px" }}>Seu Nome Completo</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Ex: Dr. Roberto Silva"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "4px" }}>Nome da Empresa / Clínica</label>
            <input
              type="text"
              required
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              placeholder="Ex: Clínica Silva Odontologia"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
          </div>

          <div>
            <label style={{ display: "block", fontSize: "0.82rem", color: "var(--text-muted)", marginBottom: "4px" }}>WhatsApp de Contato</label>
            <input
              type="tel"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(71) 99999-9999"
              style={{
                width: "100%",
                padding: "12px 14px",
                borderRadius: "var(--radius-sm)",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid var(--border-glass)",
                color: "#fff",
                fontSize: "0.92rem",
                outline: "none"
              }}
            />
          </div>

          <div style={{
            background: "rgba(124, 158, 188, 0.12)",
            border: "1px solid var(--border-pastel-blue)",
            padding: "12px",
            borderRadius: "var(--radius-sm)",
            color: "var(--pastel-blue-light)",
            fontSize: "0.86rem",
            fontWeight: 700,
            textAlign: "center"
          }}>
            📋 Diagnóstico Executivo — R$ 494,00 (Entregável em 48h)
          </div>

          <button type="submit" className="btn-blue" style={{ marginTop: "6px", justifyContent: "center", padding: "14px" }}>
            Continuar no WhatsApp <MessageCircle size={18} />
          </button>

          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "6px", fontSize: "0.78rem", color: "var(--text-dim)", marginTop: "4px" }}>
            <ShieldCheck size={14} color="var(--pastel-teal)" /> Atendimento exclusivo DS IA. Sem burocracia.
          </div>

        </form>

      </div>
    </div>
  );
}
