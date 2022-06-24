import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import rocket from "../assets/PicsArt_04-14-04.42 1.svg"
import { Link } from "react-router-dom";


function Banner(){
    return <section id="banner">
    <Container>
      <Row>
        <Col lg={8}>
            <h1 className="bannerHeading">Accelerate Innovation with Global AI Challenges</h1>
            <p className="bannerDescription">AI Challenges at DPhi simulate real world problems.It is a great place to put your AI/Data Science Skills to test on diverse datasets allowing you to foster learning through competitions</p>
        </Col>
        <Col><img src={rocket} alt="" className="rocket" /></Col>
      </Row>
      <Link to="/create" className="createChallenge"><button className="createChallengeBtn">Create Challenge</button></Link>
    </Container>
    </section>
}

export default Banner;