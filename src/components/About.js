import React from "react";
import profileImg from "../assets/profile.jpg";
import { Helmet } from 'react-helmet-async';
function About() {
    return (
        <><Helmet>
            <title>VeeraK. Pagadala's Portfolio |  </title>
            <meta name="description" content="From Helmet"></meta>

        </Helmet>

            <section id="about-me" className="my-5 intro">
                <div className="flex-row">
                    <h1 id="about" className="section-title">
                        About Me
                    </h1>
                </div>
                <div className="flex-row">
                    <div className="intro-info">
                        <div className="intro-img">
                            <img src={profileImg} style={{ width: "100%" }} alt="profile" />
                        </div>
                        <p>
                            I am a certified full stack web developer from the University of Birmingham, Birmingham, UK. I employ HTML, CSS, React, Javascript and several other designing technologies in my pages. I have been trained in Oracle, MongoDB, and SQL and gained extensive experience in database management. Therefore, I am able to build and design visually appealing and comprehensive full portfolio websites that reflect database features. I use the grid and flexbox basics, and advanced interactions in my designs. I employ Visual Studio and GitHub to carefully inspect the steps of building, deployment and launching the sites. I have experience in designing webpages with responsive layouts that adapt to different devises and browser settings. Please visit my portfolio to gauge the extent of my designs and abilities.</p>

                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
