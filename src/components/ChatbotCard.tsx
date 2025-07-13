// src/components/ChatbotCard.tsx
import { Link } from 'react-router-dom';
import type { ComponentPropsWithoutRef, ReactHTMLElement, ReactNode } from 'react';

// --- Sub-componentes para Composición ---

const Head = ({ children,icon }: { children: ReactNode, icon:string }) => (
  <>
  <div className='flex items-center gap-2 shadow rounded-3xl'>
  <i className={`ri-${icon} text-slate-50 text-2xl transition-transform duration-300 flex items-center justify-center group-hover:scale-110 font-light border rounded-full size-10`}></i>
  <h3 className="text-2xl font-bold text-slate-50">{children}</h3>
  </div>
  </>
);

const Description = ({ children }: { children: ReactNode }) => (
  <p className="text-slate-100 flex-grow">{children}</p>
);

const Action = ({ children }: { children: ReactNode }) => (
  <div className=" border-t py-1 px-2 rounded-full text-sm font-medium text-slate-100 flex items-center transition-all shadow duration-300 ml-auto gap-x-2">
    {children} <i className="ri-arrow-right-line transition-opacity duration-300"></i>
  </div>
);

// --- Componente Principal ---

interface ChatbotCardProps extends ComponentPropsWithoutRef<'article'> {
  linkTo: string;
  gradientColor: [string,string];
  children: ReactNode;
};

/**
 * Tarjeta de presentación para un chatbot, construida con el patrón de composición.
 * El estilo principal "outlined" se logra con un borde de gradiente.
 */
export function ChatbotCard({ linkTo, gradientColor, children ,...rest}: ChatbotCardProps) {
  return (
    <article {...rest}  
    style={{
    background: `linear-gradient(to right, ${gradientColor[0]}, ${gradientColor[1]})`
  }}
    className={`rounded-xl shadow-md hover:shadow-xl hover:scale-95 transition`}>
      <Link to={linkTo} className="group block h-full py-4 px-5 rounded-[15px]">
        <div className="flex flex-col h-full gap-3">
          {children}
        </div>
      </Link>
    </article>
  );
}

// Asignamos los sub-componentes al componente principal
ChatbotCard.Head = Head;
ChatbotCard.Description = Description;
ChatbotCard.Action = Action;