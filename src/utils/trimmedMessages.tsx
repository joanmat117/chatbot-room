import type { MessagesType } from "../services/fetchAiApi";

export function trimMessages(messages: MessagesType, maxAssistantLength: number = 1400): MessagesType {
  // 1. Últimos 2 mensajes (ignorando 'system' si se quiere)
  const lastTwoMessages = messages.slice(-2);

  // 2. Recortar solo 'assistant' y manejar edge cases
  return lastTwoMessages.map(message => {
    if (message.role === "assistant") {
      return {
        ...message,
        content: maxAssistantLength <= 0 
          ? "" 
          : message.content.slice(0, maxAssistantLength) + (message.content.length > maxAssistantLength ? "... [recortado]" : "")
      };
    }
    return message;
  });
}