import React, { useState } from "react";
import Image from "next/image";

export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
  size?: "xs" | "sm" | "md" | "lg";
  description?: string;
  showPasswordToggle?: boolean;
  isError?: boolean;
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
  description,
  showPasswordToggle,
  isError,
}: InputProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputType = showPasswordToggle ? (isVisible ? "text" : "password") : type;

  const sizes: Record<NonNullable<InputProps["size"]>, string> = {
    xs: "h-[60px] w-[115px]",
    sm: "h-[60px] w-[161px]",
    md: "h-[60px] w-[285px]",
    lg: "h-[60px] w-[400px]",
  };
  return (
    <div className={`flex flex-col ${className ?? ""}`}>
      {label && <label className="mb-1 ml-1 text-lg font-bold text-[#656565]">{label}</label>}
      <div className="relative">
        <input
          type={inputType}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={[
            "appearance-none",
            sizes[size ?? "md"],
            "text-lg font-semibold border-[3px] rounded-xl border-[#D1D1D1] tracking-wide px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#D1D1D1]",
            className,
          ]
            .filter(Boolean)
            .join(" ")}
        />
        {showPasswordToggle && (
          <button
            type="button"
            onClick={() => setIsVisible(!isVisible)}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
          >
            {isVisible ? (
              <Image src={"/components/input/pw_show.png"} width={20} height={20} alt="" />
            ) : (
              <Image src={"/components/input/pw_hide.png"} width={20} height={20} alt="" />
            )}
          </button>
        )}
      </div>
      {description && <p className="mt-1 ml-1.5 text-sm font-semibold text-[#ABABAB]">{description}</p>}
      {errorMessage && (
        <p className={`mt-1 ml-1.5 text-sm font-semibold ${isError ? "text-red-500" : "text-[#5353E0]"}`}>
          {errorMessage}
        </p>
      )}
    </div>
  );
};
