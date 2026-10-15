import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function EnvelopeScreen({ onOpenEnvelope }) {
  const [isOpening, setIsOpening] = useState(false);

  const triggerGoldConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 70,
      origin: { y: 0.52 },
      colors: ['#D4AF37', '#FFDF73', '#E6C687', '#FFFFFF', '#8A9A86'],
      ticks: 200,
      gravity: 0.9,
      scalar: 0.9,
    });
  };

  const handleOpen = () => {
    if (isOpening) return;
    setIsOpening(true);
    triggerGoldConfetti();
    setTimeout(() => {
      onOpenEnvelope();
    }, 1200);
  };

  return (
    <div
      className={`fullscreen-envelope-container ${isOpening ? 'envelope-opening-active' : ''}`}
      onClick={handleOpen}
      role="button"
      tabIndex={0}
      aria-label="Toca el sello para abrir la invitación"
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleOpen(); }}
    >
      {/* Fondo ambiental sage / verde olivo cálido */}
      <div className="envelope-viewport-stage">
        {/* El sobre completo vertical en terracota HD */}
        <div className={`fullscreen-envelope-art ${isOpening ? 'art-unfolding' : ''}`}>
          <img
            src="/images/sobre-terracota-completo-hd.png"
            alt="Sobre de boda terracota de Junior y Kathe"
            className="envelope-bg-image"
          />


          {/* Área activa y pulsante del Sello de Cera Dorado */}
          <div className={`interactive-wax-seal-hotspot ${isOpening ? 'seal-break-anim' : ''}`}>
            <div className="seal-pulse-ring"></div>
            <div className="seal-glow-halo"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

