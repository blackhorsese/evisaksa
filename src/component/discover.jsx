import React from "react";

export default function Discover() {
  const handleVisit = () => {
    window.open(
      "https://www.visitsaudi.com/en?_ga=2.210622615.325474545.1679289825-2067208994.1678883007",
      "_self"
    );
  };
  return (
    <React.Fragment>
      <div className="mountains">
        <div className=" grid grid-cols-1 ml-10 lg:ml-20  pt-20 lg:pt-[15rem]">
          <div>
            <p className="text-[50px] md:text-[80px] xl:text-[104px] 2/3 lg:w-1/2 font-medium font-displace text-white leading-[1]">
              Discover Saudi Tourism
            </p>

            <div className="flex w-[50%] border-b-8 border-secondary pb-20 lg:pb-[15rem] cursor-pointer">
              <p
                onClick={handleVisit}
                className="text-[7px] md:text-[15px] lg:text-[20px]  mt-10 font-medium text-white "
              >
                GO TO SAUDI WEBSITE
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6 ml-10 text-secondary   self-center mt-8 md:mt-10 border-2 border-secondary rounded-full "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
