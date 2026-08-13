"use client";

import { AlertTriangle, TrendingDown, Ban, ArrowRight, ShieldAlert, Zap, CheckCircle2 } from "lucide-react";

export default function PainPointsSection({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ background: "#050914", borderTop: "1px solid rgba(0, 242, 254, 0.1)", borderBottom: "1px solid rgba(0, 242, 254, 0.1)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <AlertTriangle size={16} color="#ef4444" /> A Verdade Nua e Crua Sobre o Marketing Tradicional
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "20px" }}>
            Por Que Ficar Dependendo Apenas de <span style={{ color: "#ef4444", textDecoration: "line-through" }}>Instagram e Anúncios Soltos</span> Está Queimando o Seu Dinheiro?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.6 }}>
            Se a sua empresa depende de postagens no Instagram ou coloca dinheiro em tráfego pago sem uma estrutura web inteligente, você está alimentando uma ilusão cara.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid-3" style={{ marginBottom: "60px" }}>
          
          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(239, 68, 68, 0.3)", background: "rgba(239, 68, 68, 0.04)" }}>
            <div style={{ background: "rgba(239, 68, 68, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <Ban size={28} color="#ef4444" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              1. A Armadilha de Ficar Só no Instagram
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Quem tem uma dor real (precisa de um médico, advogado, arquiteto ou serviço B2B urgente) <strong>NÃO vai no Instagram rolar Reels</strong>. Quem quer comprar com urgência pesquisa no <strong>Google e no ChatGPT</strong>. Ficar fazendo postzinhos fofos no Canva não enche o caixa da sua empresa.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(245, 158, 11, 0.3)", background: "rgba(245, 158, 11, 0.04)" }}>
            <div style={{ background: "rgba(245, 158, 11, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <TrendingDown size={28} color="#f59e0b" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              2. Agências "Postadoras de Canva"
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Você paga R$ 1.500 a R$ 3.000 por mês para uma agência postar "Feliz Dia da Árvore" ou "Curiosidades sobre o seu nicho". O resultado? 5 curtidas da sua própria equipe, zero clientes novos batendo na sua porta e nenhuma estratégia ligada ao seu lucro líquido.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(59, 130, 246, 0.3)", background: "rgba(59, 130, 246, 0.04)" }}>
            <div style={{ background: "rgba(59, 130, 246, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <ShieldAlert size={28} color="var(--blue-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              3. O Ralo do Tráfego Pago Sem Estrutura
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Investir R$ 2.000 em anúncios patrocinados sem ter um site ultrarrápido otimizado para IAs e sem um WhatsApp de resposta imediata é como <strong>jogar água em um balde furado</strong>. O lead clica, o site demora 5 segundos para abrir, a secretária demora 1 hora para responder e você perde o cliente.
            </p>
          </div>

        </div>

        {/* The DS IA Solution Banner */}
        <div style={{
          background: "linear-gradient(135deg, rgba(11, 19, 38, 0.9) 0%, rgba(37, 99, 235, 0.15) 100%)",
          border: "1px solid var(--border-cyan)",
          borderRadius: "var(--radius-lg)",
          padding: "48px 40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "32px",
          boxShadow: "0 20px 40px -15px rgba(0, 242, 254, 0.2)"
        }}>
          <div style={{ maxWidth: "700px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>
              <Zap size={20} /> A Solução Definitiva da DS IA
            </div>
            <h3 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              Esteja Onde o Seu Cliente de Alto Ticket Realmente Pesquisa
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Nós construímos o seu <strong>Site de Alta Performance</strong>, injetamos a <strong>Infraestrutura de Dados para Recomendação no ChatGPT/Perplexity</strong> e eliminamos os vazamentos de atendimento no seu WhatsApp.
            </p>
          </div>

          <div>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "1.05rem", padding: "18px 32px", whitespace: "nowrap" }}>
              Descobrir Meus Vazamentos de Lucro <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
