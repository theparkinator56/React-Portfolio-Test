import React from 'react';
import { Form, Col, Row, Container } from 'react-bootstrap';
import linkdin from '../images/linkdin.png';
import github from '../images/Octicons-mark-github.svg';


export const Contact = () => (
    <>
    <Container>
        <Row classname="justify-content-md-center">
            If you would like to shoot me a message you can at any one of my profiles 
                (I check my Email the most but I check everything pretty regularly).
    
            <Col xs lg="2">
                
            <Image
                    
                    src={github}
                    alt="Github goes here"
                    href="https://github.com/theparkinator56"
                />
            </Col>
            <Col xs lg="2">
                
            <Image
                    
                    src={linkdin}
                    alt="Linkdin goes here"
                    href="https://www.linkedin.com/in/parker-call/"
                />
            </Col>
            <Col xs lg="2">
                Email: parkercall56@gmail.com

                Phone: (1) 763-528-5943
            
            </Col>

            
        </Row>
        <Row classname="justify-content-md-center">
            <Form>
                <Form.Group controlId="Contact.name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control placeholder="John/Jane doe" />
                </Form.Group>
                <Form.Group controlId="Contact.email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group controlId="Contact.message">
                    <Form.Label>Message</Form.Label>
                    <Form.Control as="textarea" rows="3" />
                </Form.Group>
                    <Button variant="primary" type="submit">
                        Send
                    </Button>
                </Form>
        </Row>
        </Container>
    </>
);

