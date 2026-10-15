import React from 'react';
import { Heart } from 'lucide-react';

export default function BibleVerse() {
  return (
    <section id="versiculo" className="section verse-section">
      <div className="container-narrow">
        <div className="verse-card">
          <div className="verse-ornament-top">
            <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 2C13 12 4 12 0 12M20 2C27 12 36 12 40 12" stroke="#B25332" strokeWidth="1.2" strokeLinecap="round"/>
              <circle cx="20" cy="2" r="2" fill="#B25332" />
            </svg>
          </div>

          <p className="verse-text font-serif">
            «Sobre toda cosa guardada, guarda tu corazón; porque de él mana la vida.»
          </p>
          <span className="verse-reference font-sans">
            — Proverbios 4:23 —
          </span>

          <div className="verse-ornament-bottom">
            <Heart size={16} fill="#B25332" stroke="none" />
          </div>
        </div>
      </div>
    </section>
  );
}
