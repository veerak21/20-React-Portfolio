import React from "react";
import { pdf } from "react-pdf";
import myResume from "../assets/files/Veera's CV.pdf";


function Resume() {
    return (
        <div>
            <section id="welcome-section" className="download-intro">
                <div className="flex-row">
                    <h2 className="section-title primary-border"> Resume</h2>
                </div>
                <div className="flex-row">
                    <div className="download-info">
                        <div className="download-text">
                            <a href={myResume} className="download-logo" download> Download myResume

                            </a>

                        </div>
                    </div>
                </div>
            </section>

            <section id="home-page-body" className="resume-body">
                <div className="article column1">
                    <p className="column-title">Font-End Proficiencies</p>
                    <p className="column-text">
                        <ul>

                            <li>HTML5</li>
                            <li>CSS</li>
                            <li>JavaScript</li>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>jQuery</li>
                            <li>GIT</li>
                        </ul>
                    </p>
                </div>

                <div className="article column2">


                    <p className="column-title">Back-End Proficiencies</p>
                    <p className="column-text">
                        <ul>

                            <li>Node.Js</li>
                            <li>Express.js</li>
                            <li>APIs</li>
                            <li>REST</li>
                            <li>Progressive Web Applications(PWA)</li>
                            <li>Model-View-Controller (MVC)</li>
                        </ul>
                    </p>
                </div>
                <div className="article column3">

                    <p className="column-title">Database Proficiencies</p>
                    <p className="column-text">
                        <ul>

                            <li>MySQL</li>
                            <li>NoSQL</li>
                            <li>Sequelize</li>
                            <li>MongoDB</li>
                            <li>GraphQL</li>

                        </ul>
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Resume;
