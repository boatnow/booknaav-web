"use client";

import React from "react";
import ActivityCard from "./ActivityCard";
import "./activities.scss";

export default function ActivitiesContainer({ activities = [], onBook }) {
  const localActivities =
    activities.length > 0
      ? activities
      : [
          { id: 1, name: "Scuba Diving", description: "Explore the vibrant underwater world.", price: 4500, image: "https://placehold.co/600x400/1d4ed8/ffffff?text=Scuba+Diving" },
          { id: 2, name: "Kayaking", description: "Paddle through serene lakes and rivers.", price: 1200, image: "https://placehold.co/600x400/059669/ffffff?text=Kayaking" },
          { id: 3, name: "Snorkeling", description: "Discover marine life in crystal clear waters.", price: 2500, image: "https://placehold.co/600x400/0891b2/ffffff?text=Snorkeling" },
          { id: 4, name: "Fishing Trip", description: "Deep sea fishing adventure with experienced guides.", price: 3500, image: "https://placehold.co/600x400/7c2d12/ffffff?text=Fishing" },
        ];

  return (
    <div className="bn-act">
      <div className="bn-act__container">
        <div className="bn-act__header">
          <h1 className="bn-act__title">Book Your Next <span className="bn-act__grad">Adventure</span></h1>
          <p className="bn-act__subtitle">From kayaking to scuba diving, find and book thrilling water activities with ease.</p>
        </div>
        <div className="bn-act__grid">
          {localActivities.map((activity) => (
            <ActivityCard key={activity.id} activity={activity} onBook={onBook} />
          ))}
        </div>
      </div>
    </div>
  );
}


