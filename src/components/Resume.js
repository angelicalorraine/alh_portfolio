import React from "react";
import { Container, Button, Col, Row } from "react-bootstrap";
import Resumealh from "../assets/AngelicaHernandez.Resume.pdf";

export default function Resume() {
  return (
    <>
      <Container>
        <Row>
          <h2 className="shadowsFont">Resume</h2>
          <Col sm={6}>
            <h2> Objective </h2>
            <p>
              {" "}
              I am a passionate Full Stack Developer with a vast array of
              knowledge in many different front and back end languages,
              responsive frameworks and databases while using best code
              practices. Immense ability to quickly adapt and adjust to new
              learning techniques and styles. I am dedicated and eager to
              continue to learn, improve and continuously update my skill set
              and problemsolving techniques. I look forward to gaining an
              endless amount of knowledge, insight and advice from my peers and
              work Containerlaboratively with others while being able to
              contribute to the technology industry.
            </p>

            <h2> Certificates</h2>
            <h3> CERTIFICATE IN FULL STACK DEVELOPMENT</h3>
            <h5 style={{ textAlign: "center" }}>
              University of California, Irvine 2020-2021
            </h5>
            <h3> CERTIFICATE IN UX/UI DESIGN</h3>
            <h5 style={{ textAlign: "center" }}>
              University of California, Irvine 2019-2020
            </h5>
          </Col>
          <Col sm={6}>
            <Row className="d-flex flex-wrap justify-content-center">
              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/8390eb15-79a6-4436-abca-68dfcacf5931/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/250x250/images/109b65a3-b8c5-4802-95a4-3db2f1e5ef3a/6f5fb490753026eb192a66509fe7332c.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>

              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/d55aed9a-1084-4dc8-a1b7-750f45fbae4d/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/8358353b-3c24-4b79-9fea-ff9c2c78f7d6/cac05207c7217149aaff5418f4cc94de.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>

              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/86d00870-6146-42a1-8546-0e8ff30e69af/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/f10424f9-0222-4611-8001-2fbdb9bf8471/d22b12279a8399e20d5722f5b15a0340.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>
            </Row>
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

            <Row className="d-flex flex-wrap justify-content-center">
              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/3fff4eba-e681-4c99-bfd1-7f45012f9d42/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/044c920a-57fa-488d-a70e-fc8d39de4bec/0e6480912dcc88d3ca1c400869a97034.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>
              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/e5efca28-dd8e-4f33-9a52-1ff91007328b/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/96445ffb-b575-4805-b2d0-ccd349c02f79/92c220cfa95a1496a65f22b2be451a6f.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>

              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/ba42fcc5-e8cc-4a0a-b1f8-83089fd1e6f6/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/16601f07-111b-406b-90c8-c4791968f93e/db60c34366988e6d178bd37dd50db54f.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>
            </Row>
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
            {/* ROW 3 */}
            <Row className="d-flex flex-wrap justify-content-center">
              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/5c96054b-210d-4e4f-8f99-46464a2f5560/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/683d84bc-deaf-47a6-bccd-2bb8caa52b71/5b701c34b5d23aadb43038cc3ddb465a.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>

              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/926e0fbb-2500-4bd8-beb5-27f46b1a132b/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/06b15530-28bc-4cd0-8a3a-660e820c03a7/7073faeff9de87438490b30a2a262dc5.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>

              <Col md={4}>
                <Button
                  className="badges"
                  target="_blank"
                  href="https://www.credly.com/badges/e1238d45-87d5-448e-9fb1-40a7293c6e6e/public_url"
                  variant=""
                >
                  <img
                    src="https://images.credly.com/size/340x340/images/71fe5de1-0bcd-4db3-8934-3b9addff4e0f/15d7dedd7d4c5ea8499342c5d47237d0.png"
                    width="175"
                    alt=""
                    height="175"
                  ></img>
                </Button>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}
