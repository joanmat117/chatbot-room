import { UserMessage } from './chat/UserMessage';
import { AiMessage } from './chat/AiMessage';
import { useContext, useEffect, useRef, type FormEvent} from 'react';
import { useIA } from '../hooks/useAI';
import { ChatPlaceholder } from './chat/ChatPlaceholder';
import { SkeletonChatAi } from './skeletons/SkeletonChatAi';
import { ChatbotContext } from '../contexts/ChatbotContext';
import { scrollToBottom } from '../utils/scrollToBottom';
import { useRefChange } from '../hooks/useRefChange';
import { MDToHTML } from './MDToHTML';

  export default function ChatbotMain() {

  //   States & Refs & Contexts
  const chatbot = useContext(ChatbotContext)
  const chatContainerRef = useRef<HTMLElement>(null)
  const inputRef = useRef<HTMLTextAreaElement>(null)
  const {history,isLoading,sendMessage,resetHistory} = useIA({iaKey:`ia-history-${chatbot.name}`,system:chatbot.contextMessage})

  
  //Execute when the chatbot change
  useRefChange(chatbot.name,()=>{
    resetHistory()
  })

  useEffect(()=>{
    if(history && history.length > 0 && history[history.length-1].role === 'user') scrollToBottom(chatContainerRef)
  },[history])
  
  
    
  const handleSubmit = async(e: FormEvent<HTMLFormElement>)=>{
    e.preventDefault()
    if(!inputRef.current) return
    const prompt = inputRef.current.value
    if(!prompt || isLoading) return
    inputRef.current.value = ""
    sendMessage(prompt)  
  }



  return (
    <>
      <main ref={chatContainerRef} className="animate-entering flex flex-col h-full w-full overflow-x-hidden scroll-smooth overflow-y-auto p-4 md:p-6 mb-32 space-y-8">
        
        {
          history.length > 0?
          history.map((message,index)=>{
            return message.role == 'user' ?
            <UserMessage key={index}>{message.parts[0].text}</UserMessage> : 
            <AiMessage key={index}>
              <MDToHTML>
                {message.parts[0].text}
                </MDToHTML>
              </AiMessage>
          }) :
          <ChatPlaceholder icon={chatbot.icon} name={chatbot.name}/>
        }

        {isLoading && history.length > 0 && history[history.length - 1].role == 'user' && 
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
