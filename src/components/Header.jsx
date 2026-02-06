import React from "react";
import "../styles/components/Header.css";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">Marée</div>
      <nav className="nav">
        <a href="#hero">Home</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
    </header>
  );
}
