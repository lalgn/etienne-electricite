import { Container } from "react-bootstrap";
import Gallery from "../components/Gallery";

export default function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">
        {" "}
        <i className="bi bi-info-circle text-warning me-2"></i>À propos de nous
      </h2>
      <p className="text-justify">
        {" "}
        <i className="bi bi-tools text-warning me-2"></i> Électriciens de métier, installés à Rouen,
        nous mettons un point d’honneur à perpétuer les valeurs de l’artisanat :
        la qualité du travail, la rigueur et la confiance. Chaque intervention de notre entreprise
        est réalisée avec soin, dans le respect des normes et des délais, pour
        garantir votre sécurité et votre confort.
      </p>
      <p className="text-justify">
        {" "}
        <i className="bi bi-bicycle text-warning me-2"></i> Conscients des
        contraintes de la vie citadine et soucieux de notre impact
        environnemental, nous privilégions les déplacements à vélo dès que
        possible. Ce choix nous permet d’intervenir plus rapidement, tout en
        participant à l'amélioration de la qualité de vie urbaine.
      </p>
      <p className="text-justify">
        {" "}
        <i className="bi bi-leaf text-warning me-2"></i> Allier savoir-faire,
        réactivité et mobilité douce, c’est notre manière d’exercer le métier
        d’électricien aujourd’hui — avec la même exigence qu’hier, et la
        responsabilité de demain.{" "}
      </p>
      <Gallery />
    </Container>
  );
}
