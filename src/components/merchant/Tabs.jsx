"use client";

import React, { useState } from "react";

function Bookings() {
  return (
    <div className="bn-md__panel">
      <div className="bn-md__panel-head">
        <h4>Recent Bookings</h4>
        <div className="bn-md__seg">
          <button className="bn-md__seg-btn bn-md__seg-btn--active">Today</button>
          <button className="bn-md__seg-btn">This Week</button>
          <button className="bn-md__seg-btn">This Month</button>
        </div>
      </div>
      <div className="bn-md__table-wrap">
        <table className="bn-md__table">
          <thead>
            <tr>
              <th>Booking ID</th><th>Route</th><th>Passenger</th><th>Fare</th><th>Status</th><th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#88723</td><td>Port A → Port B</td><td>Jane Doe</td><td><b>₹1200</b></td>
              <td><span className="bn-badge bn-badge--green">Confirmed</span></td>
              <td className="bn-md__cell-actions"><button className="bn-link">View</button><button className="bn-link">Edit</button></td>
            </tr>
            <tr>
              <td>#88724</td><td>Port C → Port D</td><td>John Smith</td><td><b>₹2500</b></td>
              <td><span className="bn-badge bn-badge--yellow">Pending</span></td>
              <td className="bn-md__cell-actions"><button className="bn-link">View</button><button className="bn-link">Edit</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

function Fleet() {
  return (
    <div className="bn-md__panel">
      <h4 className="bn-md__panel-title">My Fleet</h4>
      <div className="bn-md__list">
        {[
          { name: "Ocean Explorer", meta: <>Capacity: 150 | Status: <span className="bn-ok">In Service</span></> },
          { name: "Sea Breeze", meta: <>Capacity: 100 | Status: <span className="bn-warn">Maintenance</span></> },
          { name: "Coastal Voyager", meta: <>Capacity: 200 | Status: <span className="bn-ok">In Service</span></> },
        ].map((x) => (
          <div key={x.name} className="bn-md__item">
            <div>
              <div className="bn-md__item-title">{x.name}</div>
              <div className="bn-md__item-sub">{x.meta}</div>
            </div>
            <button className="bn-btn bn-btn--blue">Manage</button>
          </div>
        ))}
      </div>
    </div>
  );
}

function Routes() {
  return (
    <div className="bn-md__panel">
      <h4 className="bn-md__panel-title">Active Routes</h4>
      <div className="bn-md__list">
        {[
          { title: "Port A to Port B", desc: "Duration: 3 hours | Price: ₹1200 | Ferries: Ocean Explorer" },
          { title: "Port C to Port D", desc: "Duration: 5 hours | Price: ₹2500 | Ferries: Coastal Voyager" },
        ].map((r) => (
          <div key={r.title} className="bn-md__route">
            <div className="bn-md__route-title">{r.title}</div>
            <div className="bn-md__route-sub">{r.desc}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Analytics() {
  return (
    <div className="bn-md__panel">
      <h4 className="bn-md__panel-title">Analytics</h4>
      <div className="bn-md__charts">
        <div className="bn-md__chart"><p>Revenue Growth</p><div className="bn-md__chart-box"><span>Chart Placeholder</span></div></div>
        <div className="bn-md__chart"><p>Passenger Demographics</p><div className="bn-md__chart-box"><span>Chart Placeholder</span></div></div>
      </div>
    </div>
  );
}

export default function Tabs() {
  const [active, setActive] = useState("bookings");
  return (
    <div>
      <div className="bn-md__tabs">
        {[
          { id: "bookings", label: "📋 Bookings" },
          { id: "fleet", label: "🚢 Fleet Management" },
          { id: "routes", label: "🗺️ Routes" },
          { id: "analytics", label: "📈 Analytics" },
        ].map((t) => (
          <button key={t.id} onClick={() => setActive(t.id)} className={`bn-md__tab ${active === t.id ? "bn-md__tab--active" : ""}`}>{t.label}</button>
        ))}
      </div>
      {active === "bookings" && <Bookings />}
      {active === "fleet" && <Fleet />}
      {active === "routes" && <Routes />}
      {active === "analytics" && <Analytics />}
    </div>
  );
}


