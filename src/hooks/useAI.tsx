import { useCallback, useEffect, useState } from "react";
import { fetchAiApi } from "../services/fetchAiApi";

interface Params {
    prompt:string,
    system:string
}

export const useAI = ()=>{
    const [response, setResponse]=useState('')
    const [isLoading,setIsLoading]=useState(false)
    const [error,setError]=useState<Error|null>(null)

    const generateResponse = useCallback(async({prompt,system}:Params)=>{

        setIsLoading(true)
        setError(null)
        setResponse("")

        const processStream=async()=>{
            try {
            for await (const token of fetchAiApi({prompt,system})) {
                    setResponse(prev=>prev+=token)
            }
            } catch(e){
                setError(e as Error)
            } finally {
                setIsLoading(false)
        }
        }

        processStream()
        
    },[])

    return {response,isLoading,error,generateResponse}
}