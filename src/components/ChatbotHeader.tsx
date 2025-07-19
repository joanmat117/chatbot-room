import { useContext } from 'react';
import { ChatbotContext } from '../contexts/ChatbotContext';
import { SidebarHeader } from './SidebarHeader';


export function ChatbotHeader() {
  const chatbot = useContext(ChatbotContext)
  return (
    <>
      {/* --- BARRA SUPERIOR (HEADER) --- */}
      <header className='transition z-30 bg-slate-100'>
        <div className="md:mx-14 mx-auto flex justify-between items-center gap-2 p-2">
            {/* Botón para abrir la sidebar */}
            <SidebarHeader/>
            <section
            style={{borderColor: chatbot.secondaryColor}}
            className='flex gap-3 items-center border-2 rounded-full overflow-hidden'>
            <p className='ml-3 hidden xl:block'>{chatbot.description}</p>
            <div style={{backgroundColor: chatbot.secondaryColor}} 
            className='rounded-full text-white flex  font-medium p-2 gap-2'>
            <i className={`ri-${chatbot.icon}`}></i>
            <h2>{chatbot.name}</h2>
            </div>
            </section>
            
          </div>
      </header>
    </>
  );
}