import React from "react";
import { Container, Col } from "react-bootstrap";
import "./gallery.css"; // Assuming you'll put your CSS in this file

const DesignCard = () => {
  const images = [
    "/img/postermockup.jpg",
    "/img/vcard.JPG",
    "/img/logom.JPG",
    "/img/covermockup.png",
    "/img/bb.png",
  ];

  return (
    <section style={{ backgroundColor: "#F9F9F9" }} className="py-5">
      <Container>
        <div>
          <h2 className="section-title mb-4" style={{ color: "black" }}>
            Designs
          </h2>
        </div>

        <div className="bento bento-hover">
          {images.map((image, index) => (
            <div
              key={index}
               data-aos="fade-up"
              className={`bento-card ${index === 0 ? "bento-card-large" : ""}`}
              style={{ backgroundImage: `url(${image})` }}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default DesignCard;
