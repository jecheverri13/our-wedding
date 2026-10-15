import React from 'react';

export default function ChildhoodSection() {
  return (
    <section id="historia" className="editorial-flow-section childhood-flow">
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">NUESTRAS RAÍCES</span>
        <h2 className="flow-heading font-serif">
          «Primero fuimos dos niños llenos de risas y sueños...»
        </h2>
      </div>

      {/* Díptico fotográfico estilo fotos impresas sobre papel */}
      <div className="artisan-kids-duo">
        {/* Kathe de niña */}
        <div className="artisan-photo-item tilt-left">
          <div className="artisan-photo-frame">
            <img
              src="/images/kathe-nina.jpg"
              alt="Kathe de niña"
              className="artisan-photo-img"
              loading="lazy"
            />
          </div>
          <span className="artisan-photo-caption font-script">Kathe</span>
        </div>

        {/* Separador romántico mínimo */}
        <div className="artisan-connector">
          <span className="connector-amp font-script">&</span>
        </div>

        {/* Junior de niño */}
        <div className="artisan-photo-item tilt-right">
          <div className="artisan-photo-frame">
            <img
              src="/images/junior-nino.jpg"
              alt="Junior de niño"
              className="artisan-photo-img"
              loading="lazy"
            />
          </div>
          <span className="artisan-photo-caption font-script">Junior</span>
        </div>
      </div>

      <p className="flow-transition-text font-serif">
        ...y en el tiempo perfecto, Dios preparó nuestros caminos para unirse para siempre.
      </p>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

