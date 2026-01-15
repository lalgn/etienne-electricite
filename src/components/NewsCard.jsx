import { Card } from "react-bootstrap";
import "../styles/NewsCard.css";

export default function NewsCard({
  homemode,
  title,
  date,
  description,
  image,
}) {
  return (
    <Card className="h-100">
      <Card.Body className="d-flex flex-column text-center">
        <Card.Title>{title}</Card.Title>
        {!homemode && (
          <>
            <Card.Text className="text-warning">{date}</Card.Text>
            {description.length != 0 && (
              <Card.Text style={{ whiteSpace: "pre-line" }}>
                {description.join("\n")}
              </Card.Text>
            )}
            <div className="image-container">
            <img src={image}
            alt={title}/>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
