import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin,faGithub} from '@fortawesome/free-brands-svg-icons';


function Footer() {
    const handleGitHubClick = () => {
        window.open('https://github.com/Harsh-svg988', '_blank');
    };
    const hadnleLinkedInClick =() =>{
        window.open('https://www.linkedin.com/in/harsh-kumar-5128a225a/', '_blank');
    };

    return (
        <footer className="footer">
            <div className="footer-content">Developed by Harsh Kumar</div>
            <div className="footer-content">Copyright © 2024 HK</div>
            <div className="icons">
                <div className="iconGit-hub" onClick={handleGitHubClick}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className="iconLinkedin" onClick={hadnleLinkedInClick}>
                    <FontAwesomeIcon icon={faLinkedin} />
                </div>
                <div className="iconLeetcode-profile"></div>
            </div>
        </footer>
    );
}

export default Footer;
