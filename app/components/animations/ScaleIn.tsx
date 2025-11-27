"use client";
import React from "react";
import { useAnimateOnLoad } from "./useAnimateOnLoad";
import "./animations.css";

export default function ScaleIn({ children }: { children: React.ReactNode }) {
  const ref = useAnimateOnLoad("scale-in");
  return (
    <div ref={ref} className="scale-in">
      {children}
    </div>
  );
}