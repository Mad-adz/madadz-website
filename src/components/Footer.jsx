import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import "./footer.css";

const Footer = () => {
  const [posts, setPosts] = useState([]);
  const accessToken = "YOUR_ACCESS_TOKEN"; // Replace with your access token
  const userId = "YOUR_USER_ID"; // Replace with your user ID

  useEffect(() => {
    const fetchInstagramPosts = async () => {
      try {
        const response = await fetch(
          `https://graph.instagram.com/${userId}/media?fields=id,media_url&access_token=${accessToken}`
        );
        const data = await response.json();
        setPosts(data.data.slice(0, 9)); // Get the latest 9 posts
      } catch (error) {
        console.error("Error fetching Instagram posts:", error);
      }
    };

    fetchInstagramPosts();
  }, [accessToken, userId]);

  return (
    <footer
      className="footer text-light pt-5 pb-4 footer-styling"
      style={{ backgroundColor: "#1a1a1a" }}
    >
      <Container>
        <Row className="">
          <Col md={3} className="text-md-start">
            <div className="social-icons  d-flex flex-column">
              <div className="card1"></div>
              <div className="card2"></div>
              <div className="p">
                <Link to="/" onClick={() => window.scrollTo(0, 0)}>
                  <img
                    src="/img/madadz.png"
                    alt=""
                    width={"100px"}
                    className="mb-3"
                  />
                </Link>
                <div
                  className="mb-3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  Fueling Growth Through Strategy and Creativity !
                </div>
                <p
                  className="mb-3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  <IoPhonePortraitOutline style={{ marginRight: "5px" }} />
                  <a
                    href="tel:+91 6380125351"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    +91 93616 24563
                  </a>
                </p>
                <p
                  className="mb-3"
                  style={{ fontSize: "14px", fontWeight: "500" }}
                >
                  <FiMail style={{ marginRight: "5px" }} />
                  <a
                    href="mailto:karthikkn877@gmail.com"
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    madadz@.co
                  </a>
                </p>
                <div className="d-flex align-items-start justify-content-start mb-5 social-icons-container">
                  <a href="https://www.youtube.com/@madadz-h6n" className="text-light social-icon">
                    <FaYoutube />
                  </a>
                  <a href="https://www.instagram.com/madadz__/#" className="text-light social-icon">
                    <FaInstagram />
                  </a>
                  <a href="https://www.linkedin.com/in/mad-adz-708b60331/" className="text-light social-icon">
                    <FaLinkedinIn />
                  </a>
                  <a href="#" className="text-light social-icon">
                    <FaFacebookF />
                  </a>
                  <a href="https://x.com/madadzindia" className="text-light social-icon">
                    <RiTwitterXFill />
                  </a>
                </div>
              </div>
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={3} className="text-start text-md-start hover-link">
            <h5
              className="footer-title"
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              QUICK LINKS
            </h5>
            <ul className="list-unstyled footer-link">
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/"
                  className="text-light footer-link"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Home
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/services"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Products
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/aboutus"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  About
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/ourworks"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Our Clients
                </Link>
              </li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} className="text-start text-md-start hover-link">
            <h5
              className="footer-title"
              style={{
                color: "#fff",
                fontWeight: "bold",
                marginBottom: "20px",
              }}
            >
              SERVICES
            </h5>
            <ul className="list-unstyled">
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/services/webdevelopment"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Web Development
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/services/designing"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Designing
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/services/branding"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Branding
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/services/contentcreation"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Content Creation
                </Link>
              </li>
            </ul>
          </Col>

          {/* Others */}
          <Col md={3} className="text-start text-md-start hover-link">
            <h5
              className="footer-title"
              style={{
                color: "#fff",
                fontWeight: "900",
                marginBottom: "20px",
              }}
            >
              OTHERS
            </h5>
            <ul className="list-unstyled fs-6">
              <li
                className="d-flex align-items-center"
                style={{ marginBottom: "24px" }}
              >
                <Link
                  to="/contact"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Contact
                </Link>
              </li>
              <li style={{ marginBottom: "24px" }}>
                <Link
                  to="/blog"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Blog
                </Link>
              </li>
              <li
                className="d-flex align-items-center"
                style={{ marginBottom: "24px" }}
              >
                <Link
                  to="/policy"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                {" "}
                <Link
                  to="/terms"
                  className="text-light"
                  style={{ color: "#d3d3d3", textDecoration: "none" }}
                  onClick={() => window.scrollTo(0, 0)}
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </Col>

          {/* Instagram Feed */}
          {/* <Col md={3} className="text-start d-none">
            <h5 className="footer-title" style={{ color: "#fff" }}>
              Instagram Feed
            </h5>
            <div className="d-flex justify-content-center align-items-center">
              <div className="instagram-grid d-flex flex-wrap">
                {posts.length > 0 ? (
                  posts.map((post) => (
                    <a
                      href={`https://www.instagram.com/virtualindiaa?igsh=d2dxbjlhZTlxNzI4${post.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={post.id}
                      style={{
                        width: "70px",
                        height: "70px",
                        margin: "5px",
                        backgroundImage: `url(${post.media_url})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    />
                  ))
                ) : (
                  <p>Loading...</p>
                )}
              </div>
            </div>
          </Col> */}
        </Row>

        {/* Horizontal Line */}
        <hr style={{ borderColor: "#fff", opacity: "0.2" }} />

        {/* Copyright and Footer Bottom */}
        <Row>
          <Col md={12} className="text-center">
            <p style={{ fontSize: "14px" }} className="mb-0">
              © 2024 All rights reserved{" "}
              <strong>
                <Link
                  to="/"
                  className="text-decoration-none"
                  style={{ color: "rgb(135, 11, 231)" }}
                >
                  MadAdz
                </Link>
              </strong>
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
