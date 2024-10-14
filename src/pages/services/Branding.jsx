import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import DropdownBanner from "../../components/services/DropdownBanner";
import DigitalMarket from "../../components/digitalmarketing/DigitalMarket";
import DigitalCard from "../../components/digitalmarketing/DigitalCard";
import DigitalMedia from "../../components/digitalmarketing/DigitalMedia";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const Branding = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Branding | MADADZ - Elevate Your Brand with Digital Solutions</title>
        <meta
          name="description"
          content="Transform your brand with MADADZ. We provide innovative digital solutions to enhance your brand presence and drive measurable results in the digital landscape."
        />
        <meta
          name="keywords"
          content="branding, digital solutions, digital marketing, MADADZ, enhance brand, innovative strategies, user experience"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Branding | MADADZ - Elevate Your Brand with Digital Solutions" />
        <meta
          property="og:description"
          content="At MADADZ, we empower businesses with innovative digital solutions. Elevate your brand and achieve growth."
        />
        <meta property="og:image" content="https://madadz.co/images/branding.jpg" />
        <meta property="og:url" content="https://madadz.co/branding" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Branding | MADADZ - Elevate Your Brand with Digital Solutions" />
        <meta
          name="twitter:description"
          content="Transform your brand with MADADZ. Innovative digital solutions that drive measurable results."
        />
        <meta name="twitter:image" content="https://madadz.co/images/branding.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/branding" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <DropdownBanner
        imageSrc="/img/dropdownsev/branding.png"
        heading="Elevating Your Brand with Impactful Digital Solutions"
        description="At MADADZ, we are dedicated to transforming your visionary ideas into innovative digital solutions that drive impactful results. Our mission is to empower businesses by harnessing the power of technology and creativity to elevate your brand in the digital landscape. With a focus on delivering exceptional user experiences, we leverage cutting-edge strategies to ensure your brand stands out and resonates with your audience.
        Join us on this journey of digital transformation, where your ideas become reality, and together, we create a lasting impact that drives growth and success. Trust MADADZ to be your partner in navigating the evolving digital world, enhancing your brand presence, and achieving measurable results."
        buttonText="Start Your Journey"
      />
      {/* <DigitalMarket /> */}
      <DigitalCard />
      <DigitalMedia />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Branding;
