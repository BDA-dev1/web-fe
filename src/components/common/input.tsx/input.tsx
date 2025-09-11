import React from "react";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
}

export const Input = ({
  type = "text",
  value,
  onChange,
  placeholder,
  label,
  errorMessage,
  className,
  size,
}: InputProps) => {
  const sizes: Record<NonNullable<InputProps["size"]>, string> = {
    xs: "h-[60px] w-[115px]",
    sm: "h-[60px] w-[161px]",
    md: "h-[60px] w-[285px]",
    lg: "h-[60px] w-[400px]",
  };
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      {label && <label className="mb-1 text-sm font-medium">{label}</label>}
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={[
          "appearance-none bg-red-100",
          sizes[size ?? "md"],
          "text-lg border-[3px] rounded-xl border-[#D1D1D1] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#D1D1D1]",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
      />
      {errorMessage && <p className="mt-1 text-sm text-red-500">{errorMessage}</p>}
    </div>
  );
};
