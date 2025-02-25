import { createContext, useContext, useEffect, useReducer } from "react";

import {chatReducer, initialState} from '../reducers/chatReducer';

const ChatContext = createContext();


export function ChatProvider({children}){
    const [state, dispatch] = useReducer(chatReducer, initialState);

    useEffect(() => {
        // console.log(state)
        localStorage.setItem('chats-array', JSON.stringify(state.chatsArray))
        localStorage.setItem('chats', JSON.stringify(state.chats))
    }, [state])

    return(
        <ChatContext value={{state, dispatch}}>
            {children}
        </ChatContext>
    )
}

export function useChat(){
    return useContext(ChatContext)
}