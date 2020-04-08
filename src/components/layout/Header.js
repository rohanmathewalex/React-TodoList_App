import React from "react";
import { link, Link } from "react-router-dom";
function Header() {
  return (
    <header style={headerStyle}>
      <h1>TodoList</h1>
      <Link style={linkStyle} to="/">
        Home
      </Link>
      |
      <Link style={linkStyle} to="/about">
        About
      </Link>
    </header>
  );
}
const headerStyle = {
  background: "#333",
  color: "#fff",
  textAlign: "centre",
  padding: "10px",
};
const linkStyle = {
  color: "#fff",
  textDecoration: "none",
  padding: "10px",
};

export default Header;
