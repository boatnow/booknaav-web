"use client";

import React, { useState, useCallback } from "react";
import UserSigninModal from "./forms/UserSigninModal";
import MerchantSignupModal from "./forms/MerchantSignupModal";
import MerchantLoginModal from "./forms/MerchantLoginModal";

/**
 * AuthModalsContainer
 * - Centralizes which auth modal is open
 * - Exposes onSubmit callbacks for each modal
 */
export default function AuthModalsContainer({
  onUserSignin,
  onMerchantSignup,
  onMerchantLogin,
  initial = "none", // "userSignin" | "merchantSignup" | "merchantLogin" | "none"
}) {
  const [open, setOpen] = useState(initial);

  const closeAll = useCallback(() => setOpen("none"), []);

  return (
    <>
      <UserSigninModal
        isOpen={open === "userSignin"}
        onClose={closeAll}
        onSubmit={onUserSignin}
      />

      <MerchantSignupModal
        isOpen={open === "merchantSignup"}
        onClose={closeAll}
        onSubmit={onMerchantSignup}
      />

      <MerchantLoginModal
        isOpen={open === "merchantLogin"}
        onClose={closeAll}
        onSubmit={onMerchantLogin}
      />

      {/* Example triggers - remove/use your own buttons in parent */}
      {/* <div style={{ display: "flex", gap: 8 }}>
        <button onClick={() => setOpen("userSignin")}>Open User Signin</button>
        <button onClick={() => setOpen("merchantSignup")}>Open Merchant Signup</button>
        <button onClick={() => setOpen("merchantLogin")}>Open Merchant Login</button>
      </div> */}
    </>
  );
}


