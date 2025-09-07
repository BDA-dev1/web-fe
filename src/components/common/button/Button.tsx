import { ButtonProps } from "@/types/common/button";
import React from "react";

export function Button({ children, disabled, size = "md", onClick, className, ...restProps }: ButtonProps) {
  const base =
    "bg-primary-100 hover:bg-primary-300 disabled:bg-gray-200 text-white inline-flex items-center justify-center rounded-[18px] font-bold transition-colors";
  const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
    xs: "h-[60px] w-[105px] text-[16px]",
    sm: "h-[65px] w-[150px] text-[24px]",
    md: "h-[50px] w-[273px] text-[20px]",
    lg: "h-[130px] w-[98px] text-[24px]",
  };

  return (
    <button
      disabled={disabled}
      className={[base, sizes[size], className].filter(Boolean).join(" ")}
      {...restProps}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
