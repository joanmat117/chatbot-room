import { Link } from 'react-router-dom';
import { CategoryHeader } from '../components/CategoryHeader';
import { ChatbotCard } from '../components/ChatbotCard';

export function HomePage() {
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
          title='Chatbots disponibles'
          description='Descubre el chatbot que necesitas'
          />
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            <ChatbotCard linkTo="/chat/omni" gradientColor="from-indigo-500 to-purple-600">
              <ChatbotCard.Head icon='compass-3-line'>Omni Assistant</ChatbotCard.Head>
              <ChatbotCard.Description>Resuelve cualquier tema, desde ciencia hasta arte, con conocimiento integral.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/developer" gradientColor="from-sky-400 to-blue-500">
              <ChatbotCard.Head icon='code-box-line'>Code Expert</ChatbotCard.Head>
              <ChatbotCard.Description>Depura código, explica algoritmos y enseña lenguajes de programación.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/legal" gradientColor="from-purple-500 to-indigo-600">
              <ChatbotCard.Head icon='scales-line'>Legal Pro</ChatbotCard.Head>
              <ChatbotCard.Description>Analiza contratos, explica leyes y ayuda con documentos jurídicos.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/health" gradientColor="from-emerald-400 to-teal-600">
              <ChatbotCard.Head icon='heart-pulse-line'>Health Companion</ChatbotCard.Head>
              <ChatbotCard.Description>Explica condiciones médicas, sugiere hábitos saludables y analiza síntomas.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/analytics" gradientColor="from-rose-400 to-red-500">
              <ChatbotCard.Head icon='bar-chart-box-line'>Data Analyst</ChatbotCard.Head>
              <ChatbotCard.Description>Interpreta datasets, genera visualizaciones y encuentra patrones ocultos.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>
            
            <Link className='h-full border rounded-xl shadow-md hover:shadow-xl hover:scale-95 bg-gradient-to-br font-orbitron from-slate-700 to-slate-600 transition flex items-center justify-center font-medium text-white text-2xl gap-4' to={'/chatbots'}>
            Ver Todos
            <i className='ri-arrow-right-double-fill'></i>
            </Link>
          
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