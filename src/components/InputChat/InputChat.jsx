import { useRef, useState } from 'react';
import './InputChat.css';

import plusIco from '../../assets/icons/plus.png';
import wwwIco from '../../assets/icons/www.png';
import bulbIco from '../../assets/icons/bulb.png';
import waveIco from '../../assets/icons/wave.png';

export default function InputChat({existChat, sendMessage}){
    const inputRef = useRef(null)

    const send = () => {
        if(inputRef.current){
            sendMessage(inputRef.current.value, 'system');
            inputRef.current.value = '';
        }
    }

    return(
        <div className={existChat ? 'input-chat active' : 'input-chat inactive'}>
            {!existChat && <h3 className='input-title'>¿En qué puedo ayudarte?</h3>}
            <input onKeyDown={e => e.key === 'Enter' && send()} ref={inputRef} type="text" placeholder='Envía un mensaje...'/>
            <div className='input-icons'>
                <InputButton ico={plusIco}/>
                <InputButton ico={wwwIco} text="Buscar"/>
                <InputButton ico={bulbIco} text="Razona"/>
                <InputButton ico={waveIco} className="send-button" callback={send}/>
            </div>
        </div>
    )
}


function InputButton({text, ico, callback, className}){
    return (
        <button className={className ? `input-button ${className}`: 'input-button' } onClick={callback}><img src={ico} alt="" />{text && text}</button>
    )
}