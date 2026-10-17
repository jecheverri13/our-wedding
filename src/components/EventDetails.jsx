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
      {/* Itinerario Minimalista Vertical */}
      <div className="editorial-itinerary-wrap">
        <span className="itinerary-eyebrow font-sans reveal-on-scroll reveal-fade-up reveal-delay-100">ITINERARIO</span>
        <div className="artisan-timeline">
          <div className="timeline-node reveal-on-scroll reveal-fade-left reveal-delay-150">
            <span className="node-time font-serif">4:00 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Ceremonia</h4>
              <p className="node-desc font-sans">Bendición matrimonial</p>
            </div>
          </div>

          <div className="timeline-node reveal-on-scroll reveal-fade-left reveal-delay-250">
            <span className="node-time font-serif">5:30 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Brindis & Fotos</h4>
              <p className="node-desc font-sans">Celebración al atardecer</p>
            </div>
          </div>

          <div className="timeline-node reveal-on-scroll reveal-fade-left reveal-delay-350">
            <span className="node-time font-serif">6:30 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">Cena Especial</h4>
              <p className="node-desc font-sans">Compartiendo juntos</p>
            </div>
          </div>

          <div className="timeline-node reveal-on-scroll reveal-fade-left reveal-delay-450">
            <span className="node-time font-serif">8:00 PM</span>
            <div className="node-bullet"></div>
            <div className="node-content">
              <h4 className="node-title font-serif">A Divertirnos</h4>
              <p className="node-desc font-sans">¡Volvamos a ser niños!</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-500">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

