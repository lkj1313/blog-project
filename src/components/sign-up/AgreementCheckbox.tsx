"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

interface AgreementCheckboxProps {
  id: string;
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  label: string;
  required?: boolean;
}

export function AgreementCheckbox({
  id,
  checked,
  onCheckedChange,
  label,
  required = false,
}: AgreementCheckboxProps) {
  return (
    <div className="flex items-center gap-3">
      <Checkbox.Root
        id={id}
        checked={checked}
        onCheckedChange={(checked) => onCheckedChange(checked as boolean)}
        className="w-[20px] h-[20px] rounded border-2 border-gray-300 flex items-center justify-center hover:border-primary transition-colors data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        required={required}
      >
        <Checkbox.Indicator>
          <Check className="w-4 h-4 text-white" />
        </Checkbox.Indicator>
      </Checkbox.Root>
      <label htmlFor={id} className="text-body-2 cursor-pointer">
        {label}
        {required && <span className="text-red-500"> (필수)</span>}
      </label>
    </div>
  );
}
