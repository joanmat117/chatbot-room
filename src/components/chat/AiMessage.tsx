// src/components/messages/AiMessage.tsx
import { useState, useRef, type ReactNode } from 'react';
import { chatbot } from '../../pages/chat/ChatOmni';

interface Props { 
  children: ReactNode
}

export function AiMessage({ children}: Props) {
  const [isCopied, setIsCopied] = useState(false);
  const textRef = useRef<HTMLDivElement>(null);

  const handleCopy = () => {
    if (textRef.current) {
      // Usa el texto plano para una copia limpia, sin formato HTML
      navigator.clipboard.writeText(textRef.current.innerText);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Resetea el estado después de 2 segundos
    }
  };

  return (
    <div className="flex w-full ">
      <div className="max-w-xl md:max-w-3xl w-full flex gap-2 relative group">
        <div 
        style={{background: chatbot.secondaryColor}}
        className="flex-shrink-0 size-8 rounded-full shadow-md text-white flex items-center justify-center self-start">
          <i className={`ri-${chatbot.icon} text-xl`}></i>
        </div>
        <div className="bg-slate-100 md:pl-2 relative  rounded-2xl rounded-bl-lg ">
          
          <div ref={textRef} className="prose prose-sm prose-invert max-w-none">
            {children}
          </div>

          <button 
          onClick={handleCopy}
          className="text-slate-400 mt-2 transition-all"
          aria-label="Copiar mensaje"
        >
          {isCopied ? <i className="ri-check-line text-lg "></i> : <i className="ri-file-copy-line text-lg cursor-pointer"></i>}
        </button>
        </div>
        {/* El botón de copiar aparece al pasar el ratón por el mensaje */}
        
      </div>
    </div>
  );
}