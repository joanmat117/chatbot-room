// src/components/Header.tsx

import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavItem } from './NavItem'; 

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatbotsMenuOpen, setIsChatbotsMenuOpen] = useState(true);
  const location = useLocation();

  // Efectos para controlar el cierre del menú y el scroll del body
  useEffect(() => { setIsMenuOpen(false) }, [location.pathname]);
  useEffect(() => { 
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; 
    return () => { document.body.style.overflow = 'auto' }; 
  }, [isMenuOpen]);

  return (
    <>
      {/* --- BARRA SUPERIOR (HEADER) --- */}
      <header className='sticky top-0 transition z-30 bg-slate-100'>
        <div className="md:mx-14 mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            {/* Botón para abrir la sidebar */}
            <button 
              onClick={() => setIsMenuOpen(true)} 
              className="text-2xl flex justify-center items-center z-50 relative rounded-full shadow border-primary-600 size-10 border-r-2" 
              aria-label="Abrir menú" 
              aria-expanded={isMenuOpen}
            >
              <i className='ri-menu-2-line'></i>
            </button>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <i className="ri-psychotherapy-line text-3xl text-primary-600"></i>
              <span className="text-2xl font-orbitron font-bold text-slate-800">ChatVerse</span>
            </Link>
          </div>
          <Link 
            to="/chat/creative" 
            className="hidden md:inline-block px-5 py-2 border-2 border-primary-600 font-semibold rounded-full bg-primary-600 text-white hover:scale-95 hover:opacity-90 transition-all duration-300"
          >
            Empezar
          </Link>
        </div>
      </header>

      {/* --- SIDEBAR (SIEMPRE DISPONIBLE AL HACER CLICK) --- */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        <div onClick={() => setIsMenuOpen(false)} className="absolute inset-0 bg-black/50" aria-hidden="true"></div>
        
        <aside className={`absolute top-0 left-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Cabecera de la Sidebar con el botón de cierre */}
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <Link 
            to={"/"}
            className='text-2xl font-orbitron font-bold text-slate-800'
            >ChatVerse</Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl flex justify-center items-center z-50 relative rounded-full shadow border-primary-600 size-10 border-l-2"
              aria-label="Cerrar menú"
            >
              <i className='ri-close-line'></i>
            </button>
          </div>
          
          {/* Contenedor de la navegación (con scroll) */}
          <div className="flex-grow overflow-y-auto p-4">
            <nav className="flex flex-col space-y-2 text-xl">
              <NavItem icon='home-line' to="/">Inicio</NavItem>
              <NavItem icon='article-line' to="/about">Acerca de</NavItem>

              {/* Menú Desplegable de Chatbots */}
              <div className="text-lg">
                <button
                  onClick={() => setIsChatbotsMenuOpen(!isChatbotsMenuOpen)}
                  className="flex items-center justify-between w-full text-left p-3 text-slate-600 hover:bg-slate-100 transition-colors duration-200 rounded-2xl shadow"
                  aria-expanded={isChatbotsMenuOpen}
                >
                  <span className="font-semibold flex items-center gap-3"><i className='ri-robot-2-line text-primary-600'></i>Chatbots</span>
                  <i className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isChatbotsMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isChatbotsMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <div className="flex flex-col gap-1 text-3xl pt-2 pl-3">
                      <NavItem icon='compass-3-line' to="/chat/omni" className="text-base">Omni Assistant</NavItem>
                      <NavItem icon='translate-2' to="/chat/language" className="text-base">Language Coach</NavItem>
                      <NavItem icon='magic-line' to="/chat/creative" className="text-base">Creative Studio</NavItem>
                      <NavItem icon='book-2-line' to="/chat/academic" className="text-base">Academic Pro</NavItem>
                      <NavItem className='text-base' to='/chatbots'>Ver mas...</NavItem>
                    </div>
                  </div>
                </div>
              </div>

              <NavItem icon='user-line' to="/contact">Contacto</NavItem>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}