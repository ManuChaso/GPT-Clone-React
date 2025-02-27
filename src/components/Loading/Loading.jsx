import './Loading.css';

import gptIcon from '../../assets/icons/chatgpt.png';


export default function Loading(){
    return(
        <div className='message-loading'>
            <img className='loading-icon' src={gptIcon} alt="Loading icon"/>
        </div>
    )
}