"use client";
import { useState } from "react";
import { Input } from "@/components/common/input.tsx/input";
import { BirthDatePicker } from "@/components/common/input.tsx/BirthDatePicker";

export default function Home() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [birth, setBirth] = useState({ year: "", month: "", day: "" });

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  return (
    <>
      <div className="w-full h-full flex flex-col justify-start items-center py-10">
        <div className="text-5xl font-bold text-blue-900 mb-5">Test for BDA</div>
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
            label="이메일 인증"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="bdai@example.com"
            size="lg"
            isError={email !== "" && !validateEmail(email)}
            errorMessage={email === "" ? "" : !validateEmail(email) ? "이메일 형식이 올바르지 않아요." : ""}
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
        <BirthDatePicker year={birth.year} month={birth.month} day={birth.day} onChange={(value) => setBirth(value)} />
      </div>
    </>
  );
}
