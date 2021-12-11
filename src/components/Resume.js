import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Education from "./Education";
import Connect from "./Connect";

export default function Resume() {
  return (
    <>
      <Container>
        <Row>
          <h2 className="shadowsFont">Resume</h2>
          <Col>
            <Education />
          </Col>
          {/* <Col sm={6}></Col> */}
          {/* <Connect /> */}
        </Row>
      </Container>
    </>
  );
}
