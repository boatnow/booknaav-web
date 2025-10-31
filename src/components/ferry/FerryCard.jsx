"use client";

import React from "react";

export default function FerryCard({ ferry, onSelectSeats }) {
  return (
    <div className="bn-fr__card">
      <div className="bn-fr__card-left">
        <div className="bn-fr__emoji">🚢</div>
        <div>
          <h4 className="bn-fr__name">{ferry.name}</h4>
          <p className="bn-fr__operator">Operated by {ferry.operator}</p>
          <div className="bn-fr__rating"><span className="bn-fr__rating-val">{ferry.rating}</span> ⭐</div>
        </div>
      </div>
      <div className="bn-fr__card-right">
        <div className="bn-fr__meta"><p className="bn-fr__meta-label">Departure</p><p className="bn-fr__meta-val">{ferry.departure}</p></div>
        <div className="bn-fr__meta"><p className="bn-fr__meta-label">Duration</p><p className="bn-fr__meta-val">{ferry.duration}</p></div>
        <div className="bn-fr__meta"><p className="bn-fr__meta-label">Price</p><p className="bn-fr__price">₹{ferry.price}</p></div>
        <button className="bn-btn bn-btn--green" onClick={() => onSelectSeats(ferry.id)}>Select Seats</button>
      </div>
    </div>
  );
}


