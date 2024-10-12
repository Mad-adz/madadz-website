import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import DesignCard from "../../components/design/DesignCard";
import DesignContent from "../../components/design/DesignContent";
import TechStack from "../../components/design/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const Designing = () => {
  return (
    <div>
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
