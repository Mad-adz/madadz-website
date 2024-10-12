import React from "react";
import ServiceBanner from "../components/services/ServiceBanner";
import ServicesSection from "../components/services/ServicesSection";

const Services = () => {
  return (
    <div>
      <ServiceBanner
        imageSrc="/img/serv-img.png"
        heading="Transforming Ideas into Digital Solutions"
        subHeading="Settings designed to work for you"
        description="At MADADZ, we specialize in transforming your ideas into innovative digital solutions that drive results..."
        buttonText="Start Your Journey"
      />
      <ServicesSection />
    </div>
  );
};

export default Services;
