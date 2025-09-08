import React from "react";

export interface ButtonProps {
  size?: "xs" | "sm" | "md" | "lg";
  disabled?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}
