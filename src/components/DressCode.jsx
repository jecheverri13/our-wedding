import React from 'react';

export default function DressCode() {
  return (
    <section id="vestimenta" className="editorial-flow-section dresscode-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">CÓDIGO DE VESTIMENTA</span>
        <h2 className="dresscode-heading font-serif">Traje Formal</h2>
      </div>

      {/* Detalle elegante de Traje Formal */}
      <div className="dresscode-formal-container reveal-on-scroll reveal-scale reveal-delay-100">
        <div className="formal-attire-spec-duo">
          <div className="formal-spec-card">
            <span className="formal-role-script font-script">Ellos</span>
            <p className="formal-spec-text font-sans">TRAJE FORMAL OSCURO</p>
          </div>

          <span className="formal-spec-divider font-serif">✦</span>

          <div className="formal-spec-card">
            <span className="formal-role-script font-script">Ellas</span>
            <p className="formal-spec-text font-sans">VESTIDO LARGO O MIDI</p>
          </div>
        </div>

        {/* Reserva exclusiva de colores para los novios */}
        <div className="dresscode-reserved-card reveal-on-scroll reveal-fade-up reveal-delay-200">
          <span className="reserved-eyebrow font-sans">RESERVA DE COLOR</span>
          
          <div className="reserved-swatches-row">
            <div className="reserved-color-pill">
              <span className="color-dot white-dot" aria-hidden="true"></span>
              <span className="color-label font-sans">Blanco</span>
            </div>
            <span className="reserved-amp font-serif">&</span>
            <div className="reserved-color-pill">
              <span className="color-dot terracotta-dot" aria-hidden="true"></span>
              <span className="color-label font-sans">Terracota</span>
            </div>
          </div>

          <p className="dresscode-reserved-note font-serif">
            «Con mucho amor, el color blanco y los tonos terracota quedan reservados exclusivamente para los novios 🤍»
          </p>
        </div>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-300">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}
