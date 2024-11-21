import { Container } from "react-bootstrap";
import { saBanner } from "../../data";
import "./storyaura.css";

const Banner = () => {
  return (
    <section className="sa-banner pt-3">
      <Container className="vh-100 d-flex justify-content-center align-items-center">
        {saBanner.map((data, index) => (
          <div className="text-center services-heading" key={index}>
            {/* Replace Title with Logo */}
            <img
              src="/img/Salogo.png" // Replace with your logo URL
              alt="Story Aura Logo"
              style={{
                maxWidth: "200px",
                marginBottom: "1rem",
              }}
            />

            <h3
              style={{
                fontWeight: "800 !important",
                fontSize: "2rem !important",
                maxWidth: "100%",
                margin: "0 auto",
                marginTop: "1rem",
                marginBottom: "1rem",
                color: "White",
              }}
            >
              {data.mainText}
            </h3>

            <div
              style={{
                fontWeight: "500",
                fontSize: "1rem",
                maxWidth: "100%",
                margin: "0 auto",
                color: "White",
              }}
            >
              {data.description}
            </div>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default Banner;
