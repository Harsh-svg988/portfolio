import {useRef} from 'react';

function Header(){
    let homeRef = useRef(0);
    function displayUnderline(){
        homeRef.current.style.textDecoration = "underline";
    }
    return(
        <div className="Navbar">
            <div className="left">HK</div>
            <div className="right">
                <a href =""id="Home-Link" className="rightContent">Home</a>
                <a href =""id="About-Link" className="rightContent">About</a>
                <a href =""id="Project-Link" className="rightContent">Project</a>
                <a href =""id="Resume_Link" className="rightContent">Resume</a>
            </div>
        </div>
    )
}
export default Header;