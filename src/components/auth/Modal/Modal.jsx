"use client";

import React from "react";
import "./Modal.scss";

export default function Modal({ isOpen, onClose, title, children }) {
  if (!isOpen) return null;

  return (
    <div className="bn-modal__backdrop">
      <div className="bn-modal__center">
        <div className="bn-modal__card">
          <div className="bn-modal__header">
            {title ? <h3 className="bn-modal__title">{title}</h3> : <span />}
            <button aria-label="Close modal" className="bn-modal__close" onClick={onClose}>
              &times;
            </button>
          </div>
          <div className="bn-modal__body">{children}</div>
        </div>
      </div>
    </div>
  );
}


