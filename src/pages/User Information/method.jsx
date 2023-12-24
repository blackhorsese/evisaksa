import React from "react";
import Navbar from "./Nav";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "../../component/footer";
import Steppers from "../../component/stepper";

function Method() {
  const location = useLocation();
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };
  // stepper

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3 md:pt-44 pt-16">
        <div
          className="-z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[30%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>

        <div className="mt-10 md:mt-0  md:col-span-2 md:ml-[300px]  lg:ml-[400px] xl:ml-[500px] md:w-[80%] mx-auto  w-[90%] ">
          <div className="mt-10 ">
            <label className="text-[#78006E] font-medium ">Brand</label>

            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Visa</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="text-[#78006E] font-medium ">Card Number</label>
            <br />
            <input
              type="text"
              placeholder="Card Number"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-[#78006E] font-medium ">Expiry Date</label>
            <br />
            <input
              type="date"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-[#78006E] font-medium ">Card holder</label>
            <br />
            <input
              type="text"
              placeholder="Card holder"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-[#78006E] font-medium ">CVV</label>
            <br />
            <input
              type="text"
              placeholder="CVV"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="flex justify-end my-20 ">
            <button className="ml-5 text-[#78006E] text-[17px] border-4 border-[#78006E] w-[30%] p-3 rounded-full  block h-[60px]  self-end">
              Agree
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Method;
