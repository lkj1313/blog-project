import { useState, useCallback } from "react";

type SignUpStep = "agreement" | "business" | "companyInfo";

export function useSignUpProgress() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<SignUpStep>("agreement");

  const handleProgressUpdate = useCallback((newProgress: number) => {
    // 약관 동의 완료 시 15% 기본 설정
    setProgress(15);
    // 약관 동의 완료 후 다음 단계로 이동
    setCurrentStep("business");
  }, []);

  const updateProgress = useCallback((newProgress: number) => {
    setProgress(newProgress);
  }, []);

  const goToStep = useCallback((step: SignUpStep) => {
    setCurrentStep(step);
  }, []);

  return {
    progress,
    currentStep,
    handleProgressUpdate,
    updateProgress,
    goToStep,
  };
}
