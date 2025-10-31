"use client";

import React, { useMemo, useState } from "react";
import Modal from "../auth/Modal/Modal";
import SeatGrid from "./SeatGrid";
import Legend from "./Legend";
import Summary from "./Summary";
import "./seats.scss";

export default function SeatSelectionContainer({ isOpen, onClose, ferry, onProceedToBook }) {
  const [selectedSeats, setSelectedSeats] = useState(new Set());
  const bookedSeats = useMemo(() => new Set([3, 7, 12, 18]), []);

  const toggleSeat = (n) => {
    if (bookedSeats.has(n)) return;
    const next = new Set(selectedSeats);
    next.has(n) ? next.delete(n) : next.add(n);
    setSelectedSeats(next);
  };

  const handleProceed = () => {
    if (selectedSeats.size === 0) return;
    const seats = Array.from(selectedSeats).sort((a, b) => a - b);
    onProceedToBook?.(seats);
    onClose?.();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Choose Your Seats">
      <div className="bn-seats">
        <div className="bn-seats__grid-wrap">
          <div className="bn-seats__info">
            <div className="bn-seats__panel">
              <h4 className="bn-seats__panel-title">{ferry?.name || "Ferry Details"}</h4>
              <div className="bn-seats__kv">
                <div><span className="bn-seats__key">Operator:</span><span>{ferry?.operator || '-'}</span></div>
                <div><span className="bn-seats__key">Departure:</span><span>{ferry?.departure || '-'}</span></div>
                <div><span className="bn-seats__key">Duration:</span><span>{ferry?.duration || '-'}</span></div>
              </div>
            </div>
            <Legend />
          </div>
          <div className="bn-seats__layout">
            <div className="bn-seats__panel">
              <SeatGrid
                bookedSeats={bookedSeats}
                selectedSeats={selectedSeats}
                onToggle={toggleSeat}
              />
            </div>
          </div>
          <div className="bn-seats__summary-wrap">
            <Summary
              selectedSeats={Array.from(selectedSeats).sort((a,b) => a-b)}
              price={ferry?.price || 0}
              onProceed={handleProceed}
            />
          </div>
        </div>
      </div>
    </Modal>
  );
}


