import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";

const services = [
  { title: (
      <>
        <i class="bi bi-clipboard-pulse text-warning me-2"></i>
        Analyse de votre installation
      </>
    ) },
  { title:(
      <>
        <i class="bi bi-lightning text-warning me-2"></i> 
        Installation partielle ou complète
   </>
    ) },
  { title:(
      <>
        <i class="bi bi-house-up text-warning me-2"></i>
        Rénovation
    </>
    ) },
  { title:(
      <>
        <i class="bi bi-screwdriver text-warning me-2"></i> 
        Dépannage
     </>
    ) },
];

const utilities = [
  { text: <>
        <i class="bi bi-geo-alt-fill text-warning me-2"></i>
        Rouen et ses environs
      </>, warning: false },
  { text:  <>
        <i class="bi bi-clock text-warning me-2"></i>
        Intervention rapide
      </>, warning: false },
  { text: <>
        <i class="bi bi-award-fill text-warning me-2"></i>
        Garantie décennale
      </>, warning: false },
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
