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
              className="text-2xl flex justify-center cursor-pointer transition hover:scale-95 items-center z-50 relative rounded-full shadow border-primary-600 size-10 border-r-2" 
              aria-label="Abrir menú" 
              aria-expanded={isMenuOpen}
            >
              <i className='ri-menu-2-line'></i>
            </button>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#f10000" stroke-linecap="round" stroke-linejoin="round" stroke-width="1.4" d="M12 6V2H8m0 16l-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Zm-6-6h2m5-1v2m6-2v2m5-1h2"/></svg>
              <span className="text-2xl font-orbitron font-bold text-slate-800">Chatbot Room</span>
            </Link>
          </div>
          <Link 
            to="/chat/creative" 
            className="hidden md:inline-block px-5 py-2 shadow text-secondary-500 border-x-3 border-secondary-500 font-medium rounded-full  hover:scale-95 hover:opacity-90 transition-all duration-300"
          >
            <i className='ri-chat-new-line mr-2 text-xl'></i>Chatear
          </Link>
        </div>
      </header>

      {/* --- SIDEBAR (SIEMPRE DISPONIBLE AL HACER CLICK) --- */}
      <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div onClick={() => setIsMenuOpen(false)} className={`absolute transition inset-0 ${isMenuOpen? 'bg-black/50' : 'bg-transparent'}`} aria-hidden="true"></div>
        
        <aside className={`absolute top-0 left-0 h-full w-72 bg-slate-100 shadow-xl transition-transform duration-300 ease-in-out flex flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Cabecera de la Sidebar con el botón de cierre */}
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <Link 
            to={"/"}
            className='text-2xl font-orbitron font-bold text-slate-800'
            >Chatbot Room</Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl flex justify-center items-center z-50 relative rounded-full shadow border-primary-600 size-10 border-l-2 cursor-pointer hover:scale-95 transition"
              aria-label="Cerrar menú"
            >
              <i className='ri-close-line'></i>
            </button>
          </div>
          
          {/* Contenedor de la navegación (con scroll) */}
          <div className="flex-grow overflow-y-auto p-4">
            <nav className="flex flex-col space-y-2 text-xl">
              <NavItem icon='home-line' to="/">Inicio</NavItem>
              <NavItem icon='chat-quote-line' to="/prompt_guide">Guia del Prompt</NavItem>

              {/* Menú Desplegable de Chatbots */}
              <div className="text-lg">

                <div className='flex gap-3'>
                <NavItem className='w-full' icon='robot-2-line' to='/chatbots'>Chatbots</NavItem>
                <button
                  onClick={() => setIsChatbotsMenuOpen(!isChatbotsMenuOpen)}
                  className="flex  w-fit text-left px-3 bg-slate-50 py-2 text-slate-600 hover:bg-slate-100 transition-colors duration-200 rounded-full shadow"
                  aria-expanded={isChatbotsMenuOpen}>
                  <i className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isChatbotsMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
                </div>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isChatbotsMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden p-1">
                    <div className="flex flex-col gap-1 text-3xl pt-2 pl-3">
                      <NavItem icon='compass-3-line' to="/chat/omni" className="text-base">Omni Assistant</NavItem>
                      <NavItem icon='translate-2' to="/chat/language" className="text-base">Language Coach</NavItem>
                      <NavItem icon='magic-line' to="/chat/creative" className="text-base">Creative Studio</NavItem>
                      <NavItem icon='book-2-line' to="/chat/academic" className="text-base">Academic Pro</NavItem>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
}