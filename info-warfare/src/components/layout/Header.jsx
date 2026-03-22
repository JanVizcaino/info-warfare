import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo-nobg.png';

const NAV_LINKS = [
  { name: 'Home', path: '/', isAccent: false },
  { name: 'Episodios', path: '/podcast', isAccent: false },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 border-b-2 border-white/20 bg-brutal-bg/90 backdrop-blur-md">
      <nav className="flex justify-between items-center px-6 py-4">
        
        <Link to="/" className="text-2xl font-black tracking-tighter hover:text-brutal-accent transition-colors z-50 relative">
          <img src={logo} className="h-16 md:h-28 object-contain" alt="Logo Podcast" />
        </Link>

        <button 
          className="md:hidden z-50 relative p-2 text-white focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        <ul className={`
          flex flex-col md:flex-row gap-6 md:gap-8 text-sm font-bold tracking-widest uppercase
          absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto
          bg-brutal-bg md:bg-transparent
          pt-32 md:pt-0 px-6 md:px-0
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
        `}>
          {NAV_LINKS.map((link, index) => (
            <li key={index} className="w-full md:w-auto">
              <Link 
                to={link.path} 
                onClick={() => setIsMenuOpen(false)}
                className={`block text-center md:text-left px-4 py-4 md:py-2 transition-all ${
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