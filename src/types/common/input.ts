export interface InputProps {
  type?: React.HTMLInputTypeAttribute; // "text" | "email" | "password" 등
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
}
