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
        {/* Barra superior discreta */}
        <div className="top-navigation-bar">
          <span className="top-nav-monogram font-script">J & K</span>
          <button 
            type="button" 
            onClick={handleReopenEnvelope} 
            className="top-nav-envelope-btn"
            title="Cerrar y volver a abrir el sobre"
          >
            💌 <span>Ver Sobre</span>
          </button>
        </div>

        {/* 2. Tarjeta Principal / Portada estilo Canva */}
        <HeaderHero 
          onScrollToSection={scrollToSection} 
          onReopenEnvelope={handleReopenEnvelope} 
        />

        {/* 3. PRIMERO: Sección de los Niños - «Estos niños se casan y quieren que los acompañes» */}
        <ChildhoodSection />

        {/* 4. SEGUNDO: La Promesa de Adultos - Versículo Proverbios 4:23 & Fotos de Compromiso */}
        <CoupleMoments />

        {/* 5. TERCERO: Cuenta Regresiva */}
        <Countdown />

        {/* 6. CUARTO: Dónde & Cuándo (Finca El Refugio, Manizales + Itinerario) */}
        <EventDetails />

        {/* 7. QUINTO: Código de Vestimenta & Reserva de Blanco y Terracota */}
        <DressCode />

        {/* 8. SEXTO: Lluvia de Sobres */}
        <GiftSection />

        {/* 9. SÉPTIMO: Confirmación de Asistencia (RSVP por WhatsApp) */}
        <RsvpSection />

        {/* 10. Reproductor de Audio Flotante */}
        <AudioPlayer ref={audioPlayerRef} />

        {/* 11. Pie de Página */}
        <Footer />
      </div>
    </div>
  );
}
