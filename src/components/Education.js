import React from "react";
import { Container, Row, Col, Image, Button } from "react-bootstrap";
import web from "../assets/web.png";
import interfaceD from "../assets/interface.png";
import visual from "../assets/visual.png";
import UXUD from "../assets/UXUD.png";
import ReactB from "../assets/React.png";
import JS from "../assets/JS.png";
import Node from "../assets/Node.png";
import SQL from "../assets/SQL.png";
import HTML from "../assets/HTML.png";

const Education = () => {
  return (
    <Container>
      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h3> FULL STACK DEVELOPMENT</h3>
            <h5> The Coding Bootcamp</h5>
            <h5> University of California, Irvine 2020-2021</h5>
          </Col>
        </Row>
        <Row style={{ justifyContent: "space-evenly" }}>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/e1238d45-87d5-448e-9fb1-40a7293c6e6e/public_url"
              target="_blank"
            >
              <Image className="badges" src={ReactB} alt="React Badge"></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/5c96054b-210d-4e4f-8f99-46464a2f5560/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={JS}
                alt="Javascript & JQuery Badge"
              ></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/926e0fbb-2500-4bd8-beb5-27f46b1a132b/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={Node}
                alt="Node & Express Badge"
              ></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/ba42fcc5-e8cc-4a0a-b1f8-83089fd1e6f6/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={SQL}
                alt="SQL & NoSQL Databases Badge"
              ></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/e5efca28-dd8e-4f33-9a52-1ff91007328b/public_url"
              target="_blank"
            >
              <Image className="badges" src={HTML} alt="HTML/CSS Badge"></Image>
            </a>
          </Col>
        </Row>
      </Container>

      <Container
        fluid
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Row>
          <Col style={{ textAlign: "center" }}>
            <h3> UX/UI DESIGN</h3>
            <h5> The UX/UI Bootcamp</h5>
            <h5> University of California, Irvine 2019 - 2020</h5>
          </Col>
        </Row>

        <Row
          style={{ justifyContent: "space-evenly", alignItems: "flex-start" }}
        >
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/8390eb15-79a6-4436-abca-68dfcacf5931/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={web}
                alt="Web Design Badge"
              ></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/d55aed9a-1084-4dc8-a1b7-750f45fbae4d/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={interfaceD}
                alt="Interface Design Badge"
              ></Image>
            </a>
          </Col>

          <Col md={2}>
            <a
              href="https://www.credly.com/badges/86d00870-6146-42a1-8546-0e8ff30e69af/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={visual}
                alt="Visual Design Badge"
              ></Image>
            </a>
          </Col>
          <Col md={2}>
            <a
              href="https://www.credly.com/badges/3fff4eba-e681-4c99-bfd1-7f45012f9d42/public_url"
              target="_blank"
            >
              <Image
                className="badges"
                src={UXUD}
                alt="User Experience and Design Thinking Badge"
              ></Image>
            </a>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Education;
