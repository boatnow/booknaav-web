"use client";

import React from "react";
import {
  UserSigninModal,
  MerchantSignupModal,
  MerchantLoginModal,
} from "./auth";

export default function AuthModals({
  showUserSignin,
  showMerchantSignup,
  showMerchantLogin,
  onCloseUserSignin,
  onCloseMerchantSignup,
  onCloseMerchantLogin,
  onUserSignin,
  onMerchantSignup,
  onMerchantLogin,
}) {
  return (
    <>
      <UserSigninModal
        isOpen={!!showUserSignin}
        onClose={onCloseUserSignin}
        onSubmit={onUserSignin}
      />
      <MerchantSignupModal
        isOpen={!!showMerchantSignup}
        onClose={onCloseMerchantSignup}
        onSubmit={onMerchantSignup}
      />
      <MerchantLoginModal
        isOpen={!!showMerchantLogin}
        onClose={onCloseMerchantLogin}
        onSubmit={onMerchantLogin}
      />
    </>
  );
}
