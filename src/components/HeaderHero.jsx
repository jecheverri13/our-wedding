import React from 'react';
import { ChevronDown } from 'lucide-react';

export default function HeaderHero({ onScrollToSection }) {
  return (
    <header className="editorial-hero-clean animate-fade-in">


      {/* Ramillete botánico sutil en acuarela */}
      <div className="botanical-header-accent" aria-hidden="true">
        <svg viewBox="0 0 160 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="botanical-sprig-svg">
          <path d="M10 20C40 18 60 20 80 20C100 20 120 18 150 20" stroke="#B89047" strokeWidth="0.8" strokeDasharray="2 3" opacity="0.6" />
          <path d="M80 5C78 12 75 16 70 20C75 24 78 28 80 35C82 28 85 24 90 20C85 16 82 12 80 5Z" fill="#B89047" opacity="0.45" />
          <circle cx="80" cy="20" r="2.5" fill="#A84C2D" opacity="0.7" />
          <circle cx="50" cy="20" r="1.5" fill="#B89047" opacity="0.5" />
          <circle cx="110" cy="20" r="1.5" fill="#B89047" opacity="0.5" />
        </svg>
      </div>

      <div className="editorial-hero-inner">
        {/* Frase poética superior delicada */}
        <span className="editorial-intro-script font-script">
          Nos Casamos
        </span>
        {/* Foto artística del lugar con marco sutil de papel */}
        <div className="event-venue-photo-wrap">
          <div className="event-venue-frame">
            <img
              src="/images/anillo-abrazo.jpg"
              alt="Anillo abrazo"
              className="event-venue-img"
              loading="lazy"
            />
          </div>
        </div>


        {/* Nombres con respiro amplio */}
        <div className="editorial-names-wrap">
          <h1 className="hero-name font-serif">Junior</h1>
          <span className="hero-ampersand font-script">&</span>
          <h1 className="hero-name font-serif">Kathe</h1>
        </div>

        {/* Detalle de fecha y ciudad */}
        <div className="editorial-meta-line">
          <span className="meta-date font-serif">Sábado, 6 de Marzo de 2027</span>
          <span className="meta-separator">•</span>
          <span className="meta-place font-sans">MANIZALES, COLOMBIA</span>
        </div>

        {/* Frase poética ligera (del reel) */}
        <p className="hero-poetic-quote font-serif">
          «Las mejores historias se celebran juntos. Te esperamos.»
        </p>

        {/* Flecha sutil para invitar a continuar */}
        <div className="hero-scroll-cue">
          <button
            type="button"
            onClick={() => onScrollToSection('historia')}
            className="scroll-cue-btn"
            aria-label="Continuar leyendo"
          >
            <span className="cue-label font-sans">DESLIZA</span>
            <ChevronDown size={16} className="cue-chevron" />
          </button>
        </div>
      </div>
    </header>
  );
}

