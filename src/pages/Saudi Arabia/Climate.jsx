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
            className="mx-auto justify-between md:pb-52 pb-10 pt-10"
            >
                <h1 className='md:text-4xl text-2xl md:py-10 font-displace max-w-screen-2xl mx-auto md:px-10 px-5'>
                    Climate & Seasons
                </h1>
                <div className='items-center text-left bg-[#78006E] pt-10 mt-10 pb-52'>
                    <Tabs className='border-[#ce9ec9] border-b border-opacity-20 max-w-screen-2xl mx-auto'
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        allowScrollButtonsMobile
                        aria-label="scrollable force tabs example"
                    >
                        <Tab
                            label="Spring" {...a11yProps(0)}
                            sx={{
                                
                                fontSize: { xs: 16, md: 16, },
                                
                                textAlign: 'left',
                                color: '#ce9ec9',
                                paddingBottom:{xs: 3, md: 7,},
                                fontWeight: 'bold',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #78006E for the selected tab
                                }
                            }}
                        />
                        <Tab
                            label="Summer"
                            {...a11yProps(1)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#ce9ec9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #78006E for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Autumn" {...a11yProps(2)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#ce9ec9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #78006E for the selected tab
                                }
                            }}
                        />
                        <Tab 
                            label="Winter" {...a11yProps(3)}
                            sx={{
                                paddingBottom:{xs: 3, md: 7,},
                                textAlign: 'left',
                                color: '#ce9ec9',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                textTransform: 'none',
                                '&.Mui-selected': {
                                    color: '#ffffff', // Change the text color to #78006E for the selected tab
                                }
                            }}
                        />
                    </Tabs>
                </div>

                <div className='mx-auto max-w-screen-2xl justify-center md:px-10 px-5 items-center'>
                    <TabPanel value={value} index={0}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./0015.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 text-sm'>
                                    Mid-March to Mid-June
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    Spring in Saudi Arabia can be brisk, particularly in the north, where the temperature at night can drop below 15 degrees C. The central and southern regions are warmer, averaging 
                                    around 20 degrees after nightfall. Rainfall is at its highest during spring, particularly in the central region and in the southwest over the Aseer Mountains.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#1b1b1b]'>
                                    Don’t forget to pack layers — like light sweaters, scarves or pashminas — plus a rain jacket and sunglasses.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./0015.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={1}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./0016.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 text-sm'>
                                    Mid-June to Mid-September
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    With the exception of the comparatively mild highlands in the southwest, summer signals the start of rising temperatures across most of the country, with the average hovering around 45 degrees C. The early mornings and long evenings are more temperate, so take advantage of the warm seas to explore Saudi’s world-class scuba diving sites, or try sailing and snorkeling.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#1b1b1b]'>
                                    Don’t forget to pack sunscreen, lip balm, sunglasses, water shoes and a hat to protect your face.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./0016.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={2}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./0017.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 text-sm'>
                                    Mid-September to Mid-December
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    Autumn brings gentler weather and cool breezes in both Saudi Arabia’s northern regions and the southwestern highlands. While daytime temperatures remain warm and can reach the 30s in early fall, evenings are milder and fit for outdoor strolling, especially along Jeddah’s waterfront, indulging in al-fresco dining or visiting Al Ahsa’s cool desert springs.                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#1b1b1b]'>
                                    Don’t forget to pack your walking shoes and a sweater for air-conditioned buildings and cooler evenings.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./0017.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>

                    <TabPanel value={value} index={3}>
                        <div className='lg:flex items-center justify-between rounded-md gap-10 border md:-mt-40 -mt-44 bg-white'>
                            <div className='lg:hidden block'>
                                <img className='' src='./0018.jpg' alt='images'/>
                            </div>
                            <div className='md:px-20 md:max-w-xl px-5 md:pb-0 lg:pb-0 pb-5'>
                                <h1 className='lg:pt-5 pt-3 text-sm'>
                                    Mid-December to Mid-March
                                </h1>
                                <p className='pt-5 text-sm font-light text-[#1b1b1b]'>
                                    Take advantage of Saudi Arabia’s beautiful winter weather to explore the kingdom. The balmy days and cool nights are ideal for camping, rock climbing or exploring Saudi Arabia’s verdant highlands and bustling cities, from Riyadh to Jeddah. Average winter temperatures are in the teens, but visitors might be lucky enough to see snowfall in the mountains of the northern regions blanketing the slopes and desert sands.
                                </p>
                                <br/>
                                <p className='text-sm font-light text-[#1b1b1b]'>
                                    Don’t forget to pack a heavy jacket or coat as well as lotion, as Saudi winters can be dry.
                                </p>
                            </div>
                            <div className='hidden lg:block'>
                                <img className='' src='./0018.jpg' alt='images'/>
                            </div>
                        </div>
                    </TabPanel>
                </div>
            </Box>
    </>
  )
}
