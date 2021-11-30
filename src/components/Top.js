import React from 'react';
import '../App.css';
import Nav from './Nav'
import Navbar from './Navbar'
import { Container, Row, Col, Image } from 'react-bootstrap';
import gel from '../assets/gelly.png';

export default function Top() {
    return (
        <Container fluid className="header">
            <h1> Angelica Lorraine Hernandez</h1>
            <h3> Full Stack Developer | UX UI Designer</h3>
            <Nav />

            {/* <Container fluid className="aboutCont">
                <Row className="aboutRow">
                    <Col xs={12} sm={4}>
                        <Image className="gel" src={gel}></Image>
                    </Col>
                    <Col className="about" xs={12} sm={8}>
                        <Container fluid className="">
                            <h1> Angelica Lorraine Hernandez</h1>
                            <h3> Full Stack Developer | UX UI Designer</h3>
                        </Container>
                    </Col>
                </Row>
            </Container> */}
        </Container>



    );
}