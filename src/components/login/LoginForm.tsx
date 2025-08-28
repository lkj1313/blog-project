"use client";

import { Check, EyeIcon, EyeOffIcon } from "lucide-react";
import { Input } from "@/shared/input/Input";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Button } from "@/shared/button/Button";
import { useState } from "react";

interface LoginFormProps {
  businessNumber: string;
  password: string;
  saveId: boolean;
  errors: Record<string, string>;
  isLoading: boolean;
  loginError: string;
  onBusinessNumberChange: (value: string) => void;
  onPasswordChange: (value: string) => void;
  onSaveIdChange: (checked: boolean) => void;
  onBusinessNumberBlur: () => void;
  onPasswordBlur: () => void;
  onSubmit: (e: React.FormEvent) => void;
  onSignUpClick: () => void;
}

export function LoginForm({
  businessNumber,
  password,
  saveId,
  errors,
  isLoading,
  loginError,
  onBusinessNumberChange,
  onPasswordChange,
  onSaveIdChange,
  onBusinessNumberBlur,
  onPasswordBlur,
  onSubmit,
  onSignUpClick,
}: LoginFormProps) {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col gap-6">
        {/* 로그인 에러 메시지 */}
        {loginError && (
          <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-red-600 text-body-3">{loginError}</p>
          </div>
        )}

        <div className="space-y-3">
          <label
            className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700"
            htmlFor="_r_14_-form-item"
          >
            사업자등록번호(ID로 사용돼요)
          </label>
          <Input
            className={`h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 transition-colors ${
              errors.businessNumber
                ? "border-red-500 focus:border-red-500"
                : "border-gray-300 focus:border-primary"
            }`}
            placeholder="사업자등록번호를 입력해 주세요"
            id="_r_14_-form-item"
            type="text"
            value={businessNumber}
            onChange={(e) => onBusinessNumberChange(e.target.value)}
            onBlur={onBusinessNumberBlur}
            disabled={isLoading}
          />
          {errors.businessNumber && (
            <p
              id="_r_14_-form-item-message"
              className="text-caption-1 font-medium text-status-error"
            >
              {errors.businessNumber}
            </p>
          )}
        </div>
        <div>
          <div className="space-y-3">
            <label
              className="peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-body-3 font-medium text-label-700"
              htmlFor="_r_15_-form-item"
            >
              비밀번호
            </label>
            <div className="relative w-full">
              <Input
                className={`h-[48px] rounded-lg px-6 text-body-2 placeholder:text-body-2 border-2 transition-colors ${
                  errors.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300 focus:border-primary"
                }`}
                placeholder="비밀번호를 입력해 주세요"
                id="_r_15_-form-item"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => onPasswordChange(e.target.value)}
                onBlur={onPasswordBlur}
                disabled={isLoading}
              />
              <div
                className="absolute top-1/2 right-7 -translate-y-1/2 cursor-pointer"
                onClick={togglePasswordVisibility}
              >
                {showPassword ? (
                  <EyeOffIcon className="w-6 h-6 text-gray-500" />
                ) : (
                  <EyeIcon className="w-6 h-6 text-gray-500" />
                )}
              </div>
            </div>
            {errors.password && (
              <p
                id="_r_15_-form-item-message"
                className="text-caption-1 font-medium text-status-error"
              >
                {errors.password}
              </p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-1"></div>
        <section>
          <div className="flex items-center justify-between">
            <label className="text-body-2 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:text-status-disable text-label-900 flex cursor-pointer items-center gap-3 space-y-0">
              <Checkbox.Root
                id="save-id"
                checked={saveId}
                onCheckedChange={(checked) =>
                  onSaveIdChange(checked as boolean)
                }
                className="w-[20px] h-[20px] rounded border-2 border-gray-300 flex items-center justify-center hover:border-primary transition-colors data-[state=checked]:bg-primary data-[state=checked]:border-primary"
                disabled={isLoading}
              >
                <Checkbox.Indicator>
                  <Check className="w-4 h-4 text-white" />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <span className="text-body-3 font-medium text-label-700">
                아이디 저장
              </span>
            </label>
          </div>
          <div className="mt-9 flex w-full flex-col gap-4 lg:mt-10">
            <Button
              type="submit"
              className="h-[48px] md:h-[56px] !text-title-4 text-white"
              disabled={isLoading}
            >
              {isLoading ? "로그인 중..." : "로그인"}
            </Button>
            <Button
              type="button"
              className="h-[48px] md:h-[56px] border-primary !text-title-4 text-primary rounded-lg"
              variant="outline"
              disabled={isLoading}
              onClick={onSignUpClick}
            >
              회원가입
            </Button>
          </div>
        </section>
      </div>
    </form>
  );
}
