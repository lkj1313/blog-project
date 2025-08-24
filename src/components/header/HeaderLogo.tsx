import React from "react";
import { LogoGradient } from "@/shared/icons/logo";
import Image from "next/image";

const HeaderLogo = () => {
  return (
    <div className="flex items-center gap-11">
      <a aria-label="초간편 통합 선정산서비스 올라" href="/">
        <Image
          src={LogoGradient}
          alt="allra logo"
          loading="lazy"
          width={92}
          height={24}
          decoding="async"
        />
      </a>
    </div>
  );
};

export default HeaderLogo;
