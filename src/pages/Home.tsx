// src/pages/HomePage.tsx

import React from 'react';
import {ChatbotCard} from '../components/ChatbotCard'; 

export const Home: React.FC = () => {
  return (
    
    <div className="bg-slate-100 min-h-screen text-gray-800 font-sans">
      <main className="container mx-auto px-6 py-12 md:py-20">
        <section className="text-center mb-16 md:mb-24">
          <h1 
            className="
              text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 
              bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 
              text-transparent bg-clip-text
            "
          >
            Bienvenido a ChatVerse
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Explora un universo de conversaciones inteligentes. Elige tu asistente de IA y comienza a crear, aprender y resolver problemas como nunca antes.
          </p>
        </section>

        {/* --- Sección de Chatbots (Grid Responsivo) --- */}
        <section className="mb-16 md:mb-24">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            
            {/* Tarjeta de Chatbot 1 */}
            <ChatbotCard 
              iconName="ri-lightbulb-flash-line"
              title="Asistente Creativo"
              description="Genera ideas, escribe guiones, crea poemas y da rienda suelta a tu imaginación."
              linkTo="/chat/creative"
              gradientColor="from-blue-500 to-cyan-400"
            />
            
            {/* Tarjeta de Chatbot 2 */}
            <ChatbotCard 
              iconName="ri-code-s-slash-line"
              title="Experto en Código"
              description="Obtén ayuda con algoritmos, depura código y aprende nuevos lenguajes de programación."
              linkTo="/chat/developer"
              gradientColor="from-green-500 to-teal-400"
            />

            {/* Tarjeta de Chatbot 3 */}
            <ChatbotCard 
              iconName="ri-translate-2"
              title="Políglota Global"
              description="Traduce textos, practica idiomas y rompe las barreras de la comunicación."
              linkTo="/chat/translator"
              gradientColor="from-orange-500 to-amber-400"
            />

            {/* Tarjeta de Chatbot 4 */}
            <ChatbotCard 
              iconName="ri-bar-chart-2-line"
              title="Analista de Datos"
              description="Interpreta datos complejos, encuentra tendencias y obtén insights de negocio."
              linkTo="/chat/analyst"
              gradientColor="from-red-500 to-rose-400"
            />

          </div>
        </section>

        {/* --- Sección de Información Adicional --- */}
        <section className="bg-white rounded-2xl shadow-md p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 flex items-center justify-center">
            <i className="ri-sparkling-2-line mr-3 text-purple-600"></i>
            Tecnología de Vanguardia a tu Alcance
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Nuestra plataforma utiliza los modelos de lenguaje más avanzados para ofrecerte respuestas coherentes, precisas y contextualizadas. Cada chatbot está especializado para brindarte la mejor experiencia en su campo. La seguridad y la privacidad de tus conversaciones son nuestra máxima prioridad.
          </p>
        </section>
      </main>
    </div>
  );
};