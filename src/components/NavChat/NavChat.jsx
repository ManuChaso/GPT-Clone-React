import './NavChat.css';

export default function NavChat({chat}){
    return (
        <li className='nav-chat'>{chat.name}</li>
    )
}