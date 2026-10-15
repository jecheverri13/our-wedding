import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-section">
      <div className="container text-center">
        <div className="footer-monogram font-script">
          J  & K
        </div>

        <h3 className="footer-names font-serif">
          Junior & Kathe
        </h3>

        <p className="footer-date">
          06 • 03 • 2027 • Finca El Refugio • Manizales, Caldas
        </p>

        <p className="footer-thanks font-serif">
          «Gracias por ser parte fundamental de nuestras vidas y de este día tan especial.»
        </p>

        <div className="footer-bottom">
          <button onClick={scrollToTop} className="btn-scroll-top" aria-label="Volver arriba">
            <ArrowUp size={18} />
            <span>Volver al inicio</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
