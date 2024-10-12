import React from "react";
import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
  const handleClick = () => {
    window.open(
      "https://wa.me/1234567890?text=Hello!%20I%20would%20like%20to%20inquire%20about%20your%20services.",
      "_blank"
    );
  };

  return (
    <div
      onClick={handleClick}
      style={styles.whatsappButton}
      aria-label="Chat with us on WhatsApp"
    >
      <FaWhatsapp size={30} />
    </div>
  );
};

const styles = {
  whatsappButton: {
    position: "fixed",
    bottom: "100px", // Position it higher than the "Back to Top" button
    right: "30px", // Stay aligned on the right side
    width: "40px",
    height: "40px",
    backgroundColor: "#25D366", // WhatsApp green color
    color: "#fff",
    borderRadius: "50%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.3)",
    zIndex: 1000, // Ensure it stays on top
    transition: "transform 0.3s ease",
  },
};

export default WhatsAppButton;
