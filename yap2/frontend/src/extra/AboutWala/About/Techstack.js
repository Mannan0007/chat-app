import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
// import { FaC } from "react-icons/fa6";
import "../aboutStyles.css";

import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiJava,
  DiMysql,
  DiHtml5,
  DiCss3,
  DiGithubFull

} from "react-icons/di";
import {
  SiFirebase,
  SiExpress
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiGithubFull />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
        
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiExpress />
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
