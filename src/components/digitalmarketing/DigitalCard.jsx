import React from "react";
import { Card, Row, Col, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./digital.css"; // Optional for additional custom styling

const cardData = [
  {
    title: "Marketing Strategy",
    description:
      "A well-crafted marketing strategy aligns your brand's objectives with insights into your target audience, driving sustainable long-term growth. It integrates comprehensive market research, thorough competitor analysis, and strategic key messaging to enhance brand visibility and boost customer engagement. By focusing on audience needs and preferences, your marketing efforts can effectively connect with potential customers, leading to increased loyalty and conversions.",
    imageUrl: "/img/mars.png",
  },
  {
    title: "Digital Advertising",
    description:
      "Leverage powerful digital platforms such as Google, social media, and display networks to precisely reach your target audience. With targeted advertising, data-driven campaigns, and rigorous performance tracking, you can maximize your return on investment (ROI) while optimizing user engagement. Implementing effective digital advertising strategies ensures that your brand message resonates with the right audience at the right time, driving measurable results.",
    imageUrl: "/img/adz.png",
  },
  {
    title: "Media Strategy",
    description:
      "An effective media strategy seamlessly blends traditional and digital channels to amplify your brand’s visibility and impact. By analyzing audience behavior and media consumption patterns, you can ensure optimal reach and frequency across multiple touchpoints. A well-rounded media strategy allows you to connect with your audience where they are most engaged, enhancing brand recognition and fostering meaningful interactions.",
    imageUrl: "/img/mes.png",
  },
];

const DigitalCard = () => {
  return (
    <section style={{ backgroundColor: "#F9F9F9" }}>
      <Container className="mt-0 py-5">
        <h2 className="section-title mb-4" style={{ color: "black" }}>
          Digital Strategy
        </h2>
        <Row>
          {cardData.map((card, index) => (
            <Col md={4} sm={12} key={index} className="mb-4">
              <Card className="branding-card p-3" data-aos="fade-up">
                <div className="d-flex justify-content-center align-items-center mb-3">
                  <Card.Img
                    variant="top"
                    src={card.imageUrl}
                    style={{
                      width: "60px", // Ensure it's an icon-sized image
                      height: "auto", // Maintain aspect ratio
                    }}
                  />
                </div>
                <Card.Body className="text-center">
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.description}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default DigitalCard;
