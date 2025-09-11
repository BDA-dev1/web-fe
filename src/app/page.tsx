"use client";
import { useState } from "react";
import { Input } from "@/components/common/input.tsx/input";

export default function Home() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center py-10">
        <div className="text-5xl font-bold text-blue-900 ">Test for BDA</div>
        <div className="flex flex-col w-fit h-fit gap-10">
          <Input
            label="이름"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="이름을 입력해주세요."
            size="lg"
          />
          <Input
            label="비밀번호"
            type="password"
            size="lg"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            description="영문, 숫자, 특수문자를 조합하여 8~16자로 설정해 주세요."
            showPasswordToggle
          />

          <Input
            label="비밀번호 재확인"
            type="password"
            size="lg"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            isError={passwordConfirm !== "" && passwordConfirm !== password}
            errorMessage={
              passwordConfirm === ""
                ? ""
                : passwordConfirm !== password
                ? "비밀번호가 일치하지 않아요."
                : "비밀번호가 일치해요."
            }
            showPasswordToggle
          />
        </div>
      </div>
    </>
  );
}
