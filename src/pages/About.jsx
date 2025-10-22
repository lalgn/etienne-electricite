import { Container } from "react-bootstrap";

export default function About() {
  return (
    <Container className="py-5">
      <h2 className="text-center mb-4">À propos de nous</h2>
      <p><i class="bi bi-tools text-warning me-2"></i> Électricien de métier, nous mettons un point d’honneur à perpétuer les valeurs de l’artisanat : la qualité du travail, la rigueur et la confiance. Chaque intervention est réalisée avec soin, dans le respect des normes et des délais, pour garantir votre sécurité et votre confort.
      </p>
      <p> <i class="bi bi-leaf text-warning me-2"></i>  Conscients des contraintes de la vie citadine et soucieux de notre impact environnemental, nous privilégions les déplacements à vélo dès que possible. Ce choix nous permet d’intervenir plus rapidement, tout en participant à l'amélioration de la qualité de vie urbaine.</p>
      <p> <i class="bi bi-bicycle text-warning me-2"></i>  Allier savoir-faire, réactivité et mobilité douce, c’est notre manière d’exercer le métier d’électricien aujourd’hui — avec la même exigence qu’hier, et la responsabilité de demain.  </p> 
    </Container>
  );
}
