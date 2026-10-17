import React from 'react';

export default function CoupleMoments() {
  return (
    <section id="promesa" className="editorial-flow-section couple-flow">

      {/* Versículo bíblico integrado directamente en la textura de papel */}
      <div className="artisan-verse-wrap reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">NUESTRA PROMESA</span>
        <blockquote className="artisan-verse-text font-serif">
          «Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»
        </blockquote>
        <cite className="flow-eyebrow font-sans">— PROVERBIOS 4:23 —</cite>
      </div>

      {/* Foto principal de compromiso con estilo fino posada sobre papel */}
      <div className="artisan-couple-gallery">
        <div className="artisan-main-photo-wrap reveal-on-scroll reveal-scale reveal-delay-150">
          <div className="artisan-main-frame">
            <img
              src="/images/pareja-bn.jpg"
              alt="Junior y Kathe"
              className="artisan-main-img"
              loading="lazy"
            />
          </div>
          <div className="artisan-photo-subtext reveal-on-scroll reveal-fade-up reveal-delay-250">
            <span className="photo-title font-serif">Entendimos que no había mejor lugar para guardar nuestro corazón que en Dios. Cuando Él llena nuestra vida por completo, determina el rumbo de nuestro camino. Fue justamente guardar nuestro corazón en Él lo que nos reunió para hacer realidad su sueño en nosotros: la familia Echeverri Saldarriaga.</span>
          </div>
        </div>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-300">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

