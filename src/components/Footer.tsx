// src/components/Footer.tsx
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 py-12 flex flex-col items-center text-center gap-3">
        <Link to="/" className="flex items-center space-x-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#f10000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M12 6V2H8m0 16l-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-6-6h2m5-1v2m6-2v2m5-1h2"/></svg>
          <span className="text-2xl font-bold text-slate-800">Chatbot Room</span>
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
        <p className="text-sm text-slate-500">© {new Date().getFullYear()} Chatbot Room. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}