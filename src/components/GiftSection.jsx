export default function GiftSection() {
  return (
    <section id="regalos" className="editorial-flow-section gifts-flow">
      {/* Encabezado editorial */}
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">MUESTRA DE CARIÑO</span>
        <h2 className="gifts-heading font-serif">Lluvia de Sobres</h2>
      </div>

      {/* Escenario artesanal hiperrealista: Sobre terracota abierto con flores de fondo */}
      <div className="gifts-envelope-scene reveal-on-scroll reveal-scale reveal-delay-100">
        <div className="terracotta-realistic-envelope">
          {/* 1. Flores y follaje botánico en acuarela en el fondo (referencia exacta) */}
          <div className="envelope-botanical-bg" aria-hidden="true">
            <img
              src="/images/flores-referencia-top-hd.png"
              alt=""
              className="botanical-foliage-top"
              loading="lazy"
            />
            <img
              src="/images/flores-referencia-bottom-hd.png"
              alt=""
              className="botanical-foliage-bottom"
              loading="lazy"
            />
          </div>

          {/* 2. Respaldo y solapa superior abierta del sobre terracota rugoso */}
          <div className="envelope-realistic-back" aria-hidden="true">
            <img
              src="/images/sobre-terracota-abierto-back.png"
              alt="Sobre terracota abierto"
              className="envelope-back-hd-img"
            />
          </div>

          {/* 3. Tarjeta de papel blanco artesanal con el mensaje saliendo del sobre */}
          <article className="gifts-white-paper">
            {/* Detalle botánico superior fino */}
            <div className="paper-botanical-accent" aria-hidden="true">
              <svg viewBox="0 0 120 24" fill="none" className="paper-sprig-svg">
                <path
                  d="M10 12C35 10 50 12 60 12C70 12 85 10 110 12"
                  stroke="#B89047"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  opacity="0.6"
                />
                <circle cx="60" cy="12" r="2.2" fill="#A84C2D" opacity="0.85" />
                <path
                  d="M60 4C58 8 56 10 52 12C56 14 58 16 60 20C62 16 64 14 68 12C64 10 62 8 60 4Z"
                  fill="#B89047"
                  opacity="0.65"
                />
              </svg>
            </div>

            {/* Frase poética / dedicatoria en el papel blanco */}
            <p className="gifts-card-lead font-serif">
              «Tu presencia y bendición son el regalo más valioso en este día tan soñado.»
            </p>

            {/* Separador fino dorado */}
            <div className="gifts-card-divider" aria-hidden="true">
              <span className="card-divider-line" />
              <span className="card-divider-symbol">✦</span>
              <span className="card-divider-line" />
            </div>

            {/* Texto informativo de la lluvia de sobres */}
            <p className="gifts-card-subtext font-serif">
              Si deseas tener un detalle con nosotros para nuestro nuevo hogar, contaremos con un baúl especial de lluvia de sobres el día de la boda.
            </p>
          </article>

          {/* 4. Bolsillo frontal del sobre terracota con pliegues realistas */}
          <div className="envelope-realistic-front" aria-hidden="true">
            <img
              src="/images/sobre-terracota-abierto-front.png"
              alt="Bolsillo frontal del sobre terracota"
              className="envelope-front-hd-img"
            />

            {/* Sello de cera dorado sobre el vértice central del sobre */}
            <div className="envelope-wax-seal">
              <img
                src="/images/sello-dorado-detallado-jk.png"
                alt="Sello de cera dorado J&K"
                className="seal-pocket-img"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Divisor decorativo */}
      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-200">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

