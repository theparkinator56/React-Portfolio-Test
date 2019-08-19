import React from 'react';
import { Container, Image, Col, Row, Card } from 'react-bootstrap';
import Navbarcomp from './MainPage/Navbar';
import snow from '../images/snow.jpeg';
import recikey from '../images/recikey.png'
import Hot from '../images/hot-restaurant.png';
import giphy from '../images/giphy.png';
import ston from '../images/ston.png';

export const Projects = () => (


    <>
        <Container fluid className="pt-5" >

            <Navbarcomp/>
            <Image src={snow} alt="Snowy Img" fluid className="pt-5" />
                <Col className="text-center display-2"> Projects </Col>
            <Row className="pt-5 mt-5">
                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={recikey} />
                        <Card.Body>
                            <Card.Title>Recikey</Card.Title>
                            <Card.Text>
                                A web scraper that Takes ingredients and searches
                                recipes with those ingredients that you put in.
                        </Card.Text>
                            <Card.Link href="https://github.com/theparkinator56/Project-1">Github Link</Card.Link>
                            <Card.Link href="https://c9-recipe-test.herokuapp.com/index.html">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={Hot} />
                        <Card.Body>
                            <Card.Title>Hot restaurant</Card.Title>
                            <Card.Text>
                                Played around with databases and jquery.
                        </Card.Text>
                            <Card.Link href="https://github.com/theparkinator56/hot-restaurant5">Github Link</Card.Link>
                            <Card.Link href="https://hot-restaurant-fsf.herokuapp.com">Deployed Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={giphy} />
                        <Card.Body>
                            <Card.Title>Giphy</Card.Title>
                            <Card.Text>
                                Scraping GIFs with jquery. (Not currently deployed)
                        </Card.Text>
                            <Card.Link href="https://github.com/theparkinator56/giphy-homework">Github Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>

                <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={ston} />
                        <Card.Body>
                            <Card.Title>Ston.Ventures</Card.Title>
                            <Card.Text>
                                A landing page for the company Ston Ventures. (Not currently used)
                        </Card.Text>
                            <Card.Link href="https://github.com/theparkinator56/landing-page">Github Link</Card.Link>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>

            <Row>
                <Col>

                </Col>

                <Col>

                </Col>

                <Col>

                </Col>

                <Col>

                </Col>
            </Row>

        </Container>

    </>


);

