import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import Privacy from "../components/privacypolicy/PrivacyPolicy";

const PrivacyPolicy = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>MADADZ Privacy Policy</title>
        <meta
          name="description"
          content="Read the Privacy Policy of MADADZ to understand how we collect, use, and protect your personal information. Your privacy is our priority."
        />
        <meta
          name="keywords"
          content="privacy policy, MADADZ, personal data, user privacy, Chennai"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="MADADZ Privacy Policy" />
        <meta
          property="og:description"
          content="Learn about the Privacy Policy of MADADZ, ensuring the protection and use of your personal data."
        />
        <meta property="og:image" content="https://madadz.co/images/privacy-banner.jpg" />
        <meta property="og:url" content="https://madadz.co/privacy-policy" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MADADZ Privacy Policy" />
        <meta
          name="twitter:description"
          content="Discover how MADADZ collects, uses, and protects your personal information in our Privacy Policy."
        />
        <meta name="twitter:image" content="https://madadz.co/images/privacy-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/privacy-policy" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <Privacy />
    </div>
  );
};

export default PrivacyPolicy;
