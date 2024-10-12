import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaCheck } from "react-icons/fa"; // Checkmark icon

// Sample data
const servicesData = [
  {
    img: "/img/uiux.jpg",
    title: "UI/UX Design Services for Web and Mobile Apps",
    description:
      "We specialize in crafting intuitive and visually captivating UI/UX design solutions that enhance user engagement and seamlessly connect users with your brand across digital platforms.",
    points: [
      "Comprehensive User Research & Analysis",
      "Detailed Wireframing & Prototyping Services",
      "Professional User Interface (UI) Design",
      "Optimized User Experience (UX) Design",
      "Responsive and Adaptive Web Design",
      "Interactive Design for Enhanced Engagement",
      "Strategic Information Architecture (IA)",
    ],
  },
  {
    img: "/img/webdev.png",
    title: "Expert Web Development Services",
    description:
      "Transforming innovative ideas into high-performing, seamless websites that provide exceptional user experiences and drive business growth in the digital landscape.",
    points: [
      "Custom Website Development Tailored to Your Needs",
      "E-commerce Development for Online Success",
      "Robust CMS Development for Easy Management",
      "Seamless API Integration for Enhanced Functionality",
      "Progressive Web Apps (PWA) for Superior User Experience",
      "Ongoing Web Maintenance & Support Services",
    ],
  },
  {
    img: "/img/digmarketing.jpg",
    title: "Comprehensive App Development Services",
    description:
      "Transforming groundbreaking ideas into powerful, high-performing mobile applications for iOS, Android, and cross-platform environments, ensuring an exceptional user experience.",
    points: [
      "Custom Mobile App Development for Unique Solutions",
      "Expert iOS App Development for Apple Devices",
      "Professional Android App Development",
      "Cross-Platform App Development for Wider Reach",
      "Seamless App Integration with Third-Party Services",
      "Enhanced App Security and Compliance Standards",
      "Reliable App Maintenance and Support Services",
    ],
  },
];

const ServiceSection = () => {
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
                alt={service.title}
                data-aos="zoom-in"
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

export default ServiceSection;
