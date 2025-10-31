"use client";

import React from "react";

export default function BookingsList({ bookings = [] }) {
  if (!bookings || bookings.length === 0) {
    return <p className="bn-user__empty">You have no past bookings.</p>;
  }

  return (
    <div className="bn-user__list">
      {bookings.map((b) => (
        <div key={b.id} className="bn-user__card">
          <div className="bn-user__card-top">
            <div>
              <p className="bn-user__ferry">{b.ferry}</p>
              <p className="bn-user__route">{b.route}</p>
            </div>
            <span className={`bn-badge ${b.status === 'Confirmed' ? 'bn-badge--green' : 'bn-badge--yellow'}`}>{b.status}</span>
          </div>
          <div className="bn-user__grid">
            <div><span className="bn-user__label">Date:</span> {b.date}</div>
            <div><span className="bn-user__label">Seats:</span> {b.seats}</div>
            <div><span className="bn-user__label">Booking ID:</span> {b.id}</div>
            <div><span className="bn-user__label">Total Paid:</span> <span className="bn-user__total">{b.total}</span></div>
          </div>
        </div>
      ))}
    </div>
  );
}


