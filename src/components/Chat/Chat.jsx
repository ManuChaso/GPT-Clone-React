import { useEffect, useRef, useState } from 'react';
import InputChat from '../InputChat/InputChat';
import Message from '../Message/Message';
import './Chat.css';
import AIMessage from '../AIMessage/AIMessage';
import useAi from '../../hooks/useAi';
import Loading from '../Loading/Loading';
import { useChat } from '../../context/chatContext';


export default function Chat(){
    const {state, dispatch} = useChat()

    const [messages, setMessages] = useState([]);
    const [response, fetchAi] = useAi();
    const [loading, setLoading] = useState(false);
    const chatRef = useRef(null)


    useEffect(() => {
        setMessages(state.chats[state.currentChat]?.messages || [])
    }, [state])

    const autoScroll = () => {
        if(chatRef.current){
            console.log(chatRef.current)
            chatRef.current.scrollTo(0, chatRef.current.scrollHeight)
        }
    }

    const sendMessage = async (text, role) => {
        const newMessage = {text, role};
        setMessages((prev) => [...prev, newMessage]);
        const exist = state.chatsArray.filter(chat => chat.id === state.currentChat);
        console.log(exist)
        if(!exist.length){
            dispatch({type:"ADD_CHAT", payload: {id: state.currentChat, name: "> New Chat"}})
        }
        dispatch({type: "ADD_MESSAGE", payload:{id: state.currentChat, message: newMessage}})
        autoScroll();
        setLoading(true)
        await fetchAi(text);
        setLoading(false)
    }

    useEffect(() => {
        response && setMessages((prev) => [...prev, {text: response, role: 'system'}]);
        dispatch({type: "ADD_MESSAGE", payload:{id: state.currentChat, message: {text: response, role: 'system'}}})
    }, [response]);


    return(
        <section className='chat-container'>
            <ul ref={chatRef} className='chat'>
                {messages?.map((message, i) => 
                   message.role === 'user' ? <Message key={i} text={message.text}/> : <AIMessage key={i} text={message.text} autoScroll={autoScroll}/>
                )}
                {loading && <Loading/>}
            </ul>
            <InputChat existChat={messages.length !== 0} sendMessage={sendMessage} loading={loading}/>
        </section>
    )
}