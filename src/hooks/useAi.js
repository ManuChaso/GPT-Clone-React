import OpenAI from "openai";
import { useEffect, useState } from "react";
import { useChat } from "../context/chatContext";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function useAi(){
    const [response, setResponse] = useState("");
    const {state, dispatch} = useChat()


    useEffect(() => {
        response && dispatch({type: "ADD_MESSAGE", payload:{id: state.currentChat, message: {text: response, role: 'system'}}})
    }, [response])

    const fetchAi = async (message) => {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a talkative assistant who constantly questions what is said to you." },
                {
                    role: "user",
                    content: message,
                },
            ]
        });

        setResponse(completion.choices[0].message.content);
    }


    return [response, fetchAi]
}