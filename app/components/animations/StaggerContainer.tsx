"use client";
import React from "react";
import { useAnimateOnLoad } from "./useAnimateOnLoad";
import "./animations.css";

export default function StaggerContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  const ref = useAnimateOnLoad("stagger");
  return (
    <div ref={ref} className="stagger">
      {children}
    </div>
  );
}