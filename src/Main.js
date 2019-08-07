import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navbarcomp from './components/Navbar'
import snow from './images/snow.jpeg'
import './index.css'
import Portrait from './images/Portrait.png'
import Procomp from './components/MainPage/Proficiencies'

export const Main = () => (
    <>
        This is our main page that is under construction.

        
            <Navbarcomp />
            <Image src={snow} alt="Snowy Img" fluid/>
        


        <Container className="pt-1">
            <Row className="pt-5">
                <Col className="text-center display-2"> 
                Parker Call
                </Col>
            </Row>
            <Row className="pt-5">
                <img 
                className="mx-auto"
                src={Portrait}
                alt="Portrait goes here"
                />
            </Row>
            <Row className="pt-5">
                <Col className="text-center">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
            </Row>
            <Row className="pt-5">
                <Col className="text-center display-3">
                    Certified Proficiencies
                </Col>
            </Row>
            <Procomp/>
        </Container>
    </>
);
