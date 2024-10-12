import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { SiGoogleads } from "react-icons/si";

const zigZagData = [
  {
    title: "Google Ads",
    description:
      "Maximize your online visibility with Google Ads, a powerful advertising platform that connects your brand with potential customers at the moment they are searching for products or services like yours. Our expertly crafted Google Ads campaigns utilize targeted keywords, compelling ad copy, and strategic bidding to ensure your ads appear prominently in search results. By leveraging advanced analytics, we continually optimize your campaigns to enhance click-through rates (CTR) and drive quality traffic to your website, resulting in increased conversions and a higher return on investment (ROI).",
    iconUrl: "/img/adz-img/googleadz.png",
  },
  {
    title: "Social Media Ads",
    description:
      "Unlock the potential of social media marketing with our targeted advertising solutions, designed to connect with your audience where they actively engage online. Our approach to social media advertising focuses on creating visually captivating ads that resonate with your audience’s interests and behaviors across various platforms. By leveraging detailed targeting options, we ensure your ads reach the right demographics, driving user engagement and conversions. Through continuous performance tracking and A/B testing, we optimize your social media ad campaigns for maximum impact, helping you build brand awareness and cultivate meaningful customer relationships.",
    iconUrl: "/img/adz-img/smadz.png",
  },
  {
    title: "SEO (Search Engine Optimization)  ",
    description:
      "Enhance your online presence with effective SEO strategies that drive organic traffic to your website. Our comprehensive SEO services include keyword research, on-page optimization, technical SEO, and high-quality backlink building to improve your search engine rankings. By focusing on user experience and valuable content, we ensure your website meets search engine guidelines and provides a seamless experience for visitors. With our data-driven approach, we continuously monitor performance and adjust strategies to achieve long-term results, helping you gain visibility, attract targeted leads, and increase conversions.",
    iconUrl: "/img/adz-img/seo.png",
  },
];

const DigitalMedia = () => {
  return (
    <section style={{ background: "#eee" }} className="py-5">
      <Container className="mt-4">
        {zigZagData.map((item, index) => (
          <Row className="mb-5 align-items-center" key={index}>
            {index % 2 === 0 ? (
              <>
                <Col md={6}>
                  <div className="d-flex justify-content-center">
                    <img
                      src={item.iconUrl}
                      data-aos="fade-up"
                      alt={item.title}
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </Col>
                <Col md={6}>
                  <Card className="p-3 media-card">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card>
                </Col>
              </>
            ) : (
              <>
                <Col md={6} className="order-md-2">
                  <div className="d-flex justify-content-center">
                    <img
                      src={item.iconUrl}
                      alt={item.title}
                      data-aos="fade-up"
                      style={{
                        width: "100%",
                        height: "auto",
                      }}
                    />
                  </div>
                </Col>
                <Col md={6} className="order-md-1">
                  <Card className="p-3 media-card">
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text>{item.description}</Card.Text>
                  </Card>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Container>
    </section>
  );
};

export default DigitalMedia;
