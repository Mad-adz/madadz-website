import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import DropdownBanner from "../../components/services/DropdownBanner";
import ServiceSection from "../../components/services/ServicesSection";
import TechStack from "../../components/services/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const WebDevelopment = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Web Development | MADADZ - Innovative Digital Solutions</title>
        <meta
          name="description"
          content="Transform your ideas into innovative digital solutions with MADADZ. Specializing in web and mobile app development, UI/UX design, and more."
        />
        <meta
          name="keywords"
          content="web development, mobile app development, UI/UX design, MADADZ, digital solutions, innovative technology"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Web Development | MADADZ - Innovative Digital Solutions" />
        <meta
          property="og:description"
          content="At MADADZ, we specialize in web and mobile app development, providing innovative digital solutions tailored to your needs."
        />
        <meta property="og:image" content="https://madadz.co/images/web-development.jpg" />
        <meta property="og:url" content="https://madadz.co/web-development" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Web Development | MADADZ - Innovative Digital Solutions" />
        <meta
          name="twitter:description"
          content="Transform your digital vision into reality with MADADZ's expert web and mobile app development services."
        />
        <meta name="twitter:image" content="https://madadz.co/images/web-development.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/web-development" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <DropdownBanner
        imageSrc="/img/dropdownsev/web.png"
        heading="Transforming Ideas into Innovative Digital Solutions"
        description="At MADADZ, we specialize in converting your unique ideas into innovative web and mobile applications that drive measurable results. Our expert team is dedicated to delivering tailored web development, app development, and UI/UX design services that enhance user engagement and elevate your brand in today’s competitive digital landscape.
        We focus on creating seamless, high-performing websites and mobile apps that not only meet your business needs but also provide exceptional user experiences. Trust MADADZ to transform your digital vision into reality with our comprehensive strategies and solutions."
        buttonText="Start Your Journey"
      />
      <ServiceSection />
      <TechStack />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default WebDevelopment;
