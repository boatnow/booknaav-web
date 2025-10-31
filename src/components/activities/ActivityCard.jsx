"use client";

import React from "react";

export default function ActivityCard({ activity, onBook }) {
  return (
    <div className="bn-act__card">
      <div className="bn-act__image-wrap">
        <img src={activity.image} alt={activity.name} className="bn-act__image" />
        <div className="bn-act__image-overlay"></div>
      </div>
      <div className="bn-act__body">
        <h3 className="bn-act__name">{activity.name}</h3>
        <p className="bn-act__desc">{activity.description}</p>
        <div className="bn-act__price-row">
          <span className="bn-act__price">₹{activity.price}</span>
          <span className="bn-act__per">per person</span>
        </div>
        <button className="bn-btn bn-btn--teal bn-btn--block" onClick={() => onBook?.(activity.id)}>Book Now</button>
      </div>
    </div>
  );
}


