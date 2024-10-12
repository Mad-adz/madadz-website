import React, { useState, useRef, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck, FaArrowRight } from "react-icons/fa"; // Checkmark and Arrow icon

// Sample data
const servicesData = [
  {
    img: "/img/webdev.png",
    title: "Web & App Development",
    description: "Transforming ideas into unified web and app Development",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
  {
    img: "/img/uiux.jpg",
    title: "UI / UX Designing",
    description: "Transforming user feedback into impactful design",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
  {
    img: "/img/digmarketing.jpg",
    title: "Digital & SEO Solutions",
    description: "Connecting businesses with customers in the digital realm",
    points: [
      "Recommended for bulk hiring (5+ roles)",
      "Exclusive Search",
      "Cross-functional scalability",
      "Fixed Pricing Model",
      "Dedicated Team of recruiters",
      "Employer Brand Representation",
      "End-to-end recruitment process management",
    ],
  },
];

const ServiceSection = ({ sectionRef }) => {
  const [currentService, setCurrentService] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const totalServices = servicesData.length;
  // const sectionRef = useRef(null);

  const handleClick = () => {
    setCurrentService((prev) => (prev + 1) % totalServices);
  };

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

  const service = servicesData[currentService];

  return (
    <div
      id="service-card-info"
      className=""
      ref={sectionRef}
      style={{
        height: isMobile ? "100vh" : "100vh", // Fixed height for mobile
        display: "flex",
        alignItems: "center",
        overflow: "hidden", // Prevent overflow
        position: "relative",
        backgroundColor: "#F9F9F9",
      }}
    >
      {!isMobile && (
        <Button
          onClick={handleClick}
          style={{
            position: "absolute",
            top: "20px",
            right: "20px",
            backgroundColor: "#9D69FF",
            color: "#fff",
            padding: "10px 15px",
            border: "none",
            borderRadius: "50px",
            cursor: "pointer",
            zIndex: 1000,
          }}
        >
          <FaArrowRight />
        </Button>
      )}

      {isMobile ? (
        <Container
          className="service-container h-100"
          style={{
            padding: "10px", // Reduced padding for mobile
            color: "white",
            overflowY: "auto", // Allow scrolling if needed
          }}
        >
          {servicesData.map((service, index) => (
            <Row
              key={index}
              className="d-flex align-items-center mb-4" // Reduced bottom margin
            >
              <Col md={6}>
                <img
                  src={service.img}
                  alt={service.title}
                  style={{
                    width: "100%",
                    height: "auto", // Maintain aspect ratio
                    borderRadius: "10px",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                  }}
                />
              </Col>
              <Col md={6}>
                <h6 style={{ color: "#9D69FF", fontSize: "1.2rem" }}>
                  {service.title}
                </h6>
                <h3
                  style={{
                    fontSize: "1rem", // Reduced font size
                    fontWeight: "bold",
                    color: "#000",
                  }}
                >
                  {service.description}
                </h3>
                <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                  {service.points.map((point, index) => (
                    <li
                      key={index}
                      style={{
                        fontSize: "1rem", // Reduced font size
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
              </Col>
            </Row>
          ))}
        </Container>
      ) : (
        <Container
          className="service-container"
          style={{
            height: "100%",
            padding: "20px",
            color: "white",
            transition: "opacity 1s ease-in-out",
          }}
        >
          <Row className="d-flex align-items-center">
            <Col md={6}>
              <img
                src={service.img}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "10px",
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
              />
            </Col>
            <Col md={6}>
              <h6 style={{ color: "#9D69FF", fontSize: "1.2rem" }}>
                {service.title}
              </h6>
              <h3
                style={{
                  fontSize: "2.5rem",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {service.description}
              </h3>
              <ul style={{ listStyleType: "none", paddingLeft: 0 }}>
                {service.points.map((point, index) => (
                  <li
                    key={index}
                    style={{
                      fontSize: "1.1rem",
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
              <Button
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
              </Button>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
};

export default ServiceSection;
