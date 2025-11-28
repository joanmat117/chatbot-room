export interface AiHistoryMessage {
    role: 'model' | 'user';
    parts: {
        text: string;
    }[];
}

export type AiHistory = AiHistoryMessage[];

export async function sendIA(history: AiHistory, systemMessage: string) {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const model = 'gemini-2.0-flash'; 
  const endpoint = `https://chatbot-room.vercel.app/api/proxy/?url=https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`; [3]

  const requestBody = {
    contents: history,
    generationConfig: {
      // Puedes añadir configuraciones adicionales aquí si las necesitas.
      // Por ejemplo:
      // temperature: 0.7,
      // maxOutputTokens: 800,
    
    },
    systemInstruction: {
        parts: [
            {
                text: systemMessage,
            }
        ]
    }
  };

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Error en la API de Gemini:', errorData);
      throw new Error(`Error en la API de Gemini: ${response.status} - ${errorData.error.message}`);
    }

    const data = await response.json();
    // La respuesta de la API de Gemini contiene 'candidates' y cada candidato tiene 'content'.
    // El texto generado suele estar en el primer candidato.
    if (data.candidates && data.candidates.length > 0 && data.candidates[0].content && data.candidates[0].content.parts && data.candidates[0].content.parts.length > 0) {
      return data.candidates[0].content.parts[0].text;
    } else {
      console.warn('La respuesta de la API de Gemini no contiene el formato esperado:', data);
      return 'No se pudo obtener una respuesta de texto.';
    }

  } catch (error) {
    console.error('Error al comunicarse con la API de Gemini:', error);
    throw error;
  }
}
