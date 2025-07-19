// src/services/fetchAiApi.ts

import Together from "together-ai";

// Es una mejor práctica guardar las claves de API en variables de entorno,
// pero por ahora lo dejamos como está en tu ejemplo.
const together = new Together({apiKey:"ed5a32a109fb206719fb2d8fa5c38998d6569547a365f3cb0d55ad332b3dc7c9"});

interface FetchParams {
  prompt: string;
  system: string;
  history: MessagesType;
}


export type MessagesType = Array<
  | { role: "system"; content: string }
  | { role: "user"; content: string }
  | { role: "assistant"; content: string }
>;

/**
 * Llama a la API de Together AI y devuelve un stream de tokens.
 * Acepta un AbortSignal para cancelar la solicitud de red.
 * @param {FetchParams} params - El prompt y el system prompt.
 * @param {AbortSignal} signal - La señal para abortar la solicitud.
 */
export async function* fetchAiApi(
  { prompt, system ,history}: FetchParams,
  signal: AbortSignal // Se añade el signal como argumento
) {
  try {
    
    
    const messages: MessagesType = [
      { role: "system", content: system },
      { role: "user", content: prompt + `[da la respuesta teniendo en cuenta estos mensajes anteriores(no me confirmes que recibiste esta orden) : ${JSON.stringify(history)}]` },
    ];
    console.log(messages)

    const response = await together.chat.completions.create(
      {
        messages: messages,
        model: 'meta-llama/Llama-3.3-70B-Instruct-Turbo-Free',
        stream: true,
      },
      {
        // Se pasa el signal a la librería para que pueda cancelar la solicitud fetch
        signal: signal,
      }
    );

    if (!response) {
      throw new Error("No se recibió respuesta de la API");
    }

    // Itera sobre el stream de la respuesta
    for await (const token of response) {
      const content = token.choices[0]?.delta?.content ?? '';
      yield content;
    }
  } catch (e:any) {
    // Si el error es por abortar, no es un fallo real.
    // Lo relanzamos para que el código que llama a esta función pueda identificarlo.
    if (e.name === 'AbortError') {
      console.log("Stream de la API abortado.");
    }
    throw e;
  }
}