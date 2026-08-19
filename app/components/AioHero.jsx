import React from 'react';

export default function AioHero({ onOpenModal }) {
  return (
    <section className="section-padding" style={{ position: 'relative', overflow: 'hidden' }}>
      <div className="bg-glow-radial" style={{ top: '-20%', left: '-10%' }}></div>
      <div className="bg-glow-radial" style={{ bottom: '-20%', right: '-10%', background: 'radial-gradient(circle, var(--gold-glow) 0%, rgba(252, 251, 250, 0) 70%)' }}></div>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <div className="badge-dende">AIO — AI Optimization</div>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '24px', lineHeight: '1.1' }}>
            Prepare seu negócio para ser encontrado e citado pelas IAs <span className="dende-text">— não apenas pelo Google</span>
          </h1>
          <h2 style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '40px', fontWeight: '400', lineHeight: '1.6' }}>
            63% dos brasileiros já usaram IA generativa e 51% acreditam que ela toma decisões melhores que seres humanos em certas situações. ChatGPT, Perplexity, Google AI Overviews e Gemini entregam respostas diretas. Se a sua empresa não aparece nessas respostas, você está invisível para os seus clientes mais qualificados.
          </h2>
          
          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button className="btn-dende" onClick={onOpenModal}>
              Fazer Diagnóstico AIO
            </button>
            <a href="#o-que-fazemos" className="btn-outline">
              Entender o Método
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
