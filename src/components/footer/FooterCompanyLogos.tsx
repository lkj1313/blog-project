import React from "react";
import Image from "next/image";
import {
  KB금융그룹,
  KB국민카드,
  키움캐피탈,
  금융위원회,
  아기유니콘,
  벤처확인기업,
  기술보증,
} from "@/shared/icons/company/index";

const FooterCompanyLogos = () => {
  return (
    <div className="grid grid-cols-3 flex-wrap items-center md:grid-cols-4 lg:flex mt-3 md:mt-7">
      <Image src={KB금융그룹} alt="KB금융그룹" />
      <Image src={KB국민카드} alt="KB국민카드" />
      <Image src={키움캐피탈} alt="키움캐피탈" />
      <Image src={금융위원회} alt="금융위원회" />
      <Image src={아기유니콘} alt="아기유니콘" />
      <Image src={벤처확인기업} alt="벤처확인기업" />
      <Image src={기술보증} alt="기술보증" />
    </div>
  );
};

export default FooterCompanyLogos;
