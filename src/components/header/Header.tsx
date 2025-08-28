import React from "react";
import { LogoGradient } from "@/shared/icons/logo";
import Image from "next/image";
const Header = () => {
  return (
    <header>
      <div className="fixed top-0 left-0 z-40 h-header w-full bg-background-default">
        <div className="size-full">
          <div className="container flex h-full items-center justify-between *:h-full">
            <div className="flex items-center gap-11">
              <a aria-label="초간편 통합 선정산서비스 올라" href="/">
                <Image src={LogoGradient} alt="allra logo" />
              </a>
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <div></div>
    </header>
  );
};

export default Header;
