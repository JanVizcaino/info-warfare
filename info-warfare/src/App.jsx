import { BrowserRouter } from 'react-router-dom';
import Router from './routes/Router';
import AudioProvider from './context/AudioProvider'; 
import GlobalAudioPlayer from './components/podcast/GlobalAudioPlayer';

export default function App() {
  return (
    <AudioProvider>
      <BrowserRouter>
        <Router />
        <GlobalAudioPlayer />
      </BrowserRouter>
    </AudioProvider>
  );
}