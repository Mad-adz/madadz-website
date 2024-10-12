import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { aboutPointsHeading, cardData } from "../../data"; // Ensure `cardData` has the 4 cards info
import "./about.css";

const AboutPoints = () => {
  return (
    <section style={{ background: "#eee" }} className="py-5">
      {" "}
      <Container>
        {/* Main Section Title and Description */}
        <div className="text-center mb-4">
          <h2
            style={{ fontSize: "2.5rem", fontWeight: "bold", color: "black" }}
          >
            {aboutPointsHeading.title}
          </h2>
          <p style={{ fontSize: "1.2rem", margin: "20px 0", color: "black" }}>
            {aboutPointsHeading.description}
          </p>
        </div>

        {/* Cards Section */}
        <Row>
          {cardData.map((card, index) => (
            <Col key={index} sm={12} md={6} lg={6} className="mb-4">
              <Card
                style={{
                  background:
                    "linear-gradient(180deg, #0B0E14 0%, #1D2029 100%)", // Dark background gradient
                  color: "#fff",
                  padding: "20px", // Add padding around the content
                  borderRadius: "15px", // Rounded corners
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.3)", // Soft shadow for depth
                  border: "1px solid rgba(255, 255, 255, 0.1)", // Subtle border
                  width: "100%", // Card size limit
                  margin: "auto", // Center the card horizontally
                  height: "100%",
                }}
                className="about-card-des"
                 data-aos="zoom-in"
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  {/* Icon Image */}
                  <Card.Img
                    src={card.img}
                    alt={card.title}
                    style={{
                      width: "60px", // Adjust size of the icon
                      marginRight: "20px", // Space between the image and text
                      borderRadius: "12px", // Rounded image corners
                      backgroundColor: "#1E2230", // Optional background color for image
                      padding: "10px", // Space around the icon inside the container
                    }}
                  />
                  {/* Title and Description */}
                  <div>
                    <Card.Title
                      style={{
                        fontSize: "1.5rem",
                        fontWeight: "bold",
                        marginBottom: "10px", // Space below title
                      }}
                    >
                      {card.title}
                    </Card.Title>
                    <Card.Text
                      style={{
                        fontSize: "1rem",
                        color: "#B0B3C0", // Lighter text for description
                      }}
                    >
                      {card.description}
                    </Card.Text>
                  </div>
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AboutPoints;
