import React from "react";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <span>© 2025 Paris Loizou</span>
      <a
        href="https://www.linkedin.com/in/paraskevas-loizou/"
        target="_blank"
        rel="noopener noreferrer"
        className="linkedin-icon"
      >
        <FaLinkedin />
      </a>
    </footer>
  );
}

export default Footer;
