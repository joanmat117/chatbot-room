import { useState } from "react";
import { fetchAiApi } from "../services/fetchAiApi";

interface Params {
    prompt:string,
    system:string
}

export const useAI = async ({prompt,system}:Params)=>{
    const [tokens, setTokens]=useState('')
    for await (const token of fetchAiApi({prompt,system})) {
        setTokens(prev=>prev+=token)
    }
    return {response:tokens}
}