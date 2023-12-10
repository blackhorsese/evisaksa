import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Container } from "@mui/system";
import BasicTabs2 from "./tabs";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab
              style={{
                fontSize: "25px",
                textTransform: "capitalize",
                color: "gray",
              }}
              label="Individuals"
              {...a11yProps(0)}
            />
            <Tab
              style={{
                fontSize: "25px",
                textTransform: "capitalize",
                color: "gray",
              }}
              label="Groups"
              {...a11yProps(1)}
            />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <div className="grid grid-cols-1  lg:grid-cols-3 ">
            <div className="mt-10">
              <label className="text-secondary font-medium ">
                Visa Status*
              </label>
              <br />

              <select className="border-[1px] border-gray-500 w-[100%] lg:w-[90%] py-4 mt-5 text-xl text-gray-500 font-displace">
                <option>All</option>
                <option>Draft</option>
                <option> Under Review</option>
                <option>Visa Granted </option>
                <option>Visa Rejected </option>
                <option>Pending with applicant </option>
                <option>Payment Pending </option>
              </select>
            </div>
            <div className="mt-10">
              <label className="text-secondary font-medium lg:text-[13px] xl:text-[15px] ">
                Application Number/Name/Passport No/Visa No*
              </label>
              <br />

              <input
                className="border-[1px] border-gray-500 w-[100%] py-[14px] mt-5 text-xl text-gray-500 font-displace"
                type="text"
              />
            </div>

            <div className=" mt-20">
              <button className="text-secondary text-[17px] border-4 border-secondary w-[70%] md:w-[30%] lg:w-[70%] ml-auto p-3 rounded-full  block h-[60px]  ">
                SEARCH
              </button>
            </div>
          </div>

          <div className="flex mt-10">
            <div className="bg-secondary w-[10%] md:w-[7%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                No.
              </p>
            </div>

            <div className="bg-secondary w-[20%] md:w-[18%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                Application No.
              </p>
            </div>

            <div className="bg-secondary w-[18%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                Tourist Name
              </p>
            </div>

            <div className="bg-secondary w-[14%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                Visa No.
              </p>
            </div>
            <div className="bg-secondary w-[22%] md:w-[18%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                Visa Expiry Date
              </p>
            </div>

            <div className="bg-secondary w-[14%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]">
                Status
              </p>
            </div>
            <div className="bg-secondary w-[0%]  md:w-[18%] py-5 border-r-[1px] border-white">
              <p className="text-center text-white text-[10px] md:text-[14px]"></p>
            </div>
          </div>
          <p className="font-semibold my-3">No Record Found</p>
          <hr />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BasicTabs2 />
        </TabPanel>
      </Box>
    </Container>
  );
}
