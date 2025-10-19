import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  {
    title: "Analyse de votre installation",
    question: "Un doute ?",
    description: [],
    solution: "Nous détectons les faiblesses et les risques",
  },
  {
    title: "Installation partielle ou complète",
    question: "Un nouveau besoin ?",
    description: [
      "Courant fort (Prise, éclairage, chauffage ou autres…)",
      "ou",
      "Courant faible (TV, wifi, object connectés ou autres)",
    ],
    solution:
      "Nous installons les conducteurs et les nouveaux modules dans le respect de la norme",
  },
  {
    title: "Rénovation",
    question: "Une installation ancienne ?",
    description: [],
    solution: "Nous la rénovons pour votre sécurité",
  },
  {
    title: "Dépannage",
    question: "Une panne ?",
    description: [],
    solution:
      "Nous intervenons rapidement pour résoudre les problèmes et prévenir tout risque",
  },
];

export default function Services() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Tous nos services</h2>
      <h6 className="text-center text-warning mb-5">
        Pour les particuliers, pour les collectivités, pour les entreprises
      </h6>
      <Row>
        {services.map((s, i) => (
          <Col md={6} className="mb-3" key={i}>
            <ServiceCard {...s} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
