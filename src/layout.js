import React from 'react';
import {Container} from 'react-bootstrap';
import './index.css';

export const Layout = (props) => (
    <Container fluid>
        {props.children}
    </Container>
)
