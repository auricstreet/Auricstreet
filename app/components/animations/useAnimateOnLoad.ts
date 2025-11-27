"use client";
import { useEffect, useRef } from "react";

export function useAnimateOnLoad(className: string) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Force reflow so animation always triggers
    void el.offsetHeight;

    el.classList.add("show");
  }, []);

  return ref;
}