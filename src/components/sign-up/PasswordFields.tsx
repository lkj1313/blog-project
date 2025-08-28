"use client";

import { Input } from "@/shared/input/Input";
import { UseFormRegister, FieldErrors } from "react-hook-form";

interface PasswordFieldsProps {
  register: UseFormRegister<any>;
  errors: FieldErrors<any>;
  password: string;
  passwordConfirm: string;
}

export function PasswordFields({
  register,
  errors,
  password,
  passwordConfirm,
}: PasswordFieldsProps) {
  return (
    <div className="space-y-4">
      <div className="space-y-3">
        <label
          className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700"
          htmlFor="password"
        >
          비밀번호
        </label>
        <div>
          <Input
            className={`h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 ${
              errors.password ? "border-red-500" : "border-gray-300"
            } transition-colors`}
            placeholder="8~15자리/영문, 숫자, 특수문자 조합 입력"
            id="password"
            type="password"
            {...register("password", {
              required: "비밀번호를 입력해 주세요.",
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/,
                message:
                  "8~15자리 영문, 숫자, 특수문자로 조합하여 입력해주세요",
              },
            })}
          />
          {errors.password && (
            <p className="text-red-600 text-body-3 mt-2">
              {errors.password.message as string}
            </p>
          )}
        </div>
        <div className="space-y-3">
          <div className="realative w-full">
            <Input
              className={`h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 ${
                errors.passwordConfirm ? "border-red-500" : "border-gray-300"
              } transition-colors`}
              placeholder="8~15자리/영문, 숫자, 특수문자 조합 재입력"
              id="passwordConfirm"
              type="password"
              {...register("passwordConfirm", {
                required: "비밀번호 확인을 입력해 주세요.",
                validate: (value, formValues) => {
                  return (
                    value === formValues.password ||
                    "비밀번호가 일치하지 않습니다."
                  );
                },
              })}
            />
            {errors.passwordConfirm && (
              <p className="text-red-600 text-body-3 mt-2">
                {errors.passwordConfirm.message as string}
              </p>
            )}

            {/* 비밀번호 사용 가능 메시지 */}
            {!errors.password &&
              !errors.passwordConfirm &&
              password &&
              passwordConfirm &&
              password === passwordConfirm && (
                <p className="mt-2 text-caption-1 text-status-correct">
                  사용 가능한 비밀번호에요
                </p>
              )}
          </div>
        </div>
      </div>
    </div>
  );
}
