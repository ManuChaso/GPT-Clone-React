import { useState } from 'react';
import InputChat from '../InputChat/InputChat';
import Message from '../Message/Message';
import './Chat.css';


export default function Chat(){
    const [messages, setMessages] = useState([])


    const sendMessage = (text, role) => {
        const newMessage = {text, role};

        setMessages((prev) => [...prev, newMessage]);
    }

    return(
        <section className='chat-container'>
            <ul className='chat'>
                {messages?.map(message => 
                    <Message text={message.text} role={message.role}/>
                )}
            </ul>
            <InputChat existChat={messages.length !== 0} sendMessage={sendMessage}/>
        </section>
    )
}