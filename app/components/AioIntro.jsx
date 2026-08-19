import React from 'react';

export default function AioIntro() {
  return (
    <section className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <div className="glass-card" style={{ padding: '40px', textAlign: 'center', borderTop: '4px solid var(--dende-main)' }}>
          <p style={{ fontSize: '1.25rem', lineHeight: '1.8', color: 'var(--text-main)', maxWidth: '900px', margin: '0 auto' }}>
            <strong className="dende-text">AIO (AI Optimization)</strong> — também chamado de GEO, Generative Engine Optimization — é o trabalho de tornar seu conteúdo interpretável, confiável e citável para inteligências artificiais generativas. Não é sobre truques ou atalhos. É sobre construir a base certa: conteúdo bem estruturado, autoridade clara no seu tema e sinais técnicos que as IAs conseguem ler e confiar. Ser citado pelas IAs deixou de ser diferencial e passou a ser requisito.
          </p>
        </div>
      </div>
    </section>
  );
}
