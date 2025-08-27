"use client";

interface ProgressBarProps {
  progress: number;
}

export function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="relative space-y-0 sm:space-y-2">
      <div className="flex items-center justify-between">
        <div className="absolute bottom-0 z-0 h-[100px] w-[10px]"></div>
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
    </div>
  );
}
