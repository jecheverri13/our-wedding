import { useEffect, useRef, useState } from 'react';

const REVEAL_TIME = 4.3; // el papel marfil ya cubre toda la pantalla
const END_TIME = 6.2; // fin efectivo del video
const FADE_MS = 800;

/* eslint-disable react/prop-types */
export default function EnvelopeScreen({ onStart, onReveal, onFinish }) {
  const videoRef = useRef(null);
  const revealedRef = useRef(false);
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

  const finish = () => {
    if (finishingRef.current) return;
    finishingRef.current = true;
    reveal();
    setFading(true);
    timersRef.current.push(setTimeout(() => onFinish?.(), FADE_MS));
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
    if (p && p.catch) p.catch(() => finish());
  };

  const handleTimeUpdate = () => {
    const t = videoRef.current?.currentTime ?? 0;
    if (t >= REVEAL_TIME) reveal();
    if (t >= END_TIME) finish();
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
          onEnded={finish}
          onError={finish}
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


