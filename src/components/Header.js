import React from "react";
import Nav from "./Navbar";

function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className="flex-row px-1">
                    <div>
                        <h1>Veera K. Pagadala's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        ></Nav>
                    </div>
                </header>
            </section>
            <section className="hero">
                <div className="hero-cta">
                    <h2>Welcome</h2>
                    <p><b>
                        <h3>Hello, I am Veera... </h3></b></p>
                    <p>   Welcome to my portfolio. Here, you can find a small sample of the projects that I worked on during the Web Developer course.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;