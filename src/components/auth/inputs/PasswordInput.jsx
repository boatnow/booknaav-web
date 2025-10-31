"use client";

import React from "react";
import usePasswordVisibility from "../hooks/usePasswordVisibility";
import "./inputs.scss";

export default function PasswordInput({
  id,
  label = "Password",
  value,
  onChange,
  placeholder = "Enter your password",
  required = false,
}) {
  const { isVisible, toggle } = usePasswordVisibility();

  return (
    <div className="bn-input">
      {label && (
        <label htmlFor={id} className="bn-input__label">
          {label}
        </label>
      )}
      <div className="bn-input__password">
        <input
          id={id}
          className="bn-input__control"
          type={isVisible ? "text" : "password"}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
        />
        <button
          type="button"
          className="bn-input__toggle"
          aria-label={isVisible ? "Hide password" : "Show password"}
          onClick={toggle}
        >
          👁️
        </button>
      </div>
    </div>
  );
}


