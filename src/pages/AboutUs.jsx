import AboutBanner from "../components/about/AboutBanner";
import OurHistory from "../components/about/OurHistory";
import AboutPoints from "../components/about/AboutPoints";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";

const AboutUs = () => {
  return (
    <div>
      <AboutBanner />
      <OurHistory />
      <AboutPoints />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default AboutUs;
