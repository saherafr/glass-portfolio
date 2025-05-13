import React from "react";
import "./footer.css";
// import {AiFillInstagram,AiFillLinkedin} from "react-icons/ai";

const Footer = () => {

    return (
        <footer>
            <a href="#top" className="footer__logo">Saher Afrin Khan</a>

            {/* <ul className="permalinks">
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About Me</a></li>
                <li><a href="#experiences">Experiences</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul> */}
            {/* <div className="footer__socials">
                
                <a href="https://www.instagram.com/saherafrin_khan/" ><AiFillInstagram/></a>
                <a href="https://www.linkedin.com/in/saherafrin-khan-0b0b3a1b2/" ><AiFillLinkedin/></a>
                </div> */}
                <div className="footer__copyright">
                    <small>&copy;Saher. All rights reserved</small>
                </div>
            </footer>
    )
}

export default Footer;