"use client";

import React from "react";

export default function NavLinks({ onPageChange }) {
  return (
    <div className="bn-nav__links">
      <button onClick={() => onPageChange("home")} className="bn-nav__link">Home</button>
      <button onClick={() => onPageChange("activities")} className="bn-nav__link">Book Activities</button>
      <button onClick={() => onPageChange("trips")} className="bn-nav__link">My Trips</button>
    </div>
  );
}


