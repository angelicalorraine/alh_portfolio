import React from 'react';
import { Card, Button, Image, Row, Col } from 'react-bootstrap';
import '../App.css';

function ProjectCard(props) {
    return (
        <Card className="">
            <Row className={props.id} >
                <Col className="border" sm={5}>
                    <Image className="image" src={props.src} height="225" />
                </Col>
                <Col sm={7}>

                    <Card.Body>
                        <Card.Text>
                            <h3> {props.title} </h3>
                            {props.text}
                        </Card.Text>
                        <Button variant="primary" target="_blank" href={`${props.github}`}>Repo</Button>
                        <Button variant="primary" target="_blank" href={`${props.launch}/`}>Launch</Button>
                    </Card.Body>
                </Col>
            </Row>
        </Card>
    )
}
export default ProjectCard;
