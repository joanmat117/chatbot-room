import { Link, useLocation } from "react-router-dom";
import { NavItem } from "./NavItem";
import { useState, useEffect} from "react";
import { chatbotsData } from "../data/chatbots";

export function SidebarHeader(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    // Efectos para controlar el cierre del menú y el scroll del body
    useEffect(() => { setIsMenuOpen(false) }, [location.pathname]);
    useEffect(() => { 
        document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto'; 
        return () => { document.body.style.overflow = 'auto' }; 
    }, [isMenuOpen]);
    const [isChatbotsMenuOpen, setIsChatbotsMenuOpen] = useState(true);


    return (
        <>
        <button 
            onClick={() => setIsMenuOpen(true)} 
            className="text-2xl flex justify-center cursor-pointer transition hover:scale-95 items-center relative rounded-full shadow border-primary-600 size-10 border-r-2" 
            aria-label="Abrir menu" 
            aria-expanded={isMenuOpen}
        >
            <i className='ri-menu-2-line'></i>
        </button>
        <div className={`fixed inset-0 z-40 transition-all duration-300 ease-in-out ${isMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}>
        <div onClick={() => setIsMenuOpen(false)} className={`absolute transition inset-0 ${isMenuOpen? 'bg-black/50' : 'bg-transparent'}`} aria-hidden="true"></div>
        
        <aside className={`absolute top-0 left-0 h-full w-72 bg-slate-100 shadow-xl transition-transform duration-300 ease-in-out flex z-30 flex-col ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          {/* Cabecera de la Sidebar con el botón de cierre */}
          <div className="p-4 border-b border-slate-200 flex justify-between items-center">
            <Link 
            to={"/"}
            className='text-2xl font-orbitron font-bold text-slate-800'
            >Chatbot Room</Link>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl flex justify-center items-center z-50 relative rounded-full shadow border-primary-600 size-10 border-l-2 cursor-pointer hover:scale-95 transition"
              aria-label="Cerrar menu"
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
                  aria-label="toggle submenu"
                  aria-expanded={isChatbotsMenuOpen}>
                  <i className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isChatbotsMenuOpen ? 'rotate-180' : ''}`}></i>
                </button>
                </div>
                
                <div className={`grid transition-all duration-300 ease-in-out ${isChatbotsMenuOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden p-1">
                    <div className="flex flex-col gap-1 text-3xl pt-2 pr-3">
                      {
                        Object.entries(chatbotsData).map(([chatbotId,chatbot],index)=>{
                          return <NavItem key={index} icon={chatbot.icon} to={`/chat/${chatbotId}`} className="text-sm">{chatbot.name}</NavItem>
                        })
                      }
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </aside>
      </div>
      </>
    )
}
