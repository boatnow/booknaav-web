"use client";

import React from "react";

export default function Legend() {
  return (
    <div className="bn-seats__legend">
      <h5 className="bn-seats__legend-title">Seat Legend</h5>
      <div className="bn-seats__legend-list">
        <div className="bn-seats__legend-item"><span className="bn-seats__chip bn-seats__chip--available" /> <span>Available</span></div>
        <div className="bn-seats__legend-item"><span className="bn-seats__chip bn-seats__chip--booked" /> <span>Booked</span></div>
        <div className="bn-seats__legend-item"><span className="bn-seats__chip bn-seats__chip--selected" /> <span>Selected</span></div>
      </div>
    </div>
  );
}


