import React from "react";
import profileImg from "../assets/profile.jpg";
function About() {
    return (
        <section id="about-me" className="my-5 intro">
            <div class="flex-row">
                <h1 id="about" className="section-title">
                    About Me
                </h1>
            </div>
            <div className="flex-row">
                <div class="intro-info">
                    <div class="intro-img">
                        <img src={profileImg} style={{ width: "100%" }} alt="profile" />
                    </div>
                    <p>
                        I am a certified full stack web developer from the University of Birmingham, Birmingham, UK. I build and design visually appealing and comprehensive full portfolio websites. I use the grid and flexbox basics, and advanced interactions in my designs. I employ Visual Studio and GitHub to carefully inspect the steps of building, deployment and launching the sites. I have experience in designing webpages with responsive layouts that adapt to different devises and browser settings. I employ HTML, CSS and JavaScript technologies in my designs. I have been trained in Oracle and gained extensive experience in database management. Therefore, I am able to develop websites reflecting database features. Please visit my previous work to gauge the extent of my abilities.</p>

                </div>
            </div>
        </section>
    );
}

export default About;
