import Together from "together-ai";

const together = new Together({apiKey:"9b3e196451cf663ffb4f8e5294c4cfa1257bdb9c6c5eff94b47887af64a4a2e4"});

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
  model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free',
  stream:true,

});

try{
    for await (const token of response) {
      const content = token.choices[0]?.delta?.content ?? ''
      yield content
  }
} catch (e){
  throw e
}

}

