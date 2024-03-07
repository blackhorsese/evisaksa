import React from 'react'
import { useState, Fragment } from "react";
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

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

export default function Climate() {
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = useState(0);
    const handleOpen = (value) => {
      setOpen(open === value ? 0 : value);
    };

  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
    <>
        <Box 
            className="mx-auto justify-between md:pb-52 pb-10"
            >
                <h1 className='md:text-4xl text-2xl md:py-10 font-displace max-w-screen-2xl mx-auto md:px-10 px-5'>
                    Modes of transport
                </h1>
                <div className='items-center text-left bg-[#403F68] pt-10 mt-10 pb-52'>
                    <Tabs className='border-[#fff] border-b border-opacity-20 max-w-screen-2xl mx-auto'
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            label="Car rentals" {...a11yProps(0)}
                            sx={{
                                
                                fontSize: { xs: 16, md: 16, },
                                
                                textAlign: 'left',
                                color: '#E0E0E9',
                                paddingBottom:{xs: 3, md: 7,},
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab
                            label="Taxis"
                            {...a11yProps(1)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Use a ride-hailing app" {...a11yProps(2)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Buses" {...a11yProps(3)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#E0E0E9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #403F68 for the selected tab
                                }
                            }}
                        />
                    </Tabs>
                </div>

                <div className='mx-auto max-w-screen-2xl justify-center md:px-10 px-5 items-center'>
                    <TabPanel value={value} index={0}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='././plane_your_trip/transportation/Car-rentals.png' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#403F68]'>
                                    Car rentals
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    Hiring a car is an efficient and cost-effective way to explore Saudi Arabia and visit the country’s many tourist attractions. Cars can be rented at airports, or in most cities, making it easy to get out and explore.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#5e5e5e]'>
                                    *In case of any issue or problem do not hesitate to call 938                            
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='././plane_your_trip/transportation/Car-rentals.png' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./003.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#403F68]'>
                                    Taxis
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    Taxis in Saudi Arabia are easy to find, particularly around busy locations such as shopping malls, hypermarkets and public parks. All are equipped with a digital meter detailing the fare, together with information on the driver and operating company. Some hotels offer cars for private hire too.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#5e5e5e]'>
                                    *In case of any issue or problem do not hesitate to call 938                            
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./003.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./004.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 md:text-4xl text-2xl text-[#403F68]'>
                                    Use a Ride-hailing App
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    A number of ride-hailing apps operate in the Kingdom, including Uber and Careem. Just tap in your pick-up and drop-off locations and track your driver’s arrival online. Payment can be made either by cash or credit card.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#5e5e5e]'>
                                    *In case of any issue or problem do not hesitate to call 938                            
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./004.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./005.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pb-5 pt-3 md:text-4xl text-2xl text-[#403F68]'>
                                    Buses
                                </h1>
                                <a className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    The Saudi Public Transport Company (SAPTCO) operates a comprehensive network of bus services across the Kingdom, linking all major cities, towns and villages. For more information and to purchase tickets, please visit the 
                                    <a className='text-[#0600FF]' href='https://saptco.com.sa/homepage' target='_blank'> SAPTCO website.
                                    </a>
                                </a>
        
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./005.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Box>
    </>
  )
}
