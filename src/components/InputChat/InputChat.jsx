import { useEffect, useRef, useState } from 'react';
import './InputChat.css';

import plusIco from '../../assets/icons/plus.png';
import wwwIco from '../../assets/icons/www.png';
import bulbIco from '../../assets/icons/bulb.png';
import waveIco from '../../assets/icons/wave.png';

export default function InputChat({existChat, sendMessage, loading}){
    const inputRef = useRef(null);
    const [shift, setShift] = useState(false)

    // useEffect(() => {
    //     if(inputRef.current){
    //         console.log(inputRef.current.style.fontSize)
    //         // inputRef.current.style.height = `${inputRef.current.scrollHeight}px`;
    //     }
    // }, [shift])

    const handleKeyDown = (e) => {
       if(e.key === 'Enter' && !shift){
        send()
        if(inputRef.current){
            inputRef.current.style.height = `30px`;
        }
       }
       if(e.key === 'Shift'){
        setShift(true)
       }
    }

    const send = () => {
        if(inputRef.current && inputRef.current.value && !loading){
            sendMessage(inputRef.current.value, 'user');
            inputRef.current.value = '';
        }
    }

    return(
        <div className={existChat ? 'input-chat active' : 'input-chat inactive'}>
            {!existChat && <h3 className='input-title'>¿En qué puedo ayudarte?</h3>}
            <textarea onKeyDown={handleKeyDown} onKeyUp={(e) => e.key === 'Shift' && setShift(false)} ref={inputRef} type="text" placeholder='Envía un mensaje...'>
            </textarea>
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
        <div className={className ? `input-button ${className}`: 'input-button' } onClick={callback}><img src={ico} alt="" />{text && text}</div>
    )
}