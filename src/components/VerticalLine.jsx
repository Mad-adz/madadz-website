// VerticalLine.js
import { Container } from "react-bootstrap";
import { useEffect, useState } from "react";
const VerticalLine = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY;
      setScrollPosition(position);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <div className="vertical-line">
        <div
          className="scroll-point"
          style={{
            transform: `translateY(${scrollPosition * 0.7}px)`,
          }}
        ></div>
      </div>
    </Container>
  );
};

export default VerticalLine;
