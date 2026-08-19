import React from 'react';

export default function AioHowItWorks() {
  const steps = [
    {
      title: "1. Diagnóstico",
      desc: "Auditamos a presença atual da sua empresa nas principais IAs generativas — ChatGPT, Perplexity e Google AI Overviews. O resultado é um diagnóstico com prioridades claras."
    },
    {
      title: "2. Estratégia",
      desc: "Definimos os temas de autoridade do seu negócio — os assuntos em que sua empresa precisa ser reconhecida como referência pelas IAs. Montamos um plano de ação."
    },
    {
      title: "3. Implementação",
      desc: "Executamos as melhorias diretamente: dados estruturados Schema.org, arquitetura de headings, reestruturação de conteúdo e sinalização técnica para IAs."
    },
    {
      title: "4. Monitoramento",
      desc: "Acompanhamos a evolução da presença da sua empresa nas respostas das IAs ao longo do tempo. Testamos periodicamente as perguntas-chave do seu mercado."
    }
  ];

  return (
    <section id="como-funciona" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px', textAlign: 'center' }}>Como funciona</h2>
        
        <div className="grid-4">
          {steps.map((step, i) => (
            <div key={i} className="glass-card" style={{ padding: '24px', borderTop: '2px solid var(--dende-main)' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '16px', color: 'var(--text-main)' }}>{step.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.5', fontSize: '0.95rem' }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
