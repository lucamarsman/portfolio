import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import colorSharp2 from '../assets/img/color-sharp2.png';
import project1 from '../assets/img/project1.png';
import project2 from '../assets/img/project2.png';

export const Projects = () => {
  return (
    <section className="Projects">
        <img src={colorSharp2} id="colorSharp2" alt="Gradient Background"></img>
        <Container>
            <Col xs={12} md={6} xl={5} id="projects"> 
            <h1 id="projectsHeader">Projects</h1>
            <Row className="project-cards-container">
            <div className="project-card">
              <p>Convosphere</p>
              <a href='https://github.com/lucamarsman/web-project'><img src={project1} alt="Project 1" className="project-image" /><div className="project-description">A secure, interactive forum built with Node.js and Express.js. Features JWT authentication, Google OAuth, email verification, and password reset. Securely handles sensitive data with robust middleware and dotenv for configuration.</div></a>
            </div>
            <div className="project-card">
              <p>Todo App</p>
              <a href='https://github.com/lucamarsman/lucamarsman.github.io'><img src={project2} alt="Project 2" className="project-image"/><div className="project-description">A responsive to-do list with task addition, editing, deletion, and completion features. Includes project categorization, date-based task display, and data persistence via LocalStorage.</div></a>
            </div>
          </Row>
            </Col>
        </Container>
    </section>
  )
}