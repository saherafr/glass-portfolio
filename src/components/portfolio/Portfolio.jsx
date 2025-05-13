import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";

const data = [
    {
        id: 1,
        img: IMG1,
        title: "ScholarTrack — Student Support Chatbot",
        desc: "An AI-powered platform for UAlberta students to discover financial aid, wellness services, and more. Inspired by personal struggles. Built with a Flask backend, PostgreSQL, and local LLMs (Ollama).",
        stack: "Flask · PostgreSQL · Ollama · Python",
        github: "https://github.com/saherafr/scholarTrack",
        demo: "https://scholartrack.vercel.app"
    },
    {
        id: 2,
        img: IMG2,
        title: "RecruiterAI — AI Mock Interview Coach",
        desc: "A voice-based mock interview simulator using Google Gemini + Vapi.ai with Firebase Auth. Offers feedback and performance scoring for jobseekers.",
        stack: "Next.js · Vapi.ai · Firebase · Gemini API",
        github: "https://github.com/saherafr/recruiterAI",
        demo: "https://preppwise.vercel.app"
    },
    {
        id: 3,
        img: IMG3,
        title: "EcoCart — Carbon Footprint Estimator",
        desc: "A lightweight AWS-powered tool that estimates the carbon impact of online purchases. Built to promote eco-conscious shopping.",
        stack: "Python · AWS Lambda · S3 · SNS",
        github: "https://github.com/saherafr/ecocart",
        demo: ""
    }
];

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>Things I’ve Built</h5>
            <h2>Featured Projects</h2>

            <div className='portfolio__container'>
                {data.map(({ id, img, title, desc, stack, github, demo }) => (
                    <article key={id} className='portfolio__item'>
                        <div className='portfolio__item-img'>
                            <img src={img} alt={title} />
                        </div>
                        <h3><b>{title}</b></h3>
                        <p><i>{desc}</i></p>
                        <small><b>Tech Stack:</b> {stack}</small>
                        <div className='portfolio__item-cta'>
                            <a href={github} className='btn' target='_blank' rel='noreferrer'>GitHub</a>
                            {demo && <a href={demo} className='btn btn-primary' target='_blank' rel='noreferrer'>Live Demo</a>}
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
};

export default Portfolio;
