"use client";
import { FormProvider } from "react-hook-form";
import { SignUpHeader } from "@/components/sign-up/SignUpHeader";
import { ProgressBar } from "@/components/sign-up/ProgressBar";
import { FixedProgressBar } from "@/components/sign-up/FixedProgressBar";
import { StepContent } from "@/components/sign-up/StepContent";
import { useSignUp } from "@/hooks/sign-up/useSignUp";

export default function SignUpPage() {
  const {
    progress,
    currentStep,
    showFixedProgress,
    methods,
    handleProgressUpdate,
    updateProgress,
  } = useSignUp();

  return (
    <FormProvider {...methods}>
      <article className="max-md:container pb-10 relative mx-auto max-w-[520px] md:px-7 space-y-8">
        <SignUpHeader />

        <section id="progress-section">
          <ProgressBar progress={progress} />
        </section>

        <FixedProgressBar progress={progress} isVisible={showFixedProgress} />

        <StepContent
          currentStep={currentStep}
          onProgressUpdate={handleProgressUpdate}
        />
      </article>
    </FormProvider>
  );
}
