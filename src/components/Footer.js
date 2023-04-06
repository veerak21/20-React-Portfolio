import React from "react";

import { BsGithub } from 'react-icons/bs';
import { BsLinkedin } from 'react-icons/bs';
import { SiGmail } from 'react-icons/si';
import { BsTwitter } from 'react-icons/bs';
import { BsStackOverflow } from 'react-icons/bs';
function Footer() {
    return (
        <footer>
            <p>
                <ul>
                    <a href="https://github.com/veerak21">
                        <li className="logo">
                            <BsGithub />
                        </li>
                    </a>
                    <a href="https://www.linkedin.com/in/veera-kalyani-pagadala-a1971224b/">
                        <li className="logo">
                            <BsLinkedin />

                        </li>
                    </a>

                    <a href="https://twitter.com/VeeraWD">
                        <li className="logo">
                            <BsTwitter />

                        </li>
                    </a>
                    <a href="https://stackoverflow.com/users/21568128/veera-k-pagadala">
                        <li className="logo">
                            <BsStackOverflow />
                        </li>
                    </a>
                    <a href="mailto:pv.kallu@gmail.com">
                        <li className="logo">
                            <SiGmail />

                        </li>
                    </a>


                </ul>

            </p>
            <p>Powered by React.</p>
        </footer>
    );
}

export default Footer;
