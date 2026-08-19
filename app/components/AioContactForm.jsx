"use client";

import React, { useState } from 'react';

export default function AioContactForm() {
  const [status, setStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('enviado');
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contato" className="section-padding" style={{ background: 'var(--bg-card)' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center' }}>
          
          <div style={{ paddingRight: '40px' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '24px' }}>Pronto para aparecer nas respostas das IAs?</h2>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Na conversa inicial, auditamos a presença da sua empresa nas principais IAs generativas e mostramos concretamente onde estão os gaps — quais perguntas do seu mercado você não está respondendo, e o que fazer primeiro.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.6', color: 'var(--text-muted)' }}>
              Você sai com um diagnóstico claro, sem compromisso.
            </p>
          </div>

          <div className="glass-card" style={{ padding: '40px' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Qual o seu nome?</label>
                <input required type="text" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-main)', fontSize: '1rem' }} />
              </div>
              
              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Seu e-mail corporativo</label>
                <input required type="email" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-main)', fontSize: '1rem' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>WhatsApp / Telefone</label>
                <input required type="tel" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-main)', fontSize: '1rem' }} />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: '8px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>Conte-nos sobre seu projeto</label>
                <textarea required rows="4" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid var(--border-glass)', background: 'var(--bg-dark)', color: 'var(--text-main)', fontSize: '1rem', resize: 'vertical' }}></textarea>
              </div>

              <button type="submit" className="btn-dende" style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}>
                Solicitar Diagnóstico
              </button>

              {status === 'enviado' && (
                <p style={{ color: 'var(--dende-main)', textAlign: 'center', marginTop: '10px', fontSize: '0.9rem', fontWeight: '500' }}>
                  Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.
                </p>
              )}
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
