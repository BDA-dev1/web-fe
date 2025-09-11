export interface InputProps {
  type?: React.HTMLInputTypeAttribute;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label?: string;
  errorMessage?: string;
  className?: string;
}
