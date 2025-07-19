// src/components/messages/AiMessage.tsx
import { useState, useRef, type ReactNode, useContext } from 'react';
import { ChatbotContext } from '../../contexts/ChatbotContext';

interface Props { 
  children: ReactNode,
  className?:string
}

export function AiMessage({ children,className}: Props) {
  const chatbot = useContext(ChatbotContext)

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
    <div className={`flex w-full ${className}`}>
      <div className="max-w-xl md:max-w-3xl w-full flex gap-2 relative group">
        <div 
        style={{color: chatbot.secondaryColor}}
        className="flex-shrink-0 size-8 rounded-full border-2 shadow-md text-white flex items-center justify-center self-start">
          <i className={`ri-${chatbot.icon} text-xl`}></i>
        </div>
        <div className="bg-slate-100 md:pl-2 relative  rounded-2xl rounded-bl-lg ">
          
          <div ref={textRef} className="markdown-text  prose prose-sm prose-invert ">
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