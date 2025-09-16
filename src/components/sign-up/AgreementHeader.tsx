"use client";

import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "lucide-react";

interface AgreementHeaderProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
}

export function AgreementHeader({
  checked,
  onCheckedChange,
}: AgreementHeaderProps) {
  return (
    <>
      <div className="flex items-center gap-4">
        <Checkbox.Root
          id="all"
          checked={checked}
          onCheckedChange={onCheckedChange}
          className="w-[20px] h-[20px] rounded border-2 border-gray-300 flex items-center justify-center hover:border-primary transition-colors data-[state=checked]:bg-primary data-[state=checked]:border-primary"
        >
          <Checkbox.Indicator>
            <Check className="w-4 h-4 text-white" />
          </Checkbox.Indicator>
        </Checkbox.Root>
        <label htmlFor="all" className="text-body-2 font-medium cursor-pointer">
          전체 동의
        </label>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 h-px w-full bg-line-400 my-7"
      ></div>
    </>
  );
}
