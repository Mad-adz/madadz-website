import { Container, Row, Col } from "react-bootstrap";
// import "bootstrap/dist/css/bootstrap.min.css";

import { BsChatSquareQuote } from "react-icons/bs";

const dynamicColorClass = "text-primary";

function Banner() {
  return (
    <section className="home-container">
      <Container className="vh-100 d-flex flex-column ">
        <Row className="flex-grow-1 align-items-center">
          <Col md={8} className="home-title pt-5">
            <h4
              className="text-white"
              style={{ fontSize: "18px", fontFamily: "kreadon-regular" }}
            >
              Crafting Digital Solutions
            </h4>
            <h1
              className={`text-${dynamicColorClass} font-weight-bold`}
              style={{
                fontSize: "60px",
                fontFamily: "kreadon-extrabold",
                width: "100%",
                color: "white",
              }}
            >
              For Growth and Innovation..
            </h1>
          </Col>
          <Col
            md={4}
            className="d-flex flex-column align-items-center justify-content-start"
          >
            <BsChatSquareQuote
              style={{
                color: "white",
                fontSize: "120px",
                textAlign: "center",
              }}
            />
            <p
              className="mb-0 text-center text-white fs-5"
              style={{
                fontFamily: "kreadon-bold",
              }}
            >
              "Empower your vision, embrace digital change, and turn ideas into
              impact!"
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Banner;
