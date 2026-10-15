import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function EnvelopeScreen({ onOpenEnvelope }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    setTimeout(() => {
      onOpenEnvelope();
    }, 1100);
  };

  return (
    <div className={`envelope-fullscreen-overlay ${isOpening ? 'fade-out-screen' : ''}`}>
      <div className="envelope-ambient-bg">
        <div className="ambient-glow glow-1"></div>
        <div className="ambient-glow glow-2"></div>
      </div>

      <div className="envelope-wrapper">
        <div className="envelope-header-text">
          <span className="envelope-pre-title font-sans">UNA INVITACIÓN MUY ESPECIAL</span>
          <h1 className="envelope-couple font-serif">Junior & Kathe</h1>
          <p className="envelope-date-hint font-sans">06 • 03 • 2027</p>
        </div>

        {/* Sobre Interactivo Mobile First con Clip-Path */}
        <div 
          className={`wedding-envelope-mobile ${isOpening ? 'envelope-is-open' : ''}`}
          onClick={handleOpen}
          role="button"
          tabIndex={0}
          aria-label="Toca para abrir la invitación"
          onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(); }}
        >
          {/* Fondo interior / liner */}
          <div className="env-liner-bg"></div>

          {/* Tarjeta interior que emerge */}
          <div className="env-letter-card">
            <div className="env-letter-content">
              <span className="env-letter-monogram font-script">J & K</span>
              <span className="env-letter-title font-serif">Nuestra Boda</span>
              <div className="env-letter-divider"></div>
            </div>
          </div>

          {/* Solapa Superior (Flap) que gira hacia arriba */}
          <div className="env-flap-top"></div>

          {/* Bolsillos frontales del sobre con clip-path */}
          <div className="env-pocket-left"></div>
          <div className="env-pocket-right"></div>
          <div className="env-pocket-bottom"></div>

          {/* Sello de Lacre 3D */}
          <div className={`env-wax-seal ${isOpening ? 'seal-broken' : ''}`}>
            <div className="wax-seal-relief">
              <span className="seal-text font-serif">J&K</span>
              <span className="seal-mini-heart">🤍</span>
            </div>
          </div>
        </div>

        {/* Botón de apertura táctil para móviles */}
        <div className="envelope-cta-wrap">
          <button 
            type="button" 
            onClick={handleOpen} 
            className="btn-open-touch"
          >
            <Sparkles size={16} className="btn-sparkle" />
            <span>Toca el sobre para abrir</span>
            <Sparkles size={16} className="btn-sparkle" />
          </button>
        </div>
      </div>
    </div>
  );
}
