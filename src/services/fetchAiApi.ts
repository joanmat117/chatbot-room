import Together from "together-ai";

const together = new Together({apiKey:"9b3e196451cf663ffb4f8e5294c4cfa1257bdb9c6c5eff94b47887af64a4a2e4"});

interface Params {
  content: string,
  system:string,
  model:string
}

export async function fetchAiApi({content,system,model}:Params){
  const response = await together.chat.completions.create({
  messages: [
    {
      role: "system",
      content: system
    },
    {
      role: "user",
      content: content
    }
  ],
  model: model
});

  return response
}

