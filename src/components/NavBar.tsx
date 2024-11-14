import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Earth } from '../components/EarthIcon.tsx'
import React from "react";
import githubIcon from "../assets/img/github.svg";
import linkedInIcon from '../assets/img/linkedin.svg';

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="#">
            <Earth />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
              <div id="social-icons">
                <Nav.Link href="https://github.com/lucamarsman" target="_blank" rel="noopener noreferrer" className="navbar-icon-link">
                  <img src={githubIcon} alt="GitHub" className="navbar-link" id="navbar-icon"/>
                </Nav.Link>
                <Nav.Link href="https://www.linkedin.com/in/luca-marsman-67b2bb1a6/?originalSubdomain=ca" target="_blank" rel="noopener noreferrer" className="navbar-icon-link">
                  <img src={linkedInIcon} alt="linkedIn" className="navbar-link" id="navbar-icon"/>
                </Nav.Link>
              </div>
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
  )
}