"use client";

import React, { useState, useMemo } from "react";
import NavBar from "./NavBar";
import NavLinks from "./NavLinks";
import Actions from "./Actions";
import MobileMenu from "./MobileMenu";

/**
 * NavigationContainer
 * - Coordinates logo, links, actions, and mobile menu
 * - Accepts handlers and state from parent via props
 */
export default function NavigationContainer({
  isLoggedIn,
  isMerchant,
  onPageChange,
  onUserSignin,
  onMerchantSignup,
  onMerchantLogin,
  onDashboard,
  onLogout,
}) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const logo = useMemo(() => (
    <div className="bn-logo">
      <div className="bn-logo__mark">
        <span className="bn-logo__text">B</span>
      </div>
      <span className="bn-logo__brand">booknaav</span>
    </div>
  ), []);

  return (
    <NavBar logo={logo}>
      <NavLinks onPageChange={onPageChange} />
      <Actions
        isLoggedIn={isLoggedIn}
        isMerchant={isMerchant}
        onUserSignin={onUserSignin}
        onMerchantSignup={onMerchantSignup}
        onMerchantLogin={onMerchantLogin}
        onDashboard={onDashboard}
        onLogout={onLogout}
        onToggleMobileMenu={() => setIsMobileMenuOpen((v) => !v)}
      />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        onPageChange={onPageChange}
      />
    </NavBar>
  );
}


