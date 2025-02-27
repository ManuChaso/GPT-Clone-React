import { memo } from 'react';
import { useChat } from '../../context/chatContext';
import './NavChat.css';

export const NavChat = memo(({chat}) => {
    const {state, dispatch} = useChat();

    const deleteChat = () => {
        dispatch({type: "REMOVE_CHAT", payload: chat.id})
    }

    const selectChat = () => {
        // if(!state.chats[chat.id]){
        //     dispatch({type: "ADD_MESSAGE", payload: {id: chat.id, message: ""}})
        // }

        dispatch({type: "SELECT_CHAT", payload: chat.id})
    }

    return (
        <li onClick={selectChat} className={state.currentChat === chat.id ? 'nav-chat selected' : 'nav-chat'}>{chat.name} <span onClick={deleteChat} className='delete-chat'>X</span></li>
    )
});