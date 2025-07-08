import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          
          {/* --- Copyright --- */}
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>© {new Date().getFullYear()} ChatVerse. Todos los derechos reservados.</p>
            <p className="text-sm">Creado con <i className="ri-heart-fill text-red-500"></i> y React.</p>
          </div>
          
          {/* --- Enlaces a Redes Sociales --- */}
          <div className="flex space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <i className="ri-twitter-x-line text-2xl"></i>
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <i className="ri-github-fill text-2xl"></i>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-300">
              <i className="ri-linkedin-box-fill text-2xl"></i>
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
};