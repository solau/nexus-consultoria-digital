import React from 'react';

export default function AioToolsCta({ onOpenModal }) {
  return (
    <section className="section-padding">
      <div className="container">
        <div className="grid-2">
          
          <div className="glass-card dende-border-glow" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: 'linear-gradient(135deg, var(--bg-card) 0%, #fff 100%)' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Descubra se as IAs encontram sua empresa</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
              Analisamos critérios técnicos e de conteúdo e geramos um diagnóstico do seu AIO Score de como seu site aparece para o ChatGPT, Perplexity e Google AI.
            </p>
            <button onClick={onOpenModal} className="btn-dende" style={{ alignSelf: 'flex-start' }}>
              Gerar meu AIO Score
            </button>
          </div>

          <div className="glass-card" style={{ padding: '40px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '16px' }}>Assessoria Executiva em AIO</h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.6' }}>
              Aprenda o que é AIO, como as IAs decidem o que citar e o que fazer para sua empresa aparecer nas respostas com a nossa equipe de especialistas.
            </p>
            <button onClick={onOpenModal} className="btn-outline" style={{ alignSelf: 'flex-start' }}>
              Falar com um Consultor
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
