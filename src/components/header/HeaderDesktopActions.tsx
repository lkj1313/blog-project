import React from "react";
import Link from "next/link";

const HeaderDesktopActions = () => {
  return (
    <div className="flex items-center gap-4 max-lg:hidden">
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:cursor-not-allowed border border-secondary-300 bg-background-default text-primary hover:border-secondary-300 hover:bg-label-100 active:bg-background-alternative disabled:border-status-disable disabled:bg-background-default disabled:text-status-disable h-[32px] gap-1 rounded-sm px-6 text-body-3 font-medium"
      >
        회원가입
      </Link>
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:cursor-not-allowed border bg-background-default text-label-800 hover:bg-label-100 active:bg-background-alternative disabled:border-line-400 disabled:text-status-disable h-[32px] gap-1 rounded-sm px-6 text-body-3 font-medium"
      >
        로그인
      </Link>
    </div>
  );
};

export default HeaderDesktopActions;
