// src/components/messages/UserMessage.tsx
import { useContext, type ReactNode } from 'react';
import { ChatbotContext } from '../../contexts/ChatbotContext';

interface Props {
  children:ReactNode
}

export function UserMessage({ children}:Props){
  const chatbot = useContext(ChatbotContext)
  

  return (
    <div className="flex justify-end w-full animate-slide-in-blurred-right">
      <div 
      style={{
        backgroundColor: chatbot.secondaryColor
      }}
      className="max-w-[90%] md:max-w-2xl w-fit flex justify-end gap-3 text-white px-4 py-2 rounded-xl rounded-tr-md text-md prose prose-sm prose-invert">
            {children}
      </div>
    </div>
  );
}
