"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import "./forms.scss";

export default function MerchantSignupModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ businessName: "", email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ businessName: "", email: "", password: "" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Partner with AquaVoyage">
      <p className="bn-form__subtitle">Join our network and grow your business</p>
      <form onSubmit={handleSubmit} className="bn-form">
        <TextInput
          id="merchant-business"
          label="Business Name"
          type="text"
          required
          placeholder="Your Company Name"
          value={form.businessName}
          onChange={(e) => setForm({ ...form, businessName: e.target.value })}
        />
        <TextInput
          id="merchant-email"
          label="Business Email"
          type="email"
          required
          placeholder="business@company.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <PasswordInput
          id="merchant-password"
          label="Password"
          required
          placeholder="Create a password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bn-form__submit bn-form__submit--merchant">
          Submit Application
        </button>
      </form>
    </Modal>
  );
}


