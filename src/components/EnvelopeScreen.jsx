import { useEffect, useRef, useState } from 'react';

const END_TIME = 6.2; // fin efectivo del video con el texto completo en pantalla
const HOLD_MS = 1800; // pausa en el fotograma final para permitir leer el mensaje
const FADE_MS = 1000; // duración del fundido suave hacia la invitación

/* eslint-disable react/prop-types */
export default function EnvelopeScreen({ onStart, onReveal, onFinish }) {
  const videoRef = useRef(null);
  const revealedRef = useRef(false);
  const holdingRef = useRef(false);
  const finishingRef = useRef(false);
  const timersRef = useRef([]);
  const [started, setStarted] = useState(false);
  const [fading, setFading] = useState(false);

  // Bloquear scroll del body mientras el sobre esté montado
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
      timersRef.current.forEach(clearTimeout);
    };
  }, []);

  const reveal = () => {
    if (revealedRef.current) return;
    revealedRef.current = true;
    onReveal?.();
  };

  const startFadeOut = () => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    reveal();
    setFading(true);
    timersRef.current.push(setTimeout(() => onFinish?.(), FADE_MS));
  };

  const completeVideoWithHold = () => {
    if (holdingRef.current || finishingRef.current) return;
    holdingRef.current = true;
    if (videoRef.current && !videoRef.current.paused) {
      videoRef.current.pause();
    }
    timersRef.current.push(setTimeout(startFadeOut, HOLD_MS));
  };

  const handleLoadedMetadata = () => {
    const v = videoRef.current;
    if (!v) return;
    v.pause();
    v.currentTime = 0;
  };

  const handleOpen = () => {
    const v = videoRef.current;
    if (started || !v) return;
    setStarted(true);
    onStart?.();
    const p = v.play();
    if (p && p.catch) p.catch(() => startFadeOut());
  };

  const handleTimeUpdate = () => {
    const t = videoRef.current?.currentTime ?? 0;
    if (t >= END_TIME) completeVideoWithHold();
  };

  return (
    <div
      className={`video-envelope-overlay ${fading ? 'is-fading' : ''}`}
      role="region"
      aria-label="Invitación de boda de Junior y Kathe"
    >
      <div className="video-envelope-frame">
        <video
          ref={videoRef}
          className="video-envelope-video"
          src="/video/Video.mp4"
          playsInline
          muted
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          onTimeUpdate={handleTimeUpdate}
          onEnded={completeVideoWithHold}
          onError={startFadeOut}
        />

        <button
          type="button"
          className={`video-seal-hotspot ${started ? 'is-hidden' : ''}`}
          onClick={handleOpen}
          disabled={started}
          aria-label="Toca el sello para abrir la invitación"
        >
          <span className="video-seal-glow" aria-hidden="true" />
        </button>

        <p className={`video-seal-hint font-serif ${started ? 'is-hidden' : ''}`}>
          Toca el sello para abrir
        </p>
      </div>
    </div>
  );
}


