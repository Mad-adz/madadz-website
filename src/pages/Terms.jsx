import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import Terms_Conditions from "../components/termsandcondition/Terms_Conditions";

const Terms = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>MADADZ Terms & Conditions</title>
        <meta
          name="description"
          content="Read the Terms and Conditions of MADADZ, outlining the rules and regulations for using our services. Ensure compliance and understanding of your rights."
        />
        <meta
          name="keywords"
          content="terms and conditions, MADADZ, legal agreement, user policy, Chennai"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="MADADZ Terms & Conditions" />
        <meta
          property="og:description"
          content="Explore the Terms and Conditions of MADADZ to understand the rules and regulations for using our services."
        />
        <meta property="og:image" content="https://madadz.co/images/terms-banner.jpg" />
        <meta property="og:url" content="https://madadz.co/terms" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MADADZ Terms & Conditions" />
        <meta
          name="twitter:description"
          content="Read the Terms and Conditions of MADADZ for a clear understanding of your rights and responsibilities."
        />
        <meta name="twitter:image" content="https://madadz.co/images/terms-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/terms" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <Terms_Conditions />
    </div>
  );
};

export default Terms;
