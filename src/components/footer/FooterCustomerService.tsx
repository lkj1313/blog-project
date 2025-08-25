import React from "react";

const FooterCustomerService = () => {
  return (
    <main>
      <div className="flex flex-col">
        <h3 className="text-body-3 font-medium text-label-700 lg:text-body-2 lg:font-semibold">
          고객센터
        </h3>
        <a
          href="tel:1811-1463"
          className="font-mukta  text-display-2 font-bold text-nowrap text-primary-500 md:text-[44px] lg:text-display-1"
        >
          1811-1463
        </a>
        <div className="flex flex-col gap-5 text-body-3 font-medium text-label-700">
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-label-500">운영시간</h3>
            <div className="font-normal">
              <p className="flex flex-wrap gap-1">
                <span>평일 10:00 ~ 17:00 </span>
                <span>(점심시간 11:30 ~ 13:00)</span>
              </p>
              <p>주말, 공휴일 휴무</p>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="font-medium text-label-500">E-mail</h3>
            <div className="font-normal">
              <a href="mailto:help@allra.co.kr">help@allra.co.kr</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default FooterCustomerService;
