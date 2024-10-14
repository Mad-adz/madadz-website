import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import BackToTop from "../components/BackToTop";
import ContactForm from "../components/contact/ContactForm";
import WhatsAppButton from "../components/WhatsAppButton";

const Contact = () => {
  return (
    <>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Contact Us | MADADZ - Get in Touch</title>
        <meta
          name="description"
          content="Get in touch with MADADZ for web development, digital marketing, and content creation services. We're here to help you achieve your goals."
        />
        <meta
          name="keywords"
          content="contact, MADADZ, web development, digital marketing, content creation, Chennai"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Contact Us | MADADZ - Get in Touch" />
        <meta
          property="og:description"
          content="Reach out to MADADZ for your digital solutions. Let's discuss how we can elevate your brand together."
        />
        <meta property="og:image" content="https://madadz.co/images/contact-banner.jpg" />
        <meta property="og:url" content="https://madadz.co/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | MADADZ - Get in Touch" />
        <meta
          name="twitter:description"
          content="Contact MADADZ today for expert web development and digital marketing services. We are eager to assist you."
        />
        <meta name="twitter:image" content="https://madadz.co/images/contact-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/contact" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <ContactForm />
      <WhatsAppButton />
      <BackToTop />
    </>
  );
};

export default Contact;
