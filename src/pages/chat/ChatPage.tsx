import { ChatbotHeader } from "../../components/ChatbotHeader";
import { ChatbotContextProvider } from "../../contexts/ChatbotContext";
import type { Chatbot } from "../../data/chatbots";
import ChatbotMain from "../../components/ChatbotMain";

export default function ChatPage({chatbot}:{chatbot:Chatbot}){
    return(
        <ChatbotContextProvider value={chatbot}>
            <div className=" fixed w-screen h-dvh overflow-hidden flex flex-col justify-between">
            <ChatbotHeader/>
            <ChatbotMain/>
            </div>
        </ChatbotContextProvider>
    )
}