import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import DropdownBanner from "../../components/services/DropdownBanner";
import DesignCard from "../../components/design/DesignCard";
import DesignContent from "../../components/design/DesignContent";
import TechStack from "../../components/design/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const Designing = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Graphic Design | MADADZ - Stunning Visual Solutions</title>
        <meta
          name="description"
          content="Transform your creative ideas into stunning graphic designs with MADADZ. Specializing in posters, logos, business cards, and more."
        />
        <meta
          name="keywords"
          content="graphic design, visual storytelling, branding, MADADZ, posters, logos, business cards, brochures"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Graphic Design | MADADZ - Stunning Visual Solutions" />
        <meta
          property="og:description"
          content="At MADADZ, we specialize in transforming your ideas into visually striking graphic designs that communicate your brand message."
        />
        <meta property="og:image" content="https://madadz.co/images/graphic-design.jpg" />
        <meta property="og:url" content="https://madadz.co/designing" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Graphic Design | MADADZ - Stunning Visual Solutions" />
        <meta
          name="twitter:description"
          content="Elevate your brand with stunning graphic designs from MADADZ. Transform your ideas into captivating visuals."
        />
        <meta name="twitter:image" content="https://madadz.co/images/graphic-design.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/designing" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <DropdownBanner
        imageSrc="/img/dropdownsev/graphic.png"
        heading="Transforming Ideas into Stunning Graphic Designs"
        description="At MADADZ, we specialize in transforming your creative ideas into visually striking graphic designs that effectively communicate your brand message. Our expert team is dedicated to delivering innovative graphic design solutions, including eye-catching posters, professional business cards, unique logos, engaging social media profiles, and captivating brochures. 
        We understand the power of visual storytelling, and our designs are crafted to not only enhance your brand's identity but also drive engagement and attract your target audience. With a focus on quality and originality, we ensure that each design element aligns with your brand values and goals. Trust MADADZ to elevate your brand through compelling graphic designs that leave a lasting impression."
        buttonText="Start Your Journey"
      />
      <DesignContent />
      <DesignCard />
      <TechStack />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Designing;
