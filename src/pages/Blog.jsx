import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet for managing meta tags
import BlogBanner from "../components/blogs/BlogBanner";
import Blogs from "../components/blogs/Blogs";

const Blog = () => {
  return (
    <div>
      <Helmet>
        {/* Primary Meta Tags */}
        <title>MADADZ Blog | Insights on Web Development & Digital Marketing</title>
        <meta
          name="description"
          content="Explore the MADADZ Blog for the latest insights, tips, and trends in web development, digital marketing, and content creation."
        />
        <meta
          name="keywords"
          content="blog, MADADZ, web development, digital marketing, content creation, Chennai, insights, trends"
        />
        <meta name="robots" content="index,follow" />
        <meta name="author" content="MADADZ" />

        {/* Open Graph / Facebook Meta Tags */}
        <meta property="og:title" content="MADADZ Blog | Insights on Web Development & Digital Marketing" />
        <meta
          property="og:description"
          content="Discover valuable insights and tips on web development, digital marketing, and more at the MADADZ Blog."
        />
        <meta property="og:image" content="https://madadz.co/images/blog-banner.jpg" />
        <meta property="og:url" content="https://madadz.co/blog" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="MADADZ Blog | Insights on Web Development & Digital Marketing" />
        <meta
          name="twitter:description"
          content="Stay updated with the latest insights, tips, and trends in web development and digital marketing at MADADZ Blog."
        />
        <meta name="twitter:image" content="https://madadz.co/images/blog-banner.jpg" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://madadz.co/blog" />

        {/* Favicons */}
        <link rel="icon" type="image/svg+xml" href="/img/favm.jpeg" />
      </Helmet>

      <BlogBanner />
      <Blogs />
    </div>
  );
};

export default Blog;
