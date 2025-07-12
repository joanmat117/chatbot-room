// src/components/messages/AiMessage.tsx
import { useState, useRef, type ReactNode } from 'react';

/**
 * Muestra un mensaje recibido de la IA.
 * Incluye un botón para copiar el contenido del mensaje.
 */
export function AiMessage({ children }: { children: ReactNode }) {
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
    <div className="flex w-full">
      <div className="max-w-xl md:max-w-2xl w-full flex gap-2 relative group">
        <div className="flex-shrink-0 size-8 rounded-full shadow-md bg-slate-100 text-black flex items-center justify-center self-start">
          <i className="ri-robot-2-line text-ls"></i>
        </div>
        <div className="bg-slate-100 relative  rounded-2xl rounded-bl-lg ">
          
          <div ref={textRef} className="prose prose-sm prose-invert max-w-none">
            {children}
          </div>

          <button 
          onClick={handleCopy}
          className="text-slate-400 mt-2 transition-all"
          aria-label="Copiar mensaje"
        >
          {isCopied ? <i className="ri-check-line text-lg "></i> : <i className="ri-clipboard-line text-lg " ></i>}
        </button>
        </div>
        {/* El botón de copiar aparece al pasar el ratón por el mensaje */}
        
      </div>
    </div>
  );
}