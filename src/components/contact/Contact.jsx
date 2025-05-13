import React from "react";
import "./contact.css";
import { AiTwotoneMail } from "react-icons/ai";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const Contact = () => {
    return (
        <section id='contact'>
            <h5>Get in Touch</h5>
            <h2>Contact</h2>

            <div className='container contact__container'>
                <div className='contact__options'>

                    {/* Email */}
                    <article className="contact__option">
                        <AiTwotoneMail className="contact__icon" />
                        <h4>Email</h4>
                        <h5>saherafrinkhan@gmail.com</h5>
                        <a href="mailto:saherafrinkhan@gmail.com" target="_blank" rel="noreferrer">
                            Send an Email
                        </a>
                    </article>

                    {/* LinkedIn */}
                    <article className="contact__option">
                        <BsLinkedin className="contact__icon" />
                        <h4>LinkedIn</h4>
                        <h5>Saher Afrin Khan</h5>
                        <a
                            href="https://www.linkedin.com/in/saherafrin-khan-0b0b3a1b2/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Connect on LinkedIn
                        </a>
                    </article>

                    {/* GitHub */}
                    <article className="contact__option">
                        <BsGithub className="contact__icon" />
                        <h4>GitHub</h4>
                        <h5>@saherafr</h5>
                        <a href="https://github.com/saherafr" target="_blank" rel="noreferrer">
                            View GitHub Profile
                        </a>
                    </article>

                </div>
            </div>
        </section>
    );
};

export default Contact;
