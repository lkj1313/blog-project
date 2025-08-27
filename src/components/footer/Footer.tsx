"use client";

import React from "react";
import { usePathname } from "next/navigation";
import FooterLogo from "./FooterLogo";
import FooterCompanyLogos from "./FooterCompanyLogos";
import FooterCustomerService from "./FooterCustomerService";

const Footer = () => {
  const pathname = usePathname();

  // 회원가입 페이지와 로그인 페이지에서는 푸터 숨김
  if (pathname.startsWith("/sign-up") || pathname.startsWith("/login")) {
    return null;
  }

  return (
    <footer className="w-full bg-background-default h-[358px]">
      <div className="shrink-0 h-px w-full bg-line-200"></div>
      <div className="lg:gap-20 container flex flex-wrap-reverse mx-auto items-start gap-8 py-10 md:flex-nowrap md:gap-11 lg:py-[60px]">
        <FooterLogo />
        <FooterCompanyLogos />
        <div className="shrink-0 h-px w-full bg-line-400 md:hidden"></div>
        <FooterCustomerService />
      </div>
    </footer>
  );
};

export default Footer;
