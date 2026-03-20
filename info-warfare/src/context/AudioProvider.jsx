import { useState, useRef, useEffect } from 'react';
import { AudioContext } from './AudioContext';

export default function AudioProvider({ children }) {
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const playEpisode = (episode) => {
    if (currentEpisode?.id === episode.id) {
      togglePlay();
    } else {
      setCurrentEpisode(episode);
      setIsPlaying(true); // El estado ya cambia aquí de forma síncrona al click
    }
  };

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const closePlayer = () => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    setCurrentEpisode(null);
    setIsPlaying(false);
  };

  // Effect limpio: solo maneja la API externa del DOM (el audio)
  useEffect(() => {
    if (currentEpisode && audioRef.current) {
      // Usamos .catch() porque a veces los navegadores bloquean el autoplay
      audioRef.current.play().catch(error => console.error("Autoplay bloqueado:", error));
    }
  }, [currentEpisode]);

  return (
    <AudioContext.Provider value={{ currentEpisode, isPlaying, playEpisode, togglePlay, closePlayer, audioRef }}>
      {children}
    </AudioContext.Provider>
  );
}