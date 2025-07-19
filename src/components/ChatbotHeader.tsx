import { SidebarHeader } from './SidebarHeader';


export function ChatbotHeader() {
  return (
    <>
      {/* --- BARRA SUPERIOR (HEADER) --- */}
      <header className='transition z-30 bg-slate-100'>
        <div className="md:mx-14 mx-auto flex justify-between items-center p-2">
            {/* Botón para abrir la sidebar */}
            <SidebarHeader/>
            <div>

            </div>
            
          </div>
      </header>
    </>
  );
}