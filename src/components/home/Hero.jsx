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
                <div className="bn-hero__animated-logo">
                  <div className="bn-boat-logo">
                    <div className="bn-boat__hull"></div>
                    <div className="bn-boat__sail bn-boat__sail--main"></div>
                    <div className="bn-boat__sail bn-boat__sail--front"></div>
                    <div className="bn-boat__mast"></div>
                    <div className="bn-boat__flag"></div>
                    <div className="bn-boat__waves"></div>
                </div>
                </div>
                <h3 className="bn-hero__art-title">Boat Rentals</h3>
                <p className="bn-hero__art-sub">Browse and book boats in India</p>
                <a href="#services" className="bn-hero__explore-btn">
                  Explore →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


