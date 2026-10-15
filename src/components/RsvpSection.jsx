import React, { useState } from 'react';
import { CheckCircle2, MessageCircle, Heart, User, Users, FileText } from 'lucide-react';
import confetti from 'canvas-confetti';

export default function RsvpSection() {
  const [formData, setFormData] = useState({
    name: '',
    attendance: 'yes',
    companions: '1',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const phoneNumber = '573114500833';

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

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

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      alert('Por favor escribe tu nombre completo.');
      return;
    }

    const attendanceText = formData.attendance === 'yes'
      ? '¡Confirmo con mucha alegría que SI asistiré a la boda! 🥂'
      : 'Lamentablemente no podré acompañarlos, pero les envío todo mi cariño y bendiciones.';

    let messageText = `¡Hola Junior y Kathe! 💍✨\n\n`;
    messageText += `Soy: ${formData.name.trim()}\n`;
    messageText += `Estado de asistencia: ${attendanceText}\n`;
    
    if (formData.attendance === 'yes') {
      messageText += `Número de personas: ${formData.companions}\n`;
    }

    if (formData.message.trim()) {
      messageText += `Mensaje: "${formData.message.trim()}"\n`;
    }

    messageText += `\n¡Felicidades por su matrimonio! ❤️`;

    triggerConfetti();
    setSubmitted(true);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(messageText)}`;
    
    setTimeout(() => {
      window.open(whatsappUrl, '_blank');
    }, 700);
  };

  return (
    <section id="rsvp" className="editorial-flow-section rsvp-flow">
      <div className="flow-header">
        <span className="flow-eyebrow font-sans">CONFIRMACIÓN DE ASISTENCIA</span>
        <h2 className="rsvp-heading font-serif">¿Nos Acompañas?</h2>
        <p className="rsvp-sub-lead font-serif">
          «Tu presencia llena de alegría este día. Por favor confírmanos tu asistencia.»
        </p>
      </div>

      <div className="artisan-rsvp-sheet">
        <form onSubmit={handleSubmit} className="artisan-rsvp-form">
          {/* Nombre */}
          <div className="artisan-field">
            <label htmlFor="name" className="artisan-label font-sans">
              NOMBRE Y APELLIDO *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Escribe tu nombre completo"
              required
              className="artisan-input font-serif"
            />
          </div>

          {/* Opción de asistencia */}
          <div className="artisan-field">
            <label className="artisan-label font-sans">
              ¿ASISTIRÁS A LA CELEBRACIÓN? *
            </label>
            <div className="artisan-radio-duo">
              <label className={`artisan-radio-option ${formData.attendance === 'yes' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="yes"
                  checked={formData.attendance === 'yes'}
                  onChange={handleChange}
                />
                <span className="radio-text font-serif">¡Sí, asistiré con alegría! 🥂</span>
              </label>

              <label className={`artisan-radio-option ${formData.attendance === 'no' ? 'selected' : ''}`}>
                <input
                  type="radio"
                  name="attendance"
                  value="no"
                  checked={formData.attendance === 'no'}
                  onChange={handleChange}
                />
                <span className="radio-text font-serif">No podré asistir 💌</span>
              </label>
            </div>
          </div>

          {/* Acompañantes si asiste */}
          {formData.attendance === 'yes' && (
            <div className="artisan-field">
              <label htmlFor="companions" className="artisan-label font-sans">
                NÚMERO DE PERSONAS
              </label>
              <select
                id="companions"
                name="companions"
                value={formData.companions}
                onChange={handleChange}
                className="artisan-select font-serif"
              >
                <option value="1">1 persona (Solo yo)</option>
                <option value="2">2 personas (Con acompañante)</option>
                <option value="3">3 personas (Familia)</option>
                <option value="4">4 personas (Familia)</option>
              </select>
            </div>
          )}

          {/* Mensaje */}
          <div className="artisan-field">
            <label htmlFor="message" className="artisan-label font-sans">
              DEDICATORIA O MENSAJE (OPCIONAL)
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={2}
              placeholder="Un deseo o bendición para nosotros..."
              className="artisan-textarea font-serif"
            ></textarea>
          </div>

          {/* Botón WhatsApp */}
          <div className="artisan-submit-wrap">
            <button type="submit" className="btn-artisan-whatsapp">
              <MessageCircle size={18} />
              <span>Confirmar por WhatsApp</span>
            </button>
            <span className="artisan-whatsapp-hint font-sans">
              Se enviará tu respuesta directamente al WhatsApp de los novios
            </span>
          </div>
        </form>

        {submitted && (
          <div className="artisan-success-pill animate-fade-in">
            <CheckCircle2 size={18} color="#25D366" />
            <span className="font-serif">¡Gracias! Abriendo WhatsApp para enviar tu confirmación...</span>
          </div>
        )}
      </div>

      <div className="flow-divider">
        <span className="flow-divider-symbol">✦</span>
      </div>
    </section>
  );
}
