import React from "react";
import DropdownBanner from "../../components/services/DropdownBanner";
import ServiceSection from "../../components/services/ServicesSection";
import TechStack from "../../components/services/TechStack";
import BackToTop from "../../components/BackToTop";
import WhatsAppButton from "../../components/WhatsAppButton";

const WebDevelopment = () => {
  return (
    <div>
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
