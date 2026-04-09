import { useEffect, useState } from 'react';
import { useAudio } from '../../context/AudioContext'; // <-- Importamos el Hook
import { Play, Pause, XIcon } from 'lucide-react';

export default function GlobalAudioPlayer() {
  const { currentEpisode, isPlaying, togglePlay, closePlayer, audioRef } = useAudio(); 
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress((audio.currentTime / audio.duration) * 100);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, [currentEpisode, audioRef]);

  if (!currentEpisode) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-100 bg-black border-t-4 border-brutal-accent text-white animate-in slide-in-from-bottom-full duration-300">
      <audio ref={audioRef} src={currentEpisode.audioSrc} />

      <div className="h-2 w-full bg-brutal-bg relative">
        <div 
          className="absolute top-0 left-0 h-full bg-brutal-accent transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-between p-4 md:px-8 gap-4">
        <div className="flex-1 flex flex-col font-mono">
          <span className="text-brutal-accent text-xs uppercase tracking-widest mb-1">
            Interceptando Señal // {currentEpisode.number}
          </span>
          <span className="font-bold text-lg truncate uppercase">
            {currentEpisode.title}
          </span>
        </div>

       <div className="flex items-center gap-4 font-bold uppercase tracking-widest">
          <button 
            onClick={togglePlay}
            aria-label={isPlaying ? "Pausar audio" : "Reproducir audio"}
            className="bg-white text-black px-6 py-3 hover:bg-brutal-accent hover:text-white transition-colors"
          >
            {isPlaying ? <Pause/> : <Play/>}
          </button>
          
          <button 
            onClick={closePlayer}
            aria-label="Cerrar reproductor"
            className="text-white/50 hover:text-white px-4 py-3 border border-white/20 hover:border-white transition-colors"
          >
            <XIcon/>
          </button>
        </div>
      </div>
    </div>
  );
}