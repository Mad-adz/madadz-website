import React from "react";
import { Container, Button } from "react-bootstrap";
import { ServiceBannerData } from "../../data";

const ServiceHeading = () => {
  return (
    <Container className="mt-5 d-flex justify-content-center align-items-center vh-100">
      {ServiceBannerData.map((data, index) => (
        <div className="text-center mb-5 services-heading" key={index}>
          <span
            style={{
              fontSize: "1.5rem !important",
              letterSpacing: ".8px",
              marginBottom: "1.5rem",
              color: "White",
            }}
          >
            {data.title}
          </span>
          <h2
            style={{
              fontWeight: "800 !important",
              fontSize: "3.375rem !important",
              maxWidth: "580px",
              margin: "0 auto",
              marginBottom: "1rem",
              color: "White",
            }}
          >
            {data.mainText}
            <span>{data.spanText}</span>
          </h2>
          <p
            style={{
              fontWeight: "500",
              fontSize: "1.1rem",
              maxWidth: "680px",
              margin: "0 auto",
              color: "White",
            }}
          >
            {data.description}
          </p>
          <Button
            variant="primary"
            className="home-btn mt-5"
            style={{
              background: "#333",
              color: "#fff",
              padding: "15px 25px",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
            }}
          >
            Start Your Journey
          </Button>
        </div>
      ))}
    </Container>
  );
};

export default ServiceHeading;
