import React from "react";
import { Container, Button } from "react-bootstrap";
import { bannerData } from "../../data";
import "./about.css";

const AboutBanner = () => {
  return (
    <section className="banner-abt pt-3">
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        {bannerData.map((data, index) => (
          <div className="text-center services-heading" key={index}>
            {/* <span
              style={{
                fontSize: "1.5rem !important",
                letterSpacing: ".8px",
                marginBottom: "1.5rem",
                color: "White",
              }}
            >
              {data.title}
            </span> */}
            <h2
              style={{
                fontWeight: "800 !important",
                fontSize: "3rem !important",
                maxWidth: "100%",
                margin: "0 auto",
                marginTop: "2.2rem",
                marginBottom: "1rem",
                color: "White",
              }}
            >
              {data.mainText}
              <span>{data.spanText}</span>
            </h2>
            <div
              style={{
                fontWeight: "500",
                fontSize: "1.1rem",
                maxWidth: "100%",
                margin: "0 auto",
                color: "White",
              }}
            >
              {data.description}
            </div>
            <Button variant="primary" className="home-btn mt-3 btn-common">
              Start Your Journey
            </Button>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default AboutBanner;
