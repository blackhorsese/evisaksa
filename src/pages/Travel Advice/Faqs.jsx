import * as React from 'react';
import { useState, Fragment } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
  } from "@material-tailwind/react";  

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      
      {...other}
    >
      {value === index && (
        <Box>
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
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

export default function VerticalTabs() {
  const [value, setValue] = React.useState(0);
  const [open, setOpen] = useState(0);
  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };
 
  const customAnimation = {
    mount: { scale: 1 },
    unmount: { scale: 0.9 },
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
    <div className='max-w-screen-2xl mx-auto md:text-5xl md:px-10 px-5 text-3xl font-displace border-t-4 border-[#403F68] mt-10 pt-5 md:py-10'>
        <h1>
            General Health FAQ
        </h1>
    </div>
    <Box 
        className="mx-auto px-5 justify-between md:px-10 md:pb-52 pb-20 max-w-screen-2xl"
        >
        <div className='items-center mt-5 text-left border-[#000] border-b border-opacity-20'>
            <Tabs
                value={value}
                onChange={handleChange}
            >
                <Tab
                    label="Read on for more useful pointers to ensure your well-being in Saudi." {...a11yProps(0)}
                    sx={{
                        
                        fontSize: { xs: 15, md: 16, },
                        
                        textAlign: 'left',
                        color: '#000',
                        paddingBottom:{xs: 3, md: 3,},
                        paddingLeft:{xs: 3, },
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            color: '#403F68', // Change the text color to #403F68 for the selected tab
                        }
                    }}
                />
            </Tabs>
        </div>

        <div className='mx-auto max-w-screen-xl mt-10'>
            <TabPanel value={value} index={0}>
                <Fragment>
                    <Accordion open={open === 2} animate={customAnimation}>
                        <AccordionHeader className="font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-6" onClick={() => handleOpen(2)}>
                            What kind of insurance do I need to go to Saudi? 
                        </AccordionHeader>
                        <AccordionBody className="text-base font-normal py-2">
                            Sometimes people get sick while traveling, so it’s a good idea to make sure your health insurance is current before departing so you can be prepared for any healthcare emergencies. Travel insurance is also a wise investment. It can provide coverage for trip cancellation or interruption, lost or stolen baggage, and other unforeseen events.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={customAnimation}>
                        <AccordionHeader className="font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-6" onClick={() => handleOpen(3)}>
                            Is the drinking water safe in Saudi?
                        </AccordionHeader>
                        <AccordionBody className="text-base font-normal py-2">
                        As not all establishments have water filters, bottled water is recommended in Saudi.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} animate={customAnimation}>
                        <AccordionHeader className="font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-6" onClick={() => handleOpen(4)}>
                        How do I protect myself from sunburn in Saudi?
                        </AccordionHeader>
                        <AccordionBody className="text-base font-normal py-2">
                            The sun is strongest between 10 a.m. and 4 p.m., so seek shade during these hours. Wear protective clothing, such as long-sleeved shirts and pants, and use broad-spectrum sunscreen on skin that may be exposed to the sun. It’s also important to stay hydrated and consider using a hat or an umbrella for further protection. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} animate={customAnimation}>
                        <AccordionHeader className="font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left py-6" onClick={() => handleOpen(5)}>
                            Is Saudi equipped to provide a comfortable and accessible travel experience for individuals with physical disabilities?
                        </AccordionHeader>
                        <AccordionBody className="text-base font-normal py-2">
                            Absolutely. Saudi places a strong emphasis on ensuring an enriching and comfortable experience for all its citizens, residents, and visitors, including individuals with physical disabilities.
                            <br/>
                            The country's breathtaking destinations are being designed with inclusivity in mind, making Saudi's unmatched hospitality accessible to everyone. This progressive approach reflects the country's vision to offer unforgettable experiences that are within everyone's reach, regardless of physical limitations.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </TabPanel>
            </div>
        </Box>
    </>
  );
}