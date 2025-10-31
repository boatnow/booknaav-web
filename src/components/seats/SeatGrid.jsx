"use client";

import React from "react";

export default function SeatGrid({ bookedSeats = new Set(), selectedSeats = new Set(), onToggle }) {
  const getSeatClass = (n) => {
    let base = "bn-seats__seat";
    if (bookedSeats.has(n)) return base + " bn-seats__seat--booked";
    if (selectedSeats.has(n)) return base + " bn-seats__seat--selected";
    return base + " bn-seats__seat--available";
  };

  return (
    <div className="bn-seats__grid">
      <div className="bn-seats__grid-head">
        <span className="bn-seats__caption">🚢 Captain</span>
        <span className="bn-seats__deck">Main Deck</span>
      </div>
      <div className="bn-seats__cells">
        {Array.from({ length: 20 }, (_, i) => i + 1).map((n) => (
          <button key={n} className={getSeatClass(n)} onClick={() => !bookedSeats.has(n) && onToggle?.(n)}>
            {n}
          </button>
        ))}
      </div>
      <div className="bn-seats__hint">Click on available seats to select</div>
    </div>
  );
}


