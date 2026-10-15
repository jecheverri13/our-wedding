import React from 'react';
import { Heart, Sparkles } from 'lucide-react';

export default function CoupleMoments() {
  return (
    <section className="section couple-story-canva-section">
      <div className="container">
        {/* Tarjeta del Versículo */}
        <div className="canva-card-envelope-inner verse-canva-wrap">
          <div className="canva-card-border verse-border">
            <span className="canva-card-tag font-sans">NUESTRA PROMESA</span>
            
            <p className="verse-canva-text font-serif">
              «Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»
            </p>
            <span className="verse-canva-ref font-sans">
              — PROVERBIOS 4:23 —
            </span>

            <div className="canva-divider-ornament">
              <span className="ornament-line"></span>
              <Heart size={14} fill="#B25332" stroke="none" />
              <span className="ornament-line"></span>
            </div>

            <p className="couple-story-lead font-serif">
              Hoy, convertidos en el hombre y la mujer que Dios soñó, nos miramos a los ojos sabiendo que encontramos a nuestro compañero de vida.
            </p>
          </div>
        </div>

        {/* Galería de adultos: las fotos de compromiso */}
        <div className="adult-moments-canva-grid">
          {/* Foto Principal en Blanco y Negro */}
          <div className="adult-photo-card card-bw">
            <div className="adult-arch-wrapper">
              <img
                src="/images/pareja-bn.jpg"
                alt="Junior y Kathe juntos"
                className="adult-arch-img"
              />
            </div>
            <div className="adult-photo-caption">
              <h3 className="adult-caption-title font-serif">Caminando en la misma dirección</h3>
              <p className="adult-caption-text">Un amor que se fortalece día a día con respeto y fe.</p>
            </div>
          </div>

          {/* Foto del Beso y Anillo */}
          <div className="adult-photo-card card-ring">
            <div className="adult-arch-wrapper">
              <img
                src="/images/anillo-beso.jpg"
                alt="Beso y promesa de compromiso"
                className="adult-arch-img"
              />
            </div>
            <div className="adult-photo-caption">
              <h3 className="adult-caption-title font-serif">Un Sí para toda la vida</h3>
              <p className="adult-caption-text">El comienzo formal de nuestro mayor sueño juntos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
