import './AIMessage.css';
import Markdown from 'react-markdown';

import AiIcon from '../../assets/icons/chatgpt.png';
import copyIcon from '../../assets/icons/copy.png';
import likeIcon from '../../assets/icons/like.png';
import soundIcon from '../../assets/icons/sound.png';
import editIcon from '../../assets/icons/edit.png';
import { useEffect, useRef, useState } from 'react';
import MarkdownIt from 'markdown-it';
import highlightjs from 'markdown-it-highlightjs';
import 'highlight.js/styles/github-dark.css';

const mdParser = new MarkdownIt({
    html: true,
    linkify: true,
    typographer: true
}).use(highlightjs)

export default function AIMessage({text, autoScroll}){
    // const [message, setMessage] = useState("");
    const [animated, setAnimated] = useState(false)
    const messageRef = useRef(null)

    // useEffect(() => {
    //     !animated && animation()
    // }, []);


    // const animation = () => {
    //         setAnimated(true)
    //         let index = 0;
    //         const interval = setInterval(() => {
    //            messageRef.current && (messageRef.current.dangerouslySetInnerHTML += {__html: mdParser.render(text[index])})
    //             index++
    //             if(index >= (text.length)){
    //                 clearInterval(interval);
    //             }
    //             autoScroll()
    //         }, 20);
    // }

    return(
        <div className='message system'>
                <img className='message-icon' src={AiIcon} alt="AI icon" />
            <div className='message-content'>
                {/* <Markdown ref={messageRef}></Markdown> */}
                <p dangerouslySetInnerHTML={{__html: mdParser.render(text)}} ref={messageRef}></p>
                <ul className='message-buttons'>
                <li><img src={copyIcon} alt="Copy icon" /></li>
                <li><img src={likeIcon} alt="Like icon" /></li>
                <li><img className='reverse' src={likeIcon} alt="Unlike icon" /></li>
                <li><img src={soundIcon} alt="Sound icon" /></li>
                <li><img src={editIcon} alt="Edit" /></li>
            </ul>
            </div>
        </div>
    )
}