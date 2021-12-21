import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "../App.css";
import github from "../assets/GH.png";
import linkedIn from "../assets/LI.png";
import resume from "../assets/AngelicaHernandez.Resume.pdf";
import {
  faDownload,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
// import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <>
      <Container fluid className="footer d-flex">
        <Col sm={6} style={{ alignItems: "center" }}>
          <h3
            style={{
              textAlign: "center",
              fontFamily: "Shadows Into Light Two",
              fontSize: "25px",
            }}
          >
            Angelica Lorraine Hernandez
          </h3>
        </Col>
        <Col sm={6}></Col>
      </Container>
    </>
  );
}
