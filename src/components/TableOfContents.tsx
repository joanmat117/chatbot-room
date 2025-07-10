// src/components/TableOfContents.tsx
import { useState } from 'react';

const sections = [
  { id: 'definition', title: 'El Mapa para la Mente de la IA' },
  { id: 'pilars', title: 'Los 5 Pilares Esenciales' },
  { id: 'estructure', title: 'Anatomía de un Prompt Ideal' },
  { id: 'example', title: 'De Bueno a Genial' },
  { id: 'technics', title: 'Técnicas Avanzadas' },
  { id: 'antipatterns', title: 'Errores Comunes a Evitar' },
];

export function TableOfContents() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- Menú Desplegable para Móvil --- */}
      <div className="lg:hidden mb-10 border rounded-lg">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex justify-between items-center w-full p-4 font-bold text-slate-800"
        >
          <span><i className="ri-book-open-line mr-2"></i> Guía de la Página</span>
          <i className={`ri-arrow-down-s-line text-2xl transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}></i>
        </button>
        <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <nav className="overflow-hidden">
            <ul className="p-4 pt-0 space-y-2">
              {sections.map(section => (
                <li key={section.id}>
                  <a href={`#${section.id}`} onClick={() => setIsOpen(false)} className="block p-2 rounded-md hover:bg-slate-100 text-slate-600">{section.title}</a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      {/* --- Barra Lateral Fija para Escritorio --- */}
      <aside className="sticky top-24 hidden lg:block">
        <h3 className="text-lg font-bold text-slate-800 mb-4">En esta guía</h3>
        <nav>
          <ul className="space-y-3">
            {sections.map(section => (
              <li key={section.id}>
                <a href={`#${section.id}`} className="text-slate-600 hover:text-primary-600 transition-colors text-sm font-medium border-l-2 border-slate-200 hover:border-primary-500 pl-4 block">
                  {section.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
}