import React from "react";
import "./header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="headerContent">
        <img
          src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/adonisjs/adonisjs-original-wordmark.svg"
          width="95"
          height="95"
        />
        <nav>
        <Link to="/">Home</Link> 
        <Link to="about">About</Link>
      </nav>
      </div>
    </div>
  );
}

export default Header;
