import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section about">
                    <h1 className="logo-text">Harsh Kumar</h1>
                    <p>
                        I'm a Full Stack Developer and a student of Computer Science and Engineering.
                    </p>
                    <div className="contact">
                        <span><FontAwesomeIcon icon={faPhone} /> &nbsp; 123-456-789</span>
                        <span><FontAwesomeIcon icon={faLinkedin} /> &nbsp; LinkedIn</span>
                        <span><FontAwesomeIcon icon={faEnvelope} /> &nbsp; example@example.com</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
