import DownloadReport from '../informe/DownloadReport';

export default function Footer() {
  return (
    <footer className="border-t-4 border-white mt-auto overflow-hidden bg-brutal-accent text-white py-12">
      <div className="px-6 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
        <div>
          <h2 className="text-[8vw] leading-none font-black tracking-tighter">FIN DE LA<br/>TRANSMISIÓN</h2>
        </div>
        <DownloadReport />
        <div className="font-mono text-sm uppercase text-right">
          <p>© {new Date().getFullYear()} INFO:WARFARE</p>
          <p>La verdad es subjetiva.</p>
        </div>
      </div>

      <div className="px-6 mt-10 pt-6 border-t border-white/30 font-mono text-xs flex flex-col md:flex-row justify-between gap-4">
        <div className="flex flex-col gap-2">
          <p className="text-white font-bold uppercase tracking-widest mb-1">Atribución de recursos</p>
          <p>
            Vídeos —{' '}
            <a href="https://pixabay.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Pixabay</a>
            {' '}·{' '}
            <a href="https://www.pexels.com" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">Pexels</a>
            {' '}· Licencia libre, sin atribución requerida
          </p>
          <p className="text-white normal-case leading-relaxed max-w-lg">
            Este proyecto es de carácter estrictamente académico y sin ánimo de lucro. Si algún recurso audiovisual utilizado está sujeto a derechos de autor, contacta con nosotros para su atribución, modificación o eliminación inmediata.
          </p>
          <a href="mailto:jan.vizbb@gmail.com" className="text-white hover:underline hover:text-black transition-colors mt-1">
            jan.vizbb@gmail.com
          </a>
        </div>
        <div className="flex flex-col gap-1 md:text-right">
          <p className="text-white font-bold uppercase tracking-widest mb-1">Licencia del proyecto</p>
          <p>Contenido propio bajo</p>
          <a href="https://creativecommons.org/licenses/by-nc-sa/4.0/" target="_blank" rel="noopener noreferrer" className="underline hover:text-black transition-colors">CC BY-NC-SA 4.0</a>
          <p className="mt-1">Uso no comercial · Atribución requerida</p>
        </div>
      </div>
    </footer>
  );
}