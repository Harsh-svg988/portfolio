import {useRef} from 'react';
import { Link } from 'react-router-dom';

function Header(){
    let homeRef = useRef(0);
    function displayUnderline(){
        homeRef.current.style.textDecoration = "underline";
    }
    return(
        
        <div className="Navbar">
            <div className="left">HK</div>
            <div className="right">
                <Link to ="/"className="rightContent">Home</Link>
                <Link to="/About" className="rightContent">About</Link>
                <Link to="/project" className="rightContent">Project</Link>
                <Link to="/resume" className="rightContent">Resume</Link>
                {/* <a href =""id="Project-Link" className="rightContent">Project</a>
                <a href =""id="Resume_Link" className="rightContent">Resume</a> */}
            </div>
        </div>
    )
}
export default Header;