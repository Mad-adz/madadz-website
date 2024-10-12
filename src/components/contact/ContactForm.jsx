import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import Form from "react-bootstrap/Form";
import { useForm, ValidationError } from "@formspree/react";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; // Import CSS for toast notifications
import "./contact.css";

const ContactForm = () => {
  const [state, handleSubmit] = useForm("mqakkkjk");
  
  // State to manage form input values
  const [formValues, setFormValues] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });

  const notify = () => {
    toast.success("Thanks for your message!", {
      position: "top-center",
      autoClose: 2000, // 2 seconds
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleSubmit(e);
    if (state.succeeded) {
      notify();
      // Clear form values
      setFormValues({
        name: "",
        phone: "",
        service: "",
        message: "",
      });
    }
  };

  return (
    <div id="contact-section" style={{ padding: "50px 0" }}>
      <ToastContainer />
      <Container className="mt-5">
        <div className="contact-heading text-center mb-5">
          <h2 style={{ color: "#fff", fontSize: "40px" }}>
            Let’s Build Together.
          </h2>
        </div>

        <Row>
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
              <h3 className="mb-3" style={{ color: "#fff", fontWeight: "900" }}>
                Connect With Us
              </h3>
              <div className="d-flex flex-column">
                <p className="d-flex align-items-center" style={{ fontSize: "16px", color: "#ddd" }}>
                  <RiWhatsappFill style={{ fontSize: "30px", marginRight: "10px", color: "#ddd" }} />
                  +91 93616 24563
                </p>
                <p className="d-flex align-items-center" style={{ fontSize: "14px", color: "#ddd" }}>
                  <MdEmail style={{ fontSize: "30px", marginRight: "10px", color: "#ddd" }} />
                  support@madads.co.in
                </p>
                <h3 style={{ color: "#fff", fontWeight: "900" }}>Meet Us</h3>
                <p className="d-flex align-items-center" style={{ fontSize: "14px", color: "#ddd" }}>
                  347, Old Gst Road, East Tambaram, Chennai - 600059
                </p>
                <div className="d-flex align-items-center mt-3">
                  <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "10px" }}>
                    <FaFacebookF style={{ fontSize: "25px" }} />
                  </a>
                  <a href="https://x.com/madadzindia" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "10px" }}>
                    <RiTwitterXFill style={{ fontSize: "25px" }} />
                  </a>
                  <a href="https://www.instagram.com/madadz__/#" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "10px" }}>
                    <FaInstagram style={{ fontSize: "25px" }} />
                  </a>
                  <a href="https://www.linkedin.com/in/mad-adz-708b60331/" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "10px" }}>
                    <FaLinkedinIn style={{ fontSize: "25px" }} />
                  </a>
                  <a href="https://www.youtube.com/@madadz-h6n" target="_blank" rel="noopener noreferrer" style={{ color: "white", marginRight: "10px" }}>
                    <FaYoutube style={{ fontSize: "25px" }} />
                  </a>
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
              <h3 style={{ marginBottom: "20px", fontWeight: "bold", color: "#fff" }}>
                Talk To Us
              </h3>
              <Form onSubmit={handleFormSubmit}>
                <Form.Group controlId="formGroupName">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>Name</Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="text"
                    name="name"
                    value={formValues.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupNumber">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>Phone Number</Form.Label>
                  <Form.Control
                    className="mb-3 enquiry-input"
                    type="tel"
                    name="phone"
                    value={formValues.phone}
                    onChange={handleChange}
                    placeholder="Your Number"
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <Form.Group controlId="formGroupService">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>Service Required</Form.Label>
                  <Form.Control
                    as="select"
                    name="service"
                    className="mb-3 enquiry-input"
                    value={formValues.service}
                    onChange={handleChange}
                    style={{
                      borderRadius: "25px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  >
                    <option value="">Select a service</option>
                    <option value="Web Development">Web Development</option>
                    <option value="App Development">App Development</option>
                    <option value="Digital Marketing">Digital Marketing</option>
                    <option value="SEO">SEO (Search Engine Optimization)</option>
                    <option value="Content Creation">Content Creation</option>
                    <option value="Designing">Designing</option>
                    <option value="UI/UX">UI/UX</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group controlId="formGroupMessage">
                  <Form.Label style={{ color: "white", fontSize: "16px" }}>
                    If You Want Any Service Not Mentioned
                  </Form.Label>
                  <Form.Control
                    className="enquiry-input"
                    as="textarea"
                    name="message"
                    value={formValues.message}
                    onChange={handleChange}
                    rows={3}
                    placeholder="Mention Here"
                    style={{
                      borderRadius: "15px",
                      border: "1px solid #ccc",
                      padding: "10px",
                      background: "transparent",
                      color: "white",
                    }}
                  />
                </Form.Group>

                <div className="d-flex justify-content-center align-items-center mt-3">
                  <button type="submit" className="btn-common" disabled={state.submitting}>
                    Send Message
                  </button>
                </div>

                <ValidationError prefix="Email" field="email" errors={state.errors} />
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactForm;
