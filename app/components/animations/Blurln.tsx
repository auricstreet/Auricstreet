"use client";
import React from "react";
import { useAnimateOnLoad } from "./useAnimateOnLoad";
import "./animations.css";

export default function BlurIn({ children }: { children: React.ReactNode }) {
  const ref = useAnimateOnLoad("blur-in");
  return (
    <div ref={ref} className="blur-in">
      {children}
    </div>
  );
}