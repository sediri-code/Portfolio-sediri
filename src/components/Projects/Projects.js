import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import netmax from "../../Assets/Projects/netmax.jpg"
import churn from "../../Assets/Projects/churn.jpg"
import canadin from "../../Assets/Projects/canadin.jpg"
import codeshare from "../../Assets/Projects/codeshare.jpg"
import dashboard from "../../Assets/Projects/dashboard.jpg"
import bottrade from "../../Assets/Projects/bottrade.jpg"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes projets <strong className="purple">récents </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques-uns de mes projets universitaires.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netmax}
              isBlog={false}
              title="Netmax"
              description="Netmax est un site web qui aide les gens à développer leurs comptes sur les réseaux sociaux tels que TikTok et Instagram. Il a été construit en utilisant Astro JS, Supabase (PostgreSQL) et Notion. Dans ce projet, j'ai appris sur le rendu côté serveur (SSR), les certificats SSL,Preline UI et l'intégration des API et j'ai amélioré mes connaissances en JavaScript."
              demoLink="https://netmax.live"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={churn}
              isBlog={false}
              title="Banking Churn"
              description="Ce projet consiste à prédire si le client va rester fidèle à sa banque au cours des prochaines années ou non. Ici, j'ai appris à réaliser une analyse discriminante.."
              ghLink="https://github.com/sediri-code/banking_churn"
              demoLink="https://github.com/sediri-code/banking_churn/blob/main/churn_prediction.ipynb"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={canadin}
              isBlog={false}
              title="Canadin App"
              description="
              Pendant mon stage chez Canadin App, j'ai amélioré mes compétences en React JS en développant la page d'authentification du site web."
              
              demoLink="https://canadin-app.com/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={codeshare}
              isBlog={false}
              title="Code share"
              description="J'ai créé une mini plateforme qui facilite le partage de code entre les développeurs. J'ai utilisé Svelte dans le but de l'apprendre."
              ghLink="https://github.com/sediri-code/CodeSync"
              demoLink="https://inquisitive-begonia-d62e99.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Sales Dashboard"
              description="J'ai développé un tableau de bord de ventes pour les données d'un site e-commerce en utilisant l'outil Power BI, dans le but d'améliorer la qualité des acheteurs ciblés."
             
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bottrade}
              isBlog={false}
              title="Trade bot"
              description="J'ai créé un bot qui achète et vend des positions sur le programme Meta 4 Teletrade avec un taux de réussite de 70 % en utilisant le langage MQL4."
              ghLink="https://github.com/sediri-code/MQL4-trade-bot"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
