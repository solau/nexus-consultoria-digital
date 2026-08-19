import React from 'react';

export default function AioWhyUs() {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="glass-card dende-border-glow" style={{ padding: '60px 40px', textAlign: 'center', background: 'var(--bg-card)' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Por que a Dendê IA?</h2>
          <p style={{ fontSize: '1.2rem', lineHeight: '1.8', color: 'var(--text-muted)', maxWidth: '800px', margin: '0 auto' }}>
            Na Dendê IA, o mesmo time que faz a auditoria executiva implementa as melhorias — estruturação de Schema.org no código, reorganização de headings e reescrita semântica de conteúdo. Nenhuma camada de intermediário entre o diagnóstico estratégico e a execução técnica. Transparência, velocidade e resultados focados no público de alto ticket.
          </p>
        </div>
      </div>
    </section>
  );
}
