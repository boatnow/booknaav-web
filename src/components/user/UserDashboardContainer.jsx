"use client";

import React from "react";
import UserHeader from "./UserHeader";
import BookingsList from "./BookingsList";
import "./user.scss";

export default function UserDashboardContainer({ bookings }) {
  const userBookings =
    bookings && bookings.length > 0
      ? bookings
      : [
          { id: 'BK-54321', ferry: 'Ocean Explorer', route: 'Port A to Port B', date: '2024-10-25', seats: '12, 13', status: 'Confirmed', total: '₹2640' },
          { id: 'BK-54322', ferry: 'Sea Breeze', route: 'Port C to Port D', date: '2024-11-01', seats: '5', status: 'Pending', total: '₹1650' },
        ];

  return (
    <div className="bn-user">
      <div className="bn-user__container">
        <h1 className="bn-user__title">Your Dashboard</h1>
        <div className="bn-user__card-wrap">
          <UserHeader />
          <h3 className="bn-user__section">Your Bookings</h3>
          <BookingsList bookings={userBookings} />
        </div>
      </div>
    </div>
  );
}


