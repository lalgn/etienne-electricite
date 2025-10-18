import { Container, Form, Button } from "react-bootstrap";

export default function Contact() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Contactez-nous</h2>
      <h6 className="text-center text-warning mb-5">Devis gratuit</h6>
      <div className="text-center mt-4">
        <p>
          <a
            href="tel:+33650019641"
            className="text-decoration-none text-light"
          >
            <i className="bi bi-telephone-fill text-warning me-2"></i>
            06 50 01 96 41
          </a>
        </p>
        <p>
          <a
            href="mailto:etienne.electricite@outlook.com "
            className="text-decoration-none text-light"
          >
            <i className="bi bi-envelope-fill text-warning me-2"></i>
            etienne.electricite@outlook.com
          </a>
        </p>
      </div>
    </Container>
  );
}
