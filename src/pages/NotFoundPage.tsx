// src/pages/NotFoundPage.tsx
import { Link } from 'react-router-dom';

export const NotFoundPage: React.FC = () => {
  return (
    // Contenedor principal que centra todo vertical y horizontalmente
    // y ocupa toda la altura de la pantalla.
    <div className="
      flex items-center justify-center min-h-screen 
      bg-gray-100 text-gray-800 font-sans p-4
    ">
      <div className="text-center">
        
        {/* Icono divertido y grande para llamar la atención */}
        <i className="ri-ghost-smile-line text-8xl md:text-9xl text-purple-500 mb-6 block animate-bounce"></i>

        {/* Título "404" con un gradiente llamativo */}
        <h1 className="
          text-8xl md:text-9xl font-extrabold mb-4
          bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
          text-transparent bg-clip-text
        ">
          404
        </h1>
        
        {/* Encabezado principal */}
        <h2 className="text-3xl md:text-5xl font-bold mb-3">
          ¡Ups! Página no encontrada
        </h2>
        
        {/* Texto descriptivo y amigable */}
        <p className="text-lg text-gray-600 max-w-md mx-auto mb-8">
          Parece que te has perdido entre los chats. La página que buscas no existe o ha sido movida.
        </p>
        
        {/* Botón para volver al inicio */}
        <Link
          to="/"
          className="
            inline-flex items-center px-6 py-3
            bg-purple-600 text-white font-semibold
            rounded-lg shadow-md
            hover:bg-purple-700 hover:shadow-lg
            transition-all duration-300 ease-in-out
            transform hover:-translate-y-1
          "
        >
          <i className="ri-home-4-line mr-2"></i>
          Volver al Inicio
        </Link>
        
      </div>
    </div>
  );
};