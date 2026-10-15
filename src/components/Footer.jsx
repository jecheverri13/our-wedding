import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="artisan-footer">
      <div className="footer-monogram font-serif">J & K</div>
      <p className="footer-closing-quote font-serif">
        «Con todo nuestro amor, los esperamos para celebrar juntos.»
      </p>

      <div className="footer-action-wrap">
        <button onClick={scrollToTop} className="btn-scroll-top font-sans" aria-label="Volver al inicio">
          <ArrowUp size={14} />
          <span>Volver al inicio</span>
        </button>
      </div>
    </footer>
  );
}

