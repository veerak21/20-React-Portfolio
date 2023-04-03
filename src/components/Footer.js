import React from "react";
import { VscGithubAlt } from "react-icons/vsc";
import { AiOutlineLinkedin } from "react-icons/ai";

function Footer() {
    return (
        <footer>
            <h2>Made by Veera K. Pagadala@</h2>
            <p>
                <ul>
                    <a href="https://github.com/veerak21">
                        <li className="logo">
                            <VscGithubAlt />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/veera-kalyani-pagadala-a1971224b/">
                        <li className="logo">
                            <AiOutlineLinkedin />
                        </li>
                    </a>
                </ul>
            </p>
        </footer>
    );
}

export default Footer;
