import React from 'react';
import * as ReactBootstrap from 'react-bootstrap';
import '../App.css';
import logo from "../heart-logo.png";
import Resume from "../Resume.pdf";

class Navbar extends React.Component {
    render() {
        return(
            <ReactBootstrap.Navbar collapseOnSelect id="navbar-body" expand="md">
                <img src={logo} className="App-logo" alt="logo" />
                <ReactBootstrap.Navbar.Brand href="#home" id="navbar-brand">Jing Han Sun</ReactBootstrap.Navbar.Brand>
                <ReactBootstrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <ReactBootstrap.Navbar.Collapse id="responsive-navbar-nav">
                    <ReactBootstrap.Nav className="ml-auto menu-items">
                        <ReactBootstrap.Nav.Link href="#about">About Me</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href={Resume} target="blank">Resume</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#projects">Projects</ReactBootstrap.Nav.Link>
                        <ReactBootstrap.Nav.Link href="#contact">Contact</ReactBootstrap.Nav.Link>
                    </ReactBootstrap.Nav>
                </ReactBootstrap.Navbar.Collapse>
            </ReactBootstrap.Navbar>
        );
    }
}

export default Navbar;