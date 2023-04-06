import React, { useState } from "react";

// Here we import a helper function that will check if the email is valid
import { validateEmail } from "../utils/helpers";

function Contact() {
    // Create state variables for the fields in the form
    // We are also setting their initial values to an empty string
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [message, setMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e) => {
        // Getting the value and name of the input which triggered the change
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;

        // Based on the input type, we set the state of either email, username, and message
        if (inputType === "email") {
            setEmail(inputValue);
        } else if (inputType === "userName") {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        // Preventing the default behavior of the form submit (which is to refresh the page)
        e.preventDefault();

        // First we check to see if the email is not valid or if the userName is empty. If so we set an error message to be displayed on the page.
        if (!validateEmail(email) || !userName) {
            setErrorMessage("Email or Name is invalid");
            // We want to exit out of this code block if something is wrong so that the user can correct it
            return;
            // Then we check to see if the message is not valid. If so, we set an error message regarding the message.
        }

        if (!setMessage(message)) {
            setErrorMessage(`Message is required.`);
            return;
        }

        // If everything goes according to plan, we want to clear out the input after a successful submission.
        setUserName("");
        setEmail("");
        setMessage("");
    };

    return (
        <section id="contact-me" className="contact">
            <div className="flex-row">
                <h2 className="section-title secondary-border">Contact Me</h2>
            </div>
            {errorMessage && (
                <div className="my-6 p-3 text-white">
                    <p className="error-text">{errorMessage}</p>
                </div>
            )}

            <div className="contact-info">


                {/* contact form section  */}
                <div className="contact-form">

                    <form className="form">

                        <h4>Name</h4>
                        <input
                            value={userName}
                            name="userName"
                            onChange={handleInputChange}
                            type="text"
                            id="contact-name"
                            placeholder="Your Name"
                        />


                        <h4>Email</h4>
                        <input
                            value={email}
                            name="email"
                            onChange={handleInputChange}
                            type="email"
                            id="contact-email"
                            placeholder="Your Email"
                        />


                        <h4>Message</h4>
                        <textarea
                            value={message}
                            name="message"
                            onChange={handleInputChange}
                            type="message"
                            id="contact-message"
                            placeholder="Your Message"
                        />
                        <button type="button" onClick={handleFormSubmit}>
                            <h4>Submit</h4>
                        </button>
                    </form>
                </div>

            </div>

        </section>

    );
}

export default Contact;