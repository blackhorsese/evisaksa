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
    <div className='max-w-screen-2xl mx-auto md:text-5xl md:px-10 px-5 text-2xl font-displace'>
        <h1>
            Frequently Asked Questions
        </h1>
    </div>
    <Box 
        className="mx-auto px-5 justify-between md:px-10 md:pt-10 pt-5 md:pb-52 pb-20 max-w-screen-2xl"
        >
        <div className='items-center mt-5 text-left border-[#000] border-b border-opacity-20'>
            <Tabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons
                allowScrollButtonsMobile
            >
                <Tab
                    label="Tourist Visa" {...a11yProps(0)}
                    sx={{
                        
                        fontSize: { xs: 16, md: 16, },
                        
                        textAlign: 'left',
                        color: '#E0E0E9',
                        paddingBottom:{xs: 3, md: 7,},
                        fontWeight: 'bold',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            color: '#403F68', // Change the text color to #78006E for the selected tab
                        }
                    }}
                />
                <Tab
                    label="Entry Requirements"
                    {...a11yProps(1)}
                    sx={{
                        paddingBottom:{xs: 3, md: 7,},
                        textAlign: 'left',
                        color: '#E0E0E9',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            color: '#403F68', // Change the text color to #78006E for the selected tab
                        }
                    }}
                />
                <Tab 
                    label="General Information" {...a11yProps(2)}
                    sx={{
                        paddingBottom:{xs: 3, md: 7,},
                        textAlign: 'left',
                        color: '#E0E0E9',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            color: '#403F68', // Change the text color to #78006E for the selected tab
                        }
                    }}
                />
                <Tab 
                    label="GCC Residents" {...a11yProps(3)}
                    sx={{
                        paddingBottom:{xs: 3, md: 7,},
                        textAlign: 'left',
                        color: '#E0E0E9',
                        fontWeight: 'bold',
                        fontSize: '16px',
                        textTransform: 'none',
                        '&.Mui-selected': {
                            color: '#403F68', // Change the text color to #78006E for the selected tab
                        }
                    }}
                />
            </Tabs>
        </div>

        <div className='mx-auto max-w-screen-xl mt-10'>
            <TabPanel value={value} index={0}>
                <Fragment>
                    <Accordion open={open === 2} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(2)}>
                            How do I know if I am eligible for the tourist eVisa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Everyone is welcome to apply for the tourist visa which can be issued as an eVisa, visa on arrival or through the embassy. You can check your eligibility for the tourist eVisa through the Visa Requirements page for more Information.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 3} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(3)}>
                            Can I perform Umrah or Hajj with the tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            You can use the tourist visa to perform Umrah but not during the Hajj season. Visitors &nbsp;may apply for Umrah or Ziyarah permits via Nusuk platform . To perform Hajj, tourists must apply for a specific Hajj visa through the Ministry of Hajj and Umrah. 
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 4} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(4)}>
                            Do I need the medical insurance to apply for tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            A health insurance policy, which covers COVID-19 medical treatment, is issued along with your eVisa and its cost is included within the eVisa fee. Medical insurance coverage is valid for one year from the date of issue. It matches the validity of the tourist visa (one year from the date of issue).
                            You can enquire about your health insurance policy and health care service providers from the Council of Health Insurance.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 5} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(5)}>
                            How much does a tourist  eVisa cost?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            The holy cities of Makkah and Medina are reserved for Muslim visitors only, where millions of Muslim pilgrims perform Hajj and Umrah each year. However, there are many sites around the two holy cities which offer a fascinating glimpse into local culture and history and are open to everyone.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 6} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(6)}>
                            My country is not included in the tourist eVisa program. Can I still apply for a tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Everyone is welcome to apply for the tourist visa which can be issued as an eVisa, visa on arrival or through the embassy. You can check available methods to apply for a trourist visa on the Visa Requirement page.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 7} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(7)}>
                            Can I cancel my eVisa or get a refund if my eVisa is rejected?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            No, the tourist visa fees are non-refundable in any case as described in Clause 5.3 of the Terms and Conditions.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 8} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(8)}>
                            Can tourist visa holders enter Saudi Arabia through land ports?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes, tourists with an eVisa can come in from any formal port of entry.
                        </AccordionBody>
                    </Accordion>
                </Fragment>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Accordion open={open === 9} animate={customAnimation}>
                    <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(9)}>
                        Can I get a visa on arrival when traveling to Saudi?
                    </AccordionHeader>
                    <AccordionBody className="md:text-base text-sm font-normal py-2">
                        The tourist visa can be issued as an eVisa, visa on arrival or through the embassy. You can check your eligibility for the visa on arrival through the Visa Requirement.
                    </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 10} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(10)}>
                            How can I apply for the Transit visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Visitors can obtain the transit visa ahead of time through the embassy or electronically while booking flights through SAUDIA or Flynas.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 11} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(11)}>
                            I hold a Schengen / UK / US visa. Can I get a tourist visa on arrival in Saudi Arabia?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes, USA, UK, and Schengen tourist or business visa holders are eligible for Saudi tourist visa on arrival. Please check the Visa requirement page for more information.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 12} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(12)}>
                            My flight has a stops-over in Saudi Arabia, do I need to apply for a transit visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            If you are planning to enter Saudi Arabia on your way to your final destination, you need to apply for a transit visa. The transit visa can be obtained ahead of time through the embassy or electronically while booking your flights  on SAUDIA or Flynas.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 13} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(13)}>
                            I have a permanent residency permit from the UK, US, or the EU. Can I apply for a visa on arrival?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes, U.K, U.S. and EU permanent residents are eligible for Saudi tourist visa on arrival. Please check the Visa requirement  page for more information.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 14} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(14)}>
                            I'm not planning on visiting Saudi Arabia but my flight stops in the country, do I still need a transit visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            A transit visa will be required if the traveler plans to exit the transit area and pass through immigration. <br/> If you have two separate bookings while transiting through Saudi Arabia which requires you to pass through immigration, you must obtain a transit visa to enter the country and check-in again for your next flight. <br/> However, If you have one booking transiting through Saudi Arabia which does not require you to pass through immigration, you do not need to obtain a transit visa as you don't need to check-in for the next flight.
                        </AccordionBody>
                </Accordion>
            </TabPanel>

                <TabPanel value={value} index={2}>
                    <Accordion open={open === 15} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(15)}>
                            Can I enter Saudi Arabia as a tourist?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes you can. Saudi Arabia has opened its doors to the world through the tourist visa. You are welcome to discover the warm hospitality of Saudi people, the rich heritage, vibrant culture, and diverse and breathtaking landscapes.
                            <br/>
                            The tourist visa can be issued as an eVisa, visa on arrival or through the embassy, and you can enter Saudi through land, sea and air ports. 
                            <br/>
                            Please check the Visa Requirements page for more information.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 16} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(16)}>
                            Is Saudi Arabia safe?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Saudi Arabia is a very safe country, with a welcoming culture and low crime rate. Citizens’ and visitors’ safety, dignity and well-being are protected by the law.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 17} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(17)}>
                            Is alcohol available in Saudi Arabia?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            No. The consumption of alcohol is illegal in Saudi Arabia. Saudi Arabia offers a unique and authentic experiences. Explorers, culture enthusiasts and adventurers will be able to enjoy these without alcohol.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 18} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(18)}>
                            Are LGBT visitors welcome to visit Saudi?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Everyone is welcome to visit Saudi, and we ask that they follow and respect our culture, traditions and laws, as you would when visiting any other country in the world.
                        <br/>
                            Like other governments around the world, visitors are not required to disclose their personal information and we will strongly respect your right to privacy.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 19} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(19)}>
                            Are unmarried couples welcome to visit Saudi Arabia?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Everyone is welcome to visit Saudi Arabia. As is the case when visiting other countries, it is important to respect local customs and act in a culturally appropriate manner. Unmarried couples are able to share accommodation. More details can be found on the Visit Saudi Laws & Etiquette guide.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 20} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(20)}>
                            Is it possible for women to wear swimsuits in public?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                                As is the case when visiting other countries, it is important to respect local customs and act in a culturally appropriate manner. On public beaches, visitors are expected to wear modest clothing. On private beaches, spas, pools and cruises it is within the discretion of each private establishment to determine its policy.
                            <br/>
                                More details can be found on the Visit Saudi Laws & Etiquette guide.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 21} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(21)}>
                            Can I fly drones in Saudi Arabia?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                                Tourists are not permitted to fly drones in the Kingdom.
                            <br/>
                                Residents and Saudi Citizens can fly drones based on permit approvals.
                            <br/>
                                To apply for a permit, please register your request on the General Authority of Civil Aviation website.
                        </AccordionBody>
                    </Accordion>
                </TabPanel>

                <TabPanel value={value} index={3}>
                    <Accordion open={open === 22} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(22)}>
                            I am a GCC resident, how do I obtain the medical insurance when applying for the tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            You will obtain the medical insurance as a part of the tourist visa application process.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 23} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(23)}>
                            I am a GCC resident, am I eligible for the tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes, GCC residents are welcome to apply for the tourist visa which can be issued as an eVisa, visa on arrival or through the embassy. You can check your eligibility for an eVisa through the Visa Requirements page.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 24} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(24)}>
                            What is the duration of stay for the tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            The tourist visa is a multiple entry visa which is valid for one year, and permits 90 days period of stay. Please check the Visa requirement page for more information.
                        </AccordionBody>
                    </Accordion>
                    <Accordion open={open === 25} animate={customAnimation}>
                        <AccordionHeader className="md:font-semibold text-[#000] border-[#000] items-center border-opacity-20 text-sm md:text-base border-b text-left lg:py-6 py-3" onClick={() => handleOpen(25)}>
                            I have a GCC residency, can my family apply for the tourist visa?
                        </AccordionHeader>
                        <AccordionBody className="md:text-base text-sm font-normal py-2">
                            Yes, you can apply for first-degree family members (husband, wife, parents, and children) using your account after you submit your application.
                        </AccordionBody>
                    </Accordion>
                </TabPanel>
            </div>
        </Box>
    </>
  );
}