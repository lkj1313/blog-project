import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { useProgressCalculation } from "./useProgressCalculation";
import { useBusinessVerification } from "./useBusinessVerification";
import { useRegistration } from "./useRegistration";

interface UseBusinessStepProps {
  onComplete: (progress: number) => void;
}

export function useBusinessStep({ onComplete }: UseBusinessStepProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useFormContext();

  const { calculateProgress } = useProgressCalculation();
  const { isVerified, verifyToken, handleVerify } = useBusinessVerification();
  const { handleRegistration } = useRegistration();

  // 폼 데이터 감시
  const businessNumber = watch("businessNumber");
  const password = watch("password");
  const passwordConfirm = watch("passwordConfirm");
  const companyName = watch("companyName");
  const representativeName = watch("representativeName");
  const birthDate = watch("birthDate");
  const phoneNumber = watch("phoneNumber");
  const email = watch("email");

  // 프로그레스 계산 및 업데이트
  useEffect(() => {
    const progress = calculateProgress({
      businessNumber,
      password,
      passwordConfirm,
      companyName,
      representativeName,
      birthDate,
      phoneNumber,
      email,
    });
    onComplete(progress);
  }, [
    businessNumber,
    password,
    passwordConfirm,
    companyName,
    representativeName,
    birthDate,
    phoneNumber,
    email,
    calculateProgress,
    onComplete,
  ]);

  // 모든 필수 필드가 입력되었는지 확인
  const canSubmit =
    businessNumber &&
    businessNumber.length === 10 &&
    isVerified &&
    password &&
    passwordConfirm &&
    password === passwordConfirm &&
    representativeName &&
    birthDate &&
    birthDate.length === 8 &&
    phoneNumber &&
    email;

  const onSubmit = async (data: any) => {
    await handleRegistration({
      businessNumber: data.businessNumber,
      representativeName: data.representativeName,
      password: data.password,
      phoneNumber: data.phoneNumber,
      email: data.email,
      birthDate: data.birthDate,
      verifyToken,
    });
  };

  return {
    register,
    handleSubmit,
    errors,
    businessNumber,
    password,
    passwordConfirm,
    representativeName,
    birthDate,
    phoneNumber,
    email,
    isVerified,
    canSubmit,
    onSubmit,
    handleVerify,
  };
}
