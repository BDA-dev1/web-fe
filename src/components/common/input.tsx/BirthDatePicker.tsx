import { useState, useEffect } from "react";
import Image from "next/image";

interface BirthDatePickerProps {
  year: string;
  month: string;
  day: string;
  onChange: (value: { year: string; month: string; day: string }) => void;
}

export const BirthDatePicker = ({ year, month, day, onChange }: BirthDatePickerProps) => {
  const [daysInMonth, setDaysInMonth] = useState<number[]>([]);

  // month/year가 변할 때마다 일 수 갱신
  useEffect(() => {
    const lastDay = year && month ? new Date(Number(year), Number(month), 0).getDate() : 31;
    setDaysInMonth(Array.from({ length: lastDay }, (_, i) => i + 1));

    if (day && Number(day) > lastDay) {
      onChange({ year, month, day: "" });
    }
  }, [year, month, day, onChange]);

  return (
    <div className="flex flex-col">
      <label className="ml-1 mb-1 text-lg font-bold text-[#656565]">생년월일</label>
      <div className="flex gap-2.5">
        {/* 연도 */}
        <div className="relative">
          <select
            value={year}
            onChange={(e) => onChange({ year: e.target.value, month, day })}
            className="h-[60px] w-[150px] border-[3px] border-[#D1D1D1] rounded-xl pl-10 pr-10 text-lg font-semibold appearance-none"
          >
            <option value="">년</option>
            {Array.from({ length: 100 }, (_, i) => 2025 - i).map((y) => (
              <option key={y} value={y}>
                {y}
              </option>
            ))}
          </select>
          <Image
            src="/components/input/birthdate_picker.png"
            width={40}
            height={40}
            alt="arrow"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        </div>

        {/* 월 */}
        <div className="relative">
          <select
            value={month}
            onChange={(e) => onChange({ year, month: e.target.value, day })}
            className="h-[60px] w-[115px] border-[3px] border-[#D1D1D1] rounded-xl  pl-11 text-lg font-semibold appearance-none"
          >
            <option value="">월</option>
            {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
              <option key={m} value={m}>
                {m}
              </option>
            ))}
          </select>
          <Image
            src="/components/input/birthdate_picker.png"
            width={40}
            height={40}
            alt="arrow"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        </div>

        {/* 일 */}
        <div className="relative">
          <select
            value={day}
            onChange={(e) => onChange({ year, month, day: e.target.value })}
            className="h-[60px] w-[115px] border-[3px] border-[#D1D1D1] rounded-xl  pl-11 text-lg font-semibold appearance-none"
          >
            <option value="">일</option>
            {daysInMonth.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
          <Image
            src="/components/input/birthdate_picker.png"
            width={40}
            height={40}
            alt="arrow"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4"
          />
        </div>
      </div>
    </div>
  );
};
