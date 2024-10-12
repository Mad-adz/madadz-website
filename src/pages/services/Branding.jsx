import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import DigitalMarket from "../../components/digitalmarketing/DigitalMarket";
import DigitalCard from "../../components/digitalmarketing/DigitalCard";
import DigitalMedia from "../../components/digitalmarketing/DigitalMedia";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const Branding = () => {
  return (
    <div>
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
