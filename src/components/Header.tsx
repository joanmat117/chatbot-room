import { Link} from 'react-router-dom';
import { Logo } from './icons/Logo';
import { SidebarHeader } from './SidebarHeader';

export function Header() {
  

  return (
    <>
      {/* --- BARRA SUPERIOR (HEADER) --- */}
      <header className='sticky top-0 transition z-30 bg-slate-100'>
        <div className="md:mx-14 mx-auto flex justify-between items-center p-4">
          <div className="flex items-center gap-4">
            {/* Botón para abrir la sidebar */}
            <SidebarHeader/>
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-orbitron font-bold text-slate-800">Chatbot Room</span>
              <Logo className='size-8 text-primary-500'/>
            </Link>
          </div>
          <Link 
            to="/chat/omni" 
            className="hidden md:inline-block px-5 py-2 shadow text-secondary-500 border-x-3 border-secondary-500 font-medium rounded-full  hover:scale-95 hover:opacity-90 transition-all duration-300"
          >
            <i className='ri-chat-new-line mr-2 text-xl'></i>Chatear
          </Link>
        </div>
      </header>
      
    </>
  );
}