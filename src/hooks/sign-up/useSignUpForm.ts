import { useForm } from "react-hook-form";

interface SignUpFormData {
  businessNumber: string;
  password: string;
  passwordConfirm: string;
}

export function useSignUpForm() {
  const methods = useForm<SignUpFormData>({
    defaultValues: {
      businessNumber: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange", // 입력하는 동안 실시간 유효성 검사
  });

  return {
    methods,
  };
}
