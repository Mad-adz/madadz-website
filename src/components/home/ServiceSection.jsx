import { Container, Row, Col } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { cardItems } from "../../data";
import { Link } from "react-router-dom";

function ServiceSection() {
  return (
    <Container className="position-relative">
      <div data-aos="fade-right">
        <span className="sno">02</span>
        <h2 className="section-title">Services</h2>
      </div>

      <Row>
        {cardItems.map((data, index) => (
          <Col
            key={index}
            md={4}
            className="mb-4 d-flex justify-content-center"
          >
            <Card
              style={{
                width: "18rem",
                transition: "background-image 0.5s ease-in-out",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className="card-design"
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundImage = `url(${data.imageUrl})`)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundImage = "none")
              }
            >
              <Card.Body>
                <Card.Title as="h3">{data.title}</Card.Title>
                <Card.Subtitle className="mb-2" as="h6">
                  {data.subtitle}
                </Card.Subtitle>
                <Card.Text as="p">{data.text}</Card.Text>
                <Card.Link as={Link} to={"/services/#service-card-info"}>
                  Let’s Talk
                </Card.Link>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default ServiceSection;
