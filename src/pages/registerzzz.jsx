import { useLocation } from "react-router-dom";
import React, { useState } from "react";
import Navbar from "../component/navbar";
import Footer from "../component/footer";
import ClientCaptcha from "react-client-captcha";

function Registration() {
  const [passport, setPassport] = useState("");
  const [country, setCountry] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handlePassportChange = (event) => {
    setPassport(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitting(true);

    try {
      await postDataToAPI(passport, country);
    } catch (error) {
      console.error(error);
    }
  };

    const postDataToAPI = async (passport, country) => {
    const response = await fetch('http://localhost:5000/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ passport, country }),
    });
    return response.json();
  };

  const location = useLocation();

  return (
    <>
      <Navbar color={location.pathname} />

      <div className="grid grid-cols-1 md:grid-cols-2">
        <div className="side">
          <p className="text-[50px] md:text-[80px] lg:text-[100px] w-[80%] lg:w-2/3 mx-auto font-medium font-displace text-white leading-[1] mt-52 md:mt-96 mb-10 md:mb-0">
            Welcome to eVisa !
          </p>
        </div>

        <form onSubmit={handleSubmit} className="w-4/5 mx-auto pb-16">
          <h6 className="text-secondary text-[2.5rem] leading-[4rem] mt-10 md:mt-0 font-displace">
            Create eVisa account
          </h6>
          <div className="mt-14">
            <label className="text-secondary font-medium ">Passport Type*</label>
            <br />
            <select
              value={passport}
              id="passport"
              onChange={handlePassportChange}
              className="border-[1px] border-black w-[90%] py-3 mt-5 "
              required
            >
              <option disabled>Select</option>
              <option value="Diplomatic">Diplomatic Passport</option>
              <option value="Regular">Regular Passport</option>
              <option value="Special">Special</option>
            </select>
          </div>

          <div className="mt-10">
            <label className="text-secondary font-medium ">
              Country of Nationality*
            </label>
            <br />
            <select
              onChange={handleCountryChange}
              value={country}
              required
              id="country"
              className="border-[1px] border-black w-[90%] py-3 mt-5 ">
              <option>Country</option>
              <option>Diplomatic Passport</option>
              <option>Regular Passport</option>
              <option>Special</option>
            </select>
          </div>

          <p className="text-gray-500 text-[12px] w-4/5 mt-10">
            In case your nationality country is not eligible for eVisa, please
            <span className="font-medium text-black ml-1">
              contact the nearest embassy of Saudi Arabia
            </span>
          </p>
          <p></p>

          <div className="mt-10">
            <ClientCaptcha captchaCode={(code) => console.log(code)} />
            <input
              required
              type="password"
              placeholder="********"
              className="mt-3 border-[1px]  border-black px-3 py-3 w-[90%]  placeholder-gray-400 text-[20px]"
            />
          </div>

          <div className="flex justify-end mt-20">
            <button disabled={submitting}
              type="submit"
              value={handleSubmit}
              className="text-secondary text-[17px] border-4 border-secondary w-1/2 p-3 rounded-full  block h-[60px]  self-end"
            >
              NEXT
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </>
  );
}

export default Registration;
