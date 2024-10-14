import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import DropdownBanner from "../../components/services/DropdownBanner";
import ContentCreate from "../../components/ContentCreation/ContentCreate";
import TechStack from "../../components/ContentCreation/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const ContentCreation = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Content Creation | MADADZ - Impactful Digital Solutions</title>
        <meta
          name="description"
          content="MADADZ specializes in transforming creative ideas into impactful video content, enhancing brand visibility and engagement."
        />
        <meta
          name="keywords"
          content="content creation, video production, digital solutions, social media content, MADADZ"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Content Creation | MADADZ - Impactful Digital Solutions" />
        <meta
          property="og:description"
          content="Transform your ideas into impactful video content with MADADZ. We specialize in social media video production and editing."
        />
        <meta property="og:image" content="https://madadz.co/images/content-creation.jpg" />
        <meta property="og:url" content="https://madadz.co/content-creation" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Content Creation | MADADZ - Impactful Digital Solutions" />
        <meta
          name="twitter:description"
          content="Partner with MADADZ to create engaging video content that drives growth and enhances your brand's digital strategy."
        />
        <meta name="twitter:image" content="https://madadz.co/images/content-creation.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/content-creation" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <DropdownBanner
        imageSrc="/img/dropdownsev/contentcreation.png"
        heading="Transforming Ideas into Impactful Video Content"
        description="At MADADZ, we turn creative ideas into impactful digital solutions. Our team excels in crafting high-quality content, specializing in social media video production and editing. We help businesses engage their audience and boost brand visibility with captivating visuals and storytelling. Whether it's promotional videos or social media content, we're here to elevate your brand's digital strategy. Partner with MADADZ to create content that drives growth!"
        buttonText="Start Your Journey"
      />
      <ContentCreate />
      <TechStack />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default ContentCreation;
