import React from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import { useLocation, useNavigate } from "react-router-dom";

import ClientCaptcha from "react-client-captcha";

function Login() {
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  const location = useLocation();
  return (
    <React.Fragment>
      <Navbar color={location.pathname} />

      <div className="grid  grid-cols-1  md:grid-cols-2">
        <div className="side">
          <p className="text-[50px]  md:text-[80px]  lg:text-[100px]   w-[80%]  lg:w-2/3 mx-auto font-medium font-displace text-white leading-[1]  mt-52 md:mt-96 mb-10 md:mb-0">
            Welcome to eVisa !
          </p>
        </div>

        <div className="w-4/5 mx-auto pb-16">
          <h6 className="text-secondary text-[2.5rem] leading-[4rem]  mt-10 md:mt-0">
            Login to eVisa
          </h6>
          <div className="mt-14">
            <label className="text-secondary font-medium ">Email*</label>
            <br />
            <input
              type="email"
              placeholder="example@example.com"
              className="mt-3 border-[1px]  border-black px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">Password*</label>
            <br />
            <input
              type="password"
              placeholder="********"
              className="mt-3 border-[1px]  border-black px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="flex mt-10">
            <div className="self-center ">
              <ClientCaptcha captchaCode={(code) => console.log(code)} />

              <input
                type="password"
                placeholder="********"
                className="mt-3 border-[1px]  border-black px-3 py-3 w-[60%]  placeholder-gray-400 text-[20px]"
              />
            </div>
            <button
              onClick={() => handleNavigate("/visa")}
              className="text-secondary text-[17px] border-4 border-secondary w-1/2 p-3 rounded-full  block h-[60px]  self-end"
            >
              LOG IN
            </button>
          </div>

          <p className="text-gray-400 mt-20 border-b-[1px] border-gray-400 pb-4">
            *4 unsuccessful attempts your account will be locked for 15 minutes.
          </p>
          <div className="flex mt-10 gap-3 lg:gap-0">
            <p className="text-gray-400 ">Did you forget your password?</p>
            <p className="text-gray-400 ">Do not have an account?</p>
            <p className="text-gray-400 ">Activation link not received?</p>
          </div>
          <div className="flex justify-between mt-10  gap-3 lg:gap-0">
            {/* <p className="text-black text-[12px] md:text-[18px] border-b-2 border-black  "> */}

            <p
              onClick={() => handleNavigate("/forgot")}
              className="cool-links  text-black text-[12px] md:text-[18px] cursor-pointer"
            >
              RESET PASSWORD
            </p>

            <p
              onClick={() => handleNavigate("/registration")}
              className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer"
            >
              SIGN UP
            </p>
            <p
              onClick={() => handleNavigate("/forgot")}
              className="cool-link  text-black text-[12px] md:text-[18px] cursor-pointer"
            >
              RESEND ACTIVATION
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </React.Fragment>
  );
}

export default Login;
