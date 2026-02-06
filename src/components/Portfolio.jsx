import React from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioItems } from "../data/portfolioItems";
import "../styles/components/Portfolio.css";

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Portfolio</h2>
      <div className="portfolio-grid">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  );
}
