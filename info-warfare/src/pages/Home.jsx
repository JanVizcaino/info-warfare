import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Section from '../components/layout/Section';
import VideoPromo from '../components/promotion/VideoPromo'
import Video from '../assets/video/Promo.mov'


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
            <div className="flex flex-col gap-6">
              <h3 className="text-3xl font-black uppercase tracking-tighter">Evidencia Audiovisual</h3>
              <p className="font-mono text-sm opacity-70 mb-4">Registro visual de la campaña de desinformación. Visualización bajo tu propio riesgo.</p>
              <VideoPromo title="Teaser Documental" videoUrl={Video} />
            </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}