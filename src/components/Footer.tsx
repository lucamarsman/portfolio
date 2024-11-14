import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import githubIcon from '../assets/img/github.svg'
import linkedInIcon from '../assets/img/linkedin.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end" id="footer-content">
            <p>Copyright 2024. All Rights Reserved</p>
            <div className="social-icon-footer">
              <a href="https://github.com/lucamarsman"><img src={githubIcon} alt="GitHub Icon" /></a>
              <a href="https://www.linkedin.com/in/luca-marsman-67b2bb1a6/?originalSubdomain=ca"><img src={linkedInIcon} alt="LinkedIn Icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}