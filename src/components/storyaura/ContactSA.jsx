import { Col, Container, Row } from "react-bootstrap";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTelegramPlane,
  FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { RiTwitterXFill, RiWhatsappFill } from "react-icons/ri";
import { SiGoogleforms } from "react-icons/si";
import { Link } from "react-router-dom";
const ContactSA = () => {
  return (
    <div style={{ padding: "50px 0" }}>
      <Container className="mt-5">
        <Row>
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-3 p-md-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "10px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h4 className="mb-4" style={{ color: "#fff", fontWeight: "900" }}>
                Send Your Stories
              </h4>
              <div className="d-flex flex-column">
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "16px", color: "#ddd" }}
                >
                  <RiWhatsappFill
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  +91 95668 63602
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "16px", color: "#ddd" }}
                >
                  <FaTelegramPlane
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  <Link
                    to={"https://t.me/storyauraofficial"}
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    storyauraofficial
                  </Link>
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "14px", color: "#ddd" }}
                >
                  <MdEmail
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  <a
                    className="text-decoration-none text-white"
                    href="mailto:storyauracommunity@gmail.com"
                  >
                    storyauracommunity@gmail.com
                  </a>
                </p>
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "14px", color: "#ddd" }}
                >
                  <SiGoogleforms
                    style={{
                      fontSize: "24px",
                      marginRight: "10px",
                      color: "#ddd",
                    }}
                  />
                  <Link
                    to={"https://forms.gle/RinTcQGxWZjJFAEY9"}
                    target="_blank"
                    className="text-decoration-none text-white"
                  >
                    Google Form
                  </Link>
                </p>

                <h3
                  style={{
                    color: "#fff",
                    fontWeight: "900",
                    marginTop: "10px",
                  }}
                >
                  Address
                </h3>
                <p
                  className="d-flex align-items-center"
                  style={{ fontSize: "14px", color: "#ddd" }}
                >
                  No.347, Old Gst Road, East Tambaram, Chennai - 600059
                </p>
                <h3
                  style={{
                    color: "#fff",
                    fontWeight: "900",
                    marginTop: "10px",
                  }}
                >
                  Follow Us
                </h3>
                <div className="d-flex align-items-center gap-3 mt-3">
                  <Link
                    to="https://www.facebook.com/profile.php?id=61567473510308"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <FaFacebookF style={{ fontSize: "25px" }} />
                  </Link>
                  <Link
                    to="https://x.com/storyauratamil"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <RiTwitterXFill style={{ fontSize: "25px" }} />
                  </Link>
                  <Link
                    to="https://www.instagram.com/storyauraofficial"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </Link>
                  <Link
                    to="https://www.youtube.com/channel/UC4ITZJ8nFwn-1P0TYpd7m-A"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    <FaYoutube style={{ fontSize: "25px" }} />
                  </Link>
                </div>
              </div>
            </div>
          </Col>

          {/* Form Section */}
          <Col xs={12} md={6} className="mb-4">
            <div
              className="contact-details p-4"
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                width: "100%",
                height: "100%",
                borderRadius: "20px",
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                }}
              >
                Vote for Your Favorite Story!
              </h3>
              <p className="text-white">
                We’re excited to invite everyone to support the participants in
                our story competition! Take a moment to read the incredible
                stories submitted by talented writers and vote for the ones that
                moved or inspired you the most.
              </p>
              <p className="text-white">
                To vote, simply click the link below and choose your favorites
                in the Google Form poll:
              </p>
              <div className="d-flex justify-content-center">

              <Link to={"https://docs.google.com/forms/d/e/1FAIpQLSdCypET7zQhUasVk_AvjQDx4LFvf0s10jhOr1-MLRY8CrutYg/viewform?usp=sf_link"} variant="primary" className="home-btn mt-3 btn-common">
                Cast Your Vote
              </Link>
              </div>
              <p className="text-white mt-4">
                Let your voice be heard and help us crown the winner! Thank you
                for being a part of our storytelling journey.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactSA;
