"use client";
import { useState, useEffect } from "react";
import { useForm, FormProvider } from "react-hook-form";
import {
  AgreementStep,
  BusinessStep,
  CompanyInfoStep,
} from "@/components/sign-up";

interface SignUpFormData {
  businessNumber: string;
  password: string;
  passwordConfirm: string;
}

export default function SignUpPage() {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState<
    "agreement" | "business" | "companyInfo"
  >("agreement");
  const [showFixedProgress, setShowFixedProgress] = useState(false);

  const methods = useForm<SignUpFormData>({
    defaultValues: {
      businessNumber: "",
      password: "",
      passwordConfirm: "",
    },
    mode: "onChange", // 입력하는 동안 실시간 유효성 검사
  });

  const handleProgressUpdate = (newProgress: number) => {
    // 약관 동의 완료 시 15% 기본 설정
    setProgress(15);
    // 약관 동의 완료 후 다음 단계로 이동
    setCurrentStep("business");
  };

  // 스크롤 감지하여 고정 프로그레스바 표시/숨김
  useEffect(() => {
    const handleScroll = () => {
      const progressSection = document.getElementById("progress-section");

      if (progressSection) {
        const progressRect = progressSection.getBoundingClientRect();
        // 프로그레스바가 화면에서 사라지면 고정 프로그레스바 표시
        setShowFixedProgress(progressRect.bottom < 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <FormProvider {...methods}>
      <article className=" max-md:container pb-10 relative mx-auto max-w-[520px] md:px-7 space-y-8">
        <header>
          <h1 className="text-center text-title-2 md:text-title-1 lg:text-display-2">
            지금 회원가입하면
            <br />
            <span className="font-bold">수수료 지원금 3만원 지급!</span>
          </h1>
        </header>
        <section id="progress-section">
          <div className="relative space-y-0 sm:space-y-2">
            <div className="flex items-center justify-between">
              <div className="absolute bottom-0  z-0 h-[100px] w-[10px]"></div>
              <span className="text-primary relative z-10 text-body-3 font-normal md:text-body-2">
                최대 1,250만원까지 무료 선정산이 가능해요.
              </span>
              <span className="text-primary text-body-3 font-medium md:text-body-2 md:font-semibold">
                {progress}%
              </span>
            </div>
            <div
              aria-valuemax={100}
              aria-valuemin={0}
              role="progressbar"
              data-state="indeterminate"
              data-max="100"
              className="h-5 w-full overflow-hidden rounded-2xl bg-background-alternative relative space-y-0 sm:space-y-2"
            >
              <div
                data-state="indeterminate"
                data-max="100"
                className="size-full flex-1 rounded-2xl bg-primary transition-all duration-500 relative space-y-0 sm:space-y-2"
                style={{ transform: `translateX(-${100 - progress}%)` }}
              ></div>
            </div>
            <div
              className="fixed top-[60px] left-0 z-50 h-4 w-[100dvw] overflow-hidden bg-label-200 transition-opacity duration-300"
              style={{ opacity: showFixedProgress ? 1 : 0 }}
            >
              <div
                className="absolute top-0 left-0 h-full bg-primary transition-all duration-300"
                style={{ width: `${progress}%` }}
              ></div>
              <div className="fixed top-[80px] left-1/2 z-50 h-5 w-[80%] max-w-[520px] -translate-x-1/2">
                <div className="flex justify-between rounded-lg bg-background-default px-7 py-6 text-primary shadow-strong">
                  <span className="text-body-3 font-normal md:text-body-2">
                    최대 1,250만원까지 무료 선정산이 가능해요.
                  </span>
                  <span className="text-body-3 font-medium md:text-body-2 md:font-semibold">
                    {progress}%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {currentStep === "agreement" && (
          <section>
            <AgreementStep onComplete={handleProgressUpdate} />
          </section>
        )}

        {currentStep === "business" && (
          <section>
            <BusinessStep
              onComplete={(progress) => {
                setProgress(progress);
              }}
            />
          </section>
        )}

        {currentStep === "companyInfo" && (
          <section>
            <CompanyInfoStep />
          </section>
        )}
      </article>
    </FormProvider>
  );
}
