import { useCallback } from "react";

interface ProgressData {
  businessNumber: string;
  password: string;
  passwordConfirm: string;
  companyName: string;
  representativeName: string;
  birthDate: string;
  phoneNumber: string;
  email: string;
}

export function useProgressCalculation() {
  const calculateProgress = useCallback((data: ProgressData) => {
    let progress = 15; // 약관 동의 완료 시 15% 기본

    // 사업자등록번호 (11%)
    if (data.businessNumber && data.businessNumber.length === 10) {
      progress += 11;
    }

    // 비밀번호 세트 (11%) - 두 개 다 채워야 함
    if (
      data.password &&
      data.passwordConfirm &&
      data.password === data.passwordConfirm
    ) {
      progress += 11;
    }

    // 상호명 (11%) - 고정값이므로 항상 추가
    progress += 11;

    // 대표자 (11%)
    if (data.representativeName) {
      progress += 11;
    }

    // 생년월일 (11%)
    if (data.birthDate && data.birthDate.length === 8) {
      progress += 11;
    }

    // 휴대폰 번호 (11%)
    if (data.phoneNumber && /^01[0-9]-\d{3,4}-\d{4}$/.test(data.phoneNumber)) {
      progress += 11;
    }

    // 이메일 (11%)
    if (data.email) {
      progress += 11;
    }

    return progress;
  }, []);

  return { calculateProgress };
}
