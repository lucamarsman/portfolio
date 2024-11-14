import { useState, useEffect } from "react";
import { Container, Col, Row } from "react-bootstrap";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import jsLogo from '../assets/img/js.png';
import mySqlLogo from '../assets/img/mysql.png';
import nodeJsLogo from '../assets/img/nodejs.png';
import reactLogo from '../assets/img/react.png';
import aspLogo from '../assets/img/asp.png';
import javaLogo from '../assets/img/java.png';
import cppLogo from '../assets/img/cpp.png';
import csLogo from '../assets/img/cs.png';
import azureLogo from '../assets/img/azure.png';
import colorSharp from '../assets/img/color-sharp.png'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

export const Skills = () => {
  return (
    <section className="Skills">
        <img src={colorSharp} id="colorSharp"></img>
        <Container>
            <Col xs={12} md={6} xl={5} id="skills">
            <h1 id="skillHeader">Skills</h1>
            <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={2000}>
                <img src ={jsLogo} className="skillLogo"/>
                <img src ={mySqlLogo} className="skillLogo"/>
                <img src ={nodeJsLogo} className="skillLogo"/>
                <img src ={reactLogo} className="skillLogo"/>
                <img src ={aspLogo} className="skillLogo"/>
                <img src ={javaLogo} className="skillLogo"/>
                <img src ={cppLogo} className="skillLogo"/>
                <img src ={csLogo} className="skillLogo"/>
                <img src ={azureLogo} className="skillLogo"/>
            </Carousel>
            </Col>
        </Container>
    </section>
  )
}