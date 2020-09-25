import React from 'react';
import '../App.css';
import * as ReactBootstrap from 'react-bootstrap';
import bbs from "../bbs.png";
import snf from "../snf.svg";
import site from "../site.png";

class Projects extends React.Component {
    render() {
        return (
            <section>
                <div className="sections">
                    <div className="title" id="projects">
                        My Projects
                    </div>

                    <div className="text heading">
                        Here are some projects I have done in the past.
                    </div>

                    <ReactBootstrap.Container>
                        <ReactBootstrap.Row>

                            <ReactBootstrap.Col xs={12} sm={6} md={4}>
                                <img src={snf} className="project-logo" alt="SNF" fluid />
                                <div className="project-title">
                                    <a href="https://github.com/dzinghan/smith-normal-form-calculator" target="blank">
                                        Smith Normal Form Calculator
                                    </a>
                                </div>
                                <div className="project-text">
                                    <ul>
                                        <li>Python</li>
                                        <li>Return the Smith normal form of a matrix</li>
                                        <li>Matrix class</li>
                                        <li>Homology and similarity</li>
                                    </ul>
                                </div>
                            </ReactBootstrap.Col>

                            <ReactBootstrap.Col xs={12} sm={6} md={4}>
                                <img src={bbs} className="project-logo" alt="BBS" fluid />
                                <div className="project-title">
                                    <a href="https://github.com/dzinghan/Bouncing-Ball-Simulation" target="blank">
                                    Bouncing Ball Simulator
                                    </a>
                                </div>
                                <div className="project-text">
                                    <ul>
                                        <li>Python, Tkinter</li>
                                        <li>Visualization of bouncing balls of different sizes</li>
                                        <li>Gravity, air resistance, collision</li>
                                    </ul>
                                </div>
                            </ReactBootstrap.Col>

                            <ReactBootstrap.Col xs={12} sm={6} md={4}>
                                <img src={site} className="project-logo" alt="Site" fluid />
                                <div className="project-title">
                                    <a href="https://github.com/dzinghan/personal-website-source" target="blank">
                                        This Website!
                                    </a>
                                </div>
                                <div className="project-text">
                                    <ul>
                                        <li>HTML, CSS, JavaScript (React.js)</li>
                                        <li>Original design</li>
                                    </ul>
                                </div>
                            </ReactBootstrap.Col>

                        </ReactBootstrap.Row>
                    </ReactBootstrap.Container>

                </div>
            </section>
        )
    }
}

export default Projects;