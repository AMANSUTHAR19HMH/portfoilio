import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body className=" m-0 p-0">
        <blockquote className="blockquote m-0 p-0">
          <p style={{ textAlign: "left" }}>
            Hi Everyone, I am <span className="purple">AMAN SUTHAR </span>
            from <span className="purple"> Rajasthan, India.</span>
            <br />I am currently pursuing Bacherlors of Engineering in{" "}
            <span className="purple">
              Computer Science and Engineering (AIML){" "}
            </span>{" "}
            from <br /> Chandigarh University , currently in my Third Year.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Chess
            </li>
            <li className="about-activity">
              <ImPointRight /> Power Lifting
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
