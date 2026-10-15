import React from 'react';
import { Sparkles } from 'lucide-react';

export default function DressCode() {
  const reservedColors = [
    { name: 'Blanco / Marfil', hex: '#FFFFFF', isLight: true },
    { name: 'Terracota Profundo', hex: '#8C381E' },
    { name: 'Terracota Cálido', hex: '#B8532F' },
    { name: 'Teja / Óxido', hex: '#D26743' },
  ];

  const suggestedColors = [
    { name: 'Verde Olivo', hex: '#606C38' },
    { name: 'Azul Marino', hex: '#1D2D44' },
    { name: 'Champaña / Nude', hex: '#DFCBB5' },
    { name: 'Gris Plomo', hex: '#495057' },
    { name: 'Verde Salvia', hex: '#87986A' },
    { name: 'Palo de Rosa', hex: '#C99E93' },
  ];

  return (
    <section className="section dresscode-canva-section">
      <div className="container">
        <div className="section-title-wrap">
          <span className="section-subtitle">CÓMO ACOMPAÑARNOS</span>
          <h2 className="section-title font-serif">Código de Vestimenta</h2>
          <div className="section-divider">
            <Sparkles size={16} className="divider-icon" />
          </div>
        </div>

        <div className="canva-card-envelope-inner dresscode-canva-wrap">
          <div className="canva-card-border dresscode-inner-card">
            <span className="canva-card-tag font-sans">ETIQUETA FORMAL</span>
            <h3 className="dresscode-title font-serif">Traje de Noche & Vestido Largo</h3>
            <p className="dresscode-lead font-serif">
              Queremos que luzcas espectacular y compartas con nosotros una velada de ensueño.
            </p>

            <div className="dresscode-guidelines-canva">
              <div className="guide-box">
                <span className="guide-role font-sans">DAMAS</span>
                <p className="guide-desc font-serif">Vestido largo de fiesta o gala en telas fluidas y elegantes.</p>
              </div>
              <div className="guide-line"></div>
              <div className="guide-box">
                <span className="guide-role font-sans">CABALLEROS</span>
                <p className="guide-desc font-serif">Traje formal oscuro, camisa de cuello y corbata.</p>
              </div>
            </div>

            {/* Cuadro de advertencia elegante de colores reservados */}
            <div className="reserved-canva-box">
              <span className="reserved-badge font-sans">RESERVA DE COLOR EXCLUSIVA</span>
              <h4 className="reserved-title font-serif">Blanco y Terracota para los Novios</h4>
              <p className="reserved-text font-serif">
                Con mucho cariño, les solicitamos que los colores <strong>blanco</strong> y la gama de tonos <strong>terracota</strong> queden reservados exclusivamente para Junior y Kathe.
              </p>

              <div className="swatches-canva-group">
                <span className="swatches-canva-title font-sans">COLORES RESERVADOS:</span>
                <div className="swatches-canva-flex">
                  {reservedColors.map((color, idx) => (
                    <div key={idx} className="swatch-canva-pill">
                      <div
                        className={`swatch-circle-canva ${color.isLight ? 'border-light' : ''}`}
                        style={{ backgroundColor: color.hex }}
                      >
                        <span className="swatch-cross">✕</span>
                      </div>
                      <span className="swatch-pill-label font-sans">{color.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Paleta sugerida para invitados */}
            <div className="suggested-canva-box">
              <span className="swatches-canva-title font-sans">PALETA SUGERIDA DE INSPIRACIÓN:</span>
              <div className="swatches-canva-flex">
                {suggestedColors.map((color, idx) => (
                  <div key={idx} className="swatch-canva-pill">
                    <div
                      className="swatch-circle-canva suggested-circle-canva"
                      style={{ backgroundColor: color.hex }}
                    ></div>
                    <span className="swatch-pill-label font-sans">{color.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
