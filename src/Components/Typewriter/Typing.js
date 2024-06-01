


import { useEffect, useState } from 'react';
import './Typing.css'

function Typing({text,typingSpeed=100,deletingSpeed=50,duration=1000}){

    const [displayText,setDisplayedText] = useState("");
    const[isDeleting,setisdeleting] = useState(false);
    const[index,setIndex] = useState(0);
    
    useEffect(()=>{
        const handleTyping = ()=>{
            if(displayText.length==text[index].length){
                setTimeout(setisdeleting(true),duration)
            } else if(displayText.length==0 && isDeleting){
                setisdeleting(false);
                setIndex((prev)=> (prev+1)%text.length);
                
            }
            if(!isDeleting){
                setDisplayedText((prev)=>prev + text[index].charAt(displayText.length));
            } else{
                setDisplayedText((prev)=> prev.slice(0,-1));
            }


        };

        const timeout = setTimeout(handleTyping,isDeleting? deletingSpeed:typingSpeed);

        return () => clearTimeout(timeout)
    },[displayText,isDeleting,index,text,deletingSpeed,typingSpeed,duration]);

    return(
        <div className='typing-effect'>
            <span id='im'></span> {displayText}
            <span classNam="caret">|</span>
        </div>
    )
}

export default Typing;