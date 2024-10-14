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
import { Helmet } from "react-helmet";

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
      <Helmet>
        {/* Primary Meta Tags */}
        <title>Madadz | Web Development & Digital Marketing in Chennai</title>
        <meta
          name="description"
          content="Madadz offers expert web development, app development, and digital marketing services in Chennai. Boost your business with tailored SEO, social media marketing, and content creation solutions."
        />
        <meta
          name="keywords"
          content="web development, app development, digital marketing, SEO services, social media marketing, Chennai"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="Madadz" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="Madadz | Web Development & Digital Marketing in Chennai" />
        <meta
          property="og:description"
          content="Expert web and app development, digital marketing services in Chennai. Boost your online presence with Madadz."
        />
        <meta property="og:image" content="https://madadz.co/images/banner.jpg" />
        <meta property="og:url" content="https://madadz.co/" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Madadz | Web Development & Digital Marketing in Chennai" />
        <meta
          name="twitter:description"
          content="Boost your online presence with Madadz' expert web, app development, and digital marketing services in Chennai."
        />
        <meta name="twitter:image" content="https://madadz.co/images/banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

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
