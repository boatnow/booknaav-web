"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import "./forms.scss";

export default function MerchantLoginModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ email: "", password: "" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Merchant Login">
      <p className="bn-form__subtitle">Access your business dashboard</p>
      <form onSubmit={handleSubmit} className="bn-form">
        <TextInput
          id="merchant-login-email"
          label="Business Email"
          type="email"
          required
          placeholder="business@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <PasswordInput
          id="merchant-login-password"
          label="Password"
          required
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bn-form__submit bn-form__submit--merchant">
          Sign In
        </button>
      </form>
    </Modal>
  );
}


