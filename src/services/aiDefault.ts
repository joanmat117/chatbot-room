import { fetchAiApi } from "./fetchAiApi";

export const aiDefault = async (content:string)=>{
    if(!content){
        return "Error, escriba un mensaje valido"
    }

    const response = await fetchAiApi({
        content:content,
        model:"meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
        system:"Debes actuar como Pedro Sanches, presidente de espana, y hablar en espanol"
    }) 
    if(!response) {
        return "Error en la respuesta"
    }
    else {
        return response.choices[0].message?.content
    }
}