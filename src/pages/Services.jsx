import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";

export const servicesData = [
  {
    title: (
      <>
        <i className="bi bi-clipboard-pulse text-warning me-2"></i>
        Analyse de votre installation
      </>
    ),
    question: "Un doute ?",
    description: [],
    solution: "Nous détectons les faiblesses et les risques",
  },
  {
    title: (
      <>
        <i className="bi bi-lightning text-warning me-2"></i>
        Installation partielle ou complète
      </>
    ),
    question: "Un nouveau besoin ?",
    description: [
      "Sur l’électricité du quotidien",
      "(Prises, éclairage, chauffage, motorisations etc…)",
      "Ou sur des systèmes connectés",
      "(Réseaux informatiques, interphones, alarmes, vidéosurveillance, domotique etc…)",
    ],
    solution:
      "Nous installons les conducteurs et les nouveaux modules dans le respect de la norme",
  },
  {
    title: (
      <>
        <i className="bi bi-house-up text-warning me-2"></i>
        Rénovation
      </>
    ),
    question: "Une installation ancienne ?",
    description: [],
    solution: "Nous la rénovons pour votre sécurité",
  },
  {
    title: (
      <>
        <i className="bi bi-screwdriver text-warning me-2"></i>
        Dépannage
      </>
    ),
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
      <h6 className="text-center text-warning mb-3">
        Pour les particuliers, pour les collectivités, pour les entreprises
      </h6>
      <h6 className="text-center mb-5">
      Nous intervenons principalement à Rouen, Bois-Guillaume et Mont-Saint Aignan mais nous pouvons nous déplacer dans toute la métropole rouennaise pour vos dépannages et installations éléctriques.
      </h6>
      <Row>
        {servicesData.map((s, i) => (
          <Col md={6} className="mb-3" key={i}>
            <ServiceCard {...s} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
