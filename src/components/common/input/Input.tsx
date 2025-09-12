import React, { useState } from "react";
import Image from "next/image";
import { InputProps } from "@/types/common/input";

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
  variant,
}: InputProps & { variant?: "default" | "login" }) => {
  const [isVisible, setIsVisible] = useState(false);
  const inputType = showPasswordToggle ? (isVisible ? "text" : "password") : type;

  const sizes: Record<NonNullable<InputProps["size"]>, string> = {
    md: "h-[60px] w-[285px]",
    lg: "h-[60px] w-[400px]",
  };

  const variantStyles: Record<"default" | "login", string> = {
    default: "text-lg font-semibold rounded-xl px-4 py-2 pr-10",
    login: "w-[360px] text-lg font-bold rounded-full px-6 border-[#5353E0]",
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
            variantStyles[variant ?? "default"],
            variant === "login"
              ? "border-[#5353E0] border-[3px]"
              : isError
              ? "border-[#E8604B] border-[3px] focus:ring-2 focus:ring-[#E8604B]"
              : "border-[#D1D1D1] border-[3px] focus:ring-2 focus:ring-blue-500",
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
