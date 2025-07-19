import { UserMessage } from './chat/UserMessage';
import { AiMessage } from './chat/AiMessage';
import { useContext, useEffect, useRef, useState, type FormEvent} from 'react';
import { useAI } from '../hooks/useAI';
import { ChatPlaceholder } from './chat/ChatPlaceholder';
import { SkeletonChatAi } from './skeletons/SkeletonChatAi';
import { ChatbotContext } from '../contexts/ChatbotContext';
import { scrollToBottom } from '../utils/scrollToBottom';
import { useRefChange } from '../hooks/useRefChange';
import { MDToHTML } from './MDToHTML';

type Message = {role: 'user' | 'assistant', content: string}
type Messages = Message[]
  
  export default function ChatbotMain() {

  //   States & Refs & Contexts
  const chatbot = useContext(ChatbotContext)
  const chatContainerRef = useRef<HTMLElement>(null)
  const [prompt,setPrompt]=useState('')
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const [messages,setMessages]=useState<Messages>([])
  const {response,isLoading,error,generateResponse,cancelGeneration} = useAI()

  
  //Execute when the chatbot change
  useRefChange(chatbot.name,()=>{
    cancelGeneration()
    sessionStorage.removeItem('messages')
    setMessages([])
  })
  
  
  //   Functions
  const addMessagesToChat = (role:'user' | 'assistant',content:string)=>{
    setMessages(prev => {
      const newMessages = prev[prev.length - 1] && prev[prev.length - 1].role !== role 
        ? [...prev, {role, content}]
        : [...prev.slice(0, -1), {role, content}];
      sessionStorage.setItem("messages", JSON.stringify(newMessages));
      return newMessages;
  });

  }
  
  const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!prompt || isLoading) return
    if(inputRef.current) inputRef.current.value = ""
    setMessages(prev=>[...prev,{role:'user',content:prompt}])
    generateResponse({prompt,system:chatbot.contextMessage,messages: messages})
  }

  //   Effects
  useEffect(()=>{
    if(error){
      if(error == "UnknownError") addMessagesToChat('assistant',"Reintentalo mas tarde, hubo un error")
      if(error == "NetworkError") addMessagesToChat('assistant',"Revisa tu conexion a internet")
    }
    if(response){
      addMessagesToChat('assistant',response)
    }
  },[response,error])

  useEffect(()=>{
    if(sessionStorage.getItem('messages')) 
      setMessages(JSON.parse(sessionStorage.getItem('messages') as string))
  },[])

  useEffect(()=>{
  scrollToBottom(chatContainerRef)
  },[messages])


  return (
    <>
      <main ref={chatContainerRef} className="animate-entering flex flex-col h-full w-full overflow-x-hidden scroll-smooth overflow-y-auto p-4 md:p-6 mb-32 space-y-8">
        
        {
          messages.length > 0?
          messages.map((message,index)=>{
            return message.role == 'user' ?
            <UserMessage key={index}>{message.content}</UserMessage> : 
            <AiMessage key={index}>
              <MDToHTML>
                {message.content}
                </MDToHTML>
              </AiMessage>
          }) :
          <ChatPlaceholder icon={chatbot.icon} name={chatbot.name}/>
        }

        {isLoading && messages.length > 0 && messages[messages.length - 1].role == 'user' && 
         (<AiMessage className="animate-slide-in-blurred-left">
          <SkeletonChatAi/>
         </AiMessage>)
        }

      </main>
      <footer className="fixed bottom-0 left-0 p-2 w-full bg-slate-100 z-10">
        <form 
        onSubmit={handleSubmit}
        className="relative max-w-[700px] mx-auto">
          <textarea
            ref={inputRef}
            name="prompt"
            autoComplete='off'
            onChange={(e)=>setPrompt(e.target.value)}
            style={{borderColor: chatbot.secondaryColor}}
            placeholder={`Escribe un mensaje a ${chatbot.name}...`}
            className="w-full h-full border-r-3 border-l-3 shadow pr-20 p-4  bg-slate-50 text-slate-800  border-slate-600 rounded-2xl [scrollbar-width:none] [-webkit-scrollbar]:hidden] resize-none outline-none transition placeholder:text-slate-400"
            rows={2}
          />
          <button 
          style={{backgroundColor:chatbot.secondaryColor}}
          disabled={!prompt&& true}
          className={`absolute right-4 text-white top-1/2 -translate-y-1/2 flex items-center justify-center text-2xl h-10 min-w-10 px-1  transition bg-transparent shadow-md rounded-full ${!prompt  ? 'opacity-30 cursor-not-allowed': 'active:scale-90 cursor-pointer'} `}>
            <i className="ri-arrow-up-double-line"></i>
          </button>
        </form>
        <p className="text-xs text-slate-500 text-center mt-2">
          Verifica la información importante.
        </p>
      </footer>

      </>
  );
}