import React from "react";
import { Container } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";

function OurClients({ clientLogoRef }) {
  const clients = [
    {
      logo: "img/clogo/enlist.png",
      title: "Client 1",
    },
    {
      logo: "img/clogo/mybooks.png",
      title: "Client 2",
    },
    {
      logo: "img/clogo/raha.png",
      title: "Client 3",
    },
    {
      logo: "img/clogo/theia.png",
      title: "Client 4",
    },
    {
      logo: "img/clogo/vi-logo.png",
      title: "Client 5",
    },
    {
      logo: "img/clogo/ssbf.png",
      title: "Client 6",
    },
  ];

  // Slider settings
  const settings = {
    dots: false, // Display navigation dots
    infinite: true, // Infinite loop scrolling
    speed: 500, // Transition speed
    slidesToShow: 4, // Show 4 slides at once
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Automatically scroll through slides
    autoplaySpeed: 3000, // Autoplay interval (3 seconds)
    arrows: false, // Disable arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <section
      id="our-clients"
      ref={clientLogoRef}
      style={{ background: "#eee" }}
      className="py-5"
    >
      <Container className="mt-5">
        <div data-aos="fade-right">
          {/* <span className="sno">05</span> */}
          <h2 className="section-title" style={{ color: "black" }}>
            Our Clients
          </h2>
        </div>
        <div
          className="container experience-stats"
          style={{
            background: "transparent",
            //   boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.3)",
          }}
        >
          <Slider {...settings}>
            {clients.map((client, index) => (
              <div key={index} className="text-center p-3">
                <div
                  style={
                    {
                      // background: "#ddd",
                      // boxShadow: "0px 0px 30px 1px rgba(163, 132, 249, 0.3)",
                    }
                  }
                  className="d-flex justify-content-center"
                >
                  <div className="clients-logo">  
                    <img
                    src={client.logo}
                    alt={client.title}
                    style={{
                      width: "170px",
                      height: "auto",
                      objectFit: "contain",
                      filter: "drop-shadow(0.5rem 0.5rem 1rem grey)",
                    }}
                  /></div>

                </div>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
}

export default OurClients;
