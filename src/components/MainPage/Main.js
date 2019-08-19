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

        <Container className="pt-5">
            <Row>
                <Col className="text-center">
                    Computers have been a major part of my life, 
                    I learned simple terminal commands when I was 5 years old.
                    I learned simple python code when I was In my junior year of high school,
                    and I built my first rig when I was 19. I recently graduated at the University
                    of MN coding bootcamp, I am trained in the MERN stack but I also know
                    my way around Python, MySQL, Jquery, Git, and Bootstrap.
                </Col>
            </Row>
            <Row className="pt-5">
                <Col className="text-center display-4">
                    Certified Proficiencies
                </Col>
            </Row>
            <Procomp className="pb-5 mb-5"/>
            <Row className="pt-5 mt-5">
                </Row>
        </Container>
    </>
);
