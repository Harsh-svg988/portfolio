import { useEffect,useState} from "react";
function Typing({
    text ,
    typingSpeed = 100,
    deletingSpeed = 50
}){
    const [displayedText,setDisplayedText] = useState("");
    const [isDeleting,setisDeleting] = useState(false);
    const [Index,setIndex] = useState(0);


    useEffect(() =>{
        const handleTyping = () =>{
            if(!isDeleting){
                if(displayedText.length < text[Index].length){
                    setDisplayedText((prev) => prev + text[Index].charAt(displayedText.length));
                }
                else{
                    setisDeleting(true);
                }
            }
            else{
                if(displayedText.length != 0){
                    setDisplayedText((prev) => prev.slice(0,- 1));
                }
                else{
                    setisDeleting(false);
                    setIndex((prev) => (prev + 1) % text.length);
            }
        }
        };
        const timeout = setTimeout(
            handleTyping,
            isDeleting ? deletingSpeed : typingSpeed
        );
    }, [displayedText, isDeleting, Index, text, typingSpeed, deletingSpeed])
    return (
        <div className="typing-effect">
            {displayedText}
            {/* <span className="caret"></span>  */}
        </div>
    )
}
export default Typing;