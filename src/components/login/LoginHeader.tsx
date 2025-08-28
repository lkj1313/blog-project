"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export function LoginHeader() {
  return (
    <nav className="w-full fixed top-header left-0 z-30 bg-label-100">
      <div className="container flex items-center justify-end bg-label-100 font-normal text-label-700 h-breadcrumb-mobile text-caption-1 md:h-breadcrumb-tablet md:text-body-3">
        <ol className="flex items-center gap-1 text-body-3">
          <li>
            <Link href="/">홈</Link>
          </li>
          <ChevronRight className="w-[16px] h-[16px]" />
          <li>
            <Link href="/login">로그인</Link>
          </li>
        </ol>
      </div>
    </nav>
  );
}
