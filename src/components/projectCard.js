import React from "react";
import { Card, Button, Image, Row, Col, Container } from "react-bootstrap";
import "../App.css";

function ProjectCard(props) {
  return (
    <Card className="">
      <Row className={props.id}>
        <Col className="projectCard" sm={6}>
          <Image className="image" src={props.src} />
        </Col>
        <Col className="projectCard" sm={6}>
          <Card.Body className="m-2">
            <Card.Text>
              <h3
                style={{
                  textAlign: "center",
                  fontFamily: "Bebas Neue",
                  fontSize: "38px",
                }}
              >
                {" "}
                {props.title}{" "}
              </h3>
              <p style={{ fontSize: "18px" }}> {props.text}</p>
            </Card.Text>

            <Container style={{ display: "flex", justifyContent: "center" }}>
              <Button
                size="lg"
                className="m-1 btnGrad"
                target="_blank"
                href={`${props.github}`}
              >
                Repository
              </Button>

              <Button
                size="lg"
                className="m-1 btnGrad"
                target="_blank"
                href={`${props.launch}/`}
              >
                Launch App
              </Button>
            </Container>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}
export default ProjectCard;
