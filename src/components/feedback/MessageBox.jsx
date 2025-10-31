"use client";

import React, { useEffect, useState } from "react";
import "./feedback.scss";

export default function MessageBox({ message, type = "success", isVisible, onClose, durationMs = 3000 }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        const t2 = setTimeout(() => onClose?.(), 500);
        return () => clearTimeout(t2);
      }, durationMs);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose, durationMs]);

  if (!isVisible && !show) return null;

  const cls = type === "success" ? "bn-msg--success" : "bn-msg--error";

  return (
    <div className={`bn-msg ${cls} ${show ? "bn-msg--show" : "bn-msg--hide"}`}>
      {message}
    </div>
  );
}


