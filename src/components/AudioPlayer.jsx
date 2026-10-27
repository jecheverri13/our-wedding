import React, { useState, useRef, useEffect, forwardRef, useImperativeHandle } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

const AudioPlayer = forwardRef(({ initialVolume = 0.3, ...props }, ref) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const musicUrl = "/audio/turning-page.mp3";

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = initialVolume;
    }
  }, [initialVolume]);

  useImperativeHandle(ref, () => ({
    playAudio: () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.volume = initialVolume;
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
      audioRef.current.volume = initialVolume;
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log("Audio toggle prevented:", err);
      });
    }
  };

  return (
    <div className="artisan-audio-floater">
      <audio ref={audioRef} src={musicUrl} loop preload="auto" />
      <button
        onClick={togglePlay}
        className={`artisan-audio-circle ${isPlaying ? 'is-playing' : ''}`}
        title={isPlaying ? "Silenciar música" : "Reproducir música"}
        aria-label={isPlaying ? "Silenciar música" : "Reproducir música"}
      >
        {isPlaying ? (
          <Volume2 size={17} className="audio-icon-active" />
        ) : (
          <VolumeX size={17} className="audio-icon-muted" />
        )}
      </button>
    </div>
  );
});


export default AudioPlayer;
