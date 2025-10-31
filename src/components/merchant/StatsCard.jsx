"use client";

import React from "react";

export default function StatsCard() {
  return (
    <div className="bn-md__stats">
      <div className="bn-md__stat-card">
        <h4 className="bn-md__stat-title">Today's Stats</h4>
        <div className="bn-md__stat-grid">
          <div className="bn-md__stat-item">
            <div className="bn-md__stat-value bn-md__stat-green">₹65,000</div>
            <div className="bn-md__stat-label">Revenue</div>
          </div>
          <div className="bn-md__stat-two">
            <div>
              <div className="bn-md__stat-value bn-md__stat-cyan">95</div>
              <div className="bn-md__stat-sub">Bookings</div>
            </div>
            <div>
              <div className="bn-md__stat-value bn-md__stat-yellow">8</div>
              <div className="bn-md__stat-sub">Active Ferries</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bn-md__panel">
        <h4 className="bn-md__panel-title">Fleet Status</h4>
        <div className="bn-md__panel-body">
          <div className="bn-md__row"><span>Active Routes:</span><span className="bn-md__ok">6</span></div>
          <div className="bn-md__row"><span>In Service:</span><span className="bn-md__info">8/10</span></div>
          <div className="bn-md__row"><span>Maintenance:</span><span className="bn-md__warn">2</span></div>
        </div>
      </div>

      <div className="bn-md__panel">
        <h4 className="bn-md__panel-title">Quick Actions</h4>
        <div className="bn-md__quick">
          <button className="bn-btn bn-btn--green bn-btn--block">+ Add New Ferry</button>
          <button className="bn-btn bn-btn--cyan bn-btn--block">📊 View Reports</button>
          <button className="bn-btn bn-btn--purple bn-btn--block">⚙️ Settings</button>
        </div>
      </div>
    </div>
  );
}


