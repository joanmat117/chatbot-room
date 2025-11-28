import { sendIA, type AiHistory } from "../services/ia-api";
import { useEffect, useState } from "react";

interface Params {
    system:string,
    iaKey:string
}

function getSessionHistory (historyKey:string):AiHistory{
    return JSON.parse(sessionStorage.getItem(historyKey)as string) || []
}
function setSessionHistory (text:AiHistory,historyKey:string){
    return sessionStorage.setItem(historyKey,JSON.stringify(text))
}

export function useIA({system,iaKey}:Params){
    const [history,setHistory] = useState<AiHistory>(getSessionHistory(iaKey))
    const [isLoading,setIsloading] = useState(false)

    useEffect(()=>{
        setSessionHistory(history,iaKey)
    },[history])

    useEffect(()=>{

        if(history && history.length > 0 && history[history.length-1].role === 'user'){
            const getIAResponse = async()=>{
                try {
                    setIsloading(true)
                    const res = await sendIA(history,system)as string
                    setHistory(prev=>[...prev,{
                        role:'model',
                        parts: [{text: res}]
                    }])
                } catch(e){
                    console.log(e)
                    setHistory(prev=>[...prev,{
                        role:'model',
                        parts: [{text: 'Hubo un error al obtener la respuesta :('}]
                    }])
                } finally {
                    setIsloading(false)
                }
            }
            getIAResponse()

        }

    }
    ,[history,system])

    const resetHistory = ()=>{
        setHistory([])
    }

    const sendMessage = (prompt:string)=>{
        if(isLoading) return
        setHistory(prev=>{

            if(prev){
            
            return [...prev,{
                role:'user',
                parts: [{text: prompt}]
                }]
            } else {
                return [{
                role:'user',
                parts: [{text: prompt}]
                }]
            }
    })
        
    }
    
    return {sendMessage,history,isLoading,resetHistory}
}
