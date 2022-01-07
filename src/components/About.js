import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import gel from "../assets/gel.png";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";

const About = () => (
  <>
    <Container fluid className="aboutCont p-4">
      <Row className="aboutRow">
        <Col
          className="about flex-column justify-content-center"
          xs={12}
          sm={8}
        >
          <Fade top>
            <h3 className="shadowsFont"> Allow Me to Introduce Myself</h3>
            <p className="aboutme" style={{ textAlign: "center" }}>
              I'm am a certified UX/UI Designer & Full Stack Developer based in
              Orange County, I received my certificates through UC Irvine
              Division of Continuing Education. Technology has always come
              natural to me, whether it was setting things up, fixing issues,
              learning something new or just lending a helping hand. My dream
              has always been to pursue a career in this industry, and I can
              confidently say I found my passion in software development.
            </p>
            <h4 style={{ fontStyle: "italic" }}>
              Let's Create Something Special!
            </h4>
          </Fade>
        </Col>

        <Col xs={12} sm={4}>
          <Slide right>
            <Image className="gel" src={gel}></Image>
          </Slide>
        </Col>
      </Row>
    </Container>
  </>
);

export default About;
