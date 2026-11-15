import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="artisan-footer">
      <div className="footer-monogram font-serif reveal-on-scroll reveal-fade-up">J & K</div>
      <blockquote className="footer-closing-quote font-serif reveal-on-scroll reveal-fade-up reveal-delay-150">
        «Y si alguno prevaleciere contra uno, dos le resistirán; y cordón de tres dobleces no se rompe pronto.»
      </blockquote>
      <cite className="footer-verse-ref font-sans reveal-on-scroll reveal-fade-up reveal-delay-150">
        — ECLESIASTÉS 4:12 —
      </cite>

      <div className="footer-action-wrap reveal-on-scroll reveal-fade-up reveal-delay-250">
        <button onClick={scrollToTop} className="btn-scroll-top font-sans" aria-label="Volver al inicio">
          <ArrowUp size={14} />
          <span>Volver al inicio</span>
        </button>
      </div>
    </footer>
  );
}

