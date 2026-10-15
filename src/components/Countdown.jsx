import React, { useState, useEffect } from 'react';
import { Calendar, BellRing } from 'lucide-react';

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

  const handleDownloadICS = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Junior&Kathe//Boda//ES",
      "BEGIN:VEVENT",
      "UID:boda-junior-kathe-20270306@weddingday",
      "DTSTAMP:20261006T000000Z",
      "DTSTART:20270306T210000Z",
      "DTEND:20270307T070000Z",
      "SUMMARY:Boda de Junior & Kathe 💍",
      "DESCRIPTION:¡Acompáñanos a celebrar nuestra unión! Finca El Refugio, Manizales.",
      "LOCATION:Finca El Refugio, La Francia, Manizales, Caldas, Colombia",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR"
    ].join("\r\n");

    const blob = new Blob([icsData], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', 'Boda-Junior-y-Kathe.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section countdown-canva-section">
      <div className="container">
        <div className="canva-card-envelope-inner">
          <div className="canva-card-border countdown-inner-border">
            <span className="canva-card-tag font-sans">CUENTA REGRESIVA</span>
            <h2 className="countdown-title font-serif">El Gran Día Se Acerca</h2>
            
            <p className="countdown-subtitle font-serif">
              Sábado 6 de Marzo de 2027 • 4:00 PM • Hora Colombia
            </p>

            {/* Grid 4 columnas en móvil con padding ajustado */}
            <div className="countdown-mobile-grid">
              <div className="countdown-mobile-box">
                <span className="countdown-val font-serif">{String(timeLeft.days).padStart(2, '0')}</span>
                <span className="countdown-unit font-sans">DÍAS</span>
              </div>
              <div className="countdown-mobile-box">
                <span className="countdown-val font-serif">{String(timeLeft.hours).padStart(2, '0')}</span>
                <span className="countdown-unit font-sans">HORAS</span>
              </div>
              <div className="countdown-mobile-box">
                <span className="countdown-val font-serif">{String(timeLeft.minutes).padStart(2, '0')}</span>
                <span className="countdown-unit font-sans">MIN</span>
              </div>
              <div className="countdown-mobile-box highlight-box">
                <span className="countdown-val font-serif">{String(timeLeft.seconds).padStart(2, '0')}</span>
                <span className="countdown-unit font-sans">SEG</span>
              </div>
            </div>

            <div className="countdown-buttons-row">
              <button onClick={handleGoogleCalendar} className="btn-secondary w-full-mobile">
                <Calendar size={16} />
                <span>Agendar en Google Calendar</span>
              </button>
              <button onClick={handleDownloadICS} className="btn-secondary w-full-mobile">
                <BellRing size={16} />
                <span>Guardar en Apple / iCal</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
