import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Education from "./Education";

export default function Connect() {
  return (
    <>
      <Container style={{ display: "flex", justifyContent: "center" }}>
        <Col sm={6}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Bebas Neue",
              fontSize: "45px",
            }}
          >
            {" "}
            Let's Connect!
          </h3>
        </Col>
        <Col sm={6}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Roboto",
              fontSize: "35px",
            }}
          >
            {" "}
            Social
          </h3>
        </Col>
      </Container>
    </>
  );
}
