"use client";

import React from "react";

export default function ResultsHeader({ onSort }) {
  return (
    <div className="bn-fr__header">
      <h3 className="bn-fr__title">Available Ferries</h3>
      <div className="bn-fr__sorts">
        <button className="bn-fr__sort" onClick={() => onSort("price")}>Price</button>
        <button className="bn-fr__sort" onClick={() => onSort("duration")}>Duration</button>
        <button className="bn-fr__sort" onClick={() => onSort("rating")}>Rating</button>
      </div>
    </div>
  );
}


