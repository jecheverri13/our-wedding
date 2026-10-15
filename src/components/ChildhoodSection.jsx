import React from 'react';
import { Heart } from 'lucide-react';

export default function ChildhoodSection() {
  return (
    <section id="historia" className="section childhood-canva-section">
      <div className="container">
        <div className="canva-card-envelope-inner">
          <div className="canva-card-border">
            <span className="canva-card-tag font-sans">NUESTRAS RAÍCES</span>
            
            <h2 className="canva-headline font-serif">
              «Estos niños se casan y quieren que los acompañes»
            </h2>
            
            <div className="canva-divider-ornament">
              <span className="ornament-line"></span>
              <Heart size={15} fill="#B25332" stroke="none" />
              <span className="ornament-line"></span>
            </div>

            <p className="canva-sub-quote font-serif">
              Dos infancias llenas de risas y sueños que Dios preparó con amor para caminar juntos.
            </p>

            {/* Grid 2 Columnas Móvil: Díptico perfecto para ver a ambos en pantalla */}
            <div className="canva-kids-duo-grid">
              {/* Kathe de niña */}
              <div className="kid-arch-card">
                <div className="arch-frame">
                  <div className="arch-inner-border">
                    <img
                      src="/images/kathe-nina.jpg"
                      alt="Kathe de niña"
                      className="arch-img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="kid-label">
                  <span className="kid-name font-script">Kathe</span>
                  <span className="kid-role font-sans">La Novia</span>
                </div>
              </div>

              {/* Insignia central flotante */}
              <div className="kids-center-connector">
                <div className="connector-circle-pulse">
                  <Heart size={18} fill="#B25332" stroke="none" />
                </div>
              </div>

              {/* Junior de niño */}
              <div className="kid-arch-card">
                <div className="arch-frame">
                  <div className="arch-inner-border">
                    <img
                      src="/images/junior-nino.jpg"
                      alt="Junior de niño"
                      className="arch-img"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="kid-label">
                  <span className="kid-name font-script">Junior</span>
                  <span className="kid-role font-sans">El Novio</span>
                </div>
              </div>
            </div>

            <div className="canva-story-transition">
              <p className="transition-text font-serif">
                Aquel niño y aquella niña crecieron, y en el tiempo perfecto de Dios, unieron sus corazones para siempre...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
