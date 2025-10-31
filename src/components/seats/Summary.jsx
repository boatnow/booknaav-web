"use client";

import React from "react";

export default function Summary({ selectedSeats = [], price = 0, onProceed }) {
  const baseFare = selectedSeats.length * price;
  const tax = baseFare * 0.1;
  const total = baseFare + tax;
  return (
    <div className="bn-seats__summary">
      <h4 className="bn-seats__summary-title">Booking Summary</h4>
      <div className="bn-seats__summary-body">
        {selectedSeats.length > 0 ? (
          <div>
            <h5 className="bn-seats__summary-sub">Selected Seats:</h5>
            <p className="bn-seats__summary-seats">{selectedSeats.join(', ')}</p>
          </div>
        ) : (
          <p className="bn-seats__summary-empty">No seats selected</p>
        )}
        <div className="bn-seats__charges">
          <div className="bn-seats__row"><span>Base Fare:</span><span className="bn-seats__val">₹{baseFare}</span></div>
          <div className="bn-seats__row"><span>Service Tax:</span><span className="bn-seats__val">₹{tax.toFixed(2)}</span></div>
          <div className="bn-seats__total"><span>Total Amount:</span><span className="bn-seats__total-val">₹{total.toFixed(2)}</span></div>
        </div>
      </div>
      <button className="bn-btn bn-btn--green bn-btn--block" disabled={selectedSeats.length === 0} onClick={onProceed}>
        💳 Proceed to Payment
      </button>
    </div>
  );
}


