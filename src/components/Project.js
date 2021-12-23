import React from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css";
import ProjectCard from "./projectCard";
import study from "../assets/SB.png";
import favor from "../assets/FT.png";
import city from "../assets/HC.png";

const projects = [
  {
    name: "rgtProject",
    src: city,
    title: "HOME CITY",
    text: "This application allows users to search potential home cities and reports life-quality scores across various categories based on a 10-point scoring system. With additional user functionality to set a Home City on your profile, save multiple cities and compare statistics with the City Comparison tool.",
    github: "https://github.com/angelicalorraine/Home_City",
    launch: "https://home-city-final.herokuapp.com",

    id: "RGT",
  },
  {
    name: "lftProject",
    src: study,
    title: "Study Buddy",
    text: "This application was built with the developer in mind. Study Buddy provides the ability to gather learning resources and coding solutions for various learning styles. When searching the results will only show resolved questions from StackOverflow, along with suggested tutorials from YouTube. One of the key elements is the Bookmark feature to help save content for future reference. ",
    github: "https://github.com/angelicalorraine/Study_Buddy",
    launch: "https://angelicalorraine.github.io/Study_Buddy/",
    id: "LFT",
  },

  {
    name: "rgtProject",
    src: favor,
    title: "Favor Trader",
    text: "Favor Trader is a neighborhood bartering platform for favors.It contains an Activity Feed with nearby users, favors are listed, and a Google API locates the favor based on the home address provided by the user. Users may initiate a trade for a favor listed then select from their own list of favors to exchange.",
    github: "https://github.com/angelicalorraine/Favor-Trader",
    launch: "https://favortrader.herokuapp.com",
    id: "RGT",
  },
];

function Project() {
  return (
    <>
      <Container fluid>
        <h2 className="shadowsFont">Projects</h2>

        {projects.map((project) => (
          <Row className={`${project.id} mb-4`}>
            <Row
              className={` ${project.name}Row projects`}
              key={project.github}
            >
              <ProjectCard
                id={`${project.id}Card`}
                src={project.src}
                title={project.title}
                text={project.text}
                github={project.github}
                launch={project.launch}
                style={{ justifyContent: "flex-end" }}
              />
            </Row>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Project;
