import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./service.css";

const ServiceBanner = ({
  imageSrc,
  heading,
  subHeading,
  description,
  buttonText,
}) => {
  return (
    <section className="home-section">
      <Container className="vh-md-100 d-flex flex-column">
        <Row className="flex-grow-1 align-items-center">
          {/* Image Column */}
          <Col xs={12} md={4} className="order-1 order-md-2 mt-5 serv-img">
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
                    width: "90%",
                    overflow: "hidden",
                  }}
                  className="rotate-img"
                />
              </div>
              <div
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  padding: "10px 20px",
                  backgroundColor: "#870be7",
                  border: "1px solid white",
                  color: "#fff",
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  width: "100%",
                }}
              >
                <strong>{subHeading}</strong>
              </div>
            </div>
          </Col>

          {/* Content Column */}
          <Col xs={12} md={8} className="home-content order-2 order-md-1 mt-5">
            <h2 style={{ fontSize: "60px", color: "#fff" }}>{heading}</h2>
            <p style={{ color: "white" }}>{description}</p>
            <Button
              variant="primary"
              className="home-btn mb-5"
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
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServiceBanner;
