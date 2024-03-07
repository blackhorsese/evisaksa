import React from "react";
import Canada from "./asset/canada.png";
import USA from "./asset/usa.png";

function Description() {
  return (
    <>
    <div className="max-w-screen-2xl md:px-10 px-5 mx-auto">
      <div className="md:pt-40 pt-16 md:flex justify-between">
        <div>
          <h5 className="font-displace md:text-5xl text-2xl md:max-w-lg">
            What is the Saudi eVisa?
          </h5>
        </div>

        <div className="max-w-screen-md pt-5 md:pt-0">
          <p className="md:text-base text-sm">
            Saudi Arabia is opening its doors to the world through its new
            tourist visa. Through the fast and easy-to-use online portal,
            international visitors from 49 eligible countries can apply for an
            eVisa and discover the warm hospitality of Saudi people the rich
            heritage, vibrant culture, and diverse and breathtaking landscapes;
            from the mountains of Abha to the beaches of the Red Sea to the
            shifting sands of the Empty Quarter.
            <br/><br/>
            The eVisa will be a one-year, multiple entry visa, allowing tourists
            to spend up to 90 days in the country. The tourist visa allows you
            to take part in tourism-related activities such as, events, family &
            relatives visits, leisure, and Umrah (excluding Hajj) and excludes
            other activities such as studying.
          </p>
        </div>
      </div>
      <div className="md:pt-40 pt-20">
        <h5 className="font-displace md:text-5xl text-2xl md:max-w-lg">
          Eligible Countries
        </h5>
        <h5 className="font-displace md:text-3xl text-xl pt-5">
          North America
        </h5>
        <div className="md:grid flex md:grid-cols-2 lg:grid-cols-6 mx-auto md:mt-10 mt-5">
          <div className="flex md:ml-16 lg:ml-0">
            <img
              className="md:w-[5%] lg:w-[10%] w-5 self-center"
              src={Canada}
            />
            <p className="md:ml-4 ml-2 md:text-[15px] text-xs self-center">CANADA</p>
          </div>
          <div className="flex md:ml-16 ml-8 lg:ml-0 lg:mt-0">
            <img
              className="md:w-[5%] lg:w-[10%] w-5 self-center"
              src={USA}
            />
            <p className="md:ml-4 ml-2 md:text-[15px] text-xs self-center">US</p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default Description;
