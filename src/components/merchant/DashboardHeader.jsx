"use client";

import React from "react";

export default function DashboardHeader({ onClose, onLogout }) {
  return (
    <div className="bn-md__header">
      <div>
        <h3 className="bn-md__title">Business Dashboard</h3>
        <p className="bn-md__welcome">Welcome back, <span className="bn-md__highlight">Partner!</span></p>
      </div>
      <div className="bn-md__header-actions">
        <button onClick={onLogout} className="bn-md__logout">🚪 Logout</button>
        <button onClick={onClose} className="bn-md__close">&times;</button>
      </div>
    </div>
  );
}


