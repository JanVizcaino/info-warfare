import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-nobg.png';

const NAV_LINKS = [
  { name: 'Home', path: '/', isAccent: false },
  { name: 'Episodios', path: '/podcast', isAccent: false },
];

export default function Header() {
  return (
    <header className="fixed top-0 w-full z-50 border-b-2 border-white/20 bg-brutal-bg/80 backdrop-blur-md h-26">
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 py-4">
        <Link to="/" className="text-2xl font-black tracking-tighter hover:text-brutal-accent transition-colors mb-4 md:mb-0">
          <img src={logo} className='h-28'/>
        </Link>
        <ul className="flex gap-4 md:gap-8 text-sm font-bold tracking-widest uppercase">
          {NAV_LINKS.map((link, index) => (
            <li key={index}>
              <Link 
                to={link.path} 
                className={`px-4 py-2 transition-all ${
                  link.isAccent 
                    ? 'bg-brutal-accent text-white hover:bg-white hover:text-black' 
                    : 'hover:bg-white hover:text-black'
                }`}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}