import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-custom-header text-light text-center py-5">
      <Container>
        <h1>Artisan Électricien - Électricité générale</h1>
        <p className="lead">
          Pour un travail de qualité et sans concession à la sécurité
        </p>
        <Button as={Link} to="/contact" variant="warning" size="lg">
          Demander un devis gratuit
        </Button>
      </Container>
    </div>
  );
}
