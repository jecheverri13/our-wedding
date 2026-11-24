import React from 'react';

const RESERVED_COLORS = [
  { name: 'blanco', left: '13.2%', top: '32.5%', dark: false },
  { name: 'terracota', left: '16.5%', top: '66.5%', dark: false },
  { name: 'arena', left: '26%', top: '51%', dark: false },
  { name: 'rojo', left: '29%', top: '75.5%', dark: true },
  { name: 'marfil', left: '38%', top: '60%', dark: false },
  { name: 'hueso', left: '49.5%', top: '60.5%', dark: false },
  { name: 'coral', left: '60.5%', top: '56.5%', dark: false },
  { name: 'marrón', left: '74%', top: '51%', dark: true },
  { name: 'teja', left: '69.5%', top: '77%', dark: true },
  { name: 'mostaza', left: '84.5%', top: '65%', dark: false },
  { name: 'naranja', left: '88%', top: '27.5%', dark: false },
];

export default function DressCode() {
  return (
    <section id="vestimenta" className="editorial-flow-section dresscode-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">CÓDIGO DE VESTIMENTA</span>
        <h2 className="dresscode-heading font-serif">Atuendo Formal</h2>
      </div>

      {/* Detalle elegante de Traje Formal */}
      <div className="dresscode-formal-container reveal-on-scroll reveal-scale reveal-delay-100">
        {/* Ilustración artesanal en acuarela de los novios en atuendo formal */}
        <div className="dresscode-couple-illustration-wrap">
          <img
            src="/images/novios-atuendo-formal.png?v=2"
            alt="Ilustración de los novios en atuendo formal"
            className="dresscode-couple-illustration"
            loading="lazy"
          />
        </div>
      </div>

      {/* Reserva exclusiva de colores para los novios (Guirnalda en acuarela + Tailwind) */}
      <div
        className="reveal-on-scroll reveal-fade-up reveal-delay-200 relative mx-auto mt-5 w-full max-w-[540px] select-none"
        aria-label="Los novios se reservan los colores: blanco, arena, terracota, rojo, marfil, hueso, coral, marrón, teja, mostaza y naranja"
      >
        <div className="relative w-full aspect-[16/9]">
          {/* Título centrado en el espacio superior despejado */}
          <div className="pointer-events-none absolute top-[18%] left-1/2 z-20 w-[62%] -translate-x-1/2 text-center">
            <p className="font-sans text-[clamp(0.58rem,2.3vw,0.82rem)] font-medium uppercase leading-[1.45] tracking-[0.18em] text-[#8C4A33]">
              LOS NOVIOS SE RESERVAN LOS
              <br />
              COLORES:
            </p>
          </div>

          {/* Ilustración botánica en acuarela con fondo transparente sobre el papel artesanal */}
          <img
            src="/images/hojas-colores-reservados.png"
            alt=""
            aria-hidden="true"
            loading="lazy"
            className="pointer-events-none relative z-10 h-full w-full object-contain"
          />

          {/* Etiquetas caligráficas centradas sobre cada hoja */}
          <ul className="pointer-events-none absolute inset-0 z-20 list-none">
            {RESERVED_COLORS.map((color) => (
              <li
                key={color.name}
                style={{ left: color.left, top: color.top }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
              >
                <span
                  className={[
                    'block whitespace-nowrap font-serif italic font-semibold leading-none tracking-[0.01em]',
                    'text-[clamp(0.72rem,2.9vw,1.08rem)]',
                    color.dark
                      ? 'text-[#1E1410] [text-shadow:0_0_6px_rgba(255,253,249,0.55)]'
                      : 'text-[#2C221E] [text-shadow:0_1px_2px_rgba(255,253,249,0.6)]',
                  ].join(' ')}
                >
                  {color.name}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-300">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}
