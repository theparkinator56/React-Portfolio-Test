import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import '../../index.css'
import linkdin from '../../images/linkdin.png'
import github from '../../images/Octicons-mark-github.svg'

const Navbarcomp = () => {
    return (
        <Navbar sticky="top" bg="light">
            <Nav className="mr-0">
                <Nav.Link className="darktext" href="/contact">Contact</Nav.Link>
                <Nav.Link className="darktext" href="/Projects">Projects</Nav.Link>
                <Nav.Link className="darktext" href="/">About</Nav.Link>
            </Nav>
            <Nav className="ml-auto">
                <Navbar.Brand href="https://www.linkedin.com/in/parker-call/">
                    <img
                        src={linkdin}
                        width="30"
                        height="30"
                        className="align-right"
                        alt="linkdin icon"
                    />
                </Navbar.Brand>
                <Navbar.Brand href="https://github.com/theparkinator56">
                    <img
                        src={github}
                        width="30"
                        height="30"
                        className="align-right"
                        alt="github-icon"
                    />
                </Navbar.Brand>
            </Nav>
        </Navbar>
    )
};

export default Navbarcomp;

