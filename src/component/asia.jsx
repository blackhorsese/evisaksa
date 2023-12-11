import React from "react";
import Brun from "../asset/flag-brunei.png";
import China from "../asset/flag-china.png";
import Japan from "../asset/flag-japan.png";
import Singapore from "../asset/flag-singapore.png";
import South from "../asset/flag-korea.png";
import Kaza from "../asset/flag-kazakhstan.png";
import Mali from "../asset/flag-malaysia.png";

import Australia from "../asset/australia.png";

const asias = [
  {
    img: Brun,
    name: "BRUNEI",
  },
  {
    img: China,
    name: "CHINA",
  },
  {
    img: Japan,
    name: "JAPAN",
  },
  {
    img: Kaza,
    name: "KAZAKHSTAN",
  },
  {
    img: Mali,
    name: "MALAYSIA",
  },
  {
    img: Singapore,
    name: "SINGAPORE",
  },
  {
    img: South,
    name: "SOUTH KOREA",
  },
];

function Asia() {
  const handleVisit = () => {
    window.open("https://www.mofa.gov.sa/ar/Pages/default.aspx");
  };
  return (
    <React.Fragment>
      <div className="md:pt-20 pt-10 max-w-screen-2xl md:px-10 px-5 mx-auto justify-center">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="font-displace md:text-3xl text-2xl pt-5">
              Asia
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-3 lg:grid-cols-7 mx-auto mt-5">
          {asias.map((user) => (
            <div className="flex py-3">
              <img
                className="md:w-[5%] lg:w-[10%] w-5 self-center"
                src={user.img}
              />
              <p className="md:ml-4 ml-2 md:text-[15px] text-xs self-center">{user.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="md:pt-20 pt-10 max-w-screen-2xl md:px-10 px-5 mx-auto justify-center">
        <div className=" grid grid-cols-1">
          <div>
            <h5 className="font-displace md:text-3xl text-2xl pt-5">
              Oceania
            </h5>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-6 mx-auto mt-5">
          <div className="flex py-3">
            <img
              className="md:w-[5%] lg:w-[10%] w-5 self-center"
              src={Australia}
            />
            <p className="md:ml-4 ml-2 md:text-[15px] text-xs self-center">AUSTRALIA</p>
          </div>
          <div className="flex ml-8 py-3">
            <img
              className="md:w-[5%] lg:w-[10%] w-5 self-center"
              src={Australia}
            />
            <p className="md:ml-4 ml-2 md:text-[15px] text-xs self-center">NEW ZEALAND</p>
          </div>
        </div>
      </div>

      <div className="pt-5 max-w-screen-2xl md:px-10 px-5 mx-auto justify-center">
        <div>
          <p className="">
            If your country is not in the list contact the nearest
            <span
              onClick={handleVisit}
              style={{ textDecoration: "underline", cursor: "pointer" }}
            >
              {" "}
              Saudi Arabia Embassy
            </span>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Asia;
