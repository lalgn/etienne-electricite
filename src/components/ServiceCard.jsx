import { Card } from "react-bootstrap";

export default function ServiceCard({
  homemode,
  title,
  question,
  description,
  solution,
}) {
  return (
    <Card className="h-100 text-center">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{title}</Card.Title>
        {!homemode && (
          <>
            <Card.Text className="text-warning">{question}</Card.Text>
            {description.length != 0 && (
              <Card.Text style={{ whiteSpace: "pre-line" }}>
                {description.join("\n")}
              </Card.Text>
            )}
            <Card.Text>
              <span className="text-warning me-2">→</span>
              {solution}
            </Card.Text>
          </>
        )}
      </Card.Body>
    </Card>
  );
}
