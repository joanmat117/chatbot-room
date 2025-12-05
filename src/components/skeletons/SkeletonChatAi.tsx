import { useContext } from "react"
import { ChatbotContext } from "../../contexts/ChatbotContext"

export function SkeletonChatAi (){
    const chatbot = useContext(ChatbotContext)
    
    return (
        <div data-testid='skeleton-chat-ai' className="w-72 px-1 animate-pulse gap-2 flex flex-col">
            <div style={{backgroundColor:chatbot.secondaryColor}} className=" h-4 w-full rounded-full"></div>
            <div style={{backgroundColor:chatbot.secondaryColor}} className=" h-4 w-[80%] rounded-full"></div>
        </div>
    )
}
