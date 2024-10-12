import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa"; // Checkmark icon

// Sample data
const servicesData = [
  {
    img: "/img/dropdownsev/cc.jpg",
    title: "Content Creation",
    description: "Elevate Your Brand with Engaging Digital Solutions",
    points: [
      "Engaging Storytelling: Craft compelling narratives that capture your audience's attention and convey your message effectively.",
      "Targeted Themes: Develop video content that aligns with trending topics and resonates with your target audience.",
      "Visual Appeal: Utilize high-quality visuals, graphics, and animations to enhance the viewer's experience and keep them engaged.",
      "Call to Action: Incorporate strong calls to action that encourage viewers to engage further with your content or brand.",
    ],
  },
  {
    img: "/img/dropdownsev/cw.jpg",
    title: "Content Writing",
    description: "Compelling Copy That Converts",
    points: [
      "Script Development: Create well-structured scripts that outline key messages, tone, and pacing to ensure a smooth delivery.",
      "Audience-Centric Approach: Tailor content to meet the needs and preferences of your target audience, enhancing relatability and impact.",
      "Keyword Optimization: Integrate relevant keywords naturally within the script to improve search visibility when shared online.",
      "Concise Messaging: Focus on clear and concise messaging to maintain viewer interest and convey information effectively.",
    ],
  },
  {
    img: "/img/dropdownsev/ve.png",
    title: "Video Making and Editing",
    description: "Captivate Your Audience with Stunning Visuals",
    points: [
      "Promotional Videos: Create captivating promotional videos that showcase your products or services, increasing brand awareness.",
      "Social Media Videos: Engage your audience with short, impactful videos designed specifically for platforms like Instagram, Facebook, and Youtube.",
      "Video Editing: Enhance your raw footage with professional editing services, including color correction, sound design, and visual effects.",
    ],
  },
];

const ContentCreate = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", checkMobile);
    checkMobile();

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  return (
    <div
      id="service-card-info"
      style={{
        backgroundColor: "#F9F9F9",
        padding: "50px 0",
      }}
    >
      <Container>
        {servicesData.map((service, index) => (
          <Row
            key={index}
            className="d-flex align-items-center mb-5"
            style={{
              flexDirection: isMobile
                ? "column"
                : index % 2 === 0
                ? "row"
                : "row-reverse",
            }}
          >
            {/* Image Column */}
            <Col md={6} className="mb-3">
              <img
                src={service.img}
                data-aos="zoom-in"
                alt={service.title}
                style={{
                  width: "100%",
                  height: "auto", // Maintain aspect ratio
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Col>

            {/* Content Column */}
            <Col md={6}>
              <h6 style={{ color: "#9D69FF", fontSize: "1.5rem" }}>
                {service.title}
              </h6>
              <h3
                style={{
                  fontSize: "1.2rem", // Adjust font size for mobile
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {service.description}
              </h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {service.points.map((point, idx) => (
                  <li
                    key={idx}
                    style={{
                      fontSize: "1rem",
                      marginBottom: "0.5rem",
                      display: "flex",
                      alignItems: "center",
                      color: "#000",
                    }}
                  >
                    <FaCheck
                      style={{ color: "#9D69FF", marginRight: "10px" }}
                    />
                    {point}
                  </li>
                ))}
              </ul>
              {/* <Button
                variant="primary"
                className="home-btn"
                style={{
                  backgroundColor: "#9D69FF",
                  color: "#fff",
                  padding: "15px 25px",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                  marginTop: "20px",
                }}
              >
                Learn more
              </Button> */}
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default ContentCreate;
