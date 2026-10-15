import React from 'react';

export default function DressCode() {
  const suggestedColors = [
    { name: 'Azul Marino', hex: '#1C2D42' },
    { name: 'Verde Salvia', hex: '#87977A' },
    { name: 'Champaña', hex: '#E2D1B8' },
    { name: 'Rosa Palo', hex: '#D6A69A' },
    { name: 'Verde Olivo', hex: '#586443' },
    { name: 'Gris Plomo', hex: '#50565E' },
  ];

  return (
    <section className="editorial-flow-section dresscode-flow">
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">CÓDIGO DE VESTIMENTA</span>
        <h2 className="dresscode-heading font-serif">Traje Formal & Gala</h2>
      </div>

      {/* Ilustraciones elegantes de Traje y Vestido inspiradas en el reel */}
      <div className="dresscode-attire-duo">
        {/* Traje Caballeros */}
        <div className="attire-card">
          <div className="attire-icon-illustration">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="attire-svg">
              {/* Cuello y corbata / moño */}
              <path d="M42 22L50 35L58 22H42Z" fill="#1C2D42" />
              <path d="M48 35L50 55L52 35H48Z" fill="#A84C2D" />
              {/* Solapas de saco */}
              <path d="M30 20L45 58L25 110H16L22 30L30 20Z" fill="#2C3A4C" />
              <path d="M70 20L55 58L75 110H84L78 30L70 20Z" fill="#2C3A4C" />
              {/* Cuerpo del saco */}
              <path d="M45 58L50 68L55 58L75 110H25L45 58Z" fill="#1F2A38" />
              {/* Camisa blanca interior */}
              <path d="M42 20L50 34L58 20H42Z" fill="#FFFDF9" />
            </svg>
          </div>
          <span className="attire-label font-script">Ellos</span>
          <p className="attire-spec font-sans">TRAJE OSCURO O ESMOQUIN</p>
        </div>

        {/* Separador sutil */}
        <div className="attire-divider-dot">✦</div>

        {/* Vestido Damas */}
        <div className="attire-card">
          <div className="attire-icon-illustration">
            <svg viewBox="0 0 100 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="attire-svg">
              {/* Vestido fluido de gala */}
              <path d="M42 20C42 20 46 36 38 46C46 48 54 48 62 46C54 36 58 20 58 20C54 26 46 26 42 20Z" fill="#8FA6B8" />
              <path d="M38 46C34 68 20 105 18 112C28 115 72 115 82 112C80 105 66 68 62 46C54 48 46 48 38 46Z" fill="#9FB5C6" />
              {/* Pliegues de caída suave */}
              <path d="M42 48C45 75 42 108 40 114" stroke="#879FB2" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M50 48C50 78 51 108 50 114" stroke="#879FB2" strokeWidth="1.2" strokeLinecap="round" />
              <path d="M58 48C55 75 58 108 60 114" stroke="#879FB2" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
          <span className="attire-label font-script">Ellas</span>
          <p className="attire-spec font-sans">VESTIDO LARGO O MIDI DE GALA</p>
        </div>
      </div>

      {/* Paleta sugerida estilo acuarela del reel */}
      <div className="dresscode-palette-clean">
        <span className="palette-title font-serif">Tonos que nos encantarían:</span>
        <div className="palette-swatches-row">
          {suggestedColors.map((color, idx) => (
            <div key={idx} className="palette-swatch-item">
              <span
                className="palette-color-circle"
                style={{ backgroundColor: color.hex }}
              />
              <span className="palette-color-name font-sans">{color.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Frase ligera y simpática (como en el reel) */}
      <p className="dresscode-friendly-note font-serif">
        «Telas ligeras y zapatos con ganas de bailar. Con mucho amor, el blanco y los tonos terracota quedan reservados para los novios 🤍»
      </p>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

