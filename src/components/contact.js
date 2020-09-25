import React from 'react';
import '../App.css';
import * as ReactBootstrap from 'react-bootstrap';
import email from '../email.png';
import github from '../github.png';
import linkedin from '../linkedin.png'

class Contact extends React.Component {
    render() {

        return (
            <footer>

                <div className="sections">
                    <div className="title" id="contact">
                        Contact
                    </div>

                    <div className="text heading">
                        Feel free to check out my socials!
                    </div>

                    <ReactBootstrap.Container>
                        <ReactBootstrap.Row className="contact-layout">
                            <ReactBootstrap.Col className="center">
                                <a href="mailto:jing.h.sun@mail.mcgill.ca" target="blank">
                                    <img src={email} className="contact" alt="Email" />
                                </a>
                            </ReactBootstrap.Col>

                            <ReactBootstrap.Col className="center">
                                <a href="https://github.com/dzinghan" target="blank">
                                    <img src={github} className="contact" alt="GitHub" />
                                </a>
                            </ReactBootstrap.Col>

                            <ReactBootstrap.Col>
                                <a href="https://linkedin.com/in/sunjinghan" target="blank">
                                    <img src={linkedin} className="contact" alt="LinkedIn" />
                                </a>

                            </ReactBootstrap.Col>
                        </ReactBootstrap.Row>
                    </ReactBootstrap.Container>

                    <div className="copyright">
                        &copy; 2020 -- Jing Han Sun
                    </div>
                </div>
            </footer>
        );
    }
}

export default Contact;