import { Container, Row, Col } from "react-bootstrap";
import { aboutUsData } from "../../data";

export const WhyUsSection = () => {
  return (
    <div style={{ background: "#eee" }} className="py-5">
      <Container className="my-5 mt-5 position-relative">
        <div>
          {/* <span className="sno" style={{ color: "black" }}>
            04
          </span> */}
          <h2 className="section-title" style={{ color: "black" }}>
            Why Us?
          </h2>
        </div>

        {aboutUsData.map((section, index) => (
          <Row
            key={index}
            className={`align-items-center justify-content-center my-4 g-4 ${
              index % 2 === 1 ? "flex-row-reverse" : ""
            }`}
          >
            <Col md={6} className="d-flex justify-content-center">
              <div
                className="image-wrapper about-img"
                style={{
                  overflow: "none",
                  borderTopRightRadius: "30px",
                  borderBottomLeftRadius: "30px",
                  // border: "1px solid #870be7",
                }}
              >
                <img
                  src={section.imgSrc}
                  alt={section.title}
                  className="img-fluid"
                  data-aos="zoom-in"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </div>
            </Col>
            <Col md={6} className="aboutus-content mt-4 mt-md-0">
              <h3 style={{fontSize:"24px" , fontWeight:"900"}} className="whyus-title">{section.title}</h3>
              <p style={{ textAlign: "justify", color: "black" }}>
                {section.content}
              </p>
            </Col>
          </Row>
        ))}
      </Container>
    </div>
  );
};

export default WhyUsSection;
