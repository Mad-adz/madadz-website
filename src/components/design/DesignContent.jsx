import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./gallery.css"; // Assuming this is the CSS file where styles are defined

const DesignContent = () => {
  // Array of additional information items
  const additionalInfo = [
    { name: "Brand Identity", icon: "/img/icons/ldes.png" },
    { name: "Print Design", icon: "/img/icons/pdes.png" },
    { name: "Posters", icon: "/img/icons/posdes.png" },
    { name: "Web Graphics", icon: "/img/icons/webgdes.png" },
    // { name: "Packaging Design", icon: "/img/icons/pacdes.png" },
    { name: "Illustration", icon: "/img/icons/Illdes.png" },
    { name: "Advertising", icon: "/img/icons/advdes.png" },
    { name: "Presentation", icon: "/img/icons/presdes.png" },
    { name: "Email Marketing", icon: "/img/icons/edes.png" },
    { name: "Infographic", icon: "/img/icons/infodes.png" },
  ];

  return (
    <section className="py-5" style={{ background: "#fff" }}>
      <Container className="mt-4 description-container">
        <Row className="row align-items-center">
          {/* Icons Column with Flex Wrap */}
          <Col md={12}>
            <div className="d-flex flex-wrap justify-content-center align-items-center gap-3"  data-aos="fade-up">
              {additionalInfo.map((service, index) => (
                <div className="box-btn box-bg" key={index}>
                  <div className="icon-box">
                    <img
                      src={service.icon}
                      alt={service.name}
                      className="icon-img"
                    />
                  </div>
                  <div className="box-text">
                    <p>{service.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default DesignContent;
