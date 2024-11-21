import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import WebDevelopment from "./pages/services/WebDevelopment";
import Branding from "./pages/services/Branding";
import Designing from "./pages/services/Designing";
import ContentCreation from "./pages/services/ContentCreation";
import Terms_Conditions from "./components/termsandcondition/Terms_Conditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import StoryAura from "./pages/StoryAura";

export const App = () => {
  return (
    <>
      <Helmet>
        {/* Common Meta Tags */}
        <title>MADADZ - Your Partner in Digital Solutions</title>
        <meta
          name="description"
          content="MADADZ offers comprehensive digital solutions including web development, graphic design, branding, and content creation. Transform your digital presence with us."
        />
        <meta name="keywords" content="digital solutions, web development, branding, graphic design, content creation, Chennai" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="MADADZ" />
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/storyaura" element={<StoryAura />} />

            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms_Conditions />} />
            <Route path="/services/webdevelopment" element={<WebDevelopment />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/designing" element={<Designing />} />
            <Route path="/services/contentcreation" element={<ContentCreation />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
