// src/pages/ChatbotsPage.tsx
import { CategoryHeader } from '../components/CategoryHeader';
import { ChatbotCard } from '../components/ChatbotCard';

export function ChatbotsPage() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <main className="space-y-12 md:space-y-16">

        <section className='h-screen max-h-[700px] overflow-hidden relative bg-gradient-to-r from-slate-950  via-slate-800 to-slate-800 py-52 md:to-slate-950 via-70% flex items-center justify-end rounded-4xl' >
        <div className="w-full h-full bg-pattern-stars  absolute top-0 left-0 flex justify-center flex-col p-4 md:p-12 lg:p-16  gap-5">
          <h1 className="text-4xl font-orbitron md:text-5xl font-medium text-slate-50 leading-16">
            Un Universo de Asistentes a tu Disposición
          </h1>
          <p className="text-base md:text-lg text-slate-100 max-w-3xl">
            Cada uno de nuestros chatbots es un experto en su campo. Explora las categorías y elige la herramienta perfecta para potenciar tu trabajo y tu creatividad.
          </p>
          <span className='absolute bottom-0 right-0 text-sm rounded-full bg-black/30 py-2 px-3 text-white m-6'>Powered by Llama</span>
        </div>
        </section>

        <section>
          <CategoryHeader
            title="General y Creatividad"
            description="Para tareas diarias, escritura, brainstorming y exploración de nuevas ideas."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <ChatbotCard linkTo="/chat/omni" gradientColor="from-indigo-500 to-purple-600">
              <ChatbotCard.Head icon='compass-3-line'>Omni Assistant</ChatbotCard.Head>
              <ChatbotCard.Description>Resuelve cualquier tema, desde ciencia hasta arte, con conocimiento integral.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/creative" gradientColor="from-pink-400 to-rose-600">
              <ChatbotCard.Head icon='magic-line'>Creative Studio</ChatbotCard.Head>
              <ChatbotCard.Description>Genera ideas innovadoras, escribe contenido impactante y desarrolla estrategias creativas.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/productivity" gradientColor="from-gray-800 to-slate-950">
              <ChatbotCard.Head icon='timer-flash-line'>Focus Master</ChatbotCard.Head>
              <ChatbotCard.Description>Optimiza tu tiempo, crea rutinas efectivas y maximiza tu rendimiento diario.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>
          </div>
        </section>

        <section>
          <CategoryHeader
            title="Desarrollo y Tecnología"
            description="Herramientas especializadas para programadores, analistas y entusiastas de la IA."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <ChatbotCard linkTo="/chat/developer" gradientColor="from-sky-400 to-blue-500">
              <ChatbotCard.Head icon='code-box-line'>Code Expert</ChatbotCard.Head>
              <ChatbotCard.Description>Depura código, explica algoritmos y enseña lenguajes de programación.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/analytics" gradientColor="from-rose-400 to-red-500">
              <ChatbotCard.Head icon='bar-chart-box-line'>Data Analyst</ChatbotCard.Head>
              <ChatbotCard.Description>Interpreta datasets, genera visualizaciones y encuentra patrones ocultos.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/ai" gradientColor="from-fuchsia-500 to-pink-600">
              <ChatbotCard.Head icon='robot-line'>AI Specialist</ChatbotCard.Head>
              <ChatbotCard.Description>Explica conceptos de IA, modelos de ML y últimas tendencias tecnológicas.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>
          </div>
        </section>

        <section>
          <CategoryHeader
            title="Conocimiento Profesional"
            description="Asistentes entrenados en campos específicos como leyes, finanzas y salud."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <ChatbotCard linkTo="/chat/legal" gradientColor="from-purple-500 to-indigo-600">
              <ChatbotCard.Head icon='scales-line'>Legal Pro</ChatbotCard.Head>
              <ChatbotCard.Description>Analiza contratos, explica leyes y ayuda con documentos jurídicos.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/finance" gradientColor="from-blue-400 to-cyan-600">
              <ChatbotCard.Head icon='line-chart-line'>Finance Guru</ChatbotCard.Head>
              <ChatbotCard.Description>Optimiza inversiones, analiza mercados y planifica tu futuro económico.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/health" gradientColor="from-emerald-400 to-teal-600">
              <ChatbotCard.Head icon='heart-pulse-line'>Health Companion</ChatbotCard.Head>
              <ChatbotCard.Description>Explica condiciones médicas, sugiere hábitos saludables y analiza síntomas.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>
          </div>
        </section>

        <section>
          <CategoryHeader
            title="Educación y Desarrollo Personal"
            description="Acelera tu aprendizaje, mejora tus habilidades de comunicación y avanza en tu carrera."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            <ChatbotCard linkTo="/chat/academic" gradientColor="from-green-400 to-lime-600">
              <ChatbotCard.Head icon='book-2-line'>Academic Pro</ChatbotCard.Head>
              <ChatbotCard.Description>Resuelve problemas, explica teorías y ayuda con trabajos universitarios.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/language" gradientColor="from-amber-400 to-orange-500">
              <ChatbotCard.Head icon='translate'>Language Coach</ChatbotCard.Head>
              <ChatbotCard.Description>Corrige tu gramática, practica conversación y aprende idiomas interactivamente.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>

            <ChatbotCard linkTo="/chat/career" gradientColor="from-violet-400 to-purple-600">
              <ChatbotCard.Head icon='user-voice-line'>Career Navigator</ChatbotCard.Head>
              <ChatbotCard.Description>Descubre tu vocación, mejora tu perfil profesional y domina entrevistas.</ChatbotCard.Description>
              <ChatbotCard.Action>Iniciar Chat</ChatbotCard.Action>
            </ChatbotCard>
          </div>
        </section>

      </main>
    </div>
  );
}