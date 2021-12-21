import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import "../App.css";
import gel from "../assets/gelly.png";

const About = () => (
  <>
    <Container fluid className="aboutCont p-5">
      <Row className="aboutRow">
        <Col xs={12} sm={4}>
          <Image className="gel" src={gel}></Image>
        </Col>
        <Col
          className="about flex-column justify-content-center"
          xs={12}
          sm={8}
        >
          <h2 className="shadowsFont"> Who I Am </h2>
          <p className="aboutme" style={{ textAlign: "center" }}>
            I'm am a certified UX/UI Designer & Full Stack Developer based in
            Orange County, I received my certificates through UC Irvine Division
            of Continuing Education. Computers and technnology have always come
            second nature to me, whether it was setting things up, fixing
            issues, learning something new or just lending a helping hand. I
            always knew I wanted to be apart of this industry in some way, but
            after completing The Coding Bootcamp I feel like I finally found my
            passion in life.
          </p>{" "}
          <h5> Let's create something special </h5>
        </Col>
      </Row>
    </Container>
  </>
);

export default About;
