// src/hooks/useAI.ts

import { useState, useRef, useEffect, useCallback } from "react";
import { fetchAiApi, type MessagesType } from "../services/fetchAiApi";

interface Params {
    prompt: string;
    system: string;
    messages: MessagesType;
}

export const useAI = () => {
    const [response, setResponse] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<null | string>(null);

    // useRef para mantener una referencia al AbortController entre renders
    const abortControllerRef = useRef<AbortController | null>(null);

    // useEffect para la limpieza automática cuando el componente se desmonta.
    // Esto previene errores y fugas de memoria.
    useEffect(() => {
        return () => {
            abortControllerRef.current?.abort();
        };
    }, []);

    const generateResponse = useCallback(async ({ prompt, system ,messages}: Params) => {
        // Cancela cualquier solicitud en curso antes de iniciar una nueva.
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
        }

        // Crea un nuevo controlador para la solicitud actual.
        abortControllerRef.current = new AbortController();
        const signal = abortControllerRef.current.signal;

        setIsLoading(true);
        setError(null);
        setResponse("");

        try {
            const stream = fetchAiApi({ prompt, system , history: messages}, signal);
            
            for await (const token of stream) {
                setResponse(prev => prev + token);
            }

        } catch (e:any) {
            // Identifica si el error es por una cancelación intencionada.
            if (e.name === 'AbortError') {
                console.log("Solicitud abortada desde el hook.");
            } else if (e instanceof Error) {
                console.error("Error en la API: ", e);
                setError("Ocurrió un error de red.");
            } else {
                console.error("Error desconocido: ", e);
                setError("Ocurrió un error desconocido.");
            }
        } finally {
            setIsLoading(false);
            abortControllerRef.current = null;
        }
    }, []);

    // Función para cancelar la generación manualmente (ej: desde un botón).
    const cancelGeneration = useCallback(() => {
        if (abortControllerRef.current) {
            abortControllerRef.current.abort();
            setIsLoading(false);
        }
    }, []);

    return { response, isLoading, error, generateResponse, cancelGeneration };
};