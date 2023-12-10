import React, { useState } from "react";
import Navbar from "../component/navbar";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import KeyboardArrowRightOutlinedIcon from "@mui/icons-material/KeyboardArrowRightOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import Application from "../component/preApplication";
import Footer from "../component/footer";
import { useNavigate } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";

function Visa() {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  let navigate = useNavigate();
  const handleNavigate = (link) => {
    navigate(link);
  };

  return (
    <React.Fragment>
      <Navbar />
      <div className="grid grid-cols-1  lg:grid-cols-2">
        <div className="w-2/3 mx-auto mt-10 md:mt-0">
          <h5 className="font-displace text-[40px] md:text-[70px]">
            Apply for
          </h5>
          <h5 className="font-displace text-[40px] md:text-[70px] -mt-5">
            eVisa
          </h5>
          <hr />
        </div>

        <div className="mt-10 lg:mt-0 ">
          <div
            onClick={() => handleNavigate("/personal-info")}
            className="flex justify-around  w-4/5 rounded-xl shadow-2xl py-5 mx-auto lg:mx-0 cursor-pointer"
          >
            <div className="bg-secondary text-white py-2  w-[20%] h-[70px] md:py-4  md:w-[15%] md:h-[80px] rounded-full text-center self-center">
              <Person2OutlinedIcon sx={{ fontSize: "50px" }} />
            </div>
            <p className="text-[14px] md:text-[20px] self-center ">
              APPLY FOR INDIVIDUAL
            </p>
            <KeyboardArrowRightOutlinedIcon
              sx={{ fontSize: "40px", alignSelf: "center" }}
            />
          </div>

          <div
            onClick={handleClick}
            className="flex justify-around  w-4/5 rounded-xl shadow-2xl py-5 mt-5 mx-auto lg:mx-0 cursor-pointer "
          >
            <div className="bg-secondary text-white py-2  w-[20%] h-[70px] md:py-4  md:w-[15%] md:h-[80px] rounded-full text-center self-center">
              <PeopleAltOutlinedIcon sx={{ fontSize: "50px" }} />
            </div>
            <p className="text-[14px] md:text-[20px] self-center ">
              APPLY FOR GROUP
            </p>
            <KeyboardArrowRightOutlinedIcon
              sx={{ fontSize: "40px", alignSelf: "center" }}
            />
          </div>

          {isShown && (
            <div className="shadow-xl p-5 w-[80%] rounded-xl mt-10">
              <div className=" mt-10">
                <label className="text-secondary font-medium ">
                  Group Name*
                </label>
                <br />
                <div className="flex">
                  <input
                    type="text"
                    className="mt-3 border-[1px]  border-gray-400 px-3 py-3 w-[80%]  placeholder-gray-400 text-[20px]"
                  />
                  <div className="self-center bg-secondary ml-3 mt-3">
                    <AddIcon
                      onClick={() => handleNavigate("/personal-info")}
                      className="text-white cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <Application />
      <Footer />
    </React.Fragment>
  );
}

export default Visa;
