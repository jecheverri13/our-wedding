import React from 'react';

export default function CoupleMoments() {
  return (
    <section className="editorial-flow-section couple-flow">
      {/* Versículo bíblico integrado directamente en la textura de papel */}
      <div className="artisan-verse-wrap">
        <span className="flow-eyebrow font-sans">NUESTRA PROMESA</span>
        <blockquote className="artisan-verse-text font-serif">
          «Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»
        </blockquote>
        <cite className="artisan-verse-ref font-sans">— PROVERBIOS 4:23 —</cite>
      </div>

      {/* Foto principal de compromiso con estilo fino posada sobre papel */}
      <div className="artisan-couple-gallery">
        <div className="artisan-main-photo-wrap">
          <div className="artisan-main-frame">
            <img
              src="/images/pareja-bn.jpg"
              alt="Junior y Kathe"
              className="artisan-main-img"
              loading="lazy"
            />
          </div>
          <div className="artisan-photo-subtext">
            <span className="photo-title font-serif">Y ahora, para siempre</span>
            <span className="photo-names font-script">Junior & Kathe</span>
          </div>
        </div>
      </div>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

