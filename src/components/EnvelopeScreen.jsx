import React, { useState } from 'react';
import { Sparkles } from 'lucide-react';

export default function EnvelopeScreen({ onOpenEnvelope }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    if (isOpening) return;
    setIsOpening(true);

    // Transición suave hacia los lados que revela directamente la pantalla principal
    setTimeout(() => {
      onOpenEnvelope();
    }, 850);
  };

  return (
    <div
      className={`fullscreen-envelope-container ${isOpening ? 'envelope-opening-active' : ''}`}
      role="region"
      aria-label="Invitación de boda de Junior y Kathe"
    >
      {/* Escenario de pantalla completa para móvil y centrado en desktop */}
      <div className={`envelope-viewport-stage ${isOpening ? 'stage-opening-sides' : ''}`}>
        
        {/* Panel Izquierdo que se abre hacia la izquierda */}
        <div className={`env-gate-panel env-gate-left ${isOpening ? 'panel-slide-left' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt="Sobre de boda terracota"
            className="envelope-bg-image"
          />
        </div>

        {/* Panel Derecho que se abre hacia la derecha */}
        <div className={`env-gate-panel env-gate-right ${isOpening ? 'panel-slide-right' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt=""
            className="envelope-bg-image"
          />
        </div>

        {/* Sello de cera dorado con bordes detallados (único, sin duplicados) */}
        <button
          type="button"
          className={`interactive-wax-seal-btn ${isOpening ? 'seal-break-anim' : ''}`}
          onClick={handleOpen}
          aria-label="Toca el sello para abrir la invitación"
        >
          <img
            src="/images/sello-dorado-detallado-jk.png"
            alt="Sello de cera dorado detallado J&K"
            className="seal-detailed-image"
          />
          <div className="seal-pulse-ring"></div>
          <div className="seal-glow-halo"></div>
        </button>

        {/* Indicador sutil para abrir */}
        <div 
          className={`seal-touch-prompt-wrap ${isOpening ? 'prompt-fade-out' : ''}`}
          onClick={handleOpen}
        >
          <button 
            type="button" 
            className="btn-touch-seal-pill font-sans"
            tabIndex={-1}
          >
            <Sparkles size={15} className="sparkle-icon" />
            <span>Toca el sello para abrir</span>
            <Sparkles size={15} className="sparkle-icon" />
          </button>
        </div>

      </div>
    </div>
  );
}
