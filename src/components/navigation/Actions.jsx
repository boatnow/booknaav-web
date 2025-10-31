"use client";

import React from "react";

export default function Actions({
  isLoggedIn,
  isMerchant,
  onUserSignin,
  onMerchantSignup,
  onMerchantLogin, // reserved for future use
  onDashboard,
  onLogout,
  onToggleMobileMenu,
}) {
  return (
    <div className="bn-nav__actions">
      {!isLoggedIn ? (
        <>
          <button
            onClick={onMerchantSignup}
            className="bn-btn bn-btn--outline-cyan"
          >
            <span className="bn-hide-sm">Partner With Us</span>
            <span className="bn-show-sm">Partner</span>
          </button>
          <button
            onClick={onUserSignin}
            className="bn-btn bn-btn--cyan"
          >
            Sign In
          </button>
        </>
      ) : (
        <>
          <button
            onClick={onLogout}
            className="bn-btn bn-btn--outline-gray"
          >
            <span className="bn-hide-sm">Logout</span>
            <span className="bn-show-sm">Out</span>
          </button>
          <button
            onClick={onDashboard}
            className="bn-btn bn-btn--cyan"
          >
            <span className="bn-hide-sm">{isMerchant ? "Merchant Dashboard" : "My Dashboard"}</span>
            <span className="bn-show-sm">Dashboard</span>
          </button>
        </>
      )}

      <button
        onClick={onToggleMobileMenu}
        className="bn-nav__hamburger"
        aria-label="Toggle menu"
      >
        <svg className="bn-nav__hamburger-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  );
}


