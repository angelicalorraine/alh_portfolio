import React from "react";
import { Container, Row } from "react-bootstrap";
import "../App.css";
import ProjectCard from "./projectCard";
import study from "../assets/StudyBuddy.png";
import favor from "../assets/FavorTrader.png";
import city from "../assets/Home.png";

const projects = [
  {
    name: "rgtProject",
    src: study,
    title: "Studdy Buddy: Project 1",
    text: "Our knowledge and newly learned skills were put to the test by creating a web application from scratch.We conceived and executed a design and integrated data received from multiple server- side API requests. Study Buddy was built with the developer in mind, we are committed to being lifelong students.When searching a question or topic and the results will show you only resolved results from StackOverflow along with suggested tutorials! ",
    github: "https://github.com/angelicalorraine/Study_Buddy",
    launch: "https://angelicalorraine.github.io/Study_Buddy/",
    id: "RGT",
  },

  {
    name: "lftProject",
    src: favor,
    title: "Favor Trader: Project 2",
    text: "Coming across an important milestone in our bootcamp journey we designed and built our first  full stack web application. We executed a design using the MVC paradigm, we combined a robust back end with servers, databases, advanced APIs, and user authentication with an intuitive front end. Favor Trader is a neighborhood bartering platform for favors.It contains an Activity Feed where all user’s favors needs are listed.To begin trading, each user will need to log in or sign up and create a user profile.",
    github: "https://github.com/angelicalorraine/Favor-Trader",
    launch: "https://favortrader.herokuapp.com",
    id: "SB",
  },
  {
    name: "rgtProject",
    src: city,
    title: "Home City: Project 3",
    text: "Home City allowed us to fullfill a real word need by creating our first collaborative MERN stack single-page application, with a focus on data and user demand. Using MongoDB back end, a GraphQL API, an Express.js and Node.js server with a React front end, implementing user authentication with JWT. This application allows users to search potential home cities and reports life-quality scores across various categories based on a 10-point scoring system. With additional functionality to set a Home City, save cities and compare statistics. ",
    github: "https://github.com/angelicalorraine/Home_City",
    launch: "https://home-city-final.herokuapp.com",

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
              />
            </Row>
          </Row>
        ))}
      </Container>
    </>
  );
}

export default Project;
