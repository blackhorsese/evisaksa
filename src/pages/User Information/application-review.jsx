import React, { useEffect, useState } from "react";
import Navbar from "./Nav";
import Footer from "../../component/footer";
import Steppers from "./stepper";


const Application = () => {
  const [inputData, setInputData] = useState(null);
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  useEffect(() => {
    // Retrieve input data from local storage
    const data = localStorage.getItem('inputData');
    if (data) {
      setInputData(JSON.parse(data));
    }
  }, []);

  const handleCheckboxChange = (event) => {
    setIsCheckboxChecked(event.target.checked);
  };
  

  if (!inputData) {
    return (
      <p className="py-3 px-5 text-red-500 max-w-xs md:text-sm text-xs justify-center text-center items-center overflow-hidden mx-auto font-semibold">
        No address data found.
      </p>
    );
  }

  return (
    <>
      <Navbar />
      <div className="grid grid-cols-1 md:grid-cols-3 md:pt-44 pt-16">
        <div
          className="hidden lg:block md:block -z-30 md:col-span-1 bg-side md:h-[100vh] mt-10 md:-mt-[165px] md:fixed  md:w-[25%] w-[90%] mx-auto "
          // style={{ height: "100vh", overflowY: "scroll" }}
        >
          <Steppers />
        </div>
        <div className="md:col-span-2 md:ml-[530px] md:w-[80%] mx-auto w-[90%] mt-10 md:mt-0">
          <p className="text-[15px] font-medium bg-gray-100 p-5 border-l-2 border-[#78006E]">
            Application No.: 230328006206727
          </p>

          <p className="font-displace font-medium text-[30px] mt-10">
            Application Summary
          </p>

          <p className="text-[#78006E] text-[12px] mt-10">Application Type</p>
          <p className="text-gray-500 text-[20px] mt-5">Individual</p>

          <p className="font-displace font-medium text-[30px] mt-10">
            Basic Information
          </p>
          <div>
            <img className="mt-5 w-40" src={inputData.picture} alt="Image"/>
            
            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  First Name or Given Name (English)
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.firstname}</p>
              </div>
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Father Name or Middle Name (English)
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.father}-</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Last Name or Family Name (English)
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.lastname}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">Gender</p>
                <p className="md:text-lg text-base mt-2">{inputData.gender}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">Marital Status</p>
                <p className="md:text-lg text-base mt-2">{inputData.marital}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">Profession</p>
                <p className="md:text-lg text-base mt-2">{inputData.profession}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">Date of Birth</p>
                <p className="md:text-lg text-base mt-2">{inputData.dbirth}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">Country of Birth</p>
                <p className="md:text-lg text-base mt-2">{inputData.cbirth}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">City of Birth</p>
                <p className="md:text-lg text-base mt-2">{inputData.ctbirth}</p>
              </div>
            </div>

            <div className="grid grid-cols-1  p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Country of Nationality
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.countrynationality}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Current Residence Address</p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">Country</p>
                <p className="md:text-lg text-base mt-2">{inputData.country}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">City</p>
                <p className="md:text-lg text-base mt-2">{inputData.city}</p>
              </div>
            </div>

            <div className="grid grid-cols-2  p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">Zip/Postal Code</p>
                <p className="md:text-lg text-base mt-2">{inputData.zipcode}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">Address</p>
                <p className="md:text-lg text-base mt-2">{inputData.address}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-10">
              Passport Information / Travel Details
            </p>

            <div className="grid grid-cols-2 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">Passport Type</p>
                <p className="md:text-lg text-base mt-2">{inputData.passport}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">Passport No.</p>
                <p className="md:text-lg text-base mt-2">{inputData.passportno}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Passport Issue Place (Country or City)
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.passportissueplace}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 bg-gray-100 p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Passport Issue Date
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.passportissuedate}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">Passport No.</p>
                <p className="md:text-lg text-base mt-2">{inputData.passportno}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 p-5 ">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Expected Date of Arrival
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.arrivaldate}</p>
              </div>

              <div>
                <p className="text-[13px] text-[#78006E]">
                  Expected Date of Departure
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.departuredate}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Additional Purpose of Visit</p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[20px] ">
                  Event, Family & Relatives, Leisure, Umrah
                </p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">Communication Preference </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Do you want to receive the visa on a email other than your
                  original email?
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.communication}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Do you want to receive the visa on a phone number other than
                  your original phone number?
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.phoneno}</p>
              </div>
            </div>
          </div>

          <div>
            <p className=" text-[25px] mt-14">
              Residence Address in Saudi Arabia
            </p>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">City</p>
                <p className="md:text-lg text-base mt-2">{inputData.scity}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">Address 1</p>
                <p className="md:text-lg text-base mt-2">{inputData.address1}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">Address 2</p>
                <p className="md:text-lg text-base mt-2">{inputData.address2}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Name of Person or Hotel
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.nameofperson}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 bg-gray-100 p-5 mt-10">
              <div>
                <p className="text-[13px] text-[#78006E]">
                  Primary Contact Number
                </p>
                <p className="md:text-lg text-base mt-2">{inputData.primarynumber}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 p-5">
              <div>
                <p className="text-[13px] text-[#78006E]">Email</p>
                <p className="md:text-lg text-base mt-2">{inputData.email}</p>
              </div>
            </div>
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
                I have read and agree all the above terms and conditions.
            </p>
          </div>
          <div className="flex justify-center my-16 md:my-20 md:gap-16">
            <p className="cool-link text-black md:text-lg text-sm cursor-pointer self-center">
              Previous
            </p>
            <button 
              onClick={() => {
                if (isCheckboxChecked) {
                  window.location.href = 'https://buy.stripe.com/00g9D373tfJPcrSfZ0';
                }
              }}
              disabled={!isCheckboxChecked}
              className={`ml-5 text-[#78006E] md:text-lg text-sm border-4 border-[#78006E] md:w-64 w-48 items-center p-3 rounded-full block self-end ${!isCheckboxChecked ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Payment
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Application;
