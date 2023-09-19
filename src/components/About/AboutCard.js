import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je suis <span className="purple">Ahmed Sediri</span> étudiant en dernière année d'ingénierie en finance informatique et Fintech. 
            <br />Je suis à la recherche d'une bonne opportunité pour mon stage de dernière année, d'une durée de 6 mois.
            <br />
            J'ai la capacité d'apprendre n'importe quoi et de terminer tout travail qui m'est confié de la manière correcte et dans les délais impartis.
            <br />
            <br />
            Mis à part l'informatique et la finance, j'aime beaucoup faire d'autres activités !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Cryptomonnaie
            </li>
            <li className="about-activity">
              <ImPointRight /> Jeux Videos
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
