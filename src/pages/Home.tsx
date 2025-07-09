// src/pages/Home.tsx
import { ChatbotCard } from '../components/ChatbotCard';

export function Home() {
  return (
    <main>
      <div className="container mx-auto px-6 py-12 md:py-24">
        
        <section className="text-center mb-20 md:mb-28">
          <h1 className="text-4xl font-orbitron sm:text-5xl md:text-6xl font-medium mb-4 bg-gradient-to-r from-primary-600 to-secondary-500 from-40% to-60% text-transparent bg-clip-text">
            Bienvenido a ChatVerse
          </h1>
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto">
            Explora un universo de conversaciones inteligentes. Elige tu asistente y comienza a crear, aprender y resolver problemas.
          </p>
        </section>

        <section className="mb-20 md:mb-28">
          <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 gap-8">
            
            {/* Modelo General */}
            <ChatbotCard linkTo="/chat/omni" gradientColor="from-indigo-500 to-purple-600">
              <ChatbotCard.Head icon='compass-3-line'>Omni Assistant</ChatbotCard.Head>
              <ChatbotCard.Description>Resuelve cualquier tema, desde ciencia hasta arte, con conocimiento integral.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Desarrollo */}
            <ChatbotCard linkTo="/chat/developer" gradientColor="from-sky-400 to-blue-500">
              <ChatbotCard.Head icon='code-box-line'>Code Expert</ChatbotCard.Head>
              <ChatbotCard.Description>Depura código, explica algoritmos y enseña lenguajes de programación.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Legal */}
            <ChatbotCard linkTo="/chat/legal" gradientColor="from-purple-500 to-indigo-600">
              <ChatbotCard.Head icon='scales-line'>Legal Pro</ChatbotCard.Head>
              <ChatbotCard.Description>Analiza contratos, explica leyes y ayuda con documentos jurídicos.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Salud */}
            <ChatbotCard linkTo="/chat/health" gradientColor="from-emerald-400 to-teal-600">
              <ChatbotCard.Head icon='heart-pulse-line'>Health Companion</ChatbotCard.Head>
              <ChatbotCard.Description>Explica condiciones médicas, sugiere hábitos saludables y analiza síntomas.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Análisis de Datos */}
            <ChatbotCard linkTo="/chat/analytics" gradientColor="from-rose-400 to-red-500">
              <ChatbotCard.Head icon='bar-chart-box-line'>Data Analyst</ChatbotCard.Head>
              <ChatbotCard.Description>Interpreta datasets, genera visualizaciones y encuentra patrones ocultos.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Idiomas */}
            <ChatbotCard linkTo="/chat/language" gradientColor="from-amber-400 to-orange-500">
              <ChatbotCard.Head icon='translate'>Language Coach</ChatbotCard.Head>
              <ChatbotCard.Description>Corrige tu gramática, practica conversación y aprende idiomas interactivamente.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Finanzas */}
            <ChatbotCard linkTo="/chat/finance" gradientColor="from-blue-400 to-cyan-600">
              <ChatbotCard.Head icon='line-chart-line'>Finance Guru</ChatbotCard.Head>
              <ChatbotCard.Description>Optimiza inversiones, analiza mercados y planifica tu futuro económico.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Creatividad */}
            <ChatbotCard linkTo="/chat/creative" gradientColor="from-pink-400 to-rose-600">
              <ChatbotCard.Head icon='magic-line'>Creative Studio</ChatbotCard.Head>
              <ChatbotCard.Description>Genera ideas innovadoras, escribe contenido impactante y desarrolla estrategias creativas.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Carreras */}
            <ChatbotCard linkTo="/chat/career" gradientColor="from-violet-400 to-purple-600">
              <ChatbotCard.Head icon='user-voice-line'>Career Navigator</ChatbotCard.Head>
              <ChatbotCard.Description>Descubre tu vocación, mejora tu perfil profesional y domina entrevistas.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Académico */}
            <ChatbotCard linkTo="/chat/academic" gradientColor="from-green-400 to-lime-600">
              <ChatbotCard.Head icon='book-2-line'>Academic Pro</ChatbotCard.Head>
              <ChatbotCard.Description>Resuelve problemas matemáticos, explica teorías científicas y ayuda con trabajos universitarios.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* Productividad */}
            <ChatbotCard linkTo="/chat/productivity" gradientColor="from-gray-500 to-gray-700">
              <ChatbotCard.Head icon='timer-flash-line'>Focus Master</ChatbotCard.Head>
              <ChatbotCard.Description>Optimiza tu tiempo, crea rutinas efectivas y maximiza tu rendimiento.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>

            {/* IA Especializada */}
            <ChatbotCard linkTo="/chat/ai" gradientColor="from-fuchsia-500 to-pink-600">
              <ChatbotCard.Head icon='robot-line'>AI Specialist</ChatbotCard.Head>
              <ChatbotCard.Description>Explica conceptos de inteligencia artificial, modelos de ML y últimas tendencias tecnológicas.</ChatbotCard.Description>
              <ChatbotCard.Action>Abrir Asistente</ChatbotCard.Action>
            </ChatbotCard>
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