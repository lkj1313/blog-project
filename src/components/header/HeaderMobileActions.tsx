import React from "react";
import Link from "next/link";
import { HamburgerIcon } from "@/shared/icons/etc";

const HeaderMobileActions = () => {
  return (
    <div className="flex items-center gap-4 lg:hidden">
      <Link
        href="/"
        className="inline-flex items-center justify-center whitespace-nowrap cursor-pointer disabled:cursor-not-allowed border border-secondary-300 bg-background-default text-primary hover:border-secondary-300 hover:bg-label-100 active:bg-background-alternative disabled:border-status-disable disabled:bg-background-default disabled:text-status-disable h-[32px] gap-1 rounded-sm px-6 text-body-3 font-medium"
      >
        로그인/회원가입
      </Link>
      <HamburgerIcon className="w-[24px] h-[24px]" />
    </div>
  );
};

export default HeaderMobileActions;
