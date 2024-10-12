import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import ContentCreate from "../../components/ContentCreation/ContentCreate";
import TechStack from "../../components/ContentCreation/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const ContentCreation = () => {
  return (
    <div>
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
