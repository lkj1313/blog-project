"use client";

import { Input } from "@/shared/input/Input";
import {
  UseFormRegister,
  FieldErrors,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

interface CompanyInfoFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  pattern?: {
    value: RegExp;
    message: string;
  };
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  setValue?: UseFormSetValue<any>;
  watch?: UseFormWatch<any>;
}

export function CompanyInfoField({
  id,
  label,
  placeholder,
  type = "text",
  required = false,
  disabled = false,
  value,
  onChange,
  maxLength,
  pattern,
  register,
  errors,
  setValue,
  watch,
}: CompanyInfoFieldProps) {
  const hasError = errors[id];

  if (disabled) {
    return (
      <div className="space-y-3">
        <label
          className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700"
          htmlFor={id}
        >
          {label}
        </label>
        <div className="h-[48px] rounded-lg px-6 text-body-2 border-2 border-gray-300 bg-gray-50 flex items-center justify-between cursor-not-allowed group">
          <span className="text-gray-600">{value}</span>
        </div>
      </div>
    );
  }

  const inputProps = {
    className: `h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 ${
      hasError ? "border-red-500" : "border-gray-300"
    } transition-colors`,
    placeholder,
    id,
    type,
    maxLength,
    ...(onChange && { onChange }),
    ...register(id, {
      required: required ? `${label}을(를) 입력해 주세요.` : false,
      pattern: pattern,
    }),
  };

  return (
    <div className="space-y-3">
      <label
        className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700"
        htmlFor={id}
      >
        {label}
      </label>
      <Input {...inputProps} />
      {hasError && (
        <p className="text-red-600 text-body-3 mt-2">
          {hasError.message as string}
        </p>
      )}
    </div>
  );
}
