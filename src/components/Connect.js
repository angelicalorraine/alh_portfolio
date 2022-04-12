import React from "react";
import { Container, Button, Col, Row, Image, Figure } from "react-bootstrap";

import Social from "./Social";
import BadgeTable from "./BadgeTable";

export default function Connect() {
  return (
    <>
      <Row>
        <h2 className="shadowsFont pb-4">Let's Connect!</h2>
      </Row>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "5px",
        }}
      >
        <Social />
      </Container>
    </>
  );
}
