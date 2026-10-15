import React from 'react';
import { Mail, Heart } from 'lucide-react';

export default function GiftSection() {
  return (
    <section className="section gifts-canva-section">
      <div className="container-narrow">
        <div className="canva-card-envelope-inner">
          <div className="canva-card-border gifts-inner-border">
            <div className="gifts-stamp-badge">
              <Mail size={28} />
            </div>

            <span className="canva-card-tag font-sans">MUESTRA DE CARIÑO</span>
            <h2 className="gifts-title font-serif">Lluvia de Sobres</h2>

            <div className="canva-divider-ornament">
              <span className="ornament-line"></span>
              <Heart size={14} fill="#B25332" stroke="none" />
              <span className="ornament-line"></span>
            </div>

            <p className="gifts-quote font-serif">
              «Tu presencia, tus risas y tu bendición son el regalo más valioso que podemos recibir en este día tan soñado.»
            </p>

            <div className="gifts-envelope-box">
              <span className="envelope-icon-emoji">💌</span>
              <p className="envelope-box-text font-serif">
                Si deseas tener un detalle adicional con nosotros para nuestro nuevo hogar, contaremos con un baúl especial de <strong>Lluvia de Sobres</strong> en el salón de recepción.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
