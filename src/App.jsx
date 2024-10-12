import { BrowserRouter, Route, Routes } from "react-router-dom";
import CommonLayout from "./layout/CommonLayout";
import Home from "./pages/Home";
// import Services from "./pages/Services";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
// import Policy from "./pages/Policy";
import NotFound from "./pages/NotFound";
// dropdown
import WebDevelopment from "./pages/services/WebDevelopment";
import Branding from "./pages/services/Branding";
import Designing from "./pages/services/Designing";
import ContentCreation from "./pages/services/ContentCreation";
import Terms_Conditions from "./components/termsandcondition/Terms_Conditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<CommonLayout />}>
            <Route path="/" element={<Home />} />
            {/* <Route path="/services" element={<Services />} /> */}
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/policy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<Terms_Conditions />} />
            <Route
              path="/services/webdevelopment"
              element={<WebDevelopment />}
            />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/designing" element={<Designing />} />
            <Route
              path="/services/contentcreation"
              element={<ContentCreation />}
            />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
