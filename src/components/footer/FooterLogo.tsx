import React from "react";
import Image from "next/image";
import { LogoLabel700 } from "@/shared/icons/logo/index";

const FooterLogo = () => {
  return (
    <div className="grow">
      <Image
        src={LogoLabel700}
        alt="allra logo"
        loading="lazy"
        width={95}
        height={24}
        decoding="async"
      />
      <div className="mt-6 flex flex-col gap-6 md:mt-9">
        <main>
          <div className="flex flex-wrap items-center gap-2 text-body-3 text-label-700 [&_a:hover]:font-bold">
            <a href="/">Home</a> ·<a href="/">사용자 이용약관</a> ·{" "}
            <a href="/">개인정보 처리방침</a> · <a href="/">공지사항</a> ·{" "}
            <a href="/">FAQ</a>· <a href="/">블로그</a> ·{" "}
            <a href="/">채용정보</a>
          </div>
        </main>
        <main>
          <div className="text-body-3 font-normal text-label-500 lg:text-body-2">
            <p>
              (주)올라핀테크 ㅣ 사업자등록번호 : 509-86-01645 ㅣ 통신판매업신고
              : 제2022-서울강남-02369호
            </p>
            <p>
              대표이사 김상수 ㅣ 주소 : 서울특별시 강남구 봉은사로 327,
              11층(논현동, 궁도빌딩)
            </p>
          </div>
        </main>
        <p className="text-body-3 font-normal text-label-500">
          © 2020. Allra Fintech Corp. All Rights Reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterLogo;
