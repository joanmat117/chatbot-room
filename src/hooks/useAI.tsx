import { useState } from "react";
import { fetchAiApi } from "../services/fetchAiApi";

interface Params {
    prompt: string,
    system: string
}

export const useAI = () => {
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    const generateResponse = async ({ prompt, system }: Params) => {
        setIsLoading(true);
        setError(null);
        setResponse("");

        try {
            for await (const token of fetchAiApi({ prompt, system })) {
                setResponse(prev => prev + token);
            }
        } catch (e) {
            console.log("Error en la API: ",e)
            if(e instanceof Error){
                setError("NetworkError")
            } 
            else {
                setError("UnknownError")
            }
        } finally {
            setIsLoading(false);
        }
    }

    return { response, isLoading, error, generateResponse };
};