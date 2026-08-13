"use client";

import { Cpu, ShieldCheck } from "lucide-react";

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: "#04070f", borderTop: "1px solid rgba(0, 242, 254, 0.15)", padding: "60px 0 30px 0" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1.5fr 1.5fr", gap: "40px", marginBottom: "50px" }}>
          
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--blue-gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Cpu size={20} color="#ffffff" />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "#fff" }}>
                DS <span className="cyan-text">IA</span>
              </span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "340px", marginBottom: "20px" }}>
              Consultoria e Assessoria Executiva de Presença Digital, Tecnologia Web de Alta Velocidade e Otimização para Inteligência Artificial (GEO/AIO).
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontSize: "0.85rem", fontWeight: 600 }}>
              <ShieldCheck size={16} /> Certificação Técnica em AI Search & Web Performance
            </div>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "16px", fontWeight: 700 }}>Navegação Rápida</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li><a href="#diagnostico" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Diagnóstico (R$ 494)</a></li>
              <li><a href="#entregaveis" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Entregáveis</a></li>
              <li><a href="#tecnologia-ia" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Tecnologia IA</a></li>
              <li><a href="#assessoria" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Assessoria Growth</a></li>
              <li><a href="#sistemas" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Sistemas CRM & ERP</a></li>
              <li><a href="#solucoes-certificadas" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Soluções Certificadas</a></li>
              <li><a href="#faq" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "16px", fontWeight: 700 }}>Atendimento Direto</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "20px" }}>
              Sessões estratégicas de diagnóstico presencial ou online com nosso consultor sênior.
            </p>
            <button className="btn-blue" onClick={onOpenModal} style={{ padding: "12px 24px", fontSize: "0.9rem", width: "100%", justifyContent: "center" }}>
              Agendar Diagnóstico (R$ 494)
            </button>
          </div>

        </div>

        <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", color: "var(--text-dim)" }}>
          <span>© {new Date().getFullYear()} DS IA — Digital Strategy & Artificial Intelligence. Todos os direitos reservados.</span>
          <span>Desenvolvido com padrão executivo de alta performance e AIO.</span>
        </div>

      </div>
    </footer>
  );
}
