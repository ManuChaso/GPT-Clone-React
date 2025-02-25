import { useChat } from '../../context/chatContext';
import NavChat from '../NavChat/NavChat';
import './NavBar.css';



export default function NavBar(){
    const {state, dispatch} = useChat();


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
        <nav className='nav-bar'>
            <button onClick={createChat} className='new-chat'>New Chat</button>

            <ul className='chats-container'>
                {state.chatsArray.map((chat, i) => 
                    <NavChat key={i} chat={{name: chat.name, id: chat.id}}/>
                )}
            </ul>
        </nav>
    )
}