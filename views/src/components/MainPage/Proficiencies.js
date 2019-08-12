import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import Javascriptlogo from "../../images/javascript-logo.png";
import Htmllogo from "../../images/html-logo.png";
import CSSlogo from "../../images/CSS3-logo.svg";
import Nodelogo from "../../images/nodejs-logo.png";
import Gitlogo from "../../images/Git_icon.svg.png";
import Reactlogo from "../../images/react-1.svg";

const Procomp = () => {
    return (
        <Row className="pt-5">
            <Col className="xs-2">
                <Image
                    src={Javascriptlogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
            <Col className="xs-2">
                <Image
                    src={Htmllogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
            <Col className="xs-2">
                <Image
                    src={CSSlogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
            <Col className="xs-2">
                <Image
                    src={Nodelogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
            <Col className="xs-2">
                <Image
                    src={Gitlogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
            <Col className="xs-2">
                <Image
                    src={Reactlogo}
                    width="100"
                    height="100"
                    alt="language logo"
                />
            </Col>
        </Row>
    )
}

export default Procomp;