import React from "react";
import HeaderLogo from "./HeaderLogo";
import HeaderMobileActions from "./HeaderMobileActions";
import HeaderDesktopActions from "./HeaderDesktopActions";

const Header = () => {
  return (
    <header className="">
      <div className="fixed top-0 left-0 z-40 h-[60px] w-full bg-background-default">
        <div className="size-full">
          <div className="container flex h-full items-center justify-between *:h-full">
            <HeaderLogo />
            <HeaderMobileActions />
            <HeaderDesktopActions />
          </div>
        </div>
      </div>
      <div
        data-orientation="horizontal"
        role="none"
        className="shrink-0 block h-header bg-background-default"
      ></div>
    </header>
  );
};

export default Header;
