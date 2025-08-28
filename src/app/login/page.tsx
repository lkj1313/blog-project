"use client";

import { LoginHeader, LoginPageContent } from "@/components/login";
import { useLoginForm } from "@/hooks/login";

export default function LoginPage() {
  const {
    saveId,
    businessNumber,
    password,
    errors,
    isLoading,
    loginError,
    setSaveId,
    setBusinessNumber,
    setPassword,
    handleBusinessNumberBlur,
    handlePasswordBlur,
    handleSubmit,
    handleSignUpClick,
  } = useLoginForm();

  return (
    <article className="h-full">
      <LoginHeader />
      <LoginPageContent
        businessNumber={businessNumber}
        password={password}
        saveId={saveId}
        errors={errors}
        isLoading={isLoading}
        loginError={loginError}
        onBusinessNumberChange={setBusinessNumber}
        onPasswordChange={setPassword}
        onSaveIdChange={setSaveId}
        onBusinessNumberBlur={handleBusinessNumberBlur}
        onPasswordBlur={handlePasswordBlur}
        onSubmit={handleSubmit}
        onSignUpClick={handleSignUpClick}
      />
    </article>
  );
}
