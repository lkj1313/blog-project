"use client";

import { Button } from "@/shared/button/Button";
import { BusinessNumberField } from "./BusinessNumberField";
import { PasswordFields } from "./PasswordFields";
import { CompanyInfoStep } from "./CompanyInfoStep";
import { useBusinessStep } from "@/hooks/sign-up/useBusinessStep";

interface BusinessStepProps {
  onComplete: (progress: number) => void;
}

export function BusinessStep({ onComplete }: BusinessStepProps) {
  const {
    register,
    handleSubmit,
    errors,
    businessNumber,
    password,
    passwordConfirm,
    isVerified,
    canSubmit,
    onSubmit,
    handleVerify,
  } = useBusinessStep({ onComplete });

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col gap-6 mt-8">
        <BusinessNumberField
          register={register}
          errors={errors}
          businessNumber={businessNumber}
          isVerified={isVerified}
          onVerify={() => handleVerify(businessNumber)}
        />

        <PasswordFields
          register={register}
          errors={errors}
          password={password}
          passwordConfirm={passwordConfirm}
        />

        {/* 인증 완료 시 회사 정보 표시 */}
        {isVerified && <CompanyInfoStep />}
      </div>

      <div className="mt-12 flex w-full flex-col">
        <Button
          type="submit"
          className="w-full h-12 rounded-lg transition-all duration-300"
          size="lg"
          disabled={!canSubmit}
          variant={canSubmit ? "default" : "secondary"}
        >
          가입하기
        </Button>
      </div>
    </form>
  );
}
