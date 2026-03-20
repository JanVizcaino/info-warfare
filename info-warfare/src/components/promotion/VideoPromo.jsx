import { useRef, useState, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Volume1 } from "lucide-react";

export default function VideoPromo({ title, videoUrl }) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [isMuted, setIsMuted] = useState(true);
  const [volume, setVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const hideTimeout = useRef(null);

  const formatTime = (s) => {
    if (!s || isNaN(s)) return "00:00";
    const m = Math.floor(s / 60);
    const sec = Math.floor(s % 60);
    return `${String(m).padStart(2, "0")}:${String(sec).padStart(2, "0")}`;
  };

  const handlePlay = () => {
    const vid = videoRef.current;
    if (!vid) return;
    if (!hasStarted) {
      vid.muted = false;
      setIsMuted(false);
      setHasStarted(true);
    }
    if (isPlaying) {
      vid.pause();
      setIsPlaying(false);
      setShowControls(true);
      clearTimeout(hideTimeout.current);
    } else {
      vid.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    const vid = videoRef.current;
    if (!vid) return;
    setCurrentTime(vid.currentTime);
    setProgress((vid.currentTime / vid.duration) * 100 || 0);
  };

  const handleLoaded = () => {
    setDuration(videoRef.current?.duration || 0);
  };

  const handleSeek = (e) => {
    const vid = videoRef.current;
    if (!vid) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = (e.clientX - rect.left) / rect.width;
    vid.currentTime = ratio * vid.duration;
  };

  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    vid.muted = !vid.muted;
    setIsMuted(vid.muted);
  };

  const handleVolume = (e) => {
    const vid = videoRef.current;
    if (!vid) return;
    const val = parseFloat(e.target.value);
    vid.volume = val;
    setVolume(val);
    vid.muted = val === 0;
    setIsMuted(val === 0);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setShowControls(true);
    setProgress(0);
    setCurrentTime(0);
    clearTimeout(hideTimeout.current);
    if (videoRef.current) videoRef.current.currentTime = 0;
  };

  const revealControls = () => {
    setShowControls(true);
    clearTimeout(hideTimeout.current);
    if (isPlaying) {
      hideTimeout.current = setTimeout(() => setShowControls(false), 2500);
    }
  };

  useEffect(() => () => clearTimeout(hideTimeout.current), []);

  const VolumeIcon = isMuted || volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2;

  return (
    <div
      className="relative aspect-video brutal-border bg-black overflow-hidden"
      style={{ cursor: isPlaying && !showControls ? "none" : "default" }}
      onMouseMove={revealControls}
      onMouseLeave={() => isPlaying && setShowControls(false)}
    >
      <div
        className="absolute top-0 left-0 z-20 font-mono text-xs font-bold px-4 py-2 uppercase tracking-widest border-b border-r border-white/20 transition-colors"
        style={{
          background: hasStarted ? "var(--color-brutal-accent, #e63946)" : "white",
          color: hasStarted ? "white" : "black",
        }}
      >
        {isPlaying ? "▶ EN REPRODUCCIÓN" : hasStarted ? "⏸ PAUSADO" : `ARCHIVO: ${title}`}
      </div>

      <video
        ref={videoRef}
        src={videoUrl}
        className={`w-full h-full object-cover transition-all duration-500 ${
          hasStarted ? "opacity-100 grayscale-0" : "opacity-50 grayscale"
        }`}
        muted
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoaded}
        onEnded={handleEnded}
        onClick={handlePlay}
      />

      {!hasStarted && (
        <div
          className="absolute inset-0 flex items-center justify-center z-10 cursor-pointer"
          onClick={handlePlay}
        >
          <div className="bg-brutal-accent text-white px-8 py-4 text-xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-[8px_8px_0px_0px_rgba(255,255,255,0.9)] flex items-center gap-3 border-2 border-white">
            <Play size={22} strokeWidth={3} />
            Reproducir
          </div>
        </div>
      )}

      <div
        className={`absolute bottom-0 left-0 right-0 z-20 bg-black/90 border-t-2 border-brutal-accent px-4 pt-2 pb-3 flex flex-col gap-2 transition-opacity duration-300 ${
          showControls || !isPlaying
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <div
          className="w-full h-1.5 bg-white/20 cursor-pointer hover:h-2 transition-all"
          onClick={handleSeek}
        >
          <div
            className="h-full bg-brutal-accent transition-[width] duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={handlePlay}
            className="text-white hover:text-brutal-accent transition-colors cursor-pointer"
            aria-label={isPlaying ? "Pausar" : "Reproducir"}
          >
            {isPlaying
              ? <Pause size={18} strokeWidth={2.5} />
              : <Play size={18} strokeWidth={2.5} />
            }
          </button>

          <span className="font-mono text-xs text-white/70 tracking-widest tabular-nums">
            {formatTime(currentTime)} / {formatTime(duration)}
          </span>

          <div className="flex-1" />

          <div className="flex items-center gap-2">
            <button
              onClick={toggleMute}
              className="text-white hover:text-brutal-accent transition-colors cursor-pointer"
              aria-label={isMuted ? "Activar sonido" : "Silenciar"}
            >
              <VolumeIcon size={18} strokeWidth={2} />
            </button>
            <input
              type="range"
              min={0}
              max={1}
              step={0.05}
              value={isMuted ? 0 : volume}
              onChange={handleVolume}
              className="w-20 accent-brutal-accent cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
}