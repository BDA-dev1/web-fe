"use client";

import React from "react";
import Button from "@/components/common/button/Button";

export default function ButtonDemoPage() {
  return (
    <main className="p-6 grid gap-4">
      <section className="flex gap-3 items-center">
          <Button size="xs">인증번호받기</Button>
          <Button size="sm" disabled>다음</Button>
          <Button size="md">BDAI 공식 페이지 바로가기</Button>
          <Button size="lg">GO!</Button>
      </section>
    </main>
  );
}
