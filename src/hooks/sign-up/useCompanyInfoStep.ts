import { useFormContext } from "react-hook-form";

export function useCompanyInfoStep() {
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();

  const phoneNumber = watch("phoneNumber");

  // 휴대폰번호 자동 하이픈 추가
  const formatPhoneNumber = (value: string) => {
    const numbers = value.replace(/[^0-9]/g, "");

    if (numbers.length <= 3) {
      return numbers;
    } else if (numbers.length <= 7) {
      return `${numbers.slice(0, 3)}-${numbers.slice(3)}`;
    } else {
      return `${numbers.slice(0, 3)}-${numbers.slice(3, 7)}-${numbers.slice(
        7,
        11
      )}`;
    }
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    const formatted = formatPhoneNumber(value);
    setValue("phoneNumber", formatted);
  };

  return {
    register,
    errors,
    setValue,
    watch,
    phoneNumber,
    handlePhoneNumberChange,
  };
}
