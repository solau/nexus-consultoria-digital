"use client";

import { Cpu, ShieldCheck } from "lucide-react";

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: "#0e111a", borderTop: "1px solid var(--border-glass)", padding: "48px 0 28px 0" }}>
      <div className="container">
        
        <div className="footer-grid" style={{ marginBottom: "36px" }}>
          
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--blue-gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Cpu size={20} color="#ffffff" />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "#fff" }}>
                DS <span className="teal-text">IA</span>
              </span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.55, maxWidth: "340px", marginBottom: "16px" }}>
              Consultoria Executiva de Presença Digital, Alta Velocidade Web e Recomendação em Inteligência Artificial para PMEs.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", color: "var(--pastel-teal)", fontSize: "0.82rem", fontWeight: 600 }}>
              <ShieldCheck size={16} /> Padrão Executivo de Qualidade & Busca em IA
            </div>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "0.95rem", marginBottom: "14px", fontWeight: 700 }}>Navegação Executiva</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
              <li><a href="#diagnostico" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Diagnóstico (R$ 494)</a></li>
              <li><a href="#entregaveis" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Entregáveis</a></li>
              <li><a href="#tecnologia-ia" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Presença em IA</a></li>
              <li><a href="#assessoria" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Assessoria Growth</a></li>
              <li><a href="#solucoes-certificadas" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Ecossistema de Soluções</a></li>
              <li><a href="#faq" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Dúvidas Frequentes</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "0.95rem", marginBottom: "14px", fontWeight: 700 }}>Atendimento Direto</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "16px" }}>
              Diagnóstico individual presencial ou online com nosso consultor sênior.
            </p>
            <button className="btn-blue" onClick={onOpenModal} style={{ padding: "12px 20px", fontSize: "0.88rem", width: "100%", justifyContent: "center" }}>
              Agendar Diagnóstico (R$ 494)
            </button>
          </div>

        </div>

        <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "0.82rem", color: "var(--text-dim)" }}>
          <span>© {new Date().getFullYear()} DS IA — Digital Strategy & Artificial Intelligence. Todos os direitos reservados.</span>
          <span>Desenvolvido com tecnologia de alta performance e otimização para IAs.</span>
        </div>

      </div>

      <style jsx>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1.5fr 1.5fr;
          gap: 36px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
        }
      `}</style>
    </footer>
  );
}
