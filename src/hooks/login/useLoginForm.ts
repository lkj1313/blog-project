import { useState, useEffect } from "react";
import { postLogin, saveTokens } from "@/apis/auth";
import { useRouter } from "next/navigation";

export function useLoginForm() {
  const router = useRouter();
  const [saveId, setSaveId] = useState(false);
  const [businessNumber, setBusinessNumber] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState("");

  const handleBusinessNumberBlur = () => {
    if (businessNumber.trim() && businessNumber.length !== 10) {
      setErrors((prev) => ({
        ...prev,
        businessNumber: "사업자등록번호 10자리를 입력해 주세요.",
      }));
    } else {
      setErrors((prev) => ({ ...prev, businessNumber: "" }));
    }
  };

  const handlePasswordBlur = () => {
    if (password.trim() && (password.length < 8 || password.length > 15)) {
      setErrors((prev) => ({
        ...prev,
        password: "8~15자리 영문, 숫자, 특수문자로 조합하여 입력해주세요",
      }));
    } else {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!businessNumber.trim()) {
      newErrors.businessNumber = "사업자등록번호를 입력해주세요";
    } else if (businessNumber.length !== 10) {
      newErrors.businessNumber = "사업자등록번호 10자리를 입력해 주세요.";
    }

    if (!password.trim()) {
      newErrors.password = "비밀번호를 입력해주세요";
    } else if (password.length < 8 || password.length > 15) {
      newErrors.password =
        "8~15자리 영문, 숫자, 특수문자로 조합하여 입력해주세요";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoginError("");

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await postLogin({
        businessNumber: businessNumber.trim(),
        password: password.trim(),
      });

      const data = await response.json();

      if (response.ok) {
        // 토큰 저장
        saveTokens(data);

        // 아이디 저장 처리
        if (saveId) {
          localStorage.setItem("savedBusinessNumber", businessNumber);
        } else {
          localStorage.removeItem("savedBusinessNumber");
        }

        // 홈페이지로 이동
        router.push("/");
      } else {
        // API 에러 처리
        setLoginError(
          data.errorMessage || "로그인에 실패했습니다. 다시 시도해주세요."
        );
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      setLoginError("로그인 중 오류가 발생했습니다. 다시 시도해주세요.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSignUpClick = () => {
    router.push("/sign-up");
  };

  // 저장된 아이디 불러오기
  useEffect(() => {
    const savedBusinessNumber = localStorage.getItem("savedBusinessNumber");
    if (savedBusinessNumber) {
      setBusinessNumber(savedBusinessNumber);
      setSaveId(true);
    }
  }, []);

  return {
    // 상태
    saveId,
    businessNumber,
    password,
    errors,
    isLoading,
    loginError,

    // 이벤트 핸들러
    setSaveId,
    setBusinessNumber,
    setPassword,
    handleBusinessNumberBlur,
    handlePasswordBlur,
    handleSubmit,
    handleSignUpClick,
  };
}
