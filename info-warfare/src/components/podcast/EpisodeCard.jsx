import { useState } from 'react';
import Transcript from './Transcript';
import { useAudio } from '../../context/AudioContext';

export default function EpisodeCard(episode) {
  const [isOpen, setIsOpen] = useState(false);
  const { playEpisode, currentEpisode, isPlaying } = useAudio(); 

  const isThisEpisodePlaying = currentEpisode?.id === episode.id && isPlaying;

  return (
    <div className="flex flex-col">
      <article className={`brutal-border brutal-shadow bg-brutal-bg p-6 flex flex-col md:flex-row gap-6 relative group z-10 transition-all ${currentEpisode?.id === episode.id ? 'border-brutal-accent' : ''}`}>
        <div className="bg-white text-black font-black text-4xl p-4 flex items-center justify-center min-w-25">
          {episode.number}
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <h3 className="text-3xl font-black tracking-tight mb-2 group-hover:text-brutal-accent transition-colors">
              {episode.title}
            </h3>
            <p className="text-white/70 font-sans normal-case text-lg mb-4 line-clamp-2">
              {episode.description}
            </p>
          </div>
          
          <div className="flex flex-wrap items-center justify-between font-mono text-sm border-t border-white/20 pt-4 gap-4">
            <span>DUR: {episode.duration}</span>
            <div className="flex gap-4">
              {episode.transcriptData && (
                <button 
                  onClick={() => setIsOpen(!isOpen)}
                  className="border-2 border-white px-4 py-2 hover:bg-white hover:text-black transition-colors font-bold uppercase"
                >
                  {isOpen ? '[ CERRAR LOG ]' : '[ LEER LOG ]'}
                </button>
              )}
              <button 
                onClick={() => playEpisode(episode)}
                className={`${isThisEpisodePlaying ? 'bg-white text-black' : 'bg-brutal-accent text-white'} px-4 py-2 hover:bg-white hover:text-black transition-colors font-bold uppercase`}
              >
                {isThisEpisodePlaying ? 'PAUSAR AUDIO' : 'PLAY AUDIO'}
              </button>
            </div>
          </div>
        </div>
      </article>

      {isOpen && episode.transcriptData && (
        <div className="border-x-2 border-b-2 border-white bg-brutal-bg p-6 pt-12 -mt-6 relative z-0 animate-in fade-in slide-in-from-top-4 duration-300">
           <div className="border-t-2 border-brutal-accent pt-6">
             <p className="font-mono text-sm text-brutal-accent mb-6 uppercase">Documento Desclasificado // Transcripción Raw</p>
             <Transcript data={episode.transcriptData} />
           </div>
        </div>
      )}
    </div>
  );
}