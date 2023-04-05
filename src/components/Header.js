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
                    {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

                    <h2>Welcome</h2>
                    <p>
                        Hello, I am Veera. Welcome to my portfolio
                        (built with React). Here, you can find a small sample of the projects that I worked on during the Web Developer course.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;