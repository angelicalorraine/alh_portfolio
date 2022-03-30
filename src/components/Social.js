import React from "react";
import { Container, Button, Col, Row, Figure, Image } from "react-bootstrap";

import resume from "../assets/AngelicaHernandez.Resume.pdf";
import resumepic from "../assets/resume.png";
import email from "../assets/email.png";
import phone from "../assets/phone.png";
import download from "../assets/download.png";
import linkedIn from "../assets/linkedin.png";
import github from "../assets/git.png";
import {
  faDownload,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import BadgeTable from "./BadgeTable";

import Slide from "react-reveal/Slide";

const socials = [
  {
    social: "Resume",
    icon: download,
    link: "https://drive.google.com/file/d/1VWvvwVWdWN1bJO_L9YtEJvNSwl077mPF/view?usp=sharing",
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
    link: "https://github.com/angelicalorraine",
  },
];

export default function Social() {
  return (
    <>
      <Row style={{ width: "100%", justifyContent: "center" }}>
        <Col sm={3}>
          <Container
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Slide left>
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
            </Slide>
          </Container>
        </Col>

        <Col sm={7}>
          <BadgeTable />
        </Col>
      </Row>
    </>
  );
}
