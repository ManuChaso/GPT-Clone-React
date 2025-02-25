import { useEffect, useReducer, createContext, useContext } from "react";

export const initialState = {
    chatsArray: JSON.parse(localStorage.getItem('chats-array')) || [],
    chats: JSON.parse(localStorage.getItem('chats')) || {},
    currentChat: 1
}


export function chatReducer(state, action){
    switch(action.type){
        case "ADD_CHAT": 
            const newChats = [...state.chatsArray, action.payload];
            return {...state, chatsArray: newChats}

        case "REMOVE_CHAT": 
            const filteredChats = state.chatsArray.filter(chat => chat.id !== action.payload);
            const {[action.payload]: removed, ...update} = state.chats;
            return {chatsArray: filteredChats, chats: update}

        case "ADD_MESSAGE":
            const {id, message} = action.payload;
            return {
                ...state,
                chats: {
                    ...state.chats,
                    [id]:{ 
                        ...state.chats[id],
                        messages: [...(state.chats[id]?.messages || []), message]}
                }
            }

        case "SELECT_CHAT":
            return {...state, currentChat: action.payload}

        default: 
            return state
    }
}
