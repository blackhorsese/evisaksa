import Navbar from "../component/navbar";
import { useLocation } from "react-router-dom";
import ClientCaptcha from "react-client-captcha";
import Footer from "../component/footer";
import React, { useEffect, useState } from "react";

function Add() {
  const location = useLocation();

  return (
    <>
      <Navbar color={location.pathname} />
      <div className="grid grid-cols-1  md:grid-cols-3">
        <div className="md:col-span-1 bg-side md:h-[100vh] -mt-[165px] -z-10  md:fixed md:w-[40%] w-[80%] mx-auto">
          <div className="mt-44 md:w-1/2 w-full mx-auto md:ml-auto ">
            <h6 className="font-displace text-[30px] text-gray-600 pb-5 text-center md:text-start">
              Registration
            </h6>
          </div>
          <hr />

          <div className="mt-14 md:w-1/2 w-full  mx-auto md:ml-auto ">
            <h6 className="font-displace text-[18px] font-semibold text-secondary  pb-5 text-center md:text-start">
              Country of Nationality
            </h6>

            <h6 className=" text-[20px]  text-gray-600  pb-5  text-center md:text-start">
              Andorra
            </h6>
          </div>

          <div className="mt-14 md:w-1/2 w-full mx-auto md:ml-auto  ">
            <h6 className="font-displace text-[18px] font-semibold text-secondary  pb-5 text-center md:text-start">
              Passport Type
            </h6>

            <h6 className=" text-[20px]  text-gray-600  pb-5 text-center md:text-start">
              Regular Passport
            </h6>
          </div>
        </div>

        <div className="  md:col-span-2 md:ml-[400px]  lg:ml-[500px] xl:ml-[600px] md:w-[60%]  w-[90%] ">
          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">First Name*</label>
            <br />
            <input
              type="text"
              placeholder="First Name"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">Last Name*</label>
            <br />
            <input
              type="text"
              placeholder="Last Name"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">
              Mobile Number*
            </label>
            <br />
            <select className="border-[1px] border-gray-400 w-[20%] py-[17px] ">
              <option className="text-gray-400 text-[20px] ">+0</option>
              <option className="text-gray-400 text-[20px] ">+1</option>
              <option className="text-gray-400 text-[20px] ">+1242</option>
              <option className="text-gray-400 text-[20px] ">+1246</option>
              <option className="text-gray-400 text-[20px] ">+1264</option>
              <option className="text-gray-400 text-[20px] ">+1246</option>
              <option className="text-gray-400 text-[20px] ">+1268</option>
              <option className="text-gray-400 text-[20px] ">+1284</option>
              <option className="text-gray-400 text-[20px] ">+1340</option>
              <option className="text-gray-400 text-[20px] ">+1345</option>
            </select>
            <input
              type="text"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[80%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">Email*</label>
            <br />
            <input
              type="text"
              placeholder="example@example.com"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">
              Confirm Email*
            </label>
            <br />
            <input
              type="text"
              placeholder="example@example.com"
              className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10 ml-10">
            <label className="text-secondary font-medium ">
              Secret Questions*
            </label>
            <br />
            <select className="border-[1px]  border-gray-400 px-3  w-[100%] py-3 mt-5  placeholder-gray-400 ">
              <option>Select</option>
              <option>What is the name of your best friend</option>
              <option>What is the name of your first pet</option>
              <option>What is your favorite color</option>
            </select>
          </div>

          <div className="flex ">
            <div className="mt-10 ml-10">
              <label className="text-secondary font-medium ">Password*</label>
              <br />
              <input
                type="text"
                placeholder="******"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>

            <div className="mt-10 ml-10">
              <label className="text-secondary font-medium ">
                Confirm Password*
              </label>
              <br />
              <input
                type="text"
                placeholder="*****"
                className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
              />
            </div>
          </div>

          <div className="mt-10 ml-10">
            <ClientCaptcha captchaCode={(code) => console.log(code)} />

            <input
              type="password"
              placeholder="********"
              className="mt-3 border-[1px]  border-gray-500 px-3 py-3 w-[100%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="flex justify-center my-20">
            <p className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer self-center">
              CANCEL
            </p>
            <button className="ml-5 text-secondary text-[17px] border-4 border-secondary w-[30%] p-3 rounded-full  block h-[60px]  self-end">
              REGISTRATION
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Add;
