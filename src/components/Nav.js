import React from "react";
import { Link } from 'react-router-dom';
import { Nav } from "react-bootstrap";
import '../App.css';


function NavTabs() {
    return (
        <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
                <Nav.Link as={Link} to='/alh_portfolio'>
                    Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/about'>
                    Aboout</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/projects' >Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link as={Link} to='/resume' >Resume</Nav.Link>
            </Nav.Item>
        </Nav>
    );
}

export default NavTabs;
