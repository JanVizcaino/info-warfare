import { createContext, useContext } from 'react';

// Exportamos el contexto (por si hace falta en el futuro)
export const AudioContext = createContext(null);

// Exportamos el Custom Hook
export function useAudio() {
  const context = useContext(AudioContext);
  if (!context) {
    throw new Error('useAudio debe usarse dentro de un AudioProvider');
  }
  return context;
}