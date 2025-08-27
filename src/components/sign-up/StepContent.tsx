"use client";

import { AgreementStep, BusinessStep, CompanyInfoStep } from "./index";

interface StepContentProps {
  currentStep: "agreement" | "business" | "companyInfo";
  onProgressUpdate: (progress: number) => void;
}

export function StepContent({
  currentStep,
  onProgressUpdate,
}: StepContentProps) {
  const handleAgreementComplete = (progress: number) => {
    onProgressUpdate(progress);
  };

  const handleBusinessComplete = (progress: number) => {
    onProgressUpdate(progress);
  };

  return (
    <>
      {currentStep === "agreement" && (
        <section>
          <AgreementStep onComplete={handleAgreementComplete} />
        </section>
      )}

      {currentStep === "business" && (
        <section>
          <BusinessStep onComplete={handleBusinessComplete} />
        </section>
      )}

      {currentStep === "companyInfo" && (
        <section>
          <CompanyInfoStep />
        </section>
      )}
    </>
  );
}
