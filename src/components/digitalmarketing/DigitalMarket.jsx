import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";

const DigitalMarket = () => {
  return (
    <section className="mb-5">
      <Container className=" mt-4">
        <Row className="row">
          <Col md={6} style={{ background: "#1a1a1a" }} className="py-2">
            <h6 style={{ textAlign: "center", color: "white" }}>
              Who we have created for
            </h6>
            <h3
              style={{
                color: "white",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Forward Brands
            </h3>
            <p style={{ color: "white", textAlign: "center" }}>
              We partner with innovative brands to create compelling digital
              experiences that drive success in today’s competitive landscape.
            </p>
          </Col>
          <Col
            md={6}
            style={{
              background: "#eee",
              textAlign: "center",
            }}
            className="py-2"
          >
            <h6>Our Methodologies</h6>
            <h3
              style={{
                color: "black",
                textAlign: "center",
                textTransform: "uppercase",
              }}
            >
              Creativity Design
            </h3>
            <p style={{ color: "black", textAlign: "justify" }}>
              Our process blends creativity and design thinking to craft
              innovative, visually captivating, and user-centric solutions that
              drive engagement.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DigitalMarket;
