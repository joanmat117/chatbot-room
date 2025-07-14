
import { UserMessage } from '../../components/chat/UserMessage';
import { AiMessage } from '../../components/chat/AiMessage';
import { chatbotsData, type Chatbot} from '../../data/chatbots';
import { useEffect, useRef, useState, type FormEvent } from 'react';
import { useAI } from '../../hooks/useAI';
import { IconLoading } from '../../components/icons/IconLoading';
import { ChatPlaceholder } from '../../components/chat/ChatPlaceholder';

const chatbotPlaceholder:Chatbot = {
    name: "AI Assistant",
    description: "Resuelve cualquier tema, solo pregunta y obten la respuesta al instante",
    icon: "emotion-happy-line",
    primaryColor: "#6366f1",
    secondaryColor: "#9333ea", 
    contextMessage:"Eres un asistente de IA perteneciente a una web llamada Chatbot Room"
  } 
export const chatbot = chatbotsData.ai || chatbotPlaceholder


export default function ChatOmni() {

  const [prompt,setPrompt]=useState('')
  const [messages,setMessages]=useState<Array<{role: 'user' | 'assistant', content: string}>>([])

  const chatContainerRef = useRef<HTMLElement>(null)
  const scrollChatToBottom=()=>{
    if(chatContainerRef.current){
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight
  }}

  const {response,isLoading,error,generateResponse} = useAI()

  
  const handleSubmit=async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!prompt || isLoading) return
    setMessages(prev=>[...prev,{role:'user',content:prompt}])
    generateResponse({prompt,system:chatbot.contextMessage})
    setPrompt('')
  }

  useEffect(()=>{
    if(error){
      alert(error)
      return
    }
    if(response){
      const lastmessage = messages[messages.length - 1]

      if(lastmessage && lastmessage.role == 'user'){
        setMessages(prev=>[...prev,{role:'assistant',content:response}])
      } 
      else {
        setMessages(prev=>[
          ...prev.slice(0,-1),
          {role:'assistant',content:response}
        ])
      }
    }
  },[response,error])

  useEffect(scrollChatToBottom,[messages])

  return (
    <>
      <main ref={chatContainerRef} className="flex flex-col h-full w-full overflow-x-hidden overflow-y-auto p-4 md:p-6 mb-32 space-y-8">
        
        {
          messages.length > 0?
          messages.map((message,index)=>{
            return message.role == 'user' ?
            <UserMessage key={index}>{message.content}</UserMessage> : 
            <AiMessage key={index}>{message.content}</AiMessage>
          }) :
          <ChatPlaceholder icon={chatbot.icon} name={chatbot.name}/>
        }

        {isLoading && messages[messages.length - 1].role == 'user' && 
         (<AiMessage><IconLoading className='w-8 h-fit'/></AiMessage>)
        }

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