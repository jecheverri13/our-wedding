import { useState } from 'react';
import { Sparkles } from 'lucide-react';

// eslint-disable-next-line react/prop-types
export default function EnvelopeScreen({ onOpenEnvelope }) {
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = (e) => {
    if (e) e.stopPropagation();
    // Bloquear clics adicionales durante la animación
    if (isOpening) return;
    setIsOpening(true);

    // Secuencia temporal coordinada con la apertura del sobre en el video (1.35s)
    setTimeout(() => {
      onOpenEnvelope();
    }, 1350);
  };

  return (
    <div
      className={`fullscreen-envelope-container ${isOpening ? 'envelope-opening-active' : ''}`}
      role="region"
      aria-label="Invitación de boda de Junior y Kathe"
    >
      {/* Escenario del sobre: Pantalla completa en móvil y marco centrado en desktop */}
      <div 
        className={`envelope-viewport-stage ${isOpening ? 'stage-opening-active' : ''}`}
        onClick={handleOpen}
      >
        
        {/* TARJETA INTERIOR: Revelada armónicamente en el centro con zoom continuo */}
        <div className={`env-card-reveal-preview ${isOpening ? 'card-zoom-in' : ''}`}>
          <div className="env-card-paper">
            <div className="env-card-botanical-accent" aria-hidden="true">
              <svg viewBox="0 0 160 36" fill="none" className="env-card-sprig">
                <path d="M10 18C40 16 60 18 80 18C100 18 120 16 150 18" stroke="#B89047" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
                <path d="M80 3C78 10 75 14 70 18C75 22 78 26 80 33C82 26 85 22 90 18C85 14 82 10 80 3Z" fill="#B89047" opacity="0.5" />
                <circle cx="80" cy="18" r="2.5" fill="#A84C2D" opacity="0.7" />
              </svg>
            </div>
            <span className="env-card-script font-script">Nos Casamos</span>
            <h2 className="env-card-names font-serif">Junior &amp; Kathe</h2>
            <div className="env-card-date font-serif">06 / MARZO / 2027</div>
            <div className="env-card-divider"></div>
            <p className="env-card-invitation font-serif">ESTÁS CORDIALMENTE INVITADO</p>
          </div>
        </div>

        {/* SOLAPA SUPERIOR (Se repliega y asciende hacia arriba) */}
        <div className={`env-flap-panel env-flap-top ${isOpening ? 'flap-open-top' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt="Sobre terracota solapa superior"
            className="envelope-bg-image"
          />
        </div>

        {/* SOLAPA INFERIOR (Se repliega y desciende hacia abajo) */}
        <div className={`env-flap-panel env-flap-bottom ${isOpening ? 'flap-open-bottom' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt="Sobre terracota solapa inferior"
            className="envelope-bg-image"
          />
        </div>

        {/* SOLAPA IZQUIERDA (Se desplaza hacia la izquierda) */}
        <div className={`env-flap-panel env-flap-left ${isOpening ? 'flap-open-left' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt="Sobre terracota solapa izquierda"
            className="envelope-bg-image"
          />
        </div>

        {/* SOLAPA DERECHA (Se desplaza hacia la derecha llevando el sello sobre ella) */}
        <div className={`env-flap-panel env-flap-right ${isOpening ? 'flap-open-right' : ''}`}>
          <img
            src="/images/sobre-terracota-limpio-hd.png"
            alt="Sobre terracota solapa derecha"
            className="envelope-bg-image"
          />
        </div>

        {/* SELLO DE CERA DORADO (Desplaza hacia la derecha sincronizado con la solapa derecha como en el video) */}
        <button
          type="button"
          className={`interactive-wax-seal-btn ${isOpening ? 'seal-opening-anim' : ''}`}
          onClick={handleOpen}
          aria-label="Toca el sello para abrir la invitación"
        >
          <img
            src="/images/sello-dorado-detallado-jk.png"
            alt="Sello de cera dorado J&K"
            className="seal-detailed-image"
          />
          <div className="seal-pulse-glow" aria-hidden="true"></div>
        </button>

        {/* INDICADOR SUTIL PARA ABRIR */}
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
