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
    <section id="rsvp" className="section rsvp-canva-section">
      <div className="container-narrow">
        <div className="section-title-wrap">
          <span className="section-subtitle">CONFIRMACIÓN</span>
          <h2 className="section-title font-serif">Tu Presencia es Vital</h2>
          <div className="section-divider">
            <Heart size={16} className="divider-icon" fill="#B25332" stroke="none" />
          </div>
        </div>

        <div className="canva-card-envelope-inner">
          <div className="canva-card-border rsvp-inner-border">
            <span className="canva-card-tag font-sans">R.S.V.P.</span>
            <h3 className="rsvp-card-heading font-serif">¿Nos Acompañas?</h3>
            <p className="rsvp-card-lead font-serif">
              Por favor confírmanos antes para preparar cada detalle especialmente para ti.
            </p>

            <form onSubmit={handleSubmit} className="canva-rsvp-form">
              {/* Nombre */}
              <div className="canva-field-group">
                <label htmlFor="name" className="canva-field-label font-sans">
                  <User size={15} />
                  <span>NOMBRE COMPLETO *</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Tu nombre y apellido"
                  required
                  className="canva-input"
                />
              </div>

              {/* Opción de asistencia */}
              <div className="canva-field-group">
                <label className="canva-field-label font-sans">
                  <CheckCircle2 size={15} />
                  <span>CONFIRMACIÓN DE ASISTENCIA *</span>
                </label>
                <div className="canva-radio-grid">
                  <label className={`canva-radio-card ${formData.attendance === 'yes' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="yes"
                      checked={formData.attendance === 'yes'}
                      onChange={handleChange}
                    />
                    <div className="canva-radio-body">
                      <span className="canva-radio-icon">🥂</span>
                      <span className="canva-radio-text font-serif">¡Sí, asistiré con alegría!</span>
                    </div>
                  </label>

                  <label className={`canva-radio-card ${formData.attendance === 'no' ? 'selected' : ''}`}>
                    <input
                      type="radio"
                      name="attendance"
                      value="no"
                      checked={formData.attendance === 'no'}
                      onChange={handleChange}
                    />
                    <div className="canva-radio-body">
                      <span className="canva-radio-icon">💌</span>
                      <span className="canva-radio-text font-serif">No podré asistir</span>
                    </div>
                  </label>
                </div>
              </div>

              {/* Acompañantes si asiste */}
              {formData.attendance === 'yes' && (
                <div className="canva-field-group">
                  <label htmlFor="companions" className="canva-field-label font-sans">
                    <Users size={15} />
                    <span>NÚMERO DE PERSONAS</span>
                  </label>
                  <select
                    id="companions"
                    name="companions"
                    value={formData.companions}
                    onChange={handleChange}
                    className="canva-select"
                  >
                    <option value="1">1 persona (Solo yo)</option>
                    <option value="2">2 personas (Con acompañante)</option>
                    <option value="3">3 personas (Familia)</option>
                    <option value="4">4 personas (Familia)</option>
                  </select>
                </div>
              )}

              {/* Mensaje */}
              <div className="canva-field-group">
                <label htmlFor="message" className="canva-field-label font-sans">
                  <FileText size={15} />
                  <span>MENSAJE O DESEOS (OPCIONAL)</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Escríbenos una dedicatoria o deseo..."
                  className="canva-textarea"
                ></textarea>
              </div>

              {/* Botón */}
              <div className="canva-submit-wrap">
                <button type="submit" className="btn-whatsapp-canva">
                  <MessageCircle size={20} />
                  <span>Confirmar por WhatsApp</span>
                </button>
                <span className="canva-whatsapp-help font-sans">
                  Envía la confirmación al +57 311 450 0833
                </span>
              </div>
            </form>

            {submitted && (
              <div className="canva-success-box animate-fade-in">
                <CheckCircle2 size={20} color="#25D366" />
                <span className="font-serif">¡Gracias por confirmar! Abriendo WhatsApp...</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
