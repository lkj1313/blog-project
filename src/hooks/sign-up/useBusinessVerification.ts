import { useState, useCallback } from "react";
import { postVerifyBusinessNumber } from "@/apis/auth";

export function useBusinessVerification() {
  const [isVerified, setIsVerified] = useState(false);
  const [verifyToken, setVerifyToken] = useState("");

  const handleVerify = useCallback(async (businessNumber: string) => {
    if (!businessNumber || businessNumber.length !== 10) {
      return;
    }

    try {
      const response = await postVerifyBusinessNumber({ businessNumber });
      console.log("인증 응답:", response);

      if (!response.ok) {
        // API 에러 응답 처리
        const errorData = await response.json();
        const errorMessage =
          errorData.errorMessage || "사업자등록번호 인증에 실패했습니다.";

        alert(errorMessage);
        return;
      }

      // 응답에서 토큰 추출
      const responseData = await response.json();
      console.log("인증 응답 데이터:", responseData);

      const token = responseData.businessNumberVerifyToken;
      setVerifyToken(token);
      setIsVerified(true);
    } catch (error) {
      console.error("인증 실패:", error);

      let errorMessage = "인증 중 오류가 발생했습니다. 다시 시도해주세요.";

      if (error instanceof Error) {
        errorMessage = error.message;
      }

      alert(errorMessage);
    }
  }, []);

  const resetVerification = useCallback(() => {
    setIsVerified(false);
    setVerifyToken("");
  }, []);

  return {
    isVerified,
    verifyToken,
    handleVerify,
    resetVerification,
  };
}
