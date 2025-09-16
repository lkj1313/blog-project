"use client";

import { Button } from "@/shared/button/Button";
import { AgreementHeader } from "./AgreementHeader";
import { AgreementList } from "./AgreementList";
import { useAgreementStep } from "@/hooks/sign-up/useAgreementStep";

interface AgreementStepProps {
  onComplete: (percentage: number) => void;
}

export function AgreementStep({ onComplete }: AgreementStepProps) {
  const {
    agreements,
    canProceed,
    validation,
    handleAllAgreement,
    handleIndividualAgreement,
  } = useAgreementStep();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onComplete(validation.progress);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <h2 className="text-title-3 font-bold">약관 동의</h2>

      <AgreementHeader
        checked={agreements.all}
        onCheckedChange={handleAllAgreement}
      />

      <AgreementList
        agreements={agreements}
        onAgreementChange={handleIndividualAgreement}
      />

      <div className="mt-12 flex w-full flex-col">
        <Button
          type="submit"
          disabled={!canProceed}
          className="w-full h-12 rounded-lg"
          size="lg"
          variant={canProceed ? "default" : "secondary"}
        >
          다음
        </Button>
      </div>
    </form>
  );
}
