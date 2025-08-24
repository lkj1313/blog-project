import React from "react";
import FooterLogo from "./FooterLogo";
import FooterCompanyLogos from "./FooterCompanyLogos";
import FooterCustomerService from "./FooterCustomerService";

const Footer = () => {
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
