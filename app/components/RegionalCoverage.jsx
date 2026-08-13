"use client";

import { MapPin, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

export default function RegionalCoverage({ onOpenModal }) {
  const regions = [
    { city: "Salvador (Capital)", places: "Horto Florestal, Caminho das Árvores, Pituba, Graça, Itaigara, Ondina, Vitória, Barra, Alphaville Salvador, Stella Maris" },
    { city: "Lauro de Freitas", places: "Vilas do Atlântico, Busca Vida, Estrada do Coco, Buraquinho, Miragem" },
    { city: "Camaçari", places: "Alphaville Litoral Norte, Guarajuba, Praia do Forte, Abrantes" },
    { city: "Região Metropolitana", places: "Simões Filho, Candeias, Dias d'Ávila, Mata de São João" }
  ];

  return (
    <section id="cobertura-regional" className="section-padding" style={{ background: "#050914", borderTop: "1px solid rgba(0, 242, 254, 0.1)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 50px auto" }}>
          <div className="badge-blue">
            <MapPin size={16} /> Cobertura Geográfica Regional AIO / GEO
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 4vw, 2.7rem)", fontWeight: 800, marginBottom: "16px" }}>
            Sua Empresa Dominando as Buscas de IA em <span className="cyan-text">Salvador e Região Metropolitana</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem", lineHeight: 1.6 }}>
            Injetamos no código da sua empresa os dados geográficos e os microrregiões exatos para que o <strong>ChatGPT, Perplexity, Gemini, Claude e Copilot</strong> recomendem seu negócio nas buscas locais da Bahia.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: "40px" }}>
          {regions.map((reg, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "28px", border: "1px solid var(--border-glass)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px", color: "var(--blue-cyan)", fontWeight: 800, fontSize: "1.2rem", marginBottom: "10px" }}>
                <MapPin size={22} color="var(--blue-cyan)" /> {reg.city}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.6 }}>
                📍 <strong>Microrregiões & Bairros Mapeados:</strong> {reg.places}
              </p>
            </div>
          ))}
        </div>

        {/* Local AI Assurance Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(11, 19, 38, 0.9) 0%, rgba(37, 99, 235, 0.15) 100%)",
          border: "1px solid var(--border-cyan)",
          borderRadius: "var(--radius-md)",
          padding: "32px 28px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "20px"
        }}>
          <div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "6px" }}>
              Quer Ser a 1ª Opção Indicada pelas IAs em Salvador e Região?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem" }}>
              Agende o Diagnóstico Executivo de R$ 494,00 e receba a auditoria local completa do seu negócio em 48h.
            </p>
          </div>
          <div>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "0.98rem", padding: "14px 28px" }}>
              Agendar Diagnóstico em Salvador (R$ 494) <ArrowRight size={18} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
