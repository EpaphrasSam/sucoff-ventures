"use client";

import * as React from "react";

interface SectionTitleProps {
  children: React.ReactNode;
  align?: "left" | "center" | "right";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export default function SectionTitle({
  children,
  align = "left",
  size = "md",
  className = "",
}: SectionTitleProps) {
  const containerAlignClass = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  }[align];

  const sizeClass = {
    sm: "text-xl md:text-2xl",
    md: "text-2xl md:text-3xl",
    lg: "text-3xl md:text-4xl",
    xl: "text-4xl md:text-5xl",
  }[size];

  const underlineAlign = {
    left: "",
    center: "mx-auto",
    right: "ml-auto",
  }[align];

  return (
    <div className={`w-fit ${containerAlignClass} ${className}`}>
      <h2 className={`font-heading ${sizeClass} font-bold text-fg mb-3`}>
        {children}
      </h2>
      <div className={`h-1 w-20 bg-linear-to-r from-primary to-accent rounded-full ${underlineAlign}`} />
    </div>
  );
}

