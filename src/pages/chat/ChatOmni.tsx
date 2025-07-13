
import { UserMessage } from '../../components/messages/UserMessage';
import { AiMessage } from '../../components/messages/AiMessage';
import { chatbotsData } from '../../data/chatbots';
import { useState, type FormEvent } from 'react';
import { useAI } from '../../hooks/useAI';

const chatbotPlaceholder = {
    name: "AI Assistant",
    description: "Resuelve cualquier tema, solo pregunta y obten la respuesta al instante",
    icon: "emotion-happy-line",
    primaryColor: "#6366f1",
    secondaryColor: "#9333ea", 
  } 
export const chatbot = chatbotsData.omni || chatbotPlaceholder


export default function ChatOmni() {

  const [prompt,setPrompt]=useState('')

  const handleSubmit=(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!prompt) return

    useAI({prompt: prompt,system:"hola"})

  }

  return (
    // Contenedor principal de la interfaz
    <>
      <main className="flex flex-col h-full w-full overflow-auto  p-4 md:p-6 mb-32 space-y-8">
        
        <AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage>
        <AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage><AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage><AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage><AiMessage>
          <p>¡Claro que sí! Aquí tienes una función optimizada en JavaScript para comprobar si un número es primo:</p>
          
          <p className="mt-2">Esta función es eficiente porque evita iterar sobre todos los números. ¿Necesitas que te la explique o la adapte?</p>
        </AiMessage>
      </main>
      <footer className="fixed bottom-0 left-0 p-2 w-full bg-slate-100 z-10">
        <form 
        onSubmit={handleSubmit}
        className="relative max-w-[700px] mx-auto">
          <textarea
            name="prompt"
            autoComplete='off'
            onChange={(e)=>setPrompt(e.target.value)}
            value={prompt}
            placeholder={`Escribe un mensaje a ${chatbot.name}...`}
            className="w-full h-full shadow pr-20 p-4 bg-slate-50 text-slate-800  border-slate-600 rounded-2xl [scrollbar-width:none] [-webkit-scrollbar]:hidden] resize-none outline-none transition placeholder:text-slate-400"
            rows={2}
          />
          <button 
          style={{backgroundColor:chatbot.secondaryColor}}
          disabled={!prompt&& true}
          className={`absolute right-4 text-white top-1/2 -translate-y-1/2 flex items-center justify-center h-10 min-w-10 px-1  transition bg-transparent shadow-md rounded-full ${!prompt ? 'opacity-30 cursor-not-allowed': 'active:scale-90 cursor-pointer'} `}>
            <i className="ri-send-plane-2-fill"></i>
          </button>
        </form>
        <p className="text-xs text-slate-500 text-center mt-2">
          Verifica la información importante.
        </p>
      </footer>

      </>
  );
}