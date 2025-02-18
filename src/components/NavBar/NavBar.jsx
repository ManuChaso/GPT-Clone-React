import NavChat from '../NavChat/NavChat';
import './NavBar.css';



export default function NavBar(){

    return(
        <nav className='nav-bar'>
            <button className='new-chat'>New Chat</button>

            <ul className='chats-container'>
                <NavChat chat={{name: "Nuevo chaaaaaaaaaaaaaaaaaaaaaaaaat", id: 1}}/>
            </ul>
        </nav>
    )
}