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
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">CEREMONIA Y RECEPCIÓN</span>
        <h2 className="event-venue-heading font-serif">Finca El Refugio</h2>
        <p className="event-poetic-quote font-serif">
          «Un rincón rodeado de naturaleza y toda nuestra gente.»
        </p>
      </div>

      {/* Foto artística del lugar con marco sutil de papel */}
      <div className="event-venue-photo-wrap">
        <div className="event-venue-frame">
          <img
            src="/images/anillo-abrazo.jpg"
            alt="Finca El Refugio"
            className="event-venue-img"
            loading="lazy"
          />
        </div>
      </div>

      {/* Datos limpios y directos sin repeticiones */}
      <div className="event-meta-clean">
        <p className="event-date-highlight font-serif">
          Sábado 6 de Marzo de 2027 • 4:00 PM
        </p>
        <p className="event-address-highlight font-sans">
          La Francia • Manizales, Caldas
        </p>
      </div>

      {/* Botones de acción minimalistas */}
      <div className="event-action-buttons">
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

      {/* Itinerario Minimalista Vertical */}
      <div className="editorial-itinerary-wrap">
        <span className="itinerary-eyebrow font-sans">ITINERARIO</span>
        <div className="artisan-timeline">
          <div className="timeline-node">
            <span className="node-time font-serif">4:00 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Ceremonia</h4>
              <p className="node-desc font-sans">Bendición matrimonial</p>
            </div>
          </div>

          <div className="timeline-node">
            <span className="node-time font-serif">5:30 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Brindis & Fotos</h4>
              <p className="node-desc font-sans">Celebración al atardecer</p>
            </div>
          </div>

          <div className="timeline-node">
            <span className="node-time font-serif">6:30 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Cena Especial</h4>
              <p className="node-desc font-sans">Compartiendo juntos</p>
            </div>
          </div>

          <div className="timeline-node">
            <span className="node-time font-serif">8:00 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Fiesta</h4>
              <p className="node-desc font-sans">¡Música y baile!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

