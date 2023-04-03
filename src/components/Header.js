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
            <section class="hero">
                <div class="hero-cta">
                    {/* <img
            src={coverImage}
            className="my-2"
            style={{ width: "100%" }}
            alt="cover"
          /> */}

                    <h2>Welcome</h2>
                    <p>
                        Welcome to Veera K. Pagadala's portfolio page built with React.
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Header;