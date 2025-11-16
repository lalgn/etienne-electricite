import NewsCard from "../components/NewsCard";
import ServiceCard from "../components/ServiceCard";
import { Container, Row, Col } from "react-bootstrap";
import chantierimage from "../assets/renovation-bd-arr-cuisine.jpg"

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
      "Dans le cadre de la rénovation d'une arrière-cuisine, nous avons remplacé une vieille boite de dérivation en bois (!?) par une nouvelle boite de dérivation beaucoup plus classique :). Les vieux conducteurs ont été remplacés par des H07V-U dans des moulures."
    ],
    image: chantierimage,
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
