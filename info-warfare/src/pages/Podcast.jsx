import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Section from "../components/layout/Section";
import EpisodeCard from "../components/podcast/EpisodeCard";

const EPISODES = [
  {
    id: 1,
    number: "01",
    title: "El Algoritmo Bélico",
    description:
      "El algoritmo no tiene ideología política. Su única bandera es el engagement. Actores estatales y corporativos lo descubrieron antes que tú: inyecta el mensaje adecuado y el sistema hará el trabajo sucio. La guerra ya no se lucha con balas, se lucha con tus niveles de dopamina.",
    duration: "1:33",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
    transcriptData: [
      { time: 0,  text: "El campo de batalla ha cambiado." },
      {
        time: 3,
        text: "Ya no necesitas desplegar tropas, ni lanzar misiles, ni bloquear puertos para paralizar a un país entero. Solo necesitas acceso a su feed de noticias.",
      },
      {
        time: 12,
        text: "Nos vendieron que internet iba a ser la gran plaza pública de la humanidad. Un lugar donde la información libre nos haría más sabios.",
      },
      {
        time: 22,
        text: "Pero ignoramos un detalle crucial: las plataformas que usamos todos los días no están diseñadas para informarnos. Están diseñadas para retener nuestra atención.",
      },
      {
        time: 33,
        text: "Y adivina qué es lo que más retiene la atención del cerebro humano. El miedo. La ira. La indignación.",
      },
      {
        time: 41,
        text: 'El algoritmo no tiene ideología política. No es de izquierdas, ni de derechas. Su única bandera es el "engagement".',
      },
      {
        time: 51,
        text: "Y pronto, actores estatales y corporativos se dieron cuenta de algo terrorífico: si inyectas el mensaje adecuado, en el formato adecuado, el algoritmo hará el trabajo sucio por ti.",
      },
      {
        time: 63,
        text: "Amplificará el odio, polarizará a la sociedad y destruirá la confianza en las instituciones.",
      },
      {
        time: 70,
        text: "No es un fallo del sistema. Es el sistema funcionando a la perfección.",
      },
      {
        time: 76,
        text: "La guerra ya no se lucha con balas... se lucha con tus niveles de dopamina.",
      },
      {
        time: 83,
        text: "Y lo peor de todo... es que nosotros mismos somos los soldados de a pie, compartiendo, retuiteando, disparando a ciegas en una trinchera digital que ni siquiera sabemos que existe.",
      },
    ],
  },
  {
    id: 2,
    number: "02",
    title: "La Ilusión de la Mayoría",
    description:
      "Mil personas gritando la misma consigna en internet pueden ser un solo tipo ejecutando un script de Python. Las granjas de bots son infraestructuras corporativas masivas cuyo objetivo no es convencerte — es crear una falsa sensación de consenso y convertir mentiras digitales en realidad analógica.",
    duration: "1:39",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
    transcriptData: [
      {
        time: 0,
        text: "Imagínate entrar a una plaza en tu ciudad. De repente, mil personas se giran hacia ti y empiezan a gritarte exactamente la misma consigna, al mismo tiempo.",
      },
      {
        time: 10,
        text: 'Automáticamente, tu cerebro reptiliano piensa: "Si tanta gente cree esto, debe ser la opinión mayoritaria. Quizás yo soy el que está equivocado".',
      },
      {
        time: 20,
        text: "En el mundo físico, organizar a mil personas requiere logística, dinero y liderazgo.",
      },
      {
        time: 27,
        text: "En internet... en internet esas mil personas son un solo tipo sentado en una silla ergonómica, ejecutando un script de Python.",
      },
      {
        time: 36,
        text: "Bienvenidos a la industrialización de la opinión falsa.",
      },
      {
        time: 40,
        text: "Las granjas de bots ya no son cuatro hackers en un sótano. Son infraestructuras corporativas masivas.",
      },
      {
        time: 48,
        text: "Cuentas falsas con fotos de perfil generadas por IA, historias de fondo creíbles y patrones de comportamiento diseñados para burlar los filtros de seguridad.",
      },
      {
        time: 58,
        text: "Su objetivo no es convencerte con argumentos lógicos. Su objetivo es crear una falsa sensación de consenso.",
      },
      {
        time: 67,
        text: "Aplastar el debate orgánico bajo una avalancha de ruido sintético.",
      },
      {
        time: 73,
        text: "Si logras que un hashtag sea tendencia mundial durante tres horas, los medios de comunicación tradicionales lo recogerán como noticia.",
      },
      {
        time: 82,
        text: "Y boom. Acabas de lavar una mentira digital y la has convertido en una realidad analógica.",
      },
      {
        time: 89,
        text: "La próxima vez que veas a una multitud digital enfurecida... pregúntate cuántos de ellos tienen pulso.",
      },
    ],
  },
  {
    id: 3,
    number: "03",
    title: "La Muerte de la Evidencia Visual",
    description:
      "La evidencia visual ha muerto. Con deepfakes e IA generativa, cualquiera puede fabricar un vídeo 4K de un presidente declarando la guerra. El verdadero peligro no es creer lo falso — es el dividendo del mentiroso: usar la duda para negar lo real y decidir qué es verdad.",
    duration: "1:43",
    audioSrc: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
    transcriptData: [
      {
        time: 0,
        
        text: '"Ver para creer". Esa ha sido la regla de oro de la humanidad desde que tenemos ojos.',
      },
      {
        time: 7,
        
        text: "Si hay una foto, pasó. Si hay un vídeo, es irrefutable.",
      },
      {
        time: 13,
        
        text: "Bueno... tengo malas noticias. Esa regla acaba de caducar.",
      },
      {
        time: 19,
        
        text: "Con la explosión del contenido generado por Inteligencia Artificial y los deepfakes, la evidencia visual ha muerto.",
      },
      {
        time: 27,
        
        text: "Hoy, con un presupuesto ridículo y un par de horas de procesamiento, puedo generar un vídeo en resolución 4K de un presidente declarando la guerra.",
      },
      {
        time: 37,
        
        text: "O de un líder de la oposición aceptando un soborno. La voz será exacta. Los microgestos faciales serán perfectos.",
      },
      {
        time: 46,
        
        text: "Y para cuando los verificadores de datos logren demostrar que el vídeo es falso, ya habrá dado la vuelta al mundo tres veces.",
      },
      {
        time: 55,
        
        text: "Habrá hundido los mercados financieros y habrá provocado disturbios en las calles. La verdad siempre llega tarde a la fiesta.",
      },
      {
        time: 64,
        
        text: "Pero el verdadero peligro no es que creamos un vídeo falso.",
      },
      {
        time: 69,
        
        text: "El verdadero peligro... es el dividendo del mentiroso.",
      },
      {
        time: 74,
        
        text: "Si todo puede ser falso, entonces los corruptos pueden decir que los vídeos reales de sus crímenes son simple inteligencia artificial.",
      },
      {
        time: 84,
        
        text: "Cuando la confianza en la realidad compartida se colapsa, el que grita más fuerte es el que decide qué es verdad.",
      },
    ],
  },
];

export default function Podcast() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 mt-42 px-6 md:px-12 mb-16">
        <Section title="Base de Datos: Audio">
          <div className="flex flex-col gap-12">
            {EPISODES.map((ep) => (
              <EpisodeCard key={ep.id} {...ep} />
            ))}
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
