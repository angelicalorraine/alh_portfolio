import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import '../App.css';
import ProjectCard from './projectCard'
import study from '../assets/StudyBuddy.png';
import favor from '../assets/FavorTrader.png';



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
        name: "FavorTrader",
        src: favor,
        title: "Favor Trader: Project 2",
        text: "Our knowledge and newly learned skills were put to the test by creating a full stack web application. We conceived and executed a design using the MVC paradigm, create a server-side API, add user authentication, and connect to a database. Favor Trader is a neighborhood bartering platform for favors.It contains an Activity Feed where all user’s favors needs are listed.To begin trading, each user will need to log in or sign up and create a user profile.",
        github: "https://github.com/angelicalorraine/Favor-Trader",
        launch: "https://favortrader.herokuapp.com",
        id: "SB",
    },
    {
        name: "rgtProject",
        src: favor,
        title: "Home City: Project 3",
        text: "Our knowledge and newly learned skills were put to the test by creating a full stack web application. We conceived and executed a design using the MVC paradigm, create a server-side API, add user authentication, and connect to a database. Favor Trader is a neighborhood bartering platform for favors.It contains an Activity Feed where all user’s favors needs are listed.To begin trading, each user will need to log in or sign up and create a user profile.",
        github: "https://github.com/angelicalorraine/Home-City",
        launch: "https://home-city-final.herokuapp.com",

        id: "RGT",
    }
]

function Project() {
    return (
        <>
            <Container fluid>
                <h2 className="shadowsFont">Projects</h2>

                {projects.map((project) => (
                    <Row className={`${project.id} mb-4 `}>

                        <Row className={` ${project.name}Row projects`} key={project.id}>
                            <ProjectCard id={project.id} src={project.src} title={project.title} text={project.text} github={project.github} launch={project.launch} />
                        </Row>
                    </Row>
                ))}

            </Container>


        </>
    )
}

export default Project