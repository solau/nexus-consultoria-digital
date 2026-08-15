"use client";

import { useState } from "react";
import { diagnosticQuestions } from "../data/diagnosticQuiz";
import { FileText, ArrowRight, RotateCcw, CheckCircle, ShieldCheck } from "lucide-react";

export default function InteractiveDiagnostic({ onOpenModal }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const handleSelectOption = (questionId, option) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: option
    });
  };

  const handleNext = () => {
    if (currentStep < diagnosticQuestions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResults(true);
    }
  };

  const handleReset = () => {
    setCurrentStep(0);
    setSelectedAnswers({});
    setShowResults(false);
  };

  const totalScore = Object.values(selectedAnswers).reduce((acc, curr) => acc + (curr.score || 0), 0) / diagnosticQuestions.length || 0;
  const totalLeak = Object.values(selectedAnswers).reduce((acc, curr) => acc + (curr.leak || 0), 0);

  const getMaturityLevel = (score) => {
    if (score < 30) return { title: "Invisível / Alto Risco de Perda de Clientes", color: "#e57373" };
    if (score < 60) return { title: "Iniciante com Gargalos Severos de Lucro", color: "#f0b429" };
    if (score < 85) return { title: "Competitivo (Com Espaço para Dobrar Conversão)", color: "var(--pastel-blue-light)" };
    return { title: "Dominante & Pronto para Alta Escala em IA", color: "var(--pastel-teal)" };
  };

  const level = getMaturityLevel(totalScore);

  return (
    <section id="diagnostico" className="section-padding" style={{ position: "relative", background: "var(--bg-dark)", borderTop: "1px solid var(--border-glass)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 48px auto" }}>
          <div className="badge-blue">
            <FileText size={16} /> Diagnóstico Executivo de Entrada (R$ 494)
          </div>
          <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, marginBottom: "16px" }}>
            Simulador de Maturidade & <span className="teal-text">Lucro Reprimido</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.05rem" }}>
            Avalie o status da sua empresa no Google e no ChatGPT e descubra estimativas de receita reprimida em menos de 1 minuto.
          </p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "36px", alignItems: "center" }} className="diagnostic-grid">
          
          {/* Left Column: Image Mockup & Offer Context */}
          <div>
            <div style={{
              borderRadius: "var(--radius-md)",
              overflow: "hidden",
              border: "1px solid var(--border-pastel-blue)",
              boxShadow: "var(--shadow-premium)",
              marginBottom: "24px"
            }}>
              <img 
                src="/images/diagnostic_mockup.png" 
                alt="Relatório de Diagnóstico Executivo DS IA em tablet" 
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </div>

            <div className="glass-card" style={{ padding: "24px", border: "1px solid var(--border-pastel-teal)" }}>
              <div style={{ fontSize: "1.1rem", fontWeight: 800, color: "#fff", marginBottom: "10px", display: "flex", alignItems: "center", gap: "8px" }}>
                <ShieldCheck size={20} color="var(--pastel-teal)" />
                O que você recebe no Diagnóstico Executivo (R$ 494):
              </div>
              <ul style={{ listStyle: "none", color: "var(--text-muted)", fontSize: "0.9rem", display: "flex", flexDirection: "column", gap: "8px" }}>
                <li>✔ <strong>Relatório de Raio-X em PDF:</strong> Nota 0-100 da sua presença digital.</li>
                <li>✔ <strong>Auditoria de Prontidão para IA:</strong> Teste real no ChatGPT, Gemini e Copilot.</li>
                <li>✔ <strong>Plano de Ação de 90 Dias:</strong> Roteiro direto sem desperdício de verba.</li>
                <li>✔ <strong>Reunião Estratégica em 48h (60 min):</strong> Apresentação individual com o consultor.</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Quiz Simulator */}
          <div>
            {!showResults ? (
              <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-pastel-blue)" }}>
                
                {/* Progress bar */}
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "20px" }}>
                  <span style={{ fontSize: "0.85rem", color: "var(--pastel-blue-light)", fontWeight: 700 }}>
                    Etapa {currentStep + 1} de {diagnosticQuestions.length} — {diagnosticQuestions[currentStep].category}
                  </span>
                  <span style={{ fontSize: "0.82rem", color: "var(--text-muted)" }}>
                    {Math.round(((currentStep + 1) / diagnosticQuestions.length) * 100)}% concluído
                  </span>
                </div>

                <div style={{ background: "rgba(255,255,255,0.06)", height: "6px", borderRadius: "3px", marginBottom: "28px", overflow: "hidden" }}>
                  <div style={{ background: "var(--blue-gradient)", height: "100%", width: `${((currentStep + 1) / diagnosticQuestions.length) * 100}%`, transition: "width 0.3s ease" }}></div>
                </div>

                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, marginBottom: "20px", color: "#fff", lineHeight: 1.4 }}>
                  {diagnosticQuestions[currentStep].question}
                </h3>

                {/* Options List */}
                <div style={{ display: "flex", flexDirection: "column", gap: "12px", marginBottom: "28px" }}>
                  {diagnosticQuestions[currentStep].options.map((option, idx) => {
                    const isSelected = selectedAnswers[diagnosticQuestions[currentStep].id]?.text === option.text;
                    return (
                      <div
                        key={idx}
                        onClick={() => handleSelectOption(diagnosticQuestions[currentStep].id, option)}
                        style={{
                          padding: "14px 20px",
                          borderRadius: "var(--radius-sm)",
                          background: isSelected ? "rgba(124, 158, 188, 0.2)" : "rgba(255,255,255,0.02)",
                          border: isSelected ? "2px solid var(--pastel-blue)" : "1px solid var(--border-glass)",
                          cursor: "pointer",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                          transition: "all 0.2s ease"
                        }}
                      >
                        <span style={{ fontSize: "0.92rem", color: isSelected ? "#fff" : "var(--text-muted)", fontWeight: isSelected ? 600 : 400 }}>
                          {option.text}
                        </span>
                        <div style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "50%",
                          border: isSelected ? "5px solid var(--pastel-blue)" : "2px solid var(--text-dim)",
                          background: isSelected ? "var(--bg-dark)" : "transparent"
                        }}></div>
                      </div>
                    );
                  })}
                </div>

                {/* Navigation button */}
                <div style={{ display: "flex", justifyContent: "flex-end" }}>
                  <button
                    className="btn-blue"
                    disabled={!selectedAnswers[diagnosticQuestions[currentStep].id]}
                    onClick={handleNext}
                    style={{
                      padding: "12px 24px",
                      fontSize: "0.92rem",
                      opacity: selectedAnswers[diagnosticQuestions[currentStep].id] ? 1 : 0.5,
                      cursor: selectedAnswers[diagnosticQuestions[currentStep].id] ? "pointer" : "not-allowed"
                    }}
                  >
                    {currentStep < diagnosticQuestions.length - 1 ? "Próxima Pergunta" : "Ver Diagnóstico Completo"} <ArrowRight size={16} />
                  </button>
                </div>

              </div>
            ) : (
              
              /* Results Screen */
              <div className="glass-card" style={{ padding: "32px", border: "1px solid var(--border-pastel-teal)", textAlign: "center" }}>
                
                <div style={{
                  width: "64px",
                  height: "64px",
                  borderRadius: "50%",
                  background: "rgba(129, 172, 157, 0.18)",
                  border: "2px solid var(--pastel-teal)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 16px auto"
                }}>
                  <FileText size={32} color="var(--pastel-teal)" />
                </div>

                <h3 style={{ fontSize: "1.5rem", fontWeight: 800, marginBottom: "6px" }}>
                  Resultado do Diagnóstico Prévio
                </h3>
                
                <div style={{ fontSize: "0.92rem", color: level.color, fontWeight: 700, marginBottom: "24px" }}>
                  Status: {level.title}
                </div>

                {/* Score and Leak Grid */}
                <div className="grid-2" style={{ marginBottom: "28px" }}>
                  <div style={{ background: "rgba(0,0,0,0.3)", padding: "18px", borderRadius: "12px", border: "1px solid var(--border-glass)" }}>
                    <span style={{ fontSize: "0.8rem", color: "var(--text-muted)", display: "block", marginBottom: "4px" }}>Nota da Presença Digital</span>
                    <span style={{ fontSize: "2.4rem", fontWeight: 900, color: "var(--pastel-blue-light)" }}>{Math.round(totalScore)}<span style={{ fontSize: "1.2rem", color: "var(--text-muted)" }}>/100</span></span>
                  </div>

                  <div style={{ background: "rgba(229, 115, 115, 0.08)", padding: "18px", borderRadius: "12px", border: "1px solid rgba(229, 115, 115, 0.3)" }}>
                    <span style={{ fontSize: "0.8rem", color: "#fca5a5", display: "block", marginBottom: "4px" }}>Lucro Reprimido Estimado/Mês</span>
                    <span style={{ fontSize: "2.2rem", fontWeight: 900, color: "#e57373" }}>R$ {totalLeak.toLocaleString("pt-BR")}</span>
                  </div>
                </div>

                <p style={{ color: "var(--text-muted)", fontSize: "0.92rem", lineHeight: 1.5, marginBottom: "24px" }}>
                  Receba o mapa completo de correções com o nosso <strong>Diagnóstico Executivo Pago (R$ 494,00)</strong> em até 48h.
                </p>

                <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", flexWrap: "wrap" }}>
                  <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "0.95rem", padding: "14px 24px" }}>
                    Agendar Diagnóstico (R$ 494) <ArrowRight size={18} />
                  </button>
                  <button className="btn-outline" onClick={handleReset} style={{ fontSize: "0.9rem", padding: "14px 20px" }}>
                    Refazer Simulador <RotateCcw size={16} />
                  </button>
                </div>

              </div>
            )}
          </div>

        </div>

      </div>

      <style jsx>{`
        @media (max-width: 960px) {
          .diagnostic-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </section>
  );
}
