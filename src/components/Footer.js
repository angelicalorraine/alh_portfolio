import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";
import github from "../assets/gitHub.png";
import linkedIn from "../assets/linkedIn.png";
import resume from "../assets/AngelicaHernandez.Resume.pdf";
import {
  faDownload,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <Container fluid className="footer">
      <Row className=" social ">
        <Col className="icons">
          <a href="https://www.linkedin.com/in/angelica-hernandez-301369130/">
            <img className="socialicon" src={linkedIn} alt="linkedIn Link" />
            {""}
          </a>
        </Col>

        <Col className="icons">
          <a href="https://github.com/angelicalorraine">
            <img className="socialicon" src={github} alt="github Link" />{" "}
          </a>
        </Col>

        <Col className="icons">
          <a
            href="mailto:gel.lorraine@gmail.com?subject=Let's Connect!&body=Did we just become best friends?"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span className="mx-2 h3">
              <FontAwesomeIcon icon={faEnvelope} style={{ color: "white" }} />
            </span>
          </a>
        </Col>
        <Col className="icons">
          <a href="tel:+1-562-321-0713">
            <span className="mx-2 h3">
              <FontAwesomeIcon icon={faPhone} style={{ color: "white" }} />
            </span>
          </a>
        </Col>

        <Col className="icons">
          <span className="mx-2 h3">
            <FontAwesomeIcon icon={faDownload} />
          </span>
          <a href={resume} target="_blank"></a>
        </Col>
      </Row>
    </Container>
  );
}
