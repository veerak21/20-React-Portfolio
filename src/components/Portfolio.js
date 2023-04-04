import React from "react";
import weatherDashboardImg from "../assets/weather dashboard.png";
import pwdGenImg from "../assets/pwd generator.png";
import workdayPlannerImg from "../assets/workday planner.png";
import noteTakerImg from "../assets/note taker.png";
import worldVacationImg from "../assets/world vacation.png";
import textEditorImg from "../assets/text editor pwa.png";
import codingQuizImg from "../assets/coding quiz.png";
import teamGeneratorImg from "../assets/teamprofile generator.png"


function Portfolio() {
    return (
        <div>
            <section id="work" className="jobs">
                <div className="flex-row">
                    <h2 className="section-title secondary-border">Work</h2>
                </div>

                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://veerak21.github.io/weather-dashboard/">
                                {" "}
                                <img
                                    src={weatherDashboardImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>

                        </div>
                        <div className="job-text">
                            <h4>Weather Dashboard</h4>
                            <p>
                                This project presents a weather dashboard that will display the current day weather of the requested city. The weather details include temperature, humidity, wind speed and UV index. It also displays the next 5-day weather details. It lists the recently searched cities.This application retrives data using the OpenWeather API. This app will run in any browser and feature dynamically updated HTML, a CSS framework (Bootstarp) and JavaScript, powered by jQuery. It is presented with a clean, polished, and responsive user interface.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://veerak21.github.io/pwd-gen/">
                                {" "}
                                <img
                                    src={pwdGenImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Password Generator</h4>
                            <p>
                                This project was to present an application to generate a random password based on user-specified criteria. This app will run in a browser. I designed this using starter code (based on updated HTML, CSS) and added a JavaScript code. Its user interface is responsive and adapts to 500 and 690px screen sizes.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://veerak21.github.io/work-day-scheduler/">
                                {" "}
                                <img
                                    src={workdayPlannerImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Work-Day-Scheduler</h4>
                            <p>
                                This project presents a simple calendar application that allows a user to save events for each hour of the day. The application colour codes the current, past and future hour slots. It presents the scheduling hours from 9:00 AM to 5:00 PM. Each hour slot can be scheduled seperatly, which gets saved in the local storage.This app will run in any browser and feature dynamically updated HTML and a CSS framework (Bootstarp) and is powered by jQuery. It is presented with a clean, polished, and responsive user interface.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://intense-chamber-44315.herokuapp.com/ ">
                                {" "}
                                <img
                                    src={noteTakerImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Note Taker</h4>
                            <p>
                                This application is known as a Note Taker. It can be used to write and save notes, using an Express.js backend framework. It saves and retrieves noted data from a JSON file. Starter code has a frontend application.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://github.com/veerak21/Team-Profile-Generator ">
                                {" "}
                                <img
                                    src={teamGeneratorImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Team Profile Generator</h4>
                            <p>
                                This is a command-line application. Here, information about employees' roles in a software engineering team is input to generate an HTML webpage displaying person-specific summaries. It provides a quick access to the employee email ids and GitHub profiles.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://veerak21.github.io/world-vacation/ ">
                                {" "}
                                <img
                                    src={worldVacationImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>World Vacation</h4>
                            <p>
                                This project website has four pages. It opens with a landing page, with a navbar having links to the 'About', 'Search' and 'Reviews' pages. The 'About' page displays the project rationale and motivation.The 'Search' page displays a placeholder to search for the city. The city weather information is accessed through of the weather-related API's from OpenWeathermap.org and the demographic information is accessed through a relevant API. The 'Reviews' page displays customer feedback. The styling for these pages and the searched items' display is by the Tailwind CSS framework. The project is powered by JavaScript.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://veerak21.github.io/timed-coding-quiz/ ">
                                {" "}
                                <img
                                    src={codingQuizImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Timed Coding Quiz</h4>
                            <p>
                                This project presents a timed coding quiz with multiple-choice questions, which will run in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code. It is presented with a clean, polished, and responsive user interface. The project has a total of 5 questions with 4 choices each. Each question has a 15 sec time limit and countdown clock is displayed on the page. The scores are presented at the end for each user by their initials.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="job">
                    <div className="job-info">
                        <div className="job-img">
                            <a href="https://stormy-meadow-14463.herokuapp.com/ ">
                                {" "}
                                <img
                                    src={textEditorImg}
                                    className="my-2"
                                    style={{ width: "100%" }}
                                    alt=""
                                />
                            </a>
                        </div>
                        <div className="job-text">
                            <h4>Text Editor(PWA)</h4>
                            <p>
                                This application can create notes or code snippets with or without an internet connection. Therefore, it retrieves these notes for later use.
                            </p>
                        </div>
                    </div>
                </div>




            </section>
        </div>
    );
}


export default Portfolio;