import React from "react";
import { Col, Row } from "react-bootstrap";
import { BsGooglePlay } from "react-icons/bs";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJava,
  DiFirebase,
} from "react-icons/di";
import { SiFlutter, SiGooglecloud, SiKotlin } from "react-icons/si";

import {  TbSql } from "react-icons/tb";
import Github from "./Github";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {" "}
      <Col xs={4} md={2} className="tech-icons">
        <SiKotlin/>/
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlutter/>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <CgCPlusPlus />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbSql />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <BsGooglePlay />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGooglecloud />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiFirebase />  
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Github />  
      </Col>
    </Row>
  );
}

export default Techstack;
