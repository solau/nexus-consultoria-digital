"use client";

import { Cpu, ArrowRight, CheckCircle2, TrendingUp, Sparkles } from "lucide-react";

export default function Hero({ onOpenModal }) {
  return (
    <section className="hero-section" style={{
      position: "relative",
      paddingTop: "125px",
      paddingBottom: "60px",
      overflow: "hidden"
    }}>
      {/* Background Glow */}
      <div className="bg-glow-radial" style={{ top: "-120px", left: "50%", transform: "translateX(-50%)" }}></div>

      <div className="container" style={{ position: "relative", zIndex: 2 }}>
        
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }} className="hero-grid">
          
          {/* Left Column: Ultra-punchy Messaging */}
          <div>
            <div className="badge-blue">
              <Sparkles size={14} color="var(--pastel-teal)" /> Presença Ativa no ChatGPT & Gemini
            </div>

            <h1 style={{
              fontSize: "clamp(2.1rem, 4vw, 3.4rem)",
              fontWeight: 900,
              lineHeight: 1.15,
              marginBottom: "16px",
              letterSpacing: "-0.03em"
            }}>
              Sua Empresa Recomendada no <span className="teal-text">ChatGPT, Gemini & Perplexity</span>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 1.5vw, 1.15rem)",
              color: "var(--text-muted)",
              lineHeight: 1.5,
              marginBottom: "24px"
            }}>
              Atraia <strong>leads qualificados de alto ticket</strong> diretamente para seu WhatsApp. <strong>1 único cliente novo</strong> já cobre todo o seu investimento.
            </p>

            {/* Micro Chips for Instant Scan */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "28px" }}>
              <span style={{ background: "rgba(129, 172, 157, 0.12)", border: "1px solid var(--border-pastel-teal)", color: "var(--pastel-sage)", padding: "6px 14px", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700 }}>
                ⚡ Raio-X em 48 Horas
              </span>
              <span style={{ background: "rgba(124, 158, 188, 0.12)", border: "1px solid var(--border-pastel-blue)", color: "var(--pastel-blue-light)", padding: "6px 14px", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700 }}>
                📋 Diagnóstico R$ 494
              </span>
              <span style={{ background: "rgba(216, 195, 151, 0.12)", border: "1px solid var(--border-pastel-gold)", color: "var(--pastel-gold)", padding: "6px 14px", borderRadius: "99px", fontSize: "0.8rem", fontWeight: 700 }}>
                🎯 Sem Pegadinhas
              </span>
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
              <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "0.98rem", padding: "14px 28px" }}>
                Agendar Diagnóstico (R$ 494) <ArrowRight size={18} />
              </button>
              <a href="#comparativo" className="btn-outline" style={{ fontSize: "0.92rem", padding: "14px 22px" }}>
                Ver Comparativo
              </a>
            </div>

          </div>

          {/* Right Column: Hero Executive Image */}
          <div style={{ position: "relative" }}>
            <div style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              border: "1px solid var(--border-pastel-blue)",
              boxShadow: "var(--shadow-premium)",
              position: "relative"
            }}>
              <img 
                src="/images/pme_executive_hero.png" 
                alt="Reunião Executiva DS IA com empresários PMEs" 
                style={{ width: "100%", height: "auto", display: "block", objectFit: "cover" }}
              />
              
              {/* Floating Badge Overlay */}
              <div style={{
                position: "absolute",
                bottom: "16px",
                left: "16px",
                right: "16px",
                background: "rgba(28, 34, 48, 0.92)",
                backdropFilter: "blur(12px)",
                padding: "14px 18px",
                borderRadius: "var(--radius-md)",
                border: "1px solid var(--border-glass)",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "12px"
              }}>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <div style={{ width: "34px", height: "34px", borderRadius: "50%", background: "var(--teal-gradient)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <TrendingUp size={18} color="#fff" />
                  </div>
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: "700", color: "#fff" }}>Leads Qualificados</div>
                    <div style={{ fontSize: "0.72rem", color: "var(--pastel-sage)" }}>Recomendado no ChatGPT & Perplexity</div>
                  </div>
                </div>
                <div style={{ background: "rgba(129, 172, 157, 0.15)", border: "1px solid var(--border-pastel-teal)", padding: "4px 10px", borderRadius: "99px", fontSize: "0.75rem", fontWeight: "700", color: "var(--pastel-sage)" }}>
                  ROI Positivo
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .hero-section {
            padding-top: 105px !important;
            padding-bottom: 40px !important;
          }
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
