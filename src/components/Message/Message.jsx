import './Message.css';

export default function Message({text, role = "user"}){
    return(
        <li className={`message ${role}`}>{text}</li>
    )
}