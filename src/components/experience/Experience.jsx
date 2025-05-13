import React from "react";
import "./experience.css";
import { BiSolidCommentCheck } from "react-icons/bi";

const Experience = () => {
    return (
        <section id="experience">
            <h5>Skills I Have</h5>
            <h2>Experience</h2>

            <div className="container experience__container">

                {/* Programming Languages */}
                <div className="experience__language">
                    <h3>Programming Languages</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Python</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>JavaScript</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>SQL (MySQL / PostgreSQL)</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>C</h4>
                                <small className="text-light">Advanced</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>C++</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Java</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                    </div>
                </div>

                {/* Frameworks & Libraries */}
                <div className="experience__framework">
                    <h3>Frameworks & Tools</h3>
                    <div className="experience__content">
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>React</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Next.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Express.js</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Node.js</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Firebase</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>Tailwind CSS</h4>
                                <small className="text-light">Intermediate</small>
                            </div>
                        </article>
                        <article className="experience__details">
                            <BiSolidCommentCheck className="experience__details-icons" />
                            <div>
                                <h4>AWS (Lambda, S3, SNS)</h4>
                                <small className="text-light">Basic</small>
                            </div>
                        </article>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Experience;
