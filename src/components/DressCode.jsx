import React from 'react';

export default function DressCode() {
  return (
    <section id="vestimenta" className="editorial-flow-section dresscode-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">CÓDIGO DE VESTIMENTA</span>
        <h2 className="dresscode-heading font-serif">Atuendo Formal</h2>
      </div>

      {/* Detalle elegante de Traje Formal */}
      <div className="dresscode-formal-container reveal-on-scroll reveal-scale reveal-delay-100">
        {/* Ilustración artesanal en acuarela de los novios en atuendo formal */}
        <div className="dresscode-couple-illustration-wrap">
          <img
            src="/images/novios-atuendo-formal.png?v=2"
            alt="Ilustración de los novios en atuendo formal"
            className="dresscode-couple-illustration"
            loading="lazy"
          />
        </div>

        {/* Reserva exclusiva de colores para los novios */}
        <div className="dresscode-reserved-card reveal-on-scroll reveal-fade-up reveal-delay-200">
          <span className="reserved-eyebrow font-sans">LOS NOVIOS SE RESERVAN LOS COLORES:</span>

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
        </div>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-300">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}
