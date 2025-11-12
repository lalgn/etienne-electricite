import { Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="bg-custom-header text-light text-center py-5">
      <Container>
        <h1>Artisan Électricien - Électricité générale</h1>
        <h4>Pour un travail de qualité et sans concession à la sécurité</h4>
        <p>
        Basés à Rouen, nous intervenons pour tous vos travaux d’électricité générale et de dépannage dans la métropole rouennaise
        </p>
        <Button as={Link} to="/contact" variant="warning" size="lg">
          Demander un devis gratuit
        </Button>
      </Container>
    </div>
  );
}