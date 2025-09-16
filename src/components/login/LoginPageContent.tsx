"use client";

import { LoginForm } from "./LoginForm";

interface LoginPageContentProps {
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

export function LoginPageContent({
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
}: LoginPageContentProps) {
  return (
    <div className="mx-auto  max-w-[480px] h-full max-md:container">
      <div className="pt-[80px] max-md:container pb-10 relative mx-auto max-w-[520px] md:px-7 space-y-8">
        <header>
          <h3 className="text-title-3 font-medium md:text-title-2">로그인</h3>
        </header>
        <LoginForm
          businessNumber={businessNumber}
          password={password}
          saveId={saveId}
          errors={errors}
          isLoading={isLoading}
          loginError={loginError}
          onBusinessNumberChange={onBusinessNumberChange}
          onPasswordChange={onPasswordChange}
          onSaveIdChange={onSaveIdChange}
          onBusinessNumberBlur={onBusinessNumberBlur}
          onPasswordBlur={onPasswordBlur}
          onSubmit={onSubmit}
          onSignUpClick={onSignUpClick}
        />
      </div>
    </div>
  );
}
