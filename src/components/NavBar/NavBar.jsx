import { useState } from 'react';
import { useChat } from '../../context/chatContext';
import {NavChat} from '../NavChat/NavChat';
import './NavBar.css';

import openIco from '../../assets/icons/open.png';

export default function NavBar(){
    const {state, dispatch} = useChat();
    const [navOpen, setNavOpen] = useState(true)


    const createChat = () => {
        console.log("Ahora")
        const id = state.chatsArray[state.chatsArray.length - 1]?.id || 0;
        console.log(id)
        const newChat = {
            id: id + 1,
            name: "New Chat"
        }

        dispatch({type: "ADD_CHAT", payload: newChat});
    }

    return(
        <nav className={navOpen ? 'nav-bar' : 'nav-bar hide'}>
            <button onClick={createChat} className='new-chat'>New Chat</button>

            <ul className='chats-container'>
                {state.chatsArray.map((chat, i) => 
                    <NavChat key={i} chat={{name: chat.name, id: chat.id}}/>
                )}
            </ul>
            <button onClick={() => setNavOpen(!navOpen)} className='open-nav'><img className={navOpen ? 'ico-open': 'ico-close'} src={openIco} alt="Open navBar menu"/></button>
        </nav>
    )
}