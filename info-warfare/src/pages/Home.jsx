import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Section from '../components/layout/Section';
import VideoPromo from '../components/promotion/VideoPromo';
import Video from '../assets/video/Promo.mov';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-42 px-6 md:px-12">
        
        <Section>
          <h1 className="text-[12vw] leading-[0.8] font-black tracking-tighter wrap-break-word uppercase">
            La guerra <br /> ya no se <br /> lucha con <span className="text-brutal-bg" style={{ WebkitTextStroke: '2px white' }}>balas.</span>
          </h1>
          <div className="mt-16 flex flex-col md:flex-row justify-between items-end border-t-2 border-white/20 pt-8">
            <p className="text-2xl md:text-4xl font-medium tracking-tight max-w-2xl lowercase text-white/80">
              Se lucha con <span className="text-brutal-accent font-black uppercase">información</span>, algoritmos y desinformación dirigida.
            </p>
          </div>
        </Section>

        <Section>
          <div className="flex flex-col gap-6 mt-16">
            <h2 className="text-3xl font-black uppercase tracking-tighter">Evidencia Audiovisual</h2>
            <p className="font-mono text-sm opacity-70 mb-4">Registro visual de la campaña de desinformación. Visualización bajo tu propio riesgo.</p>
            <VideoPromo title="Teaser Documental" videoUrl={Video} />
          </div>
        </Section>

        <Section>
          <div className="flex flex-col md:flex-row gap-12 mt-24 border-t-2 border-white/20 pt-16 mb-24">
            <div className="md:w-1/3 flex flex-col gap-4">
              <h3 className="text-4xl font-black uppercase tracking-tighter leading-none">
                Canal <br /> Seguro
              </h3>
              <p className="font-mono text-sm opacity-70">
                Línea encriptada. Aporta inteligencia a la red o alístate en la contrainformación. No dejes rastro.
              </p>
            </div>
            
            <form className="md:w-2/3 flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label htmlFor="alias" className="font-mono text-xs uppercase opacity-70 tracking-widest">
                  Alias / Identificador
                </label>
                <input 
                  type="text" 
                  id="alias" 
                  placeholder="INGRESA TU ALIAS..."
                  className="w-full bg-transparent border-2 border-white/30 text-white p-4 font-mono focus:border-brutal-accent focus:outline-none placeholder:text-white/20 transition-colors rounded-none" 
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="intel" className="font-mono text-xs uppercase opacity-70 tracking-widest">
                  Datos de Inteligencia
                </label>
                <textarea 
                  id="intel" 
                  rows={4} 
                  placeholder="TRANSMITE TU MENSAJE..."
                  className="w-full bg-transparent border-2 border-white/30 text-white p-4 font-mono focus:border-brutal-accent focus:outline-none placeholder:text-white/20 resize-none transition-colors rounded-none"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-white text-black font-black uppercase text-2xl py-5 mt-4 hover:bg-brutal-accent hover:text-white transition-all duration-300 rounded-none cursor-pointer"
              >
                Transmitir
              </button>
            </form>
          </div>
        </Section>

      </main>
      <Footer />
    </div>
  );
}