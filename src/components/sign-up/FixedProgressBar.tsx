"use client";

interface FixedProgressBarProps {
  progress: number;
  isVisible: boolean;
}

export function FixedProgressBar({
  progress,
  isVisible,
}: FixedProgressBarProps) {
  return (
    <div
      className="fixed top-[60px] left-0 z-50 h-4 w-[100dvw] overflow-hidden bg-label-200 transition-opacity duration-300"
      style={{ opacity: isVisible ? 1 : 0 }}
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
  );
}
