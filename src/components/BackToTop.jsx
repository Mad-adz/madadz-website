import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const BackToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 300) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {show && (
        <div
          onClick={scrollToTop}
          style={styles.backToTopButton}
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </div>
      )}
    </>
  );
};

const styles = {
  backToTopButton: {
    position: "fixed",
    bottom: "50px", // Place it higher to avoid overlap with WhatsApp
    right: "30px", // Same side as WhatsApp, but further up
    width: "40px",
    height: "40px",
    backgroundColor: "#1a1a1a", // Custom color
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "2px 2px 2px 2px rgba(255, 255, 255, 0.3)",
    zIndex: 999, // Ensure it's behind WhatsApp button
    transition: "opacity 0.3s ease",
    // padding:"20px"
  },
};

export default BackToTop;
