import React, { useState } from 'react';
import { MapPin, Navigation, Check, Copy } from 'lucide-react';

export default function EventDetails() {
  const [copied, setCopied] = useState(false);
  const locationUrl = "https://maps.app.goo.gl/ehoMAMQr2mDvgiFE6";
  const addressText = "Finca El Refugio, La Francia, Manizales, Caldas, Colombia";

  const handleCopy = () => {
    navigator.clipboard.writeText(addressText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="lugar" className="editorial-flow-section event-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">CEREMONIA Y RECEPCIÓN</span>
        <div className="event-cross-emblem" aria-hidden="true">
          <img
            src="/images/cruz-flores-terracota.png"
            alt="Cruz de madera con flores terracota en acuarela"
            className="event-cross-img"
            loading="lazy"
          />
        </div>
        <h2 className="event-venue-heading font-serif">El Refugio Casa de Eventos</h2>
      </div>

      {/* Datos limpios y directos sin repeticiones */}
      <div className="event-meta-clean reveal-on-scroll reveal-fade-up reveal-delay-100">
        <p className="event-address-highlight font-sans">
          La Francia • Manizales, Caldas
        </p>
      </div>

      {/* Botones de acción minimalistas */}
      <div className="event-action-buttons reveal-on-scroll reveal-fade-up reveal-delay-200">
        <a
          href={locationUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-paper-primary"
        >
          <Navigation size={16} />
          <span>Abrir en Google Maps</span>
        </a>

        <button
          type="button"
          onClick={handleCopy}
          className="btn-paper-subtle"
        >
          {copied ? (
            <>
              <Check size={16} color="#A84C2D" />
              <span>¡Dirección copiada!</span>
            </>
          ) : (
            <>
              <Copy size={16} />
              <span>Copiar dirección</span>
            </>
          )}
        </button>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-250">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

