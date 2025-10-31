"use client";

import React from "react";

export default function MobileMenu({ isOpen, onClose, onPageChange }) {
  if (!isOpen) return null;
  return (
    <div className="bn-mobile">
      <div className="bn-mobile__inner">
        <button
          className="bn-mobile__item"
          onClick={() => {
            onPageChange("home");
            onClose();
          }}
        >
          Home
        </button>
        <button
          className="bn-mobile__item"
          onClick={() => {
            onPageChange("activities");
            onClose();
          }}
        >
          Book Activities
        </button>
        <button
          className="bn-mobile__item"
          onClick={() => {
            onPageChange("trips");
            onClose();
          }}
        >
          My Trips
        </button>
      </div>
    </div>
  );
}


