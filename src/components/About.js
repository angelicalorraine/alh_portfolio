import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import gel from '../assets/gelly.png';

const About = () => (
    <>
        <Container fluid className="aboutCont">
            <Row className="aboutRow">
                <Col xs={12} sm={4}>
                    <Image className="gel" src={gel}></Image>
                </Col>
                <Col className="about" xs={12} sm={8}>
                    <p className="aboutme"> I am a passionate Full Stack Web Developer with a vast array of knowledge in many different front end and back end languages, responsive frameworks, databases, and best code practices. I am dedicated and eager to continue to learn, improve and update my skill set and problem solving techniques. I look forward to continuously gaining knowledge from my peers and work collaboratively with others while being able to contribute to the technology industry.</p>
                </Col>


            </Row>
        </Container>

    </>
)

export default About