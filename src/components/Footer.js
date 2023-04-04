import React from "react";

import phoneImg from "../assets/phone.png";
import emailImg from "../assets/gmail.png";
import linkedinImg from "../assets/linkedin.png";
import twitterImg from "../assets/twitter.png";
import githubImg from "../assets/github.png";
function Footer() {
    return (
        <footer>

            <p>
                {/* <ul> */}
                <a href="https://github.com/veerak21">
                    {/* <li className="logo"> */}
                    <img src={githubImg} style={{ width: "2%" }} alt="github" />

                    {/* </li> */}
                </a>
                <a href="https://www.linkedin.com/in/veera-kalyani-pagadala-a1971224b/">
                    {/* <li className="logo"> */}
                    <img src={linkedinImg} style={{ width: "2%" }} alt="linkedin" />

                    {/* </li> */}
                </a>
                <a href="mailto:pv.kallu@gmail.com">
                    {/* <li className="logo"> */}
                    <img src={emailImg} style={{ width: "2%" }} alt="Email" />

                    {/* </li> */}
                </a>
                <a href="https://twitter.com/VeeraWD">
                    {/* <li className="logo"> */}
                    <img src={twitterImg} style={{ width: "2%" }} alt="Twitter" />

                    {/* </li> */}
                </a>
                <a href="tel:+44 (0)7425560625">
                    {/* <li className="logo"> */}
                    <img src={phoneImg} style={{ width: "1%" }} alt="Phone" />
                    {/* </li> */}
                </a>

                {/* </ul> */}
            </p>
        </footer>
    );
}

export default Footer;
