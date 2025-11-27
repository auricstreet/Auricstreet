"use client";
import React from "react";
import "./animations.css";

export default function FloatOnHover({ children }: { children: React.ReactNode }) {
  return <div className="float-hover">{children}</div>;
}