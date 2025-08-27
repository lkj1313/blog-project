"use client";

import { CompanyInfoField } from "./CompanyInfoField";
import { COMPANY_INFO_FIELDS } from "./constants/companyInfoFields";
import { useCompanyInfoStep } from "@/hooks/sign-up/useCompanyInfoStep";

export function CompanyInfoStep() {
  const { register, errors, phoneNumber, handlePhoneNumberChange } =
    useCompanyInfoStep();

  return (
    <div className="space-y-4">
      {COMPANY_INFO_FIELDS.map((field) => (
        <CompanyInfoField
          key={field.id}
          {...field}
          register={register}
          errors={errors}
          value={
            field.id === "companyName"
              ? "올라핀테크"
              : field.id === "phoneNumber"
              ? phoneNumber
              : undefined
          }
          onChange={
            field.id === "phoneNumber" ? handlePhoneNumberChange : undefined
          }
        />
      ))}
    </div>
  );
}
