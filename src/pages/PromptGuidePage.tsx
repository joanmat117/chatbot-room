// src/pages/PromptGuidePage.tsx
import { TipCard } from '../components/TipCard';
import { PromptComparison } from '../components/PromptComparison';
import { TableOfContents } from '../components/TableOfContents';
import { CategoryHeader } from '../components/CategoryHeader'; 

export default function PromptGuidePage() {
  return (
    <div className="bg-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <main className="space-y-12 md:space-y-16">

          <section className='h-screen max-h-[700px] overflow-hidden relative bg-gradient-to-r from-slate-950  via-slate-600 to-slate-600 py-52 md:to-slate-950 via-70% flex items-center justify-end rounded-4xl'>
            <div className="w-full h-full bg-pattern-stars  absolute top-0 left-0 flex justify-center flex-col p-4 md:p-12 lg:p-16  gap-5">
              <h1 className="text-4xl font-orbitron md:text-5xl font-medium text-slate-50 leading-tight">
                Maestría en Prompts
              </h1>
              <p className="text-base md:text-lg text-slate-200 max-w-2xl">
                Aprende a comunicarte con la IA como un experto. Convierte tus ideas en resultados extraordinarios dominando el arte del prompt.
              </p>
            </div>
          </section>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-12">
            <div className="lg:col-start-4 lg:row-start-1">
              <TableOfContents />
            </div>

            <div className="lg:col-span-3 space-y-12 md:space-y-16">
              
              <section id="definition">
                <CategoryHeader
                  title="La Comunicación Estratégica con la IA"
                  description="El arte y la ciencia de formular peticiones precisas."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center bg-white p-6 rounded-2xl shadow-sm">
                  <div className="prose prose-lg max-w-none text-slate-600">
                    <p>Es fundamental comprender que la Inteligencia Artificial es una herramienta de gran potencia, cuyo funcionamiento es <span className='italic font-medium text-slate-800'>literal</span> y depende por completo de la información que se le proporciona.</p>
                    <p>El <strong className='text-primary-600'>Prompt Engineering</strong> se define como la metodología para formular peticiones precisas, transformando una idea abstracta en un conjunto de instrucciones claras y contextualizadas.</p>
                  </div>
                  <div>
                    <img src="https://miro.medium.com/v2/resize:fit:1400/1*bytrK3M-k2q94JzSSpdl0Q.jpeg" alt="Red neuronal abstracta" className="rounded-xl shadow-lg w-full h-full object-cover"/>
                  </div>
                </div>
              </section>
              
              <section id="pilars">
                <CategoryHeader
                  title="Los 5 Pilares de un Prompt Perfecto"
                  description="Interioriza estos conceptos y verás un cambio radical en tus resultados."
                />
                <div className="space-y-8">
                  <div className="p-6 rounded-2xl shadow-sm bg-slate-50">
                      <h4 className='font-bold text-lg text-slate-800 mb-2'>1. Claridad y Especificidad</h4>
                      <p className='text-slate-600 mb-4'>La ambigüedad es el enemigo. Define tu objetivo con precisión quirúrgica. Incluye cantidades, temas, y detalles que no dejen lugar a dudas.</p>
                      <PromptComparison badPrompt='Háblame de Roma.' badResponse='Roma es la capital de Italia...' goodPrompt='Describe 3 monumentos clave del Imperio Romano en Roma, explicando su propósito y estado actual en 100 palabras cada uno.' goodResponse='Genera descripciones detalladas...'/>
                  </div>
                  <div className="p-6 bg-slate-50 rounded-2xl shadow-sm">
                      <h4 className='font-bold text-lg text-slate-800 mb-2'>2. Asignación de Rol (Persona)</h4>
                      <p className='text-slate-600 mb-4'>Da a la IA un personaje y un punto de vista. Esto enfoca su tono, estilo y base de conocimientos, resultando en respuestas mucho más ricas.</p>
                      <PromptComparison badPrompt='Explica la inflación.' badResponse='La inflación es el aumento de precios...' goodPrompt='Actúa como un economista escribiendo para un periódico. Explica la inflación a un público no experto con una analogía.' goodResponse='Imagina que tu dinero es una pizza...'/>
                  </div>
                </div>
              </section>

              <section id="estructure">
                <CategoryHeader
                  title="Anatomía de un Prompt Ideal"
                  description="Un prompt de élite suele combinar estos 4 componentes clave."
                />
                <div className="bg-slate-50 rounded-2xl shadow-sm p-8 space-y-6 text-lg">
                    <p><strong className='text-primary-600'>1. Contexto/Rol:</strong> "Actúa como un guionista de Hollywood..."</p>
                    <p><strong className='text-primary-600'>2. Tarea Específica:</strong> "Escribe una sinopsis..."</p>
                    <p><strong className='text-primary-600'>3. Instrucciones Detalladas:</strong> "La sinopsis debe tener 3 párrafos..."</p>
                    <p><strong className='text-primary-600'>4. Formato de Salida:</strong> "Presenta el título en mayúsculas..."</p>
                </div>
              </section>
              
              <section id="example">
                <CategoryHeader
                  title="Poniéndolo Todo Junto: Un Caso Práctico"
                  description="Observa cómo la combinación de los pilares transforma el resultado."
                />
                <PromptComparison 
                  badPrompt="Hazme un post para redes sociales."
                  badResponse="Claro, aquí tienes un post: '¡No te pierdas nuestras ofertas!'"
                  goodPrompt="Actúa como un Community Manager experto para una cafetería artesanal. Crea un post para Instagram anunciando nuestro nuevo 'Latte de Otoño'. Usa un tono cercano, incluye 3 hashtags y una pregunta para generar interacción."
                  goodResponse={<>🍂 ¡El sabor del otoño ha llegado! 🍂 Envuelve tus manos en una taza de nuestro nuevo y delicioso Latte de Otoño... </>}
                />
              </section>
              
              <section id="technics">
                <CategoryHeader
                  title="Técnicas Avanzadas"
                  description="Lleva tus habilidades al siguiente nivel con estos métodos probados."
                />
                <div className="space-y-8 bg-slate-900 text-white p-8 rounded-2xl shadow-lg">
                  <div>
                    <h4 className="font-semibold text-lg text-primary-400">Chain of Thought (Cadena de Pensamiento)</h4>
                    <p className="text-slate-300">Pídele a la IA que "piense paso a paso". Esto la obliga a desglosar problemas complejos, mejorando drásticamente la lógica en sus respuestas.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg text-primary-400">Self-Correction (Autocorrección)</h4>
                    <p className="text-slate-300">Pide a la IA que revise su propia respuesta: "Primero, escribe el código. Luego, critícalo y busca errores. Finalmente, presenta la versión corregida."</p>
                  </div>
                </div>
              </section>
              
              <section id="antipatterns">
                <CategoryHeader
                  title="Errores Comunes a Evitar"
                  description="Conocer los antipatrones es tan importante como saber las buenas prácticas."
                />
                <div className="space-y-6">
                  <TipCard icon="question-answer" title="Prompts Vagos o de una Palabra">"Marketing", "Poema", "Código". Estos prompts carecen de intención y contexto, llevando a respuestas genéricas e inútiles.</TipCard>
                  <TipCard icon="chat-off" title="Asumir Conocimiento Previo">No asumas que la IA recuerda conversaciones pasadas. Vuelve a proporcionar la información clave en cada nuevo prompt si es necesario.</TipCard>
                  <TipCard icon="emotion-unhappy" title="Tono Excesivamente Complejo">Aunque la IA entiende el lenguaje natural, una estructura de frase enrevesada puede confundirla. La claridad es tu mejor aliada.</TipCard>
                </div>
              </section>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}