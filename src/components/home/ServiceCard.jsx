import { Container, Row, Col, Button } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { cardItems } from "../../data";
import { Link } from "react-router-dom";
import "./home.css";

function ServiceCard() {
  return (
    <div
    // style={{ background: "rgba(255, 255, 255, 0.1)" }}
    // className="pt-3 pb-3"
    >
      <Container className="position-relative mt-5">
        <div>
          {/* <span className="sno">02</span> */}
          <h2 className="section-title mb-4">Services</h2>
        </div>

        <Row>
          {cardItems.map((data, index) => (
            <Col
              key={index}
              md={4}
              className="mb-4 d-flex justify-content-center"
              data-aos="fade-up"
            >
              <div
                style={{
                  width: "90%",
                  transition: "background-image 0.5s ease-in-out",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
                className="service-card-design"
              >
                <div
                  className="service-card-design-2"
                  style={{ padding: "30px" }}
                >
                  <h3 style={{ color: "white" , fontWeight:"900" }}>{data.title}</h3>
                  <h6 className="mb-2" style={{ color: "#870be7" }}>
                    {data.subtitle}
                  </h6>
                  <p style={{ color: "#ddd" }}>{data.text}</p>
                  {/* <Link
                    as={Button}
                    to={"/services/#service-card-info"}
                    className="card-btn btn btn-sm btn-outline-light"
                    style={{}}
                  >
                    More
                  </Link> */}
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default ServiceCard;
