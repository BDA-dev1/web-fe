"use client";
import { useState } from "react";
import { Input } from "@/components/common/input.tsx/input";

export default function Home() {
  const [value, setValue] = useState("");

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center py-10">
        <div className="text-5xl font-bold text-blue-900 ">Test for BDA</div>
        <div className="w-fit h-fit flex gap-2">
          <Input
            type="email"
            size="lg"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="bdai@example.com"
          />
        </div>
      </div>
    </>
  );
}
