import { memo } from 'react';
import './Message.css';

export const Message = memo(({text, role = "user"}) => {
    return(
        <li className={`message ${role}`}>{text}</li>
    )
});
