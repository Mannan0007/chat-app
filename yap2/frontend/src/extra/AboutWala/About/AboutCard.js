import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "../aboutStyles.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mannan Puri </span>
            from <span className="purple"> Una, Himachal , India.</span>
            <br />
            I am currently a 3rd year Engineering Student.
            <br />
            I have pursuing my 
              <span className="purple" > CSE</span> from Chitkara University 
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Even if there is 1 % chance you should take it"{" "}
          </p>
          <footer className="blockquote-footer">Virat Kohli</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
