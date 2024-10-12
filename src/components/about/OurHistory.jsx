import React from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { historyContent } from "../../data"; // Ensure this file exports an array of objects
import "./about.css";

const OurHistory = () => {
  return (
    <div style={{ background: "#eee" }} className="py-5">
      <Container className="d-flex flex-column justify-content-center align-items-center h-100">
        {historyContent.map((data, index) => (
          <Card
            className="w-100 mb-4 history-card"
            data-aos="zoom-in"
            key={index}
            style={{
              background: "#1a1a1a", // Dark background (slightly off-black for depth)
              color: "#fff", // White text for contrast
              border: "none", // Removes default Bootstrap border
            }}
          >
            <Row className="align-items-center">
              {/* Left Column: Image */}
              <Col md={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={data.imageUrl}
                    alt={data.title}
                    style={{
                      maxWidth: "100%", // Ensure it fits within the column
                      height: "auto",
                      borderRadius: "10px", // Optional: Rounded corners for the image
                    }}
                  />
                </div>
              </Col>

              {/* Right Column: Content */}
              <Col md={6}>
                <Card.Body>
                  <Card.Title
                    style={{
                      fontSize: "2.5rem",
                      fontWeight: "bold",
                      position: "relative",
                    }}
                    className="history-card-title"
                  >
                    {data.title}
                    <div
                      style={{
                        width: "100px",
                        height: "4px",
                        backgroundColor: "#870be7",
                        marginTop: "10px",
                        transformOrigin: "left",
                      }}
                    ></div>
                  </Card.Title>
                  {/* Displaying the description as paragraphs */}
                  <div
                    style={{
                      fontSize: "1.1rem",
                      marginBottom: "1.5rem",
                    }}
                    className="history-card-des"
                  >
                    {data.description.map((point, i) => (
                      <p key={i} style={{ marginBottom: "0.5rem" }}>
                        {point}
                      </p>
                    ))}
                  </div>
                  {/* Optional Button, uncomment if needed */}
                  {/* <Button
      style={{
        backgroundColor: "transparent",
        border: "2px solid #870be7",
        color: "#fff",
        borderRadius: "30px",
        padding: "10px 20px",
        fontWeight: "bold",
        transition: "all 0.3s ease",
      }}
      className="abt-his-btn"
      onMouseEnter={(e) => (
        (e.target.style.backgroundColor = "#870be7"),
        (e.target.style.color = "#000")
      )}
      onMouseLeave={(e) => (
        (e.target.style.backgroundColor = "transparent"),
        (e.target.style.color = "#870be7")
      )}
    >
      {data.buttonText}
    </Button> */}
                </Card.Body>
              </Col>
            </Row>
          </Card>
        ))}
      </Container>
    </div>
  );
};

export default OurHistory;
