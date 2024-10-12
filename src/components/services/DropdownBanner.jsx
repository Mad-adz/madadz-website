import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./service.css";

const DropdownBanner = ({
  imageSrc,
  heading,
  subHeading,
  description,
  buttonText,
}) => {
  return (
    <section className="home-section">
      <Container className="vh-md-100 d-flex flex-column">
        <Row className="flex-grow-1 align-items-center mt-2">
          {/* Image Column */}
          <Col xs={12} md={6} className="order-1 order-md-2 mt-5 serv-img">
            <div style={{ position: "relative", width: "100%" }}>
              <div
                style={{
                  margin: "0 auto",
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <img
                  src={imageSrc}
                  alt=""
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
                />
              </div>
            </div>
          </Col>

          {/* Content Column */}
          <Col xs={12} md={6} className="home-content order-2 order-md-1 mt-5">
            <h2
              style={{
                color: "#fff",
                textAlign: "left",
              }}
            >
              {heading}
            </h2>
            <p style={{ color: "white", textAlign: "justify" }}>
              {description}
            </p>
            <Link to="https://wa.me/1234567890">
              {" "}
              {/* Replace with your WhatsApp link */}
              <Button
                variant="primary"
                className="home-btn mb-5 btn-common"
                style={{
                  background: "#333",
                  color: "#fff",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                {buttonText}
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DropdownBanner;
