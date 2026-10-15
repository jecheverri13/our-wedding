import React from 'react';

export default function GiftSection() {
  return (
    <section className="editorial-flow-section gifts-flow">
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">MUESTRA DE CARIÑO</span>
        <h2 className="gifts-heading font-serif">Lluvia de Sobres</h2>
      </div>

      <div className="gifts-artisan-body">
        <span className="gifts-envelope-symbol" aria-hidden="true">💌</span>
        <p className="gifts-lead font-serif">
          «Tu presencia y bendición son el regalo más valioso en este día tan soñado.»
        </p>
        <p className="gifts-subtext font-sans">
          Si deseas tener un detalle con nosotros para nuestro nuevo hogar, contaremos con un baúl especial de lluvia de sobres el día de la boda.
        </p>
      </div>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

