import React from "react";
import recipeforsuccessImg from "../assets/recipe for success.png";
import weatherDashboardImg from "../assets/weather dashboard.png";
import pwdGenImg from "../assets/pwd generator.png";
import workdayPlannerImg from "../assets/workday planner.png";
import noteTakerImg from "../assets/note taker.png";
import worldVacationImg from "../assets/world vacation.png";
import textEditorImg from "../assets/text editor pwa.png";
import codingQuizImg from "../assets/coding quiz.png";
import teamGeneratorImg from "../assets/teamprofile generator.png"
import { FiGithub } from 'react-icons/fi';
import { Helmet } from 'react-helmet-async';


function Portfolio() {
    return (
        <><Helmet>
            <title>VeeraK. Pagadala's Portfolio |  </title>
            <meta name="description" content="From Helmet"></meta>

        </Helmet>
            <div>
                <section id="work" className="jobs">
                    <div className="flex-row">
                        <h2 className="section-title ">Work</h2>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://recipe-for-success.herokuapp.com/" target=" ">
                                        <img
                                            src={recipeforsuccessImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>

                                    <a href="https://github.com/AlastairHafield/Recipe-For-Success" target=" ">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Recipe-For-Success</h4>
                                <p>
                                    The Recipe for Success (RFS) is a recipe-based application, that enables the food enthusiasts to browse and buy the pay-per-view recipies following their needs. The application is developed using GraphQl, MongoDB and is powered by React. Here, recipeis are catagorized into vegan, vegetarian and several free-from sections to facilitate the user choice. The database will soon be updated with cooking videos for each recipe and crowd-sourced recipies that ehance user experience.

                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://veerak21.github.io/weather-dashboard/" target=" ">
                                        <img
                                            src={weatherDashboardImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>

                                    <a href="https://github.com/veerak21/weather-dashboard" target=" ">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Weather Dashboard</h4>
                                <p>
                                    This is a weather dashboard displaying the current day weather of the requested city. The weather details include temperature, humidity, wind speed and UV index. It also displays the next 5-day weather details. It lists the recently searched cities.This application retrives data using the OpenWeather API. This app will run in any browser and feature dynamically updated HTML, a CSS framework (Bootstarp) and JavaScript, powered by jQuery. It is presented with a clean, polished, and responsive user interface.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://veerak21.github.io/pwd-gen/" target="">
                                        <img
                                            src={pwdGenImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>

                                    <a href="https://github.com/veerak21/pwd-gen" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>
                                </ul>
                            </div>
                            <div className="job-text">
                                <h4>Password Generator</h4>
                                <p>
                                    This application generates a random password based on user-specified criteria. This app will run in a browser. I designed this using starter code (based on updated HTML, CSS) and added a JavaScript code. Its user interface is responsive and adapts to 500 and 690px screen sizes.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://veerak21.github.io/work-day-scheduler/" target="">
                                        <img
                                            src={workdayPlannerImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/work-day-scheduler" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Work-Day-Scheduler</h4>
                                <p>
                                    This is a calendar-based application to save events for each hour of the day. The application colour codes the current, past and future hour slots. It presents the scheduling hours from 9:00 AM to 5:00 PM. Each hour slot can be scheduled seperatly, which gets saved in the local storage.This app will run in any browser and feature dynamically updated HTML and a CSS framework (Bootstarp) and is powered by jQuery. It is presented with a clean, polished, and responsive user interface.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://intense-chamber-44315.herokuapp.com/" target="">
                                        <img
                                            src={noteTakerImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/Note-Taker" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>
                            </div>
                            <div className="job-text">
                                <h4>Note Taker</h4>
                                <p>
                                    This Note Taker application for writing and saving notes. It uses an Express.js backend framework. It saves and retrieves noted data from a JSON file. Starter code has a frontend application.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://drive.google.com/file/d/1hWt2d4n3LkR9_BW2fPleOkXBIhP_3oMG/view" target="">
                                        <img
                                            src={teamGeneratorImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/Team-Profile-Generator" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>


                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Team Profile Generator</h4>
                                <p>
                                    This is a command-line based Team profile generating application. Here, information about employees' roles in a software engineering team is input to generate an HTML webpage displaying person-specific summaries. It provides a quick access to the employee email ids and GitHub profiles.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://veerak21.github.io/world-vacation/" target="">
                                        <img
                                            src={worldVacationImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/world-vacation" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>
                            </div>
                            <div className="job-text">
                                <h4>World Vacation</h4>
                                <p>
                                    This project is to chose sites of vacation based on current weather conditions. The project page opens with a landing page, with a navbar having links to the 'About', 'Search' and 'Reviews' pages. The 'About' page displays the project rationale and motivation.The 'Search' page displays a placeholder to search for the city. The city weather information is accessed through of the weather-related API's from OpenWeathermap.org and the demographic information is accessed through a relevant API. The 'Reviews' page displays customer feedback. The styling for these pages and the searched items' display is by the Tailwind CSS framework. The project is powered by JavaScript.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://veerak21.github.io/timed-coding-quiz/" target="">

                                        <img
                                            src={codingQuizImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/timed-coding-quiz" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Timed Coding Quiz</h4>
                                <p>
                                    This is a timed coding quiz with multiple-choice questions, which will run in the browser and feature dynamically updated HTML and CSS powered by a JavaScript code. It is presented with a clean, polished, and responsive user interface. The project has a total of 5 questions with 4 choices each. Each question has a 15 sec time limit and countdown clock is displayed on the page. The scores are presented at the end for each user by their initials.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="job">
                        <div className="job-info">
                            <div className="job-img">
                                <ul>
                                    <a href="https://stormy-meadow-14463.herokuapp.com/" target="">

                                        <img
                                            src={textEditorImg}
                                            className="my-2"
                                            style={{ width: "100%" }}
                                            alt=""
                                        />
                                    </a>
                                    <a href="https://github.com/veerak21/19-Text-Editor-PWA" target="">
                                        <li className="logo">
                                            <FiGithub />
                                        </li>
                                    </a>

                                </ul>

                            </div>
                            <div className="job-text">
                                <h4>Text Editor (PWA)</h4>
                                <p>
                                    This text editor application creates notes or code snippets independent of an internet connection. Therefore, it can retrieve these notes for later use.
                                </p>
                            </div>
                        </div>
                    </div>

                </section>
            </div>
        </>
    );
}


export default Portfolio;