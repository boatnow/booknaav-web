"use client";

import { useCallback, useState } from "react";

export default function usePasswordVisibility(initialVisible = false) {
  const [isVisible, setIsVisible] = useState(initialVisible);
  const toggle = useCallback(() => setIsVisible((v) => !v), []);
  return { isVisible, toggle };
}


