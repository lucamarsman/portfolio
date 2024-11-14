import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {useState } from 'react';
import spaceman from '../assets/img/spaceman.png';

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} id="stars">
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
            <span className='stars'></span>
          </Col>
        </Row>
      </Container>
      <Row id="banner-main">
        <Col xs={12} md={6} xl={5} id="name">
              <h1>Hello, I'm Luca</h1>
              <p>A computer science student passionate about full-stack web development.</p>
        </Col>
        <Col xs={12} md={6} xl={5} id="banner-img">
            <img src={spaceman}/>
        </Col>
      </Row>
    </section>
  )
}
