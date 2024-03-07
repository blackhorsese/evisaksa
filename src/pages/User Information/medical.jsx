import Navbar from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../pages/Home Page/footer";
import St3 from './steps/st3'
import React, { useState } from "react";

import Company from "../Home Page/asset/der3.png";
import Company2 from "../Home Page/asset/walaa.png";
import Company3 from "../Home Page/asset/tawuniya.png";
import Company4 from "../Home Page/asset/bupa.png";
import Company5 from "../Home Page/asset/medgulf.jpg";
import Company6 from "../Home Page/asset/gulfunion.png";
import Company7 from "../Home Page/asset/Al-Sagr.jpg";
import Company8 from "../Home Page/asset/Al-Etihad.jpg";
import Company9 from "../Home Page/asset/Solidarity.jpg";
import Company10 from "../Home Page/asset/Arabia.jpg";
import Company11 from "../Home Page/asset/GIG.jpg";
import Company12 from "../Home Page/asset/Allianz_logo.jpg";
import Company13 from "../Home Page/asset/Malath_logo.jpg";
import Company14 from "../Home Page/asset/Alinman_logo.jpg";
import Company15 from "../Home Page/asset/Rajhi_logo.jpg";
import Company16 from "../Home Page/asset/Saico_logo.jpg";

const companys = [
  {
    img: Company,
    text: "Arabian Shield cooperative Insurance Company",
  },
  {
    img: Company2,
    text: "Saudi United Cooperative Insurance (WALA'A)    ",
  },
  {
    img: Company3,
    text: "Tawuniya cooperative Insurance Company    ",
  },
  {
    img: Company4,
    text: "BUPA Arabia for Cooperative Insurance    ",
  },
  {
    img: Company5,
    text: "MedGulf Company    ",
  },
  {
    img: Company6,
    text: "Gulf Union Cooperative Insurance Company    ",
  },
  {
    img: Company7,
    text: "Al Sagr Co-operative Insurance Company    ",
  },
  {
    img: Company8,
    text: "Al-Etihad Co-operative Insurance Company    ",
  },
  {
    img: Company9,
    text: "Solidarity Saudi Takaful Company    ",
  },
  {
    img: Company10,
    text: "Arabia Insurance Cooperative Company    ",
  },
  {
    img: Company11,
    text: "Gulf Insurance Group (GIG)    ",
  },
  {
    img: Company12,
    text: "Allianz Saudi Fransi Cooperative Insurance Company    ",
  },
  {
    img: Company13,
    text: "Malath Cooperative Insurance & Reinsurance Company    ",
  },
  {
    img: Company14,
    text: "Alinma Tokio Marine    ",
  },
  {
    img: Company15,
    text: "Alrajhi Takaful for Cooperative Insurance    ",
  },
  {
    img: Company16,
    text: "Saudi Arabian cooperative Insurance Company (Saico)    ",
  },
];

function Medical() {
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1 md:grid-cols-3 md:pt-44 pt-16">
        <div className="md:block lg:block hidden -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] fixed md:w-[20%] w-[90%] mx-auto">
          <St3/>
        </div>

        <div className="md:col-span-2 md:ml-[300px] lg:ml-[400px] xl:ml-[500px] md:w-[75%] mx-auto w-[90%]">
          <p className="uppercase text-[15px] mt-5 mb-10 font-medium bg-gray-100 p-5 border-l-2 border-[#403F68]">
            Medical Insurance
          </p>

          <p className="font-medium md:text-base text-sm mt-3">
            Medical insurance covers only emergency cases All of the companie
            are approved and certified in Saudi Arabia
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
            {companys.map((x) => (
              <div className="shadow-xl p-4">
                <img src={x.img} />
                <p className="font-medium md:text-base text-sm my-3 text-center ">
                  {x.text}
                </p>
              </div>
            ))}
          </div>

          <div className="flex mt-20">
            <input
              required
              type="checkbox"
              id="myCheckboxs"
              checked={isCheckboxChecked}
              onChange={handleCheckboxChange}
            />
            <p className="ml-2 self-center md:text-lg text-base">
              {" "}
              By checking this box, I agree to the insurance coverage listed above with a fee of 180.00 SAR.
            </p>
          </div>

          <div className="flex justify-center my-16 md:my-20 md:gap-16">
            <p
              onClick={() => handleNavigate("/register")}
              className="cool-link text-black md:text-lg text-sm cursor-pointer self-center"
            >
              PREVIOUS
            </p>
            <button
              onClick={() => {
                if (isCheckboxChecked) {
                  handleNavigate("/conditions");
                }
              }}
              disabled={!isCheckboxChecked}
              className={`ml-5 text-[#403F68] md:text-lg text-sm border-4 border-[#403F68] md:w-64 w-48 items-center p-3 rounded-full block self-end ${!isCheckboxChecked ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              NEXT
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Medical;
