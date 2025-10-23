import { Container, Row, Col } from "react-bootstrap";
import renovtableau from "../assets/renovation-tableau-electrique.png";
import tableausecondaire from "../assets/tableau-secondaire.png";
import renovcuisine from "../assets/renovation-electricite-cuisine.png";

const images = [
  {
    src: renovtableau,
    caption: "Rénovation et extension d'un tableau de dérivation",
  },
  {
    src: tableausecondaire,
    caption: "Installation d'un tableau secondaire pour un étage de maison",
  },
  {
    src: renovcuisine,
    caption: "Rénovation complète de l'installation électrique d'une cuisine",
  },
];

export default function Gallery() {
  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">
        <i className="bi bi-images text-warning me-2"></i>
        Photos de réalisations
      </h3>
      <Row>
        {images.map((img, i) => (
          <Col md={4} className="mb-3" key={i}>
            <figure key={i} className="gallery-item">
              <img src={img.src} alt={img.caption} />
              <figcaption>{img.caption}</figcaption>
            </figure>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
