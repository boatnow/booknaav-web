"use client";

import React, { useState } from "react";
import Modal from "../Modal/Modal";
import TextInput from "../inputs/TextInput";
import PasswordInput from "../inputs/PasswordInput";
import "./forms.scss";

export default function UserSigninModal({ isOpen, onClose, onSubmit }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(form);
    setForm({ email: "", password: "" });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title="Welcome Back!">
      <p className="bn-form__subtitle">Sign in to manage your bookings</p>
      <form onSubmit={handleSubmit} className="bn-form">
        <TextInput
          id="user-email"
          label="Email Address"
          type="email"
          required
          placeholder="yourname@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <PasswordInput
          id="user-password"
          label="Password"
          required
          placeholder="Enter your password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />
        <button type="submit" className="bn-form__submit bn-form__submit--user">
          Sign In
        </button>
      </form>
    </Modal>
  );
}


