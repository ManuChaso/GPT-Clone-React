import OpenAI from "openai";
import { useState } from "react";

const openai = new OpenAI({
    apiKey: import.meta.env.VITE_API_KEY,
    dangerouslyAllowBrowser: true
});

export default function useAi(){
    const [response, setResponse] = useState("");

    const fetchAi = async (message) => {
        const completion = await openai.chat.completions.create({
            model: "gpt-4o-mini",
            messages: [
                { role: "system", content: "You are a helpful assistant." },
                {
                    role: "user",
                    content: message,
                },
            ]
        });

        console.log(completion.choices[0].message.content)
        setResponse(completion.choices[0].message.content);
    }


    return [response, fetchAi]
}