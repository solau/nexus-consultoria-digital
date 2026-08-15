"use client";

import { MapPin, ArrowRight } from "lucide-react";

export default function RegionalCoverage({ onOpenModal }) {
  const regions = [
    { city: "Salvador (Capital)", places: "Horto Florestal, Caminho das Árvores, Pituba, Graça, Itaigara, Ondina, Vitória, Barra, Alphaville Salvador" },
    { city: "Lauro de Freitas", places: "Vilas do Atlântico, Busca Vida, Estrada do Coco, Buraquinho, Miragem" },
    { city: "Camaçari & Litoral Norte", places: "Alphaville Litoral Norte, Guarajuba, Praia do Forte, Abrantes" },
    { city: "Região Metropolitana", places: "Simões Filho, Candeias, Dias d'Ávila, Mata de São João" }
  ];

  return (
    <section id="cobertura-regional" className="section-padding" style={{ background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 40px auto" }}>
          <div className="badge-blue">
            <MapPin size={15} /> Presença Regional GEO / AIO
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Dominando Buscas Locais em <span className="teal-text">Salvador e Região Metropolitana</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Injetamos dados geográficos no código da sua empresa para que as IAs recomendem seus serviços nos bairros nobres de maior poder aquisitivo.
          </p>
        </div>

        <div className="grid-2" style={{ marginBottom: "36px" }}>
          {regions.map((reg, idx) => (
            <div key={idx} className="glass-card" style={{ padding: "24px", border: "1px solid var(--border-glass)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--pastel-blue-light)", fontWeight: 800, fontSize: "1.1rem", marginBottom: "8px" }}>
                <MapPin size={18} color="var(--pastel-teal)" /> {reg.city}
              </div>
              <p style={{ color: "var(--text-muted)", fontSize: "0.88rem", lineHeight: 1.5 }}>
                📍 <strong>Bairros Mapeados:</strong> {reg.places}
              </p>
            </div>
          ))}
        </div>

        {/* Local AI Assurance Card */}
        <div style={{
          background: "linear-gradient(135deg, rgba(28, 34, 48, 0.95) 0%, rgba(124, 158, 188, 0.12) 100%)",
          border: "1px solid var(--border-pastel-blue)",
          borderRadius: "var(--radius-md)",
          padding: "28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "16px"
        }}>
          <div>
            <h3 style={{ fontSize: "1.25rem", color: "#fff", fontWeight: 800, marginBottom: "4px" }}>
              Quer Ser Recomendado na Sua Cidade?
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.9rem" }}>
              Receba o Raio-X geográfico completo do seu negócio em até 48h no Diagnóstico Executivo (R$ 494).
            </p>
          </div>
          <div>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "0.92rem", padding: "12px 24px" }}>
              Agendar Diagnóstico Local (R$ 494) <ArrowRight size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
