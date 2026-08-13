"use client";

import { AlertTriangle, Flame, RefreshCw, ArrowRight, Ban, TrendingDown, ShieldAlert, Zap } from "lucide-react";

export default function PainPointsSection({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ background: "#050914", borderTop: "1px solid rgba(0, 242, 254, 0.1)", borderBottom: "1px solid rgba(0, 242, 254, 0.1)" }}>
      <div className="container">
        
        <div style={{ textAlign: "center", maxWidth: "840px", margin: "0 auto 60px auto" }}>
          <div className="badge-blue">
            <AlertTriangle size={16} color="#ef4444" /> A Dor Real das Empresas na Conversão
          </div>
          <h2 style={{ fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "20px" }}>
            Cansado de Receber <span style={{ color: "#ef4444" }}>Curiosos</span> no WhatsApp e Ver Seu Dinheiro Sumir em Anúncios Sem Retorno?
          </h2>
          <p style={{ color: "var(--text-muted)", fontSize: "1.15rem", lineHeight: 1.6 }}>
            Ter contatos aleatórios no WhatsApp não significa ter lucro no bolso. O segredo para crescer é atrair <strong>leads cada vez mais quentes</strong> e aumentar a <strong>recorrência de vendas</strong>.
          </p>
        </div>

        {/* 3 Pain Cards */}
        <div className="grid-3" style={{ marginBottom: "60px" }}>
          
          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(239, 68, 68, 0.3)", background: "rgba(239, 68, 68, 0.04)" }}>
            <div style={{ background: "rgba(239, 68, 68, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <Ban size={28} color="#ef4444" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              1. Leads Frios que Só Perguntam Preço
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Sua equipe perde horas respondendo pessoas que "só queriam saber o valor" e somem. Sem estar presente nas <strong>buscas ativas do Google e de TODAS as IAs</strong>, você só atrai curiosos em vez de clientes com decisão de compra imediata.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(245, 158, 11, 0.3)", background: "rgba(245, 158, 11, 0.04)" }}>
            <div style={{ background: "rgba(245, 158, 11, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <TrendingDown size={28} color="#f59e0b" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              2. Fazer Anúncios Sem Recorrência de Venda
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Pagar tráfego pago todo mês sem ter um site ultrarrápido e sem um processo de recompra é como depender de um balão de oxigênio. Se você parar de pagar o anúncio, as vendas caem a zero porque não há estrutura de retenção.
            </p>
          </div>

          <div className="glass-card" style={{ padding: "36px", border: "1px solid rgba(59, 130, 246, 0.3)", background: "rgba(59, 130, 246, 0.04)" }}>
            <div style={{ background: "rgba(59, 130, 246, 0.15)", width: "52px", height: "52px", borderRadius: "14px", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "24px" }}>
              <ShieldAlert size={28} color="var(--blue-light)" />
            </div>
            <h3 style={{ fontSize: "1.35rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              3. Agências que Só Postam e Não Falam de Lucro
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "0.95rem", lineHeight: 1.6 }}>
              Agências convencionais te cobram mensalidades caras para criar artes bonitinhas de "datas comemorativas" no Instagram. Isso dá curtidas, mas <strong>não coloca dinheiro na sua conta bancária</strong> nem constrói autoridade de marca.
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
          <div style={{ maxWidth: "720px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "8px", color: "var(--blue-cyan)", fontWeight: 700, fontSize: "0.95rem", marginBottom: "12px" }}>
              <Flame size={20} /> A Virada de Chave com a DS IA
            </div>
            <h3 style={{ fontSize: "1.8rem", color: "#fff", fontWeight: 800, marginBottom: "12px" }}>
              Atraia Clientes Quentes e Aumente o Lucro por Cliente Todo Mês
            </h3>
            <p style={{ color: "var(--text-muted)", fontSize: "1.05rem", lineHeight: 1.6 }}>
              Conectamos seu negócio a <strong>TODAS as IAs do mercado (ChatGPT, Perplexity, Gemini, Claude, Copilot)</strong> e ao Google, garantindo um fluxo constante de pessoas prontas para fechar e uma estrutura que estimula a <strong>recorrência de compras</strong>.
            </p>
          </div>

          <div>
            <button className="btn-blue" onClick={onOpenModal} style={{ fontSize: "1.05rem", padding: "18px 32px", whitespace: "nowrap" }}>
              Destravar Meus Leads Quentes <ArrowRight size={20} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
