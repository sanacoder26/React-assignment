import React from "react";

export default function PortfolioCard({ item }) {
  return (
    <div className="portfolio-card">
      <img src={item.image} alt={item.title} />
      <h3>{item.title}</h3>
    </div>
  );
}
