import React, { useEffect, useRef } from "react";

const ScrollingContent = ({ sessionName }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;

    // Check if content is overflowing
    if (container.scrollWidth > container.clientWidth) {
      // Apply animation only if content is overflowing
      container.style.animation = `scrollRight ${(container.scrollWidth / 50)}s linear infinite`; // Adjust the duration based on your preference
    } else {
      // Remove animation if content is not overflowing
      container.style.animation = "none";
    }
  }, [sessionName]);

  return (
    <div
      className="Dining w-[80px] text-xs font-medium font-['Poppins'] justify-end items-end flex overflow-hidden"
      ref={containerRef}
    >
      <span title={sessionName} style={{ whiteSpace: "nowrap" }}>
        {sessionName.charAt(0).toUpperCase() + sessionName.slice(1).toLowerCase()}
      </span>
    </div>
  );
};

export default ScrollingContent;
