import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';

export default function Countdown() {
  const targetDate = new Date('2027-03-06T16:00:00-05:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isFinished: false
  });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isFinished: true });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds, isFinished: false });
    };

    calculateTime();
    const interval = setInterval(calculateTime, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const handleGoogleCalendar = () => {
    const title = encodeURIComponent("Boda de Junior & Kathe 💍");
    const details = encodeURIComponent("¡Acompáñanos a celebrar nuestra unión matrimonial! Finca El Refugio, La Francia, Manizales.");
    const location = encodeURIComponent("Finca El Refugio, La Francia, Manizales, Caldas, Colombia");
    const dates = "20270306T210000Z/20270307T070000Z";

    const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${dates}&details=${details}&location=${location}`;
    window.open(url, '_blank');
  };

  return (
    <section className="editorial-flow-section countdown-flow">
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">Guarda la fecha</span>
        <br />
        <p className="countdown-heading font-serif">
          Sábado 6 de Marzo de 2027
        </p>
        <p className="countdown-heading font-serif">
          4:00 p.m.
        </p>

        <br />
        <h2 className="event-date-highlight font-serif">Cada vez falta menos...</h2>
      </div>

      {/* Números etéreos flotando sobre la textura de papel */}
      <div className="artisan-countdown-grid">
        <div className="artisan-countdown-item">
          <span className="countdown-num font-serif">{String(timeLeft.days).padStart(2, '0')}</span>
          <span className="countdown-txt font-sans">DÍAS</span>
        </div>
        <span className="countdown-sep font-serif">:</span>
        <div className="artisan-countdown-item">
          <span className="countdown-num font-serif">{String(timeLeft.hours).padStart(2, '0')}</span>
          <span className="countdown-txt font-sans">HORAS</span>
        </div>
        <span className="countdown-sep font-serif">:</span>
        <div className="artisan-countdown-item">
          <span className="countdown-num font-serif">{String(timeLeft.minutes).padStart(2, '0')}</span>
          <span className="countdown-txt font-sans">MIN</span>
        </div>
        <span className="countdown-sep font-serif">:</span>
        <div className="artisan-countdown-item">
          <span className="countdown-num font-serif">{String(timeLeft.seconds).padStart(2, '0')}</span>
          <span className="countdown-txt font-sans">SEG</span>
        </div>
      </div>

      <div className="countdown-cta-wrap">
        <button onClick={handleGoogleCalendar} className="btn-paper-subtle">
          <Calendar size={15} />
          <span>Agendar en mi Calendario</span>
        </button>
      </div>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}

