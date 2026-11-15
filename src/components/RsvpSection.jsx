import React, { useState } from 'react';
import { Calendar, CheckCircle2, MessageCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

const DEFAULT_PHONE_NUMBER = '573114500833';

// Permite sobreescribir el número con ?phone=57300... en la URL (solo dígitos)
const getPhoneNumber = () => {
  const param = new URLSearchParams(window.location.search).get('phone');
  const digits = (param || '').replace(/\D/g, '');
  return digits.length >= 8 ? digits : DEFAULT_PHONE_NUMBER;
};

const MESSAGES = {
  yes: '¡Hola Junior y Kathe! 💍✨\n\n¡Confirmo con mucha alegría que SÍ asistiré a la boda! 🥂\n\n¡Felicidades por su matrimonio! ❤️',
  no: '¡Hola Junior y Kathe! 💍✨\n\nLamentablemente no podré acompañarlos, pero les envío todo mi cariño y bendiciones.\n\n¡Felicidades por su matrimonio! ❤️'
};

export default function RsvpSection() {
  const [submitted, setSubmitted] = useState(false);

  const triggerConfetti = () => {
    const count = 200;
    const defaults = { origin: { y: 0.7 } };

    function fire(particleRatio, opts) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
        colors: ['#B25332', '#DE8262', '#BD9854', '#FFFFFF', '#FAF3EF']
      });
    }

    fire(0.25, { spread: 26, startVelocity: 55 });
    fire(0.2, { spread: 60 });
    fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
    fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
    fire(0.1, { spread: 120, startVelocity: 45 });
  };

  const handleResponse = (answer) => {
    if (answer === 'yes') triggerConfetti();
    setSubmitted(true);

    const whatsappUrl = `https://wa.me/${getPhoneNumber()}?text=${encodeURIComponent(MESSAGES[answer])}`;

    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  return (
    <section id="rsvp" className="editorial-flow-section rsvp-flow">
      <div className="flow-header reveal-on-scroll reveal-fade-up">
        <span className="flow-eyebrow font-sans">CONFIRMACIÓN DE ASISTENCIA</span>
        <h2 className="rsvp-heading font-serif">¿Nos Acompañas?</h2>
        <p className="rsvp-sub-lead font-serif">
          «Tu presencia llena de alegría este día. Por favor confírmanos tu asistencia.»
        </p>
        <div className="rsvp-deadline-note font-sans">
          <Calendar size={15} className="rsvp-deadline-icon" />
          <span>Fecha límite para confirmar asistencia: <strong>31 de Enero de 2027</strong></span>
        </div>
      </div>

      <div className="artisan-rsvp-sheet reveal-on-scroll reveal-scale reveal-delay-150">
        <div className="artisan-rsvp-buttons">
          <button
            type="button"
            className="btn-artisan-whatsapp"
            onClick={() => handleResponse('yes')}
          >
            <MessageCircle size={18} />
            <span>Sí asistiré</span>
          </button>
          <button
            type="button"
            className="btn-artisan-whatsapp btn-artisan-decline"
            onClick={() => handleResponse('no')}
          >
            <MessageCircle size={18} />
            <span>No asistiré</span>
          </button>
        </div>

        {submitted && (
          <div className="artisan-success-pill animate-fade-in">
            <CheckCircle2 size={18} color="#B25332" />
            <span className="font-serif">¡Gracias! Abriendo WhatsApp para enviar tu respuesta...</span>
          </div>
        )}
      </div>

      <div className="flow-divider reveal-on-scroll reveal-fade-up reveal-delay-250">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}
