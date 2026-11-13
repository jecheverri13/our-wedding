import React, { useState, useEffect, useCallback, useRef } from 'react';

const PEEK_MODES = ['left', 'right', 'top'];

export default function MiniSpiderman({ isActive = false }) {
  const [peekState, setPeekState] = useState({
    visible: false,
    scared: false,
    mode: 'right', // 'left' | 'right' | 'top'
    offsetPercent: 35, // top% para left/right, left% para top
    key: 0,
  });

  const timersRef = useRef([]);

  const clearAllTimers = useCallback(() => {
    timersRef.current.forEach((id) => clearTimeout(id));
    timersRef.current = [];
  }, []);

  const scheduleNextPeek = useCallback(
    (delayMs) => {
      clearAllTimers();
      const spawnTimer = setTimeout(() => {
        const randomMode = PEEK_MODES[Math.floor(Math.random() * PEEK_MODES.length)];
        // Posición aleatoria segura lejos de las esquinas extremas y del botón de audio
        const minOffset = randomMode === 'top' ? 18 : 18;
        const maxOffset = randomMode === 'top' ? 82 : 72;
        const randomOffset = Math.floor(
          minOffset + Math.random() * (maxOffset - minOffset)
        );

        setPeekState((prev) => ({
          visible: true,
          scared: false,
          mode: randomMode,
          offsetPercent: randomOffset,
          key: prev.key + 1,
        }));

        // Duración total de la animación (asomarse -> mirar -> esconderse)
        const hideTimer = setTimeout(() => {
          setPeekState((prev) => ({ ...prev, visible: false, scared: false }));
          // Próxima aparición aleatoria entre 15 y 22 segundos
          const nextDelay = 15000 + Math.floor(Math.random() * 7000);
          scheduleNextPeek(nextDelay);
        }, 5600);

        timersRef.current.push(hideTimer);
      }, delayMs);

      timersRef.current.push(spawnTimer);
    },
    [clearAllTimers]
  );

  useEffect(() => {
    if (!isActive) {
      clearAllTimers();
      setPeekState((prev) => ({ ...prev, visible: false, scared: false }));
      return;
    }

    // Primera aparición unos segundos después de abrir el sobre
    scheduleNextPeek(3500);

    return () => clearAllTimers();
  }, [isActive, scheduleNextPeek, clearAllTimers]);

  // Si el invitado toca al mini Spider-Man, activa su sentido arácnido y se esconde rápido
  const handlePokeSpiderman = () => {
    if (!peekState.visible || peekState.scared) return;
    clearAllTimers();
    setPeekState((prev) => ({ ...prev, scared: true }));

    const quickHide = setTimeout(() => {
      setPeekState((prev) => ({ ...prev, visible: false, scared: false }));
      scheduleNextPeek(8500 + Math.floor(Math.random() * 6000));
    }, 550);

    timersRef.current.push(quickHide);
  };

  if (!peekState.visible) return null;

  const positionStyle =
    peekState.mode === 'top'
      ? { left: `${peekState.offsetPercent}%`, top: 0 }
      : peekState.mode === 'left'
        ? { top: `${peekState.offsetPercent}%`, left: 0 }
        : { top: `${peekState.offsetPercent}%`, right: 0 };

  return (
    <div className="mini-spidey-viewport" aria-hidden="true">
      <div
        key={peekState.key}
        className={`mini-spidey-stage mode-${peekState.mode} ${peekState.scared ? 'is-scared' : ''
          }`}
        style={positionStyle}
        onClick={handlePokeSpiderman}
        role="presentation"
        title="¡Sentido arácnido!"
      >
        <div className="mini-spidey-mover">
          {/* Hilo de telaraña cuando se descuelga desde arriba */}
          {peekState.mode === 'top' && (
            <div className="spidey-web-thread" aria-hidden="true" />
          )}

          {/* Destello de Sentido Arácnido (al asomarse o si lo tocan) */}
          <svg
            className="spidey-sense-tingle"
            viewBox="0 0 120 60"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M18 42 L6 34 L14 28 L4 18"
              stroke="#E53935"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M32 24 L25 11 L35 9 L30 2"
              stroke="#FFB300"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M88 24 L95 11 L85 9 L90 2"
              stroke="#FFB300"
              strokeWidth="2.3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M102 42 L114 34 L106 28 L116 18"
              stroke="#E53935"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          {/* Ilustración SVG Mini Spider-Man Chibi (Cuerpo completo con pies/botas) */}
          <svg
            className="mini-spidey-svg"
            viewBox="0 0 120 156"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="Mini Spider-Man asomándose"
          >
            <defs>
              <radialGradient id="spideyHeadGrad" cx="42%" cy="35%" r="65%">
                <stop offset="0%" stopColor="#F03237" />
                <stop offset="65%" stopColor="#D31B22" />
                <stop offset="100%" stopColor="#9B0F15" />
              </radialGradient>
              <linearGradient id="spideySuitBlue" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E56A0" />
                <stop offset="100%" stopColor="#113264" />
              </linearGradient>
              <filter id="spideySoftShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="3" stdDeviation="3" floodColor="#1E0C06" floodOpacity="0.28" />
              </filter>
            </defs>

            <g filter="url(#spideySoftShadow)">
              {/* Piernas y Botas/Pies de Spider-Man */}
              <g className="spidey-legs-group">
                {/* Nudito de telaraña en los pies cuando cuelga */}
                <ellipse
                  cx="60"
                  cy="148"
                  rx="9"
                  ry="3.5"
                  fill="#F2F2F2"
                  stroke="#BDBDBD"
                  strokeWidth="1.2"
                />

                {/* Muslo / Pierna izquierda azul */}
                <path
                  d="M42 114 C35 121, 35 131, 42 136 L56 135 C55 128, 55 121, 58 115 Z"
                  fill="url(#spideySuitBlue)"
                  stroke="#181818"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                />

                {/* Muslo / Pierna derecha azul */}
                <path
                  d="M78 114 C85 121, 85 131, 78 136 L64 135 C65 128, 65 121, 62 115 Z"
                  fill="url(#spideySuitBlue)"
                  stroke="#181818"
                  strokeWidth="2.6"
                  strokeLinejoin="round"
                />

                {/* Bota / Pie izquierdo rojo */}
                <g className="spidey-foot-left">
                  <path
                    d="M41 131 L56 131 L58 145 C58 151, 35 152, 34 144 C33 138, 38 134, 41 131 Z"
                    fill="url(#spideyHeadGrad)"
                    stroke="#181818"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  {/* Detalle de telaraña en la bota izquierda */}
                  <path
                    d="M38 139 Q47 142 56 138 M47 131 L45 149"
                    stroke="#181818"
                    strokeWidth="1.3"
                    strokeOpacity="0.65"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>

                {/* Bota / Pie derecho rojo */}
                <g className="spidey-foot-right">
                  <path
                    d="M79 131 L64 131 L62 145 C62 151, 85 152, 86 144 C87 138, 82 134, 79 131 Z"
                    fill="url(#spideyHeadGrad)"
                    stroke="#181818"
                    strokeWidth="2.6"
                    strokeLinejoin="round"
                  />
                  {/* Detalle de telaraña en la bota derecha */}
                  <path
                    d="M82 139 Q73 142 64 138 M73 131 L75 149"
                    stroke="#181818"
                    strokeWidth="1.3"
                    strokeOpacity="0.65"
                    fill="none"
                    strokeLinecap="round"
                  />
                </g>
              </g>

              {/* Cuerpo / Torso Chibi */}
              <g className="spidey-body-group">
                {/* Hombros y laterales azules */}
                <path
                  d="M36 86 C32 98, 34 114, 42 120 L78 120 C86 114, 88 98, 84 86 Z"
                  fill="url(#spideySuitBlue)"
                  stroke="#181818"
                  strokeWidth="2.8"
                  strokeLinejoin="round"
                />
                {/* Pecho central rojo */}
                <path
                  d="M44 84 C44 98, 48 112, 60 118 C72 112, 76 98, 76 84 Z"
                  fill="url(#spideyHeadGrad)"
                  stroke="#181818"
                  strokeWidth="2.4"
                />
                {/* Líneas de telaraña en el pecho */}
                <path
                  d="M60 85 L60 116 M46 95 Q60 99 74 95 M49 106 Q60 109 71 106"
                  stroke="#1A1A1A"
                  strokeWidth="1.2"
                  strokeOpacity="0.55"
                  fill="none"
                />
                {/* Arañita del pecho */}
                <g transform="translate(60, 99)">
                  <ellipse cx="0" cy="-2" rx="2.4" ry="2" fill="#141414" />
                  <ellipse cx="0" cy="2.2" rx="3.2" ry="3.6" fill="#141414" />
                  <path
                    d="M-2 -1 L-7 -5 M-2.5 1 L-8 1 M-2.5 3 L-7 6 M2 -1 L7 -5 M2.5 1 L8 1 M2.5 3 L7 6"
                    stroke="#141414"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </g>
              </g>

              {/* Cabeza Chibi (Se inclina y mira con curiosidad) */}
              <g className="spidey-head-group">
                {/* Forma base de la cabeza / máscara */}
                <path
                  d="M60 14
                   C31 14, 18 33, 20 57
                   C22 76, 39 91, 60 91
                   C81 91, 98 76, 100 57
                   C102 33, 89 14, 60 14 Z"
                  fill="url(#spideyHeadGrad)"
                  stroke="#181818"
                  strokeWidth="3"
                />

                {/* Brillo suave superior en la máscara */}
                <ellipse
                  cx="47"
                  cy="27"
                  rx="16"
                  ry="7"
                  transform="rotate(-14 47 27)"
                  fill="#FFFFFF"
                  fillOpacity="0.18"
                />

                {/* Telarañas radiales de la máscara */}
                <g
                  stroke="#181818"
                  strokeWidth="1.35"
                  strokeOpacity="0.55"
                  fill="none"
                  strokeLinecap="round"
                >
                  {/* Ejes radiales desde el entrecejo (60, 56) */}
                  <path d="M60 56 L60 14" />
                  <path d="M60 56 L35 20" />
                  <path d="M60 56 L85 20" />
                  <path d="M60 56 L21 43" />
                  <path d="M60 56 L99 43" />
                  <path d="M60 56 L24 71" />
                  <path d="M60 56 L96 71" />
                  <path d="M60 56 L43 88" />
                  <path d="M60 56 L77 88" />
                  <path d="M60 56 L60 91" />

                  {/* Arcos concéntricos de la telaraña */}
                  <path d="M48 39 Q60 44 72 39" />
                  <path d="M38 25 Q60 33 82 25" />
                  <path d="M26 45 Q36 36 48 39" />
                  <path d="M94 45 Q84 36 72 39" />
                  <path d="M47 73 Q60 69 73 73" />
                  <path d="M43 85 Q60 80 77 85" />
                </g>

                {/* Ojo Izquierdo Expresivo */}
                <g className="spidey-eye spidey-eye-left">
                  <path
                    d="M27 45 C29 63, 45 68, 55 59 C56 48, 42 38, 27 45 Z"
                    fill="#141414"
                  />
                  <path
                    className="spidey-eye-lens"
                    d="M31 48 C33 60, 44 63, 52 57 C52 49, 42 42, 31 48 Z"
                    fill="#FFFFFF"
                  />
                  <circle cx="38" cy="51" r="2.2" fill="#FFFFFF" opacity="0.9" />
                </g>

                {/* Ojo Derecho Expresivo */}
                <g className="spidey-eye spidey-eye-right">
                  <path
                    d="M93 45 C91 63, 75 68, 65 59 C64 48, 78 38, 93 45 Z"
                    fill="#141414"
                  />
                  <path
                    className="spidey-eye-lens"
                    d="M89 48 C87 60, 76 63, 68 57 C68 49, 78 42, 89 48 Z"
                    fill="#FFFFFF"
                  />
                  <circle cx="82" cy="51" r="2.2" fill="#FFFFFF" opacity="0.9" />
                </g>
              </g>

              {/* Manitas sujetándose del borde */}
              <g className="spidey-hands-group">
                {/* Mano izquierda */}
                <g className="spidey-hand-left">
                  <ellipse
                    cx="26"
                    cy="94"
                    rx="10"
                    ry="7.5"
                    transform="rotate(-18 26 94)"
                    fill="url(#spideyHeadGrad)"
                    stroke="#181818"
                    strokeWidth="2.6"
                  />
                  <path
                    d="M22 89 L22 97 M27 88 L27 98"
                    stroke="#181818"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>

                {/* Mano derecha */}
                <g className="spidey-hand-right">
                  <ellipse
                    cx="94"
                    cy="94"
                    rx="10"
                    ry="7.5"
                    transform="rotate(18 94 94)"
                    fill="url(#spideyHeadGrad)"
                    stroke="#181818"
                    strokeWidth="2.6"
                  />
                  <path
                    d="M93 88 L93 98 M98 89 L98 97"
                    stroke="#181818"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}
