"use client";

import { AgreementCheckbox } from "./AgreementCheckbox";
import { AGREEMENT_ITEMS } from "@/components/sign-up/constants/agreementItems";

interface AgreementListProps {
  agreements: Record<string, boolean>;
  onAgreementChange: (key: string, checked: boolean) => void;
}

export function AgreementList({
  agreements,
  onAgreementChange,
}: AgreementListProps) {
  return (
    <div className="flex flex-col gap-7">
      {AGREEMENT_ITEMS.map((item) => (
        <AgreementCheckbox
          key={item.id}
          id={item.id}
          checked={agreements[item.id]}
          onCheckedChange={(checked) => onAgreementChange(item.id, checked)}
          label={item.label}
          required={item.required}
        />
      ))}
    </div>
  );
}
