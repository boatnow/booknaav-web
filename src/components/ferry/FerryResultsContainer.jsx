"use client";

import React, { useMemo, useState } from "react";
import ResultsHeader from "./ResultsHeader";
import FerryCard from "./FerryCard";
import "./ferry.scss";

export default function FerryResultsContainer({ ferries = [], onSelectSeats }) {
  const [sortKey, setSortKey] = useState("");

  const sorted = useMemo(() => {
    const arr = [...ferries];
    if (sortKey === "price") arr.sort((a, b) => a.price - b.price);
    if (sortKey === "duration") arr.sort((a, b) => (a.duration || "").localeCompare(b.duration || ""));
    if (sortKey === "rating") arr.sort((a, b) => b.rating - a.rating);
    return arr;
  }, [ferries, sortKey]);

  if (!ferries || ferries.length === 0) return null;

  return (
    <section className="bn-fr">
      <div className="bn-fr__container">
        <ResultsHeader onSort={setSortKey} />
        <div className="bn-fr__list">
          {sorted.map((ferry) => (
            <FerryCard key={ferry.id} ferry={ferry} onSelectSeats={onSelectSeats} />
          ))}
        </div>
      </div>
    </section>
  );
}


