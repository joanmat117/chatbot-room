import Together from "together-ai";

// API 2 : ed5a32a109fb206719fb2d8fa5c38998d6569547a365f3cb0d55ad332b3dc7c9

const together = new Together({apiKey:"ed5a32a109fb206719fb2d8fa5c38998d6569547a365f3cb0d55ad332b3dc7c9"});

interface Params {
  prompt: string,
  system:string
}

type MessagesType = Array<
    | { role: "system"; content: string }
    | { role: "user"; content: string }
    | { role: "assistant"; content: string }
  >

export async function* fetchAiApi({prompt,system}:Params){
try{
  
  const messages: MessagesType = [
    {
      role: "system",
      content: system
    },
    {
      role: "user",
      content: prompt
    }
  ]

  const response = await together.chat.completions.create({
  messages: messages,
  //meta-llama/Llama-3.3-70B-Instruct-Turbo-Free
  //deepseek-ai/DeepSeek-R1-0528
  //deepseek-ai/DeepSeek-R1-Distill-Llama-70B-free
  model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free',
  stream:true,

});

  if (!response) {
      throw new Error("No se recibió respuesta de la API");
    }

    for await (const token of response) {
      const content = token.choices[0]?.delta?.content ?? ''
      yield content
  }
} catch (e){
  throw e
}
}

