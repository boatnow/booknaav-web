"use client";

import React from "react";
import "./navigation.scss";

export default function NavBar({
  logo,
  children,
}) {
  return (
    <nav className="bn-nav">
      <div className="bn-nav__container">
        <div className="bn-nav__row">
          <div className="bn-nav__logo">{logo}</div>
          {children}
        </div>
      </div>
    </nav>
  );
}


