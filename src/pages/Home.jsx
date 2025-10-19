import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  { title: "Analyse de votre installation" },
  { title: "Installation partielle ou complète" },
  { title: "Rénovation" },
  { title: "Dépannage" },
];

const utilities = [
  { text: "Zone : Rouen et ses environs", warning: false },
  { text: "Intervention rapide", warning: false },
  { text: "Garantie décennale", warning: false },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="py-5">
        <h2 className="text-center mb-5">Nos services</h2>
        <Row className="mb-4">
          {services.map((s, i) => (
            <Col md={6} lg={3} className="mb-3" key={i}>
              <ServiceCard {...s} homemode={true} />
            </Col>
          ))}
        </Row>
        <Row>
          {utilities.map((u, i) => (
            <Col md={4} className="mb-3" key={i}>
              <p
                className={`d-flex justify-content-center ${
                  u.warning ? "text-warning" : ""
                }`}
              >
                {u.text}
              </p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
