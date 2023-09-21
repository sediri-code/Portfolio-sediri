import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je me <span className="purple"> Présente </span> 
            </h1>
            <p className="home-about-body">
              En tant qu'étudiant en ingénierie IT & Finance passionné par la technologie appliquée aux données financières et le développement d'applications fintech, je recherche actuellement un stage PFE de 6 mois.
              <br />
              <br />J'ai une éxperience en 
              <i>
                <b className="purple"> JavaScript (MERN,Astro.js) / Python,SQL,SPSS (Analyse des données) </b>
              </i>
              <br />
              <br />
              Mes domaines d'intérêt sont la création de nouvelles technologies et produits web, ainsi que les domaines liés à <b className="purple">la Blockchain et Trading. &nbsp; </b>
              
              <br />
              <br />
              J'ai acquis des compétences dans divers domaines de la finance, notamment 
              
              <i>
                <b className="purple">
                  {" "}
                  le marché et les produits financiers, Finance Internationale, Marché des devises, l'économétrie, la gestion et la simulation de portefeuilles, les politiques financières de l'entreprise, ainsi que l'analyse du bilan comptable.
                </b>
              </i>
              &nbsp; dans ces matières m'ont permis de développer une compréhension solide des aspects clés de la finance et de leur application dans le monde des affaires.
              
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> RETROUVEZ MOI SUR</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/sediri-code"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahmed-sediri-8349a41b9/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
