// src/pages/ChatbotsPage.tsx
import { CategoryHeader } from '../components/CategoryHeader';
import { ChatbotCard } from '../components/ChatbotCard';
import { chatbotsData } from '../data/chatbots'; 

export default function ChatbotsPage() {
  // Organizamos los chatbots por categorías
  const categories = [
    {
      title: "General y Creatividad",
      description: "Para tareas diarias, escritura, brainstorming y exploración de nuevas ideas.",
      chatbots: ['omni', 'creative', 'focus']
    },
    {
      title: "Desarrollo y Tecnología",
      description: "Herramientas especializadas para programadores, analistas y entusiastas de la IA.",
      chatbots: ['code', 'data', 'ai']
    },
    {
      title: "Conocimiento Profesional",
      description: "Asistentes entrenados en campos específicos como leyes, finanzas y salud.",
      chatbots: ['legal', 'finance', 'health']
    },
    {
      title: "Educación y Desarrollo Personal",
      description: "Acelera tu aprendizaje, mejora tus habilidades de comunicación y avanza en tu carrera.",
      chatbots: ['academic', 'language', 'career']
    }
  ];

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <main className="space-y-12 md:space-y-16 animate-entering">

        <section className='h-screen max-h-[700px] overflow-hidden relative bg-gradient-to-r from-slate-950 via-slate-800 to-slate-800 py-52 md:to-slate-950 via-70% flex items-center justify-end rounded-4xl'>
          <div className="w-full h-full bg-pattern-stars absolute top-0 left-0 flex justify-center flex-col p-4 md:p-12 lg:p-16 gap-5">
            <h1 className="text-4xl font-orbitron md:text-5xl font-medium text-slate-50 leading-16">
              Un Universo de Asistentes a tu Disposición
            </h1>
            <p className="text-base md:text-lg text-slate-100 max-w-3xl">
              Cada uno de nuestros chatbots es un experto en su campo. Explora las categorías y elige la herramienta perfecta para potenciar tu trabajo y tu creatividad.
            </p>
            <span className='absolute bottom-0 right-0 text-sm rounded-full bg-black/30 py-2 px-3 text-white m-6'>Powered by Gemini</span>
          </div>
        </section>

        {categories.map((category) => (
          <section key={category.title}>
            <CategoryHeader
              title={category.title}
              description={category.description}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {category.chatbots.map((chatbotId) => {
                const chatbot = chatbotsData[chatbotId as keyof typeof chatbotsData];
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
        ))}

      </main>
    </div>
  );
}
