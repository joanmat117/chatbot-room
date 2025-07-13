import { Link } from 'react-router-dom';
import { CategoryHeader } from '../components/CategoryHeader';
import { ChatbotCard } from '../components/ChatbotCard';
import { chatbotsData } from '../data/chatbots';

export default function HomePage() {
  return (
    <main>
      <div className="container mx-auto px-6 py-12 md:py-24">
        
        <section className="text-center mb-20 md:mb-28">
          <h1 className="text-4xl font-orbitron sm:text-5xl md:text-6xl font-medium mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 from-40% to-60% text-transparent bg-clip-text">
            Bienvenido a Chatbot Room
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Explora un universo de conversaciones inteligentes. Elige tu asistente y comienza a crear, aprender y resolver problemas.
          </p>
        </section>

        <section className="mb-20 md:mb-28">
          <CategoryHeader
          title={
            
            <Link to='/chatbots'>
              <span className='underline '>Chatbots disponibles</span>
              <i className="ri-arrow-right-double-line"></i></Link>
          }
          description='Descubre el chatbot que necesitas'
          />
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {Object.entries(chatbotsData).slice(0,6).map(([chatbotId,chatbot]) => {
                            if (!chatbot) return null;
                            return (
                              <ChatbotCard
                                key={chatbotId}
                                linkTo={`/chat/${chatbotId}`}
                                gradientColor={[chatbot.primaryColor,chatbot.secondaryColor]}
                              >
                                <ChatbotCard.Head icon={chatbot.icon}>{chatbot.name}</ChatbotCard.Head>
                                <ChatbotCard.Description>{chatbot.description}</ChatbotCard.Description>
                                <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
                              </ChatbotCard>
                            );
                          })}
            
          
          </div>
        </section>

        <section className="bg-slate-50 border border-slate-200 rounded-2xl p-8 md:p-12 text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-800 mb-4 flex items-center justify-center gap-3">
            <i className="ri-sparkling-2-line text-secondary-500"></i>
            Tecnología a tu Alcance
          </h2>
          <p className="text-slate-600 leading-relaxed">
            Nuestra plataforma utiliza modelos de lenguaje avanzados para ofrecerte respuestas coherentes y contextualizadas. Cada chatbot está especializado para brindarte la mejor experiencia en su campo.
          </p>
        </section>
      </div>
    </main>
  );
}