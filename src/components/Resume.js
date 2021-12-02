import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Education from "./Education";

export default function Resume() {
  return (
    <>
      <Container>
        <Row>
          <h2 className="shadowsFont">Resume</h2>
          <Col sm={7}>
            <h2> Certificates</h2>

            <Education />
          </Col>
          <Col sm={5}>
            <Row className="d-flex flex-wrap justify-content-center"></Row>
            <Row className="d-flex flex-wrap justify-content-center">
              <Col className="d-flex flex-wrap justify-content-center">
                <ul>
                  <li>Visual Design</li>
                  <li> Design Thinking </li>
                  <li>Javascript</li>
                  <li>HTML</li>
                  <li>CSS</li>
                </ul>
              </Col>
              <Col className="d-flex flex-wrap justify-content-center">
                <ul className="justify-content-center">
                  <li>Web Design</li>
                  <li>User Experience </li>
                  <li>User Interface Design</li>
                  <li>jQuery</li>
                  <li>Front-end Frameworks</li>
                </ul>
              </Col>
            </Row>

            <Row className="d-flex flex-wrap justify-content-center"></Row>
            <Row>
              <Col className="d-flex flex-wrap justify-content-center">
                <ul className="skillGroup justify-content-center">
                  <li>NodeJS</li>
                  <li>React</li>
                  <li>Express</li>
                  <li>HTTP & REST</li>
                </ul>
              </Col>
              <Col className="d-flex flex-wrap justify-content-center">
                <ul className="justify-content-center">
                  <li>API</li>
                  <li>SQL & MySQL</li>
                  <li>MongoDB, Mongoose</li>
                  <li>GraphQL</li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
