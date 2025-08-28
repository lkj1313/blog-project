"use client";

import { Input } from "@/shared/input/Input";
import { Button } from "@/shared/button/Button";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface BusinessNumberFieldProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  businessNumber: string;
  isVerified: boolean;
  onVerify: () => void;
}

export function BusinessNumberField({
  register,
  errors,
  businessNumber,
  isVerified,
  onVerify,
}: BusinessNumberFieldProps) {
  return (
    <div className="space-y-0">
      <div className="flex items-center justify-between">
        <label
          className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700 py-0"
          htmlFor="businessNumber"
        >
          사업자등록번호 (ID)
        </label>
        <a
          href="https://www.ftc.go.kr/www/selectBizCommList.do?key=253&token=71FB05C5-4829-80F4-C230-B0FB890B3E892EB62DA22EDEFB1080D78429A22093C1"
          className="inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:cursor-not-allowed p-0! underline underline-offset-4 hover:bg-label-100 active:bg-background-alternative disabled:text-status-disable h-[32px] gap-1 rounded-sm px-6 text-body-3 font-medium text-label-700"
        >
          사업자 번호가 기억나지 않아요
        </a>
      </div>
      <div className="flex items-stretch gap-4">
        <div className="flex-1">
          <Input
            placeholder="-제외 10자리 입력"
            id="businessNumber"
            className={`w-full h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 ${
              errors.businessNumber ? "border-red-500" : "border-gray-300"
            } transition-colors`}
            {...register("businessNumber", {
              required: "사업자등록번호를 입력해 주세요.",
              pattern: {
                value: /^\d{10}$/,
                message: "사업자등록번호 10자리를 입력해 주세요.",
              },
            })}
          />
          {errors.businessNumber && (
            <p className="text-red-600 text-body-3 mt-2">
              {errors.businessNumber.message as string}
            </p>
          )}
        </div>
        <Button
          type="button"
          variant="outline"
          className={`h-[48px] rounded-lg px-6 border-primary min-w-[96px] transition-all ${
            !businessNumber || businessNumber.length !== 10
              ? "border-gray-300 text-gray-400 cursor-not-allowed"
              : "text-primary cursor-pointer hover:bg-primary hover:text-white"
          }`}
          onClick={onVerify}
          disabled={!businessNumber || businessNumber.length !== 10}
        >
          인증하기
        </Button>
      </div>

      {/* 인증 완료 메시지 */}
      {isVerified && (
        <p className="mt-2 text-caption-1 text-status-correct">
          사업자등록번호 확인이 완료되었어요
        </p>
      )}
    </div>
  );
}
