import type { MessagesType } from "../services/fetchAiApi";

export function trimMessages(messages: MessagesType, maxAssistantLength: number = 1400): MessagesType {
  const lastTwoMessages = messages.slice(-2);

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
