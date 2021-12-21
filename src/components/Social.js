import React from "react";
import { Container, Button, Col, Row, Figure, Image } from "react-bootstrap";

import resume from "../assets/AngelicaHernandez.Resume.pdf";
import resumepic from "../assets/resume.png";
import email from "../assets/email.svg";
import phone from "../assets/phone.svg";
import download from "../assets/download.svg";
import linkedIn from "../assets/LI.png";
import github from "../assets/GH.png";
import {
  faDownload,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import BadgeTable from "./BadgeTable";

const socials = [
  {
    social: "Resume",
    icon: download,
    link: resume,
  },
  {
    social: "Phone",
    icon: phone,
    link: "tel:+1-562-321-0713",
  },
  {
    social: "Email",
    icon: email,
    link: "mailto:gel.lorraine@gmail.com?subject=Let's Connect!&body=Did we just become best friends?",
  },
  {
    social: "LinkedIn",
    icon: linkedIn,
    link: "https://www.linkedin.com/in/angelica-hernandez-301369130/",
  },
  {
    social: "Github",
    icon: github,
    link: "https://www.linkedin.com/in/angelica-hernandez-301369130/",
  },
];

export default function Social() {
  return (
    <>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col sm={5}>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {socials.map((social) => (
              <Row style={{ padding: "15px" }}>
                <Col
                  sm={4}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    padding: "0px",
                  }}
                >
                  <a href={social.link} target="_blank">
                    <Image
                      className="socialicon"
                      src={social.icon}
                      alt="social icon"
                    />
                  </a>
                </Col>
                <Col sm={8} style={{ display: "flex", alignItems: "center" }}>
                  <a href={social.link} target="_blank">
                    <h4> {social.social}</h4>
                  </a>
                </Col>
              </Row>
            ))}
          </Container>
        </Col>

        <Col sm={7}>
          <BadgeTable />
        </Col>
      </Row>
    </>
  );
}
