import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

import Attendance from "../../Assets/Projects/Attendance.png";

import chatapp from "../../Assets/Projects/chatapp.png";
import wanderlust from "../../Assets/Projects/wanderlust.png";
function Projects() {
  return (
    <Container fluid className="project-section" id="projects">
      {/* <Particle /> */}
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Attendance}
              isBlog={false}
              title="Attendance Management System"
              description="Developed a robust Attendance Management System using Flutter, enabling efficient real-time attendance tracking on both Android and iOS platforms. The app allows users to mark attendance, view daily records, and generate detailed reports. It features a user-friendly interface with intuitive navigation, secure authentication, and offline access for marking attendance. Integrated with Firebase for real-time updates, it provides seamless syncing across devices, ensuring accurate record-keeping and timely notifications for absenteeism."
              ghLink="https://github.com/AMANSUTHAR19HMH/Attendance-Management-System-AMS-.git"
              demoLink="https://www.linkedin.com/posts/amansuthar19_connections-flutterdevelopment-internship-activity-7207625370039197696-kLR2?utm_source=share&utm_medium=member_desktop"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatapp}
              isBlog={false}
              title="Weather App"
              description="Built a feature-rich Weather App using Kotlin for Android, providing real-time weather updates and forecasts. The app allows users to view current weather conditions, hourly and weekly forecasts, and detailed metrics like temperature, humidity, wind speed, and more. Integrated with an API for live weather data, it features location-based updates, a dynamic UI with weather animations, and the ability to save favorite locations. The app ensures a smooth and responsive user experience, with background updates and notifications for severe weather alerts."
              ghLink="https://github.com/AMANSUTHAR19HMH/weather-app-.git"
              demoLink="https://play.google.com/store/apps/details?id=com.codacrafts.weathergappaman"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wanderlust}
              isBlog={false}
              title="BMI Buddy"
              description="Developed BMI Buddy, a sleek and user-friendly mobile application using Flutter, designed to calculate and track Body Mass Index (BMI) for users. The app allows users to input their height and weight, instantly calculating their BMI and providing personalized health insights based on the results. It features a modern UI, charts to visualize BMI trends over time, and tailored suggestions for maintaining a healthy lifestyle. BMI Buddy offers goal-setting features, progress tracking, and reminders, making it a reliable tool for health-conscious users."
              ghLink="https://github.com/AMANSUTHAR19HMH/BMI-CALCLULATOR-.git"
              demoLink="https://play.google.com/store/apps/details?id=com.codacrafts.bmicalculator"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Projects;