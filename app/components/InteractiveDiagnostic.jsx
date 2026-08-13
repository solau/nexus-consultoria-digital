"use client";

import { useState } from "react";
import { diagnosticQuestions } from "../data/diagnosticQuiz";
import { FileText, ArrowRight, RotateCcw, AlertTriangle, CheckCircle, DollarSign, MessageCircle } from "lucide-react";

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

  // Calculate totals
  const totalScore = Object.values(selectedAnswers).reduce((acc, curr) => acc + (curr.score || 0), 0) / diagnosticQuestions.length || 0;
  const totalLeak = Object.values(selectedAnswers).reduce((acc, curr) => acc + (curr.leak || 0), 0);

  const getMaturityLevel = (score) => {
    if (score < 30) return { title: "Invisível / Alto Risco de Perda de Clientes", color: "#ef4444" };
    if (score < 60) return { title: "Iniciante com Gargalos Severos de Lucro", color: "#f59e0b" };
    if (score < 85) return { title: "Competitivo (Com Espaço para Dobrar Conversão)", color: "#3b82f6" };
    return { title: "Dominante & Pronto para Alta Escala em IA", color: "#10b981" };
  };

  const level = getMaturityLevel(totalScore);

  return (
    <section id="simulador" className="section-padding" style={{ position: "relative" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto 50px auto" }}>
          <div className="badge-gold">
            <FileText size={16} /> Ferramenta Interativa de Diagnóstico
          </div>
          <h2 style={{ fontSize: "2.5rem", fontWeight: 800, marginBottom: "16px" }}>
            Simulador de Maturidade Digital & <span className="gold-text">Lucro Reprimido</span>
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.1rem" }}>
            Responda 4 perguntas rápidas para descobrir a nota da sua empresa e estimar o valor em Reais que está sendo perdido todos os meses.
          </p>
        </div>

        <div style={{ maxWidth: "840px", margin: "0 auto" }}>
          
          {!showResults ? (
            <div className="glass-card" style={{ padding: "40px", border: "1px solid var(--border-gold)" }}>
              
              {/* Progress bar */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "24px" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--gold-light)", fontWeight: 700 }}>
                  Etapa {currentStep + 1} de {diagnosticQuestions.length} — {diagnosticQuestions[currentStep].category}
                </span>
                <span style={{ fontSize: "0.875rem", color: "var(--text-muted)" }}>
                  {Math.round(((currentStep + 1) / diagnosticQuestions.length) * 100)}% concluído
                </span>
              </div>

              <div style={{ background: "rgba(255,255,255,0.05)", height: "6px", borderRadius: "3px", marginBottom: "32px", overflow: "hidden" }}>
                <div style={{ background: "var(--gold-gradient)", height: "100%", width: `${((currentStep + 1) / diagnosticQuestions.length) * 100}%`, transition: "width 0.3s ease" }}></div>
              </div>

              <h3 style={{ fontSize: "1.4rem", fontWeight: 700, marginBottom: "24px", color: "#fff", lineHeight: 1.4 }}>
                {diagnosticQuestions[currentStep].question}
              </h3>

              {/* Options List */}
              <div style={{ display: "flex", flexDirection: "column", gap: "16px", marginBottom: "32px" }}>
                {diagnosticQuestions[currentStep].options.map((option, idx) => {
                  const isSelected = selectedAnswers[diagnosticQuestions[currentStep].id]?.text === option.text;
                  return (
                    <div
                      key={idx}
                      onClick={() => handleSelectOption(diagnosticQuestions[currentStep].id, option)}
                      style={{
                        padding: "18px 24px",
                        borderRadius: "var(--radius-md)",
                        background: isSelected ? "rgba(217, 179, 64, 0.15)" : "rgba(255,255,255,0.03)",
                        border: isSelected ? "2px solid var(--gold-primary)" : "1px solid var(--border-glass)",
                        cursor: "pointer",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        transition: "all 0.2s ease"
                      }}
                    >
                      <span style={{ fontSize: "1rem", color: isSelected ? "#fff" : "var(--text-muted)", fontWeight: isSelected ? 600 : 400 }}>
                        {option.text}
                      </span>
                      <div style={{
                        width: "22px",
                        height: "22px",
                        borderRadius: "50%",
                        border: isSelected ? "6px solid var(--gold-primary)" : "2px solid var(--text-dim)",
                        background: isSelected ? "#08090c" : "transparent"
                      }}></div>
                    </div>
                  );
                })}
              </div>

              {/* Navigation button */}
              <div style={{ display: "flex", justifyContent: "flex-end" }}>
                <button
                  className="btn-gold"
                  disabled={!selectedAnswers[diagnosticQuestions[currentStep].id]}
                  onClick={handleNext}
                  style={{
                    opacity: selectedAnswers[diagnosticQuestions[currentStep].id] ? 1 : 0.5,
                    cursor: selectedAnswers[diagnosticQuestions[currentStep].id] ? "pointer" : "not-allowed"
                  }}
                >
                  {currentStep < diagnosticQuestions.length - 1 ? "Próxima Pergunta" : "Gerar Raio-X Completo"} <ArrowRight size={18} />
                </button>
              </div>

            </div>
          ) : (
            
            /* Results Screen */
            <div className="glass-card" style={{ padding: "40px", border: "1px solid var(--border-gold)", textAlign: "center" }}>
              
              <div style={{
                width: "80px",
                height: "80px",
                borderRadius: "50%",
                background: "rgba(217, 179, 64, 0.15)",
                border: "2px solid var(--gold-primary)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 24px auto"
              }}>
                <FileText size={40} color="var(--gold-primary)" />
              </div>

              <h3 style={{ fontSize: "1.8rem", fontWeight: 800, marginBottom: "8px" }}>
                Resultado do Diagnóstico Prévio
              </h3>
              
              <div style={{ fontSize: "1rem", color: level.color, fontWeight: 700, marginBottom: "32px" }}>
                Nível de Maturidade: {level.title}
              </div>

              {/* Score and Leak Grid */}
              <div className="grid-2" style={{ marginBottom: "40px" }}>
                <div style={{ background: "rgba(0,0,0,0.4)", padding: "24px", borderRadius: "16px", border: "1px solid var(--border-glass)" }}>
                  <span style={{ fontSize: "0.9rem", color: "var(--text-muted)", display: "block", marginBottom: "8px" }}>Nota de Maturidade Digital</span>
                  <span style={{ fontSize: "3.2rem", fontWeight: 900, color: "var(--gold-light)" }}>{Math.round(totalScore)}<span style={{ fontSize: "1.5rem", color: "var(--text-muted)" }}>/100</span></span>
                </div>

                <div style={{ background: "rgba(239, 68, 68, 0.08)", padding: "24px", borderRadius: "16px", border: "1px solid rgba(239, 68, 68, 0.3)" }}>
                  <span style={{ fontSize: "0.9rem", color: "#fca5a5", display: "block", marginBottom: "8px" }}>Estimativa de Lucro Perdido/Mês</span>
                  <span style={{ fontSize: "2.8rem", fontWeight: 900, color: "#ef4444" }}>R$ {totalLeak.toLocaleString("pt-BR")}</span>
                </div>
              </div>

              <p style={{ color: "var(--text-muted)", fontSize: "1rem", lineHeight: 1.6, marginBottom: "32px", maxWidth: "680px", margin: "0 auto 32px auto" }}>
                Sua empresa possui gargalos sérios na captura de clientes e presença nos motores de IA. Contrate nosso <strong>Diagnóstico Executivo Pago (R$ 297,00)</strong> para receber o plano de correção completo e o raio-x detalhado em 48h.
              </p>

              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px", flexWrap: "wrap" }}>
                <button className="btn-gold" onClick={onOpenModal} style={{ fontSize: "1.05rem", padding: "16px 32px" }}>
                  Agendar Diagnóstico Oficial (R$ 297) <ArrowRight size={20} />
                </button>
                <button className="btn-outline" onClick={handleReset} style={{ fontSize: "1rem", padding: "16px 24px" }}>
                  Refazer Simulador <RotateCcw size={16} />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
