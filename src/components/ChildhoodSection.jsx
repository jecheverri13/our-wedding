import React from 'react';

export default function ChildhoodSection() {
  return (
    <section id="historia" className="editorial-flow-section childhood-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">UN SUEÑO QUE INICIÓ EN EL CORAZÓN DE DOS PEQUEÑOS</span>
      </div>

      {/* Díptico fotográfico estilo fotos impresas sobre papel */}
      <div className="artisan-kids-duo">
        {/* Kathe de niña */}
        <div className="artisan-photo-item tilt-left reveal-on-scroll reveal-tilt-left reveal-delay-100">
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
        <div className="artisan-connector reveal-on-scroll reveal-scale reveal-delay-200">
          <span className="connector-amp font-script">&</span>
        </div>

        {/* Junior de niño */}
        <div className="artisan-photo-item tilt-right reveal-on-scroll reveal-tilt-right reveal-delay-300">
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

      <p className="flow-transition-text font-serif reveal-on-scroll reveal-fade-up reveal-delay-400">
        ... y hoy con la bendición de Dios y el amor de nuestras familias queremos dar el Sí rodeados de quienes más queremos.
      </p>

      <p className="flow-transition-text font-serif reveal-on-scroll reveal-fade-up reveal-delay-500">
        Nos hará muy felices que nos acompañes en este momento tan especial
      </p>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-600">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

