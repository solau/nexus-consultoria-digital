import React from 'react';

export default function AioServices() {
  const services = [
    {
      title: "Auditoria e diagnóstico",
      desc: "Analisamos como sua marca, produtos e serviços aparecem nas respostas de IAs generativas como ChatGPT, Perplexity e Google AI Overviews. Mapeamos todas as lacunas de visibilidade atuais."
    },
    {
      title: "Estruturação de conteúdo",
      desc: "IAs generativas preferem conteúdo direto, bem organizado e semanticamente rico. Reorganizamos e reescrevemos as páginas do seu site para que as IAs consigam interpretar claramente o que sua empresa faz."
    },
    {
      title: "Dados estruturados (Schema.org)",
      desc: "Implementamos marcações técnicas no código do seu site que funcionam como um 'manual de leitura' para mecanismos de busca e IAs, aumentando significativamente as chances de citação."
    },
    {
      title: "Consultoria estratégica",
      desc: "Orientamos sua equipe sobre como criar e organizar conteúdo continuamente para manter e ampliar a presença nas respostas de IAs, definindo os temas de autoridade e formatos ideais."
    }
  ];

  return (
    <section id="o-que-fazemos" className="section-padding">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '16px' }}>O que fazemos</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            Transformamos a infraestrutura invisível da sua marca para dominar as recomendações de Inteligência Artificial.
          </p>
        </div>
        
        <div className="grid-2">
          {services.map((s, i) => (
            <div key={i} className="glass-card" style={{ padding: '32px' }}>
              <div style={{ 
                width: '48px', height: '48px', borderRadius: '12px', 
                background: 'var(--dende-glow)', display: 'flex', 
                alignItems: 'center', justifyContent: 'center', marginBottom: '20px',
                color: 'var(--dende-main)', fontSize: '1.5rem', fontWeight: 'bold'
              }}>
                {i + 1}
              </div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '12px', color: 'var(--text-main)' }}>{s.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
