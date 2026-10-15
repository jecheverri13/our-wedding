import React, { useState, useRef, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = forwardRef((props, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicUrl = "/audio/turning-page.mp3";

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Audio play error:", err);
        });
      }
    },
    pauseAudio: () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  }));

  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio toggle prevented:", err);
      });
    }
  };

  return (
    <div className="audio-floating-wrap">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <button
        onClick={togglePlay}
        className={`audio-toggle-btn ${isPlaying ? 'playing' : ''}`}
        title={isPlaying ? "Pausar melodía" : "Reproducir música romántica"}
        aria-label={isPlaying ? "Pausar música" : "Reproducir música"}
      >
        <span className="audio-wave-icon">
          {isPlaying ? <Volume2 size={18} /> : <VolumeX size={18} />}
        </span>
        <span className="audio-label font-sans">
          {isPlaying ? "Música" : "Música"}
        </span>
      </button>
    </div>
  );
});

export default AudioPlayer;
