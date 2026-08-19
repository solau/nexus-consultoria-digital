"use client";

import Image from "next/image";

export default function Footer({ onOpenModal }) {
  return (
    <footer style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border-glass)", padding: "48px 0 28px 0" }}>
      <div className="container">
        
        <div className="footer-grid" style={{ marginBottom: "36px" }}>
          
          <div>
            <a href="#" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", marginBottom: "14px" }}>
              <div style={{ width: "36px", height: "36px", borderRadius: "10px", overflow: "hidden", position: "relative" }}>
                <Image src="/logo.jpg" alt="Dendê IA Logo" fill style={{ objectFit: "cover" }} />
              </div>
              <span style={{ fontSize: "1.3rem", fontWeight: "900", color: "var(--text-main)" }}>
                Dendê <span className="dende-text">IA</span>
              </span>
            </a>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.55, maxWidth: "340px", marginBottom: "16px" }}>
              Consultoria Executiva de Presença Digital, Alta Velocidade Web e Otimização para Inteligência Artificial para PMEs.
            </p>
          </div>

          <div>
            <h4 style={{ color: "var(--text-main)", fontSize: "0.95rem", marginBottom: "14px", fontWeight: 700 }}>Navegação Executiva</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "8px", fontSize: "0.88rem" }}>
              <li><a href="#o-que-fazemos" style={{ color: "var(--text-muted)", textDecoration: "none" }}>O que fazemos</a></li>
              <li><a href="#como-funciona" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Como funciona</a></li>
              <li><a href="#contato" style={{ color: "var(--text-muted)", textDecoration: "none" }}>Contato</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ color: "var(--text-main)", fontSize: "0.95rem", marginBottom: "14px", fontWeight: 700 }}>Atendimento Direto</h4>
            <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5, marginBottom: "16px" }}>
              Diagnóstico individual online com nosso consultor especializado.
            </p>
            <button className="btn-dende" onClick={onOpenModal} style={{ padding: "12px 20px", fontSize: "0.88rem", width: "100%", justifyContent: "center" }}>
              Agendar Diagnóstico
            </button>
          </div>

        </div>

        <div style={{ borderTop: "1px solid var(--border-glass)", paddingTop: "20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "12px", fontSize: "0.82rem", color: "var(--text-dim)" }}>
          <span>© {new Date().getFullYear()} Dendê IA. Todos os direitos reservados.</span>
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
