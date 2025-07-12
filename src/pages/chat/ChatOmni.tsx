
import { UserMessage } from '../../components/messages/UserMessage';
import { AiMessage } from '../../components/messages/AiMessage';

// --- CONFIGURACIÓN DEL CHATBOT ---
// Para crear un nuevo chatbot, solo necesitas cambiar este objeto.
const botConfig = {
  name: "Code Expert",
  description: "Tu asistente personal para desarrollo y programación.",
  icon: "code-box",
  welcomeMessage: (
    <>
      <p>¡Hola! Soy <strong>Code Expert</strong>. Estoy aquí para ayudarte a depurar código, explicar algoritmos complejos o incluso escribir funciones enteras.</p>
      <p className="mt-2">¿En qué lenguaje estás trabajando hoy? Pega tu código o describe el problema que quieres resolver.</p>
    </>
  ),
};
// ------------------------------------


export default function ChatOmni() {
  return (
    // Contenedor principal de la interfaz
    <div className="relative  overflow-hidden rounded-2xl shadow-2xl h-full w-full">
      
      

      {/* --- ÁREA DE MENSAJES --- */}
      <main className="flex-1 w-full overflow-auto h-full p-4 md:p-6 space-y-8">
        
        {/* Mensaje de bienvenida de la IA */}
        <AiMessage>{botConfig.welcomeMessage}</AiMessage>
        
        {/* Ejemplo de un mensaje del usuario */}
        <UserMessage>
          <p>¿Puedes darme una función en JavaScript para saber si un número es primo?</p>
        </UserMessage>

        {/* Ejemplo de una respuesta de la IA con un bloque de código */}
        <AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage>
        
        <UserMessage>
            <p>Perfecto, ¡gracias!</p>
        </UserMessage>

      </main>

      {/* --- ÁREA DE ENTRADA DE TEXTO --- */}
      <footer className="flex-shrink-0 p-4 absolute bottom-0 left-0 w-full bg-slate-100 border-t border-slate-700">
        <div className="relative">
          <textarea
            placeholder={`Escribe un mensaje a ${botConfig.name}...`}
            className="w-full h-14 pr-20 p-4 bg-slate-50 text-slate-800 border border-slate-600 rounded-xl resize-none outline-none transition placeholder:text-slate-400"
            rows={1}
          />
          <button className="absolute right-4 top-1/2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-colors disabled:bg-slate-500">
            <i className="ri-send-plane-fill"></i>
          </button>
        </div>
        <p className="text-xs text-slate-500 text-center mt-2">
          ChatVerse puede cometer errores. Considera verificar la información importante.
        </p>
      </footer>
    </div>
  );
}