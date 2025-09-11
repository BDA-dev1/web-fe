import { useState, useEffect } from "react";

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
    if (year && month) {
      const lastDay = new Date(Number(year), Number(month), 0).getDate();
      setDaysInMonth(Array.from({ length: lastDay }, (_, i) => i + 1));
    } else {
      setDaysInMonth(Array.from({ length: 31 }, (_, i) => i + 1));
    }
  }, [year, month]);

  return (
    <div className="flex flex-col gap-2">
      <label className="ml-1 text-lg font-bold text-[#656565]">생년월일</label>
      <div className="flex gap-2">
        {/* 연도 */}
        <select
          value={year}
          onChange={(e) => onChange({ year: e.target.value, month, day })}
          className="h-[60px] w-[120px] border-2 border-gray-300 rounded-xl px-2"
        >
          <option value="">년</option>
          {Array.from({ length: 100 }, (_, i) => 2025 - i).map((y) => (
            <option key={y} value={y}>
              {y}
            </option>
          ))}
        </select>

        {/* 월 */}
        <select
          value={month}
          onChange={(e) => onChange({ year, month: e.target.value, day })}
          className="h-[60px] w-[90px] border-2 border-gray-300 rounded-xl px-2"
        >
          <option value="">월</option>
          {Array.from({ length: 12 }, (_, i) => i + 1).map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        {/* 일 */}
        <select
          value={day}
          onChange={(e) => onChange({ year, month, day: e.target.value })}
          className="h-[60px] w-[90px] border-2 border-gray-300 rounded-xl px-2"
        >
          <option value="">일</option>
          {daysInMonth.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};
