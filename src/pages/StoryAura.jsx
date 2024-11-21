import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import Banner from "../components/storyaura/Banner";
import ContactSA from "../components/storyaura/ContactSA";

const StoryAura = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Share your unique stories with StoryAura X. Connect, inspire, and win exciting prizes for your incredible narratives."
        />
        <meta
          name="keywords"
          content="StoryAura, storytelling, unique stories, inspirational stories, connect, share, win prizes"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="StoryAura X" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta
          property="og:title"
          content="StoryAura X | Share Your Unique Stories"
        />
        <meta
          property="og:description"
          content="Submit your inspiring stories with StoryAura X. Selected stories get featured, and one outstanding storyteller wins a prize."
        />
        <meta property="og:image" content="https://madadz.co/img/Salogo.png" />
        <meta property="og:url" content="https://madadz.co/storyaura" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="StoryAura X | Share Your Unique Stories"
        />
        <meta
          name="twitter:description"
          content="Be a part of StoryAura X – a platform for sharing unique and inspiring stories. Get featured and win exciting prizes."
        />
        <meta
          name="twitter:image"
          content="https://x.com/storyauratamil/images/storyaura-logo.jpg"
        />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/storyaura" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      {/* Components */}
      <Banner />
      <ContactSA />
    </div>
  );
};

export default StoryAura;
