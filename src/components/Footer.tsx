// src/components/Footer.tsx
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center gap-3">
        <Link to="/" className="flex items-center space-x-2">
          <i className="ri-psychotherapy-line text-3xl text-primary-600"></i>
          <span className="text-2xl font-bold text-slate-800">ChatVerse</span>
        </Link>
        <nav className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-slate-600">
          <Link to="/" className="hover:text-primary-600 transition-colors">Inicio</Link>
          <Link to="/about" className="hover:text-primary-600 transition-colors">Acerca de</Link>
          <Link to="/contact" className="hover:text-primary-600 transition-colors">Contacto</Link>
          <a href="#" className="hover:text-primary-600 transition-colors">Política de Privacidad</a>
        </nav>
        <div className="flex space-x-6">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">
            <i className="ri-twitter-x-line text-2xl"></i>
          </a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">
            <i className="ri-github-fill text-2xl"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary-600 transition-colors duration-300">
            <i className="ri-linkedin-box-fill text-2xl"></i>
          </a>
        </div>
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} ChatVerse. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}