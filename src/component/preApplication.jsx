import React from "react";
import Tab from "./tab";

function Application() {
  return (
    <React.Fragment>
      <div className="grid grid-cols-1  pb-10  pt-20">
        <div className="w-5/6 mx-auto mt-10 md:mt-0">
          <h5 className="font-displace text-[40px] md:text-[30px] mb-3">
            Previous Applications
          </h5>

          <hr />
        </div>
      </div>
      <Tab />
    </React.Fragment>
  );
}

export default Application;
