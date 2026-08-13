"use client";

import { Sparkles, ShieldCheck, Heart } from "lucide-react";

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: "#060709", borderTop: "1px solid rgba(255,255,255,0.08)", padding: "60px 0 30px 0" }}>
      <div className="container">
        
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr 1.5fr", gap: "40px", marginBottom: "50px" }}>
          
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "16px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "var(--gold-gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Sparkles size={20} color="#08090c" />
              </div>
              <span style={{ fontSize: "1.2rem", fontWeight: "900", color: "#fff" }}>
                NEXUS <span className="gold-text">DIGITAL</span>
              </span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.6, maxWidth: "340px", marginBottom: "20px" }}>
              Consultoria e Assessoria Executiva de Presença Digital, Tecnologia Web de Alta Velocidade e Otimização para Inteligência Artificial (GEO/AIO).
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--gold-light)", fontSize: "0.85rem", fontWeight: 600 }}>
              <ShieldCheck size={16} /> Empresa Homologada & Certificada em IA Search
            </div>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "16px", fontWeight: 700 }}>Navegação</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem" }}>
              <li><a href="#diagnostico" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Diagnóstico Pago</a></li>
              <li><a href="#ia-search" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Tecnologia IA</a></li>
              <li><a href="#planos" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Planos Mensais</a></li>
              <li><a href="#softwares" style={{ color: "var(--text-muted)", textDecoration: "none" }}>CRM & Bling ERP</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "16px", fontWeight: 700 }}>Nichos Alvos</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px", fontSize: "0.9rem", color: "var(--text-muted)" }}>
              <li>Saúde & Estética</li>
              <li>Serviços Jurídicos</li>
              <li>Arquitetura & Móveis</li>
              <li>Serviços B2B</li>
              <li>Gastronomia Premium</li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "#fff", fontSize: "1rem", marginBottom: "16px", fontWeight: 700 }}>Atendimento Direto</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem", lineHeight: 1.5, marginBottom: "16px" }}>
              Sessões estratégicas de diagnóstico com nosso consultor sênior.
            </p>
            <button className="btn-gold" onClick={onOpenModal} style={{ padding: "10px 20px", fontSize: "0.88rem", width: "100%", justifyContent: "center" }}>
              Agendar Diagnóstico (R$ 297)
            </button>
          </div>

        </div>

        <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "24px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "16px", fontSize: "0.85rem", color: "var(--text-dim)" }}>
          <span>© {new Date().getFullYear()} Nexus Digital Growth. Todos os direitos reservados.</span>
          <span>Desenvolvido com padrão executivo de alta performance e AIO.</span>
        </div>

      </div>
    </footer>
  );
}
