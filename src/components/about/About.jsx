import React from "react";
import "./about.css";
import ME from "../../assets/me-about.JPG";
import { FaAward } from "react-icons/fa";
import { IoSchool } from "react-icons/io5";
import { BsFolderCheck } from "react-icons/bs";
const About = () => {
    return (
        <section id='about'>
            <h5>Get to Know</h5>
            <h2>About Me</h2>
            <div className="container about__container">
                <div className="about__me-image">
                    <img src={ME} alt="Saher Afrin Khan" />

                </div>
                <div className="about__content">
                    <div className="about__cards">
                        <article className="about__card">
                            <FaAward className="about_icon" />
                            <h5>Experience</h5>
                            <small>Striving to get one</small>
                        </article>
                        <article className="about__card">
                            <IoSchool className="about_icon" />
                            <h5>Education</h5>
                            <small>University of ALberta</small>
                        </article>
                        <article className="about__card">
                            <BsFolderCheck className="about_icon" />
                            <h5>Projects</h5>
                            <small>6 completed</small>
                        </article>
                    </div>
                    <p>
                        Hi, I’m Saher — a computer science student with a love for solving real-world problems through technology. I’ve created tools like a voice-based AI interview coach and a student support chatbot to help others access opportunities that I once struggled to find. Most of what I’ve built, I taught myself — diving deep into frameworks, APIs, and databases with nothing but curiosity and late-night determination.
                        <br /><br />
                        But this journey hasn’t been easy. I learned how isolating university can feel when you’re silently trying to hold everything together. That experience shaped who I am: someone who builds because she understands the pain points firsthand.
                        <br /><br />
                        Beyond the code, I care deeply about growth — not just professionally, but personally. I lift weights. I track progress. I journal. I believe showing up every day — whether to the gym or the keyboard — is how real transformation happens. I'm not someone who gives up easily. If it’s broken, I’ll fix it. If it’s hard, I’ll learn it.
                        <br /><br />
                        Right now, I’m on my own path — learning, building, failing, and starting again. I don’t have everything figured out, but I’m building with purpose, and I know exactly why I started.
                        <br /><br />
                        Let’s connect — not just about jobs or tech, but about vision, impact, and the fire that drives us.
                    </p>

                    <a href="#contact" className="btn btn-primary">Coffee & Chat</a>
                </div>
            </div>
        </section>
    );
};

export default About;