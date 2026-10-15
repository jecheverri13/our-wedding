import React from 'react';
import { ChevronDown, Heart } from 'lucide-react';

export default function HeaderHero({ onScrollToSection, onReopenEnvelope }) {
  return (
    <header className="editorial-hero-section">
      {/* Botón sutil en esquina para ver sobre de nuevo */}
      {onReopenEnvelope && (
        <button
          onClick={onReopenEnvelope}
          className="btn-editorial-reopen"
          title="Ver sobre de nuevo"
        >
          💌 <span>Sobre</span>
        </button>
      )}

      <div className="editorial-hero-content animate-fade-in">
        {/* Monograma delicado */}
        <div className="editorial-monogram font-script">
          J  & K
        </div>

        {/* Frase de entrada limpia */}
        <span className="editorial-eyebrow font-sans">
          NUESTRA BODA
        </span>

        {/* Nombres protagonistas con amplio espacio */}
        <div className="editorial-couple-names">
          <h1 className="editorial-name-first font-serif">Junior</h1>
          <span className="editorial-ampersand font-script">&</span>
          <h1 className="editorial-name-second font-serif">Kathe</h1>
        </div>

        {/* Divisor botánico minimalista */}
        <div className="editorial-divider">
          <span className="editorial-line"></span>
          <span className="editorial-symbol">✦</span>
          <span className="editorial-line"></span>
        </div>

        {/* Fecha y lugar con jerarquía limpia */}
        <div className="editorial-details-block">
          <p className="editorial-date font-serif">
            Sábado • 6 de Marzo de 2027
          </p>
          <p className="editorial-venue font-sans">
            FINCA EL REFUGIO • MANIZALES
          </p>
        </div>

        {/* Botón de acción único y limpio */}
        <div className="editorial-cta-wrap">
          <button
            type="button"
            onClick={() => onScrollToSection('historia')}
            className="btn-editorial-primary"
          >
            <span>Descubre Nuestra Historia</span>
            <ChevronDown size={18} className="cta-chevron-anim" />
          </button>
        </div>
      </div>

      {/* Detalle decorativo inferior */}
      <div className="editorial-corner-decoration"></div>
    </header>
  );
}
