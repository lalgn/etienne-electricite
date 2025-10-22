import { Container } from "react-bootstrap";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

import renovtableau from "../assets/Renovation-et-extension-de-tableau.jpg";
import renovcuisine from "../assets/Renovation-Electricite-cuisine-g.jpg";
import tableausecondaire from "../assets/Tableau-secondaire.jpg";


export default function About() {
 
 function Galerie() {
  const images = [
    { src: renovtableau, caption: "Rénovation et extension de tableau de dérivation" },
    { src: renovcuisine, caption: "Rénovation complète de l'installation électrique d'une cuisine" },
    { src: tableausecondaire, caption: "Installation d'un tableau secondaire pour un étage de maison" },
  ];

  return (
      <Container className="py-4">
        <h3 className="text-center mb-4">
          <i className="bi bi-images text-warning me-2"></i>
          Photos de réalisations
        </h3>
      <Row className="g-4">
        {images.map((img, index) => (
          <Col md={4} key={index}>
            <Card className="shadow-sm border-0">
              <Card.Img variant="top"
              src={img.src}
              alt={img.caption}
              style={{
                    objectFit: "contain", // ne rogne pas l’image
                    borderRadius: 0, // pas de coins arrondis
                    width: "100%",
                    height: "auto", // garde les proportions d’origine
                  }}
               />
              <Card.Body>
                <Card.Text className="text-center text-light">
                  {img.caption}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    );
  }

  return (
    <Container className="py-5">
      <h2 className="text-center mb-4"> <i class="bi bi-info-circle text-warning me-2"></i>À propos de nous</h2>
      <p className="text-justify"> <i class="bi bi-tools text-warning me-2"></i> Électricien de métier, nous mettons un point d’honneur à perpétuer les valeurs de l’artisanat : la qualité du travail, la rigueur et la confiance. Chaque intervention est réalisée avec soin, dans le respect des normes et des délais, pour garantir votre sécurité et votre confort.
      </p>
      <p className="text-justify"> <i class="bi bi-bicycle text-warning me-2"></i>  Conscients des contraintes de la vie citadine et soucieux de notre impact environnemental, nous privilégions les déplacements à vélo dès que possible. Ce choix nous permet d’intervenir plus rapidement, tout en participant à l'amélioration de la qualité de vie urbaine.</p>
      <p className="text-justify"> <i class="bi bi-leaf text-warning me-2"></i>  Allier savoir-faire, réactivité et mobilité douce, c’est notre manière d’exercer le métier d’électricien aujourd’hui — avec la même exigence qu’hier, et la responsabilité de demain.  </p> 
      <Galerie />
    </Container>
  );
}