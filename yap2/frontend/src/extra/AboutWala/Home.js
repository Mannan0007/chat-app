import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import homeLogo from "./Assets/mannan_dp-removebg-preview.png";
import homeLogo from "./Assets/mannan_dp.jpg";
import Particle from "./Particle";
import Home2 from './Home2'
import Type from "./Type";
import './aboutStyles.css'
import Aurora from "./Aurora";
import Card from "./CardSpecs";
import FlipCard from "./CardSpecs";
function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
      {/* <Aurora
        colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
        blend={0.5}
        amplitude={1.0}
        speed={0.5}
      /> */}
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Mannan Puri</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <FlipCard/>

            {/* <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
              />
            </Col> */}
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
