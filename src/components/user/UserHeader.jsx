"use client";

import React from "react";

export default function UserHeader() {
  return (
    <div className="bn-user__header">
      <div className="bn-user__avatar">👤</div>
      <div>
        <h2 className="bn-user__welcome">Welcome Back, User!</h2>
        <p className="bn-user__sub">View and manage your past bookings.</p>
      </div>
    </div>
  );
}


