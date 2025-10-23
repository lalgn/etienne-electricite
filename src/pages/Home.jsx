import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";
import { servicesData } from "./Services";

const utilities = [
  {
    text: (
      <>
        <i className="bi bi-geo-alt-fill text-warning me-2"></i>
        Rouen et ses environs
      </>
    ),
    warning: false,
  },
  {
    text: (
      <>
        <i className="bi bi-clock text-warning me-2"></i>
        Intervention rapide
      </>
    ),
    warning: false,
  },
  {
    text: (
      <>
        <i className="bi bi-award-fill text-warning me-2"></i>
        Garantie décennale
      </>
    ),
    warning: false,
  },
];

export default function Home() {
  return (
    <>
      <Hero />
      <Container className="py-5">
        <h2 className="text-center mb-5">Nos services</h2>
        <Row className="mb-4">
          {servicesData.map((s, i) => (
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
