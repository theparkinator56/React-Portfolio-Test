import React from 'react';
import { Form, Col, Row, Container, Image, Button } from 'react-bootstrap';
import linkdin from '../images/linkdin.png';
import github from '../images/Octicons-mark-github.svg';
import Navbarcomp from './MainPage/Navbar';


export const Contact = () => (
    <>
    <Container className="pt-10">

        <Navbarcomp/>
        <Row classname="text-center">
            If you would like to shoot me a message you can at any one of my profiles 
                
    </Row>
    <Row className="pt-10">
            <Col xs lg="2">
                <a href="https://github.com/theparkinator56">
            <Image
                    width="100"
                    height="100"
                    src={github}
                    alt="Github goes here"
                    
                />
                </a>
            </Col>
            <Col xs lg="2">
                <a href="https://www.linkedin.com/in/parker-call/">
            <Image
                    width="100"
                    height="100"
                    src={linkdin}
                    alt="Linkdin goes here"
                    
                />
                </a>
            </Col>
            <Col xs lg="2">
                Email: parkercall56@gmail.com

                Phone: (1) 763-528-5943
            
            </Col>
</Row>
            

        </Container>
        <Container fluid className="mt-10">
        <Row>
            <Form
            action="https://formspree.io/xzbbzzbo"
            method="POST"
            classname="d-flex"
            >
                <Form.Group controlId="Contact.name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="John/Jane doe" />
                </Form.Group>
                <Form.Group controlId="Contact.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="_replyto"/>
                </Form.Group>
                <Form.Group controlId="Contact.message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" name="message"/>
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
        </Row>
        </Container>

    </>
);

