import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { postRegister } from "@/apis/auth";

interface RegistrationData {
  businessNumber: string;
  representativeName: string;
  password: string;
  phoneNumber: string;
  email: string;
  birthDate: string;
  verifyToken: string;
}

export function useRegistration() {
  const router = useRouter();

  const handleRegistration = useCallback(
    async (data: RegistrationData) => {
      try {
        // 회원가입 API 호출
        const registerData = {
          businessNumber: data.businessNumber,
          userName: data.representativeName, // 대표자명을 userName으로 사용
          password: data.password,
          companyName: "올라핀테크", // 고정값
          phone: data.phoneNumber?.replace(/-/g, ""), // 하이픈 제거
          email: data.email,
          partnerId: "default", // 기본 파트너 ID 설정
          birthDate: data.birthDate,
          isMarketingConsent: true, // 기본값으로 true 설정
          businessNumberVerifyToken: data.verifyToken, // 인증 후 받은 토큰 사용
        };

        console.log("회원가입 데이터:", registerData);

        const response = await postRegister(registerData);
        console.log("회원가입 성공:", response);

        // 성공 시 로그인 페이지로 리다이렉트
        alert("회원가입이 완료되었습니다!");
        router.push("/login");

        return { success: true, response };
      } catch (error) {
        console.error("회원가입 실패:", error);
        alert("회원가입에 실패했습니다. 다시 시도해 주세요.");
        return { success: false, error };
      }
    },
    [router]
  );

  return { handleRegistration };
}
