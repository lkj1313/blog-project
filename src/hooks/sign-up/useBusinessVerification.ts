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

      // 응답에서 토큰 추출
      const responseData = await response.json();
      console.log("인증 응답 데이터:", responseData);

      const token = responseData.businessNumberVerifyToken;
      setVerifyToken(token);
      setIsVerified(true);
    } catch (error) {
      console.error("인증 실패:", error);
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
