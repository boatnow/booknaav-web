"use client";

import React from "react";
import "./inputs.scss";

export default function TextInput({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  required = false,
}) {
  return (
    <div className="bn-input">
      {label && (
        <label htmlFor={id} className="bn-input__label">
          {label}
        </label>
      )}
      <input
        id={id}
        className="bn-input__control"
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
      />
    </div>
  );
}


