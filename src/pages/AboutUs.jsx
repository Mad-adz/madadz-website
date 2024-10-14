import AboutBanner from "../components/about/AboutBanner";
import OurHistory from "../components/about/OurHistory";
import AboutPoints from "../components/about/AboutPoints";
import BackToTop from "../components/BackToTop";
import WhatsAppButton from "../components/WhatsAppButton";
import { Helmet } from "react-helmet";

const AboutUs = () => {
  return (
    <div>
       <Helmet>
        {/* Primary Meta Tags */}
        <title>About Us | madadz - Web Development & Digital Marketing in Chennai</title>
        <meta
          name="description"
          content="Learn about madadz, Chennai's leading web development and digital marketing agency. Discover our mission, expert team, and commitment to driving digital growth for businesses. Partner with us for innovative solutions and exceptional service."
        />
        <meta
          name="keywords"
          content="madadz, About Us, web development Chennai, digital marketing Chennai, web agency Chennai, digital growth, innovative solutions, Chennai businesses, digital marketing agency, web development services"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="madadz" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="About Us | madadz - Web Development & Digital Marketing in Chennai" />
        <meta
          property="og:description"
          content="Discover madadz, Chennai's premier web development and digital marketing agency. Our dedicated team is committed to driving your business's digital growth with innovative solutions and exceptional service."
        />
        <meta property="og:image" content="https://madadz.co/images/about-us-banner.jpg" />
        <meta property="og:url" content="https://madadz.co/about-us" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us | madadz - Web Development & Digital Marketing in Chennai" />
        <meta
          name="twitter:description"
          content="Learn about madadz, Chennai's leading web development and digital marketing agency. Our mission, expert team, and innovative solutions are dedicated to driving your business's digital growth."
        />
        <meta name="twitter:image" content="https://madadz.co/images/about-us-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/about-us" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>
      <AboutBanner />
      <OurHistory />
      <AboutPoints />
      <WhatsAppButton />
      <BackToTop />
    </div>
  );
};

export default AboutUs;
