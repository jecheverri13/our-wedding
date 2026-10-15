import React, { useState } from 'react';
import { MapPin, Clock, Calendar, Navigation, Check, Copy } from 'lucide-react';

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
    <section id="lugar" className="section event-details-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">¿DÓNDE & CUÁNDO?</span>
          <h2 className="section-title font-serif">Lugar & Celebración</h2>
          <div className="section-divider">
            <MapPin size={16} className="divider-icon" />
          </div>
        </div>

        <div className="canva-event-grid">
          {/* Tarjeta de Ceremonia y Recepción */}
          <div className="canva-card-envelope-inner">
            <div className="canva-card-border event-card-border">
              <div className="event-icon-circle-canva">
                <MapPin size={24} />
              </div>

              <span className="canva-card-tag font-sans">CEREMONIA & RECEPCIÓN</span>
              <h3 className="event-venue-title font-serif">Finca El Refugio</h3>
              <p className="event-venue-subtitle font-sans">LA FRANCIA • MANIZALES, CALDAS</p>

              <div className="event-badges-row">
                <div className="canva-info-pill">
                  <Calendar size={14} />
                  <span>Sábado, 6 de Marzo de 2027</span>
                </div>
                <div className="canva-info-pill">
                  <Clock size={14} />
                  <span>4:00 PM (Hora puntual)</span>
                </div>
              </div>

              <p className="event-description-text font-serif">
                Un hermoso entorno campestre donde daremos el «Sí, acepto» y celebraremos junto a quienes más amamos.
              </p>

              <div className="event-button-group">
                <a
                  href={locationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full-mobile"
                >
                  <Navigation size={17} />
                  <span>Abrir en Google Maps</span>
                </a>

                <button
                  type="button"
                  onClick={handleCopy}
                  className="btn-secondary w-full-mobile"
                >
                  {copied ? (
                    <>
                      <Check size={16} color="#B25332" />
                      <span>¡Dirección Copiada!</span>
                    </>
                  ) : (
                    <>
                      <Copy size={16} />
                      <span>Copiar Dirección</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Tarjeta de Itinerario */}
          <div className="canva-card-envelope-inner">
            <div className="canva-card-border itinerary-card-border">
              <span className="canva-card-tag font-sans">CRONOGRAMA</span>
              <h3 className="itinerary-heading font-serif">Itinerario del Día</h3>

              <div className="canva-timeline">
                <div className="timeline-canva-item">
                  <span className="timeline-canva-time font-sans">4:00 PM</span>
                  <div className="timeline-canva-dot"></div>
                  <div className="timeline-canva-info">
                    <h4 className="timeline-canva-title font-serif">Ceremonia Nupcial</h4>
                    <p className="timeline-canva-desc">Nuestra unión y bendición matrimonial.</p>
                  </div>
                </div>

                <div className="timeline-canva-item">
                  <span className="timeline-canva-time font-sans">5:30 PM</span>
                  <div className="timeline-canva-dot"></div>
                  <div className="timeline-canva-info">
                    <h4 className="timeline-canva-title font-serif">Coctel & Fotos</h4>
                    <p className="timeline-canva-desc">Brindis al atardecer y fotos con invitados.</p>
                  </div>
                </div>

                <div className="timeline-canva-item">
                  <span className="timeline-canva-time font-sans">6:30 PM</span>
                  <div className="timeline-canva-dot"></div>
                  <div className="timeline-canva-info">
                    <h4 className="timeline-canva-title font-serif">Cena & Brindis</h4>
                    <p className="timeline-canva-desc">Compartiremos un menú especial juntos.</p>
                  </div>
                </div>

                <div className="timeline-canva-item">
                  <span className="timeline-canva-time font-sans">8:00 PM</span>
                  <div className="timeline-canva-dot"></div>
                  <div className="timeline-canva-info">
                    <h4 className="timeline-canva-title font-serif">Fiesta & Celebración</h4>
                    <p className="timeline-canva-desc">¡Música, baile y alegría para celebrar!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
