import React, { useEffect, useRef } from "react";
import Banner from "../components/home/Banner";
import ServiceSection from "../components/home/ServiceSection";
import AboutUsSection from "../components/home/AboutUsSection";
import WhyUsSection from "../components/home/WhyUsSection";
import OurClients from "../components/home/OurClients";
import { useLocation } from "react-router-dom";
import ServiceCard from "../components/home/ServiceCard";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

const Home = () => {
  // const location = useLocation();
  // const clientLogoRef = useRef(null);
  // const sectionRef = useRef(null);
  // useEffect(() => {
  //   if (location.hash === "#our-clients") {
  //     clientLogoRef.current.scrollIntoView({ behavior: "smooth" });
  //   } else if (location.hash === "#service-card-info") {
  //     sectionRef.current.scrollIntoView({ behavior: "smooth" });
  //   }
  // }, [location]);
  return (
    <div>
      <Banner />
      <ServiceCard />
      {/* <ServiceSection sectionRef={sectionRef} /> */}
      <AboutUsSection />
      <WhyUsSection />
      <OurClients />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default Home;
