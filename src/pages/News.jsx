import NewsCard from "../components/NewsCard";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";
import chantierimage from "../assets/renovation-bd-arr-cuisine.jpg"
import chantierimage2 from "../assets/avant-apres-bd-arr-cuisine.jpg"
import chantierimage3 from "../assets/avant-apres-tableau-divisionnaire.jpg"

export const newsData = [
  {
    title: (
      <>
        <i className="text-warning me-2"></i>
        Chantier de renovation d'une boite de dérivation
      </>
    ),
    date: "13/11/2025",
    description: [
      "Dans le cadre de la rénovation d'une arrière-cuisine, nous avons remplacé une vieille boite de dérivation en bois (!?) par une nouvelle boite de dérivation beaucoup plus classique :). Les vieux conducteurs ont été remplacés par des H07V-U dans des moulures"
    ],
    image: chantierimage,
  },
  {
    title: (
      <>
        <i className="text-warning me-2"></i>
        Chantier de renovation d'une boite de dérivation
      </>
    ),
    date: "02/12/2025",
    description: [
      "La suite du précédent, après mise en peinture, cela méritait bien un avant-après..."
    ],
    image: chantierimage2,
  },
  {
    title: (
      <>
        <i className="text-warning me-2"></i>
        Chantier de renovation d'un tableau divisionnaire
      </>
    ),
    date: "23/12/2025",
    description: [
      "Chantier de renovation d'un petit tableau divisionnaire qui était dangereux car il n'avait pas de borniers fixes"
    ],
    image: chantierimage3,
  },
];

export default function News() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-3">Toutes nos actualités</h2>
      <Row>
        {newsData.map((s, i) => (
          <Col md={6} className="mb-3" key={i}>
            <NewsCard {...s} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
