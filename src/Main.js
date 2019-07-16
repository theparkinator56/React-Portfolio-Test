import React from 'react';
import { Container, Row, Col, Navbar, Nav, Image } from 'react-bootstrap';
import snow from './snow.jpeg'
import './App.css'

export const Main = () => (
    <>
        This is our main page that is under construction.

            <Navbar bg="dark" variant="dark" sticky="top">
                <Nav className="mr-auto">
            <Nav.Link href="/contact">Contact</Nav.Link>
            <Nav.Link href="/Projects">Projects</Nav.Link>
            <Nav.Link href="/Github">Github</Nav.Link>
            </Nav>
            <Nav>
            <Navbar.Brand href="/">Parker Call</Navbar.Brand>
            </Nav>
        </Navbar>
        <Image src={snow} alt="Snowy Img" fluid/>



        <Container>
            <Row>
                <Col> Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Col>
            </Row>
        </Container>
    </>
);
