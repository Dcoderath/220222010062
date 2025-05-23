import React from "react";

const Header = () => (
  <header
    style={{
      backgroundColor: "#1f1f1f",
      color: "#bb86fc",
      padding: "1.5rem 1rem",
      textAlign: "center",
      fontWeight: 700,
      fontSize: "2rem",
      letterSpacing: "1.5px",
      boxShadow: "0 2px 6px rgba(187, 134, 252, 0.3)",
      userSelect: "none",
      textTransform: "uppercase",
      fontFamily: "'Roboto', sans-serif",
    }}
  >
    Stock Aggregator
  </header>
);

export default Header;
