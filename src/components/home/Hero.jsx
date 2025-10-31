"use client";

import React from "react";
import "./home.scss";

export default function Hero({ onPrimary, onSecondary }) {
  return (
    <section className="bn-hero">
      <div className="bn-hero__container">
        <div className="bn-hero__grid">
          <div className="bn-hero__copy">
            <h1 className="bn-hero__title">
              Explore the Seas with <span className="bn-hero__brand">BookNaav</span>
            </h1>
            <p className="bn-hero__tag">जहाज में सवार, नई उड़ान के लिए तैयार</p>
            <p className="bn-hero__desc">Book boats in India with ease, track your journey, and get 24/7 support.</p>
            <div className="bn-hero__actions">
              <button onClick={onPrimary} className="bn-hero__btn bn-hero__btn--primary">Book Now</button>
              <button onClick={onSecondary} className="bn-hero__btn bn-hero__btn--secondary">Learn More</button>
            </div>
          </div>
          <div className="bn-hero__art">
            <div className="bn-hero__art-card">
              <div className="bn-hero__art-inner">
                <svg width="180" height="135" viewBox="0 0 200 150" className="bn-hero__svg">
                  <path d="M0 120 Q50 110 100 120 T200 120 L200 150 L0 150 Z" fill="#3B82F6" opacity="0.3"/>
                  <ellipse cx="100" cy="110" rx="60" ry="15" fill="#8B4513"/>
                  <path d="M100 110 L100 60 L140 80 Z" fill="#F5F5DC"/>
                  <line x1="100" y1="110" x2="100" y2="60" stroke="#8B4513" strokeWidth="3"/>
                  <rect x="100" y="60" width="20" height="15" fill="#EF4444"/>
                </svg>
                <h3 className="bn-hero__art-title">Boat Rentals</h3>
                <p className="bn-hero__art-sub">Browse and book boats in India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


