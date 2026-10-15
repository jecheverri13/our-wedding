import React, { useState, useRef } from 'react';
import EnvelopeScreen from './components/EnvelopeScreen';
import HeaderHero from './components/HeaderHero';
import ChildhoodSection from './components/ChildhoodSection';
import CoupleMoments from './components/CoupleMoments';
import Countdown from './components/Countdown';
import EventDetails from './components/EventDetails';
import DressCode from './components/DressCode';
import GiftSection from './components/GiftSection';
import RsvpSection from './components/RsvpSection';
import AudioPlayer from './components/AudioPlayer';
import Footer from './components/Footer';
import './App.css';

export default function App() {
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);
  const audioPlayerRef = useRef(null);

  const handleOpenEnvelope = () => {
    setIsEnvelopeOpen(true);
    // Iniciar reproducción de música al abrir el sobre si está disponible
    if (audioPlayerRef.current) {
      audioPlayerRef.current.playAudio();
    }
  };

  const handleReopenEnvelope = () => {
    setIsEnvelopeOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="wedding-app-root">
      {/* 1. SOBRE INICIAL INTERACTIVO */}
      {!isEnvelopeOpen && (
        <EnvelopeScreen onOpenEnvelope={handleOpenEnvelope} />
      )}

      {/* CONTENIDO DE LA INVITACIÓN DESPLEGADA */}
      <div className={`wedding-content-wrapper ${isEnvelopeOpen ? 'content-visible' : 'content-hidden'}`}>
        {/* Folio de Papel Artesanal Continuo (Estilo Carta / Reel) */}
        <main className="wedding-paper-sheet">
          {/* Barra superior discreta */}
          <div className="top-navigation-bar">
            <span className="top-nav-monogram font-serif">J & K</span>
            <button
              type="button"
              onClick={handleReopenEnvelope}
              className="top-nav-envelope-btn font-sans"
              title="Cerrar y volver a abrir el sobre"
            >
              <span>Ver Sobre</span>
            </button>
          </div>

          {/* 1. Portada / Bienvenida Editorial */}
          <HeaderHero
            onScrollToSection={scrollToSection}
          />


          {/* 2. Nuestra Historia: De Niños a Hoy */}
          <ChildhoodSection />

          {/* 3. Nuestra Promesa: Versículo & Amor */}
          <CoupleMoments />

          {/* 4. Cuenta Regresiva */}
          <Countdown />

          {/* 5. Dónde & Cuándo + Itinerario */}
          <EventDetails />

          {/* 6. Código de Vestimenta */}
          <DressCode />

          {/* 7. Lluvia de Sobres */}
          <GiftSection />

          {/* 8. Confirmación de Asistencia (RSVP) */}
          <RsvpSection />

          {/* 9. Cierre / Pie de Página */}
          <Footer />
        </main>

        {/* Reproductor de Audio Flotante Circular */}
        <AudioPlayer ref={audioPlayerRef} />
      </div>
    </div>
  );
}

