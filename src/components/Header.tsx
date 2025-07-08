// src/components/Header.tsx

import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  // Efecto para cerrar el menú si cambia la ruta (navegación)
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Bloquea el scroll del body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    // Función de limpieza para restaurar el scroll si el componente se desmonta
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);


  const activeLinkStyle = {
    color: '#8b5cf6',
    fontWeight: '600',
  };

  const NavItem = ({ to, children }: { to: string, children: React.ReactNode }) => (
    <NavLink
      to={to}
      style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
      className="text-gray-600 hover:text-purple-600 font-medium transition-colors duration-300"
    >
      {children}
    </NavLink>
  );

  return (
    <>
      {/* ===== HEADER PRINCIPAL ===== */}
      <header className={`sticky top-0 z-40 ${isMenuOpen? 'bg-transparent' : 'bg-white/80 backdrop-blur-sm shadow-sm'} `}>
        <div className="container mx-auto flex justify-between items-center p-4">
          
          {/* --- Grupo Izquierdo: Menú Móvil y Logo --- */}
          <div className="flex items-center gap-4">
            {/* Botón de Menú Móvil (Hamburguesa Animada) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-3xl flex flex-col justify-around items-center z-50 relative"
              aria-label="Abrir menú"
            >
              <i className='ri-menu-fill'></i>
            </button>
            
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <i className="ri-psychotherapy-line text-3xl bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 text-transparent bg-clip-text"></i>
              <span className="text-2xl font-bold text-gray-800">ChatVerse</span>
            </Link>
          </div>

          {/* --- Navegación de Escritorio --- */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem to="/">Inicio</NavItem>
            <NavItem to="/about">Acerca de</NavItem>
            <NavItem to="/contact">Contacto</NavItem>
          </nav>

          {/* Botón Call to Action (visible solo en escritorio) */}
          <Link to="/chat/creative" className="hidden md:inline-block px-5 py-2 bg-purple-600 text-white font-semibold rounded-full shadow-md hover:bg-purple-700 transition-all duration-300 transform hover:scale-105">
            Empezar
          </Link>
        </div>
      </header>

      {/* ===== MENÚ LATERAL (SIDEBAR) PARA MÓVIL ===== */}
      <div 
        className={`fixed inset-0 z-30 transition-opacity duration-300 ease-in-out md:hidden ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        {/* Overlay */}
        <div 
          onClick={() => setIsMenuOpen(false)} 
          className="absolute inset-0 bg-black/50"
          aria-hidden="true"
        ></div>

        {/* Panel de la Sidebar */}
        <aside className={`absolute top-0 left-0 h-full w-72 bg-white shadow-xl transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 pt-20">
            <nav className="flex flex-col space-y-2">
              {['Inicio', 'Acerca de', 'Contacto'].map((item, index) => {
                const to = `/${item === 'Inicio' ? '' : item.toLowerCase().replace(' ', '-')}`;
                return (
                  <NavLink
                    key={item}
                    to={to}
                    className={`
                      text-xl font-medium text-gray-700 p-3 rounded-lg hover:bg-purple-50 hover:text-purple-700
                      transition-all duration-300
                      ${isMenuOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}
                    `}
                    style={({ isActive }) => ({
                      ...{ transitionDelay: `${150 + index * 50}ms` },
                      ...(isActive ? activeLinkStyle : {})
                    })}
                  >
                    {item}
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </aside>
      </div>
    </>
  );
};