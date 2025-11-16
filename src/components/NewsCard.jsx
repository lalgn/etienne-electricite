import { Card } from "react-bootstrap";


export default function NewsCard({
  homemode,
  title,
  date,
  description,
  image,
}) {
  return (
    <Card className="h-100 text-center">
      <Card.Body className="d-flex flex-column justify-content-center align-items-center">
        <Card.Title>{title}</Card.Title>
        {!homemode && (
          <>
            <Card.Text className="text-warning">{date}</Card.Text>
            {description.length != 0 && (
              <Card.Text style={{ whiteSpace: "pre-line" }}>
                {description.join("\n")}
              </Card.Text>
            )}
            <Card.Img variant="top" src={image} />
          </>
        )}
      </Card.Body>
    </Card>
  );
}
