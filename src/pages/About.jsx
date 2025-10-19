import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">À propos de nous</h2>
      <p>
        Étienne Électricité est une entreprise spécialisée dans l’intervention
        rapide au cœur de Rouen
      </p>
      <p>Nos priorités : Satisfaction du client et sécurité</p>
      <i class="bi bi-check2-square">
      </i>
      <p>
        Pour préserver la planète : nous intervenons dans la mesure du possible
        à vélo
      </p>
      <i class="bi bi-bicycle">
      </i>
    </Container>
  );
}
