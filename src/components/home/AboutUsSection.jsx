import { Card, Container } from "react-bootstrap";

function AboutUsSection() {
  return (
    <section
      id="about-section"
      style={{ background: "#1a1a1a" }}
      className="py-5"
    >
      <Container>
        <div>
          {/* <span className="sno">03</span> */}
          <h2 className="section-title"> About Us</h2>
        </div>
        <Card
          className="shadow-lg my-4"
          data-aos="fade-up"
          style={{
            borderRadius: "15px",
            backgroundColor: "unset",
           
          }}
        >
          <Card.Body>
            <Card.Text
              className=""
              as="p"
              style={{ color: "white", fontSize: "18px", textAlign: "justify" }}
            >
              At Madads, we are a team of creative thinkers, tech enthusiasts,
              and digital strategists dedicated to helping businesses thrive in
              the digital landscape. With expertise in web development, UI/UX
              design, social media management, and SEO, we craft tailored
              solutions that elevate your brand and engage your audience.
            </Card.Text>
          </Card.Body>
          <div
            className="ratio ratio-16x9"
            style={{
              borderRadius: "0 0 15px 15px",
            }}
          >
            <video autoPlay loop muted>
              <source src="img/abt-video.mp4" type="video/mp4" />
            </video>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default AboutUsSection;
