import React from "react";
import { Container, Button } from "react-bootstrap";
import { blogContent } from "../../data";
import "./blog.css";

const BlogBanner = () => {
  return (
    <section className="blog-banner">
      <Container className="h-100 py-5 d-flex justify-content-center align-items-center">
        {blogContent.map((data, index) => (
          <div className="text-center services-heading" key={index}>
            {/* <span
              style={{
                fontSize: "1.5rem !important",
                letterSpacing: ".8px",
                marginBottom: "1.5rem",
                color: "White",
              }}
            >
              {data.title}
            </span> */}
            <h2
              style={{
                fontWeight: "800 !important",
                fontSize: "3.375rem !important",
                maxWidth: "580px",
                margin: "0 auto",
                marginBottom: "1rem",
                color: "White",
              }}
              className="mt-5"
            >
              {data.title}
            </h2>
            <div
              style={{
                fontWeight: "500",
                fontSize: "1.3rem",
                maxWidth: "680px",
                margin: "0 auto",
                color: "White",
              }}
            >
              {data.description}
            </div>
            <Button variant="primary" className="home-btn mt-5 btn-common">
              View More
            </Button>
          </div>
        ))}
      </Container>
    </section>
  );
};

export default BlogBanner;
