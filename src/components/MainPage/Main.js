import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Navbarcomp from './Navbar';
import snow from '../../images/snow.jpeg';
import '../../index.css';
import Portrait from '../../images/plz-make-better.jpg';
import Procomp from './Proficiencies';

export const Main = () => (
    <>
        


            <Navbarcomp />



        <Container className="pt-1">
            <Row className="pt-5">
                <Image
                    className="mx-auto"
                    src={Portrait}
                    alt="Portrait goes here"
                    thumbnail
                    roundedCircle
                />
            </Row>
            <Row className="pt-5">
                <Col className="text-center display-2">
                    Parker Call
                </Col>
            </Row>
            <Row className="pt-5">
                <Col className="text-center display-4">
                    Full stack web developer
                </Col>
            </Row>
        </Container>
        <Image src={snow} alt="Snowy Img" fluid className="pt-5" />
        <Container className="pt-5">
            <Row>
                <Col className="text-center">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Col>
            </Row>
            <Row className="pt-5">
                <Col className="text-center display-4">
                    Certified Proficiencies
                </Col>
            </Row>
            <Procomp />
        </Container>
    </>
);
