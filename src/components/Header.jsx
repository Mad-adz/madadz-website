import { useState, useEffect } from "react";
import {
  Container,
  Nav,
  Navbar,
  NavDropdown,
  Offcanvas,
} from "react-bootstrap";
import { FaCaretDown } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./header.css";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [navbarColor, setNavbarColor] = useState("transparent");

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavbarColor("#1a1a1a");
    } else {
      setNavbarColor("transparent");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Navbar
        expand="lg"
        className="fixed-top"
        style={{
          backgroundColor: navbarColor,
          transition: "background-color 0.3s ease",
        }}
      >
        <Container className="fixed-header">
          <Navbar.Brand
            href="#home"
            style={{
              color: "white", // Make sure the text color stays white
              fontSize: "30px",
              fontFamily: "kreadon-extrabold",
            }}
            className="navbar-content nav-bar-section"
          >
            <Link to="/" onClick={() => window.scrollTo(0, 0)}>
              <img src="/img/madadz.png" alt="" width={"100px"} />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="offcanvasNavbar"
            style={{
              color: "white",
              filter: "invert(1)",
              background: "transparent",
              border: "none",
              outline: "none",
              boxShadow: "none",
            }}
            onClick={handleShow}
          />

          <Navbar.Offcanvas
            show={show}
            onHide={handleClose}
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
            placement="end"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            <Offcanvas.Header closeButton style={{ filter: "invert(1)" }}>
              <Offcanvas.Title
                id="offcanvasNavbarLabel"
                style={{ color: "white" }}
              >
                Menu
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <NavLink
                  to="/aboutus"
                  className="nav-link"
                  style={{ color: "white" }} // Ensure white text
                  onClick={() => {
                    handleClose(); // Close the menu
                    window.scrollTo(0, 0); // Scroll to the top
                  }}
                >
                  About
                </NavLink>
                <NavLink
                  to="/storyaura"
                  className="nav-link"
                  style={{ color: "white" }} // Ensure white text
                  onClick={() => {
                    handleClose(); // Close the menu
                    window.scrollTo(0, 0); // Scroll to the top
                  }}
                >
                  Story Aura
                </NavLink>
                <NavDropdown
                  title={
                    <span style={{ color: "white" }}>
                      Services <FaCaretDown style={{ marginLeft: "5px" }} />
                    </span>
                  }
                  id="basic-nav-dropdown"
                  className="custom-dropdown"
                >
                  <div className="dropdown-content">
                    {/* Left Image Section */}
                    <div className="dropdown-img">
                      <img src="/img/wd.jpg" alt="Service" />
                    </div>

                    {/* Right Items Section */}
                    <div className="dropdown-items">
                      <NavDropdown.Item
                        as={NavLink}
                        to="/services/webdevelopment"
                        onClick={() => {
                          handleClose();
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item-custom"
                      >
                        <div className="dropnav-content">
                          <div className="item-title">Web Development</div>
                          <div className="item-description">
                            Create stunning, responsive websites
                          </div>
                        </div>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        as={NavLink}
                        to="/services/branding"
                        onClick={() => {
                          handleClose();
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item-custom"
                      >
                        <div className="item-title">Branding</div>
                        <div className="item-description">
                          Elevate your brand with unique strategies
                        </div>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        as={NavLink}
                        to="/services/designing"
                        onClick={() => {
                          handleClose();
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item-custom"
                      >
                        <div className="item-title">Designing</div>
                        <div className="item-description">
                          Craft creative designs for your business
                        </div>
                      </NavDropdown.Item>

                      <NavDropdown.Item
                        as={NavLink}
                        to="/services/contentcreation"
                        onClick={() => {
                          handleClose();
                          window.scrollTo(0, 0);
                        }}
                        className="dropdown-item-custom"
                      >
                        <div className="item-title">Content Creation</div>
                        <div className="item-description">
                          Engaging content to boost your marketing
                        </div>
                      </NavDropdown.Item>
                    </div>
                  </div>
                </NavDropdown>

                <NavLink
                  to="/contact"
                  className="nav-link"
                  style={{ color: "white" }} // Ensure white text
                  onClick={() => {
                    handleClose(); // Close the menu
                    window.scrollTo(0, 0); // Scroll to the top
                  }}
                >
                  Contact
                </NavLink>
                <NavLink
                  to="/blog"
                  className="nav-link"
                  style={{ color: "white" }} // Ensure white text
                  onClick={() => {
                    handleClose(); // Close the menu
                    window.scrollTo(0, 0); // Scroll to the top
                  }}
                >
                  Blogs
                </NavLink>
              </Nav>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
