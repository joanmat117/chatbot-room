import { createContext, type ReactNode, type SetStateAction } from "react";
import type { Chatbot } from "../data/chatbots";


export const ChatbotContext = createContext<Chatbot>({
    name: "AI Assistant",
    description: "Resuelve cualquier tema, solo pregunta y obten la respuesta al instante",
    icon: "emotion-happy-line",
    primaryColor: "#6366f1",
    secondaryColor: "#9333ea", 
    contextMessage:"Eres un asistente de IA perteneciente a una web llamada Chatbot Room"
  })

export function ChatbotContextProvider({children,value}:{children:ReactNode,value:Chatbot}){
    return (
        <ChatbotContext.Provider value={value}>
            {children}
        </ChatbotContext.Provider>
    )
}