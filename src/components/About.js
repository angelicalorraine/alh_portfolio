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
        <Col xs={12} sm={4}>
          <Slide left>
            <Image className="gel" src={gel}></Image>
          </Slide>
        </Col>

        <Col
          className="about flex-column justify-content-center"
          xs={12}
          sm={8}
        >
          <Fade top>
            <h2 className="shadowsFont"> Allow me to introduce myself..</h2>
            <p className="aboutme" style={{ textAlign: "center" }}>
              I'm am a certified UX/UI Designer & Full Stack Developer based in
              Orange County, I received my certificates through UC Irvine
              Division of Continuing Education. Computers and technnology have
              always come natural to me, whether it was setting things up,
              fixing issues, learning something new or just lending a helping
              hand. I always knew I wanted to be apart of this industry in one
              way or another, but now after completing The Coding Bootcamp I
              feel like I finally found my passion in sodtware development.
            </p>{" "}
            <h5 style={{ fontStyle: "italic" }}>
              {" "}
              Let's create something special{" "}
            </h5>
          </Fade>
        </Col>
      </Row>
    </Container>
  </>
);

export default About;
