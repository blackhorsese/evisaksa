// import React from "react";
// import Flogo from "../asset/MT-Logo.svg";
// import Vector from "../asset/Vector.svg";
// import Vector2 from "../asset/Vector2.svg";
// import Vector3 from "../asset/Vector3.svg";
// import Vector4 from "../asset/Vector4.svg";
// import { useNavigate } from "react-router-dom";

// function Footer() {
//   let navigate = useNavigate();
//   const handleNavigate = (link) => {
//     navigate(link);
//   };

//   const handleButtonClick = () => {
//     window.open(
//       "/contact-us"
//     );
//   };

//   return (
//     <React.Fragment>
//       <div className="bg-[#23282D] py-5 overflow-hidden">
//         <div className="grid grid-cols-1  md:grid-cols-3 py-5 border-b-[1px] bg-[#23282D] w-[95%] mx-auto">
//           <div className="col-span-2 flex justify-around self-center ">
//             <p
//               onClick={() => handleNavigate("/terms-conditions")}
//               className="text-[10px] md:text-[15px] font-medium text-[#A39896] underline cursor-pointer "
//             >
//               Terms and conditions
//             </p>

//             <p
//               onClick={() => handleNavigate("/privacy")}
//               className="text-[10px] md:text-[15px] font-medium text-[#A39896] underline  cursor-pointer"
//             >
//               Privacy policy
//             </p>

//             <p
//               onClick={handleButtonClick}
//               className="text-[10px] md:text-[15px] marker:font-medium text-[#A39896] underline cursor-pointer"
//             >
//               Contact us
//             </p>

//             <p
//               onClick={() => handleNavigate("/important-info")}
//               className="text-[10px] md:text-[15px] font-medium text-[#A39896] underline cursor-pointer"
//             >
//               Important info
//             </p>
//           </div>

//           <div className="col-span-1">
//             <img className="w-[60%] mx-auto" src={Flogo} />

//             <p className="text-[13px] font-medium text-[#A39896] text-center">
//               The tourism website of Saudi Arabia
//             </p>
//           </div>
//         </div>

//         <div className="flex  justify-between w-[40%] md:w-[20%] mx-auto pt-10">
//           <a href="https://www.youtube.com/visitsaudi" target="_blank">
//             <img className="w-[20px] cursor-pointer" src={Vector} />
//           </a>
//           <a href="https://www.instagram.com/visitsaudi/" target="_blank">
//             <img className="w-[20px] cursor-pointer" src={Vector2} />
//           </a>
//           <a href="https://www.facebook.com/VisitSaudi/" target="_blank">
//             <img className="w-[20px] cursor-pointer" src={Vector3} />
//           </a>
//           <a href="https://twitter.com/VisitSaudiNow" target="_blank">
//             <img className="w-[20px] cursor-pointer" src={Vector4} />
//           </a>
//         </div>
//       </div>
//     </React.Fragment>
//   );
// }

// export default Footer;


import React, { useState } from 'react';

const Footer = () => {
    const [activeLink, setActiveLink] = useState('');

    const handleLinkClick = (link) => {
        setActiveLink(link);
    };

    return (
              <div className='bg-[#E2E2E9] z-10 relative'>
                <img className='w-full mx-auto justify-center' src='./fimages.png'/>
                <div className='max-w-screen-xl mx-auto justify-center md:pt-20 md:pb-10 md:px-10 md:py-10 pt-7'>
                  <h1 className='text-[#A39896] md:text-base text-sm justify-center pb-5 px-5 '>
                    Website last updated: March 07, 2024
                  </h1>
                  <div className='md:grid md:grid-cols-4 md:gap-8 max-w-screen-2xl mx-auto justify-center py-5 text-[#A39896] px-7'>
                    <div className="py-2 md:px-0 px-2">
                      <a href="/">
                        <img src='/blacklogo.png' className='md:w-52 w-40' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className='md:mt-0 mt-5'>
                      <h1 className='text-[#A39896] md:text-xl text-base justify-center font-semibold'>
                        Legal
                      </h1>
                      <ul className='pt-3'>
                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/terms-conditions">
                            Terms and conditions
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/privacy"
                          >
                            Privacy policy
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/important-info"
                          >
                            Important info
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/contact-us"
                          >
                            Contact us
                          </a>
                        </li>
                      </ul>
                    </div>

                    <div className='md:mt-0 mt-5'>
                      <h1 className='text-[#A39896] md:text-xl text-base justify-center font-semibold'>
                        Useful Information
                      </h1>
                      <ul className='pt-3'>
                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/about-saudi">
                            About Saudi
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/travel-safety-tips"
                          >
                            Safety Travel Tips
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/useful-contacts"
                          >
                            Useful Contacts
                          </a>
                        </li>

                        <li className='pl-2 hover:font-semibold duration-150'>
                          <a className='text-sm text-[#403f68] hover:text-[#000]' 
                            href="/travel-safety-tips"
                          >
                            Travel Guidelines
                          </a>
                        </li>
                      </ul>

                    </div>
                    <div className='md:pt-0 pt-10'>
                      <h1 className='text-[#A39896] md:text-xl text-base justify-center font-semibold'>
                          Community
                      </h1>
                        <div className="flex flex-row gap-7 pt-5">
                            <a 
                                target="_black" href="" 
                                className="text-[#403F68]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,2C12.317,2,2,12.317,2,25s10.317,23,23,23s23-10.317,23-23S37.683,2,25,2z M36.237,20.524 c0.01,0.236,0.016,0.476,0.016,0.717C36.253,28.559,30.68,37,20.491,37c-3.128,0-6.041-0.917-8.491-2.489 c0.433,0.052,0.872,0.077,1.321,0.077c2.596,0,4.985-0.884,6.879-2.37c-2.424-0.044-4.468-1.649-5.175-3.847 c0.339,0.065,0.686,0.1,1.044,0.1c0.505,0,0.995-0.067,1.458-0.195c-2.532-0.511-4.441-2.747-4.441-5.432c0-0.024,0-0.047,0-0.07 c0.747,0.415,1.6,0.665,2.509,0.694c-1.488-0.995-2.464-2.689-2.464-4.611c0-1.015,0.272-1.966,0.749-2.786 c2.733,3.351,6.815,5.556,11.418,5.788c-0.095-0.406-0.145-0.828-0.145-1.262c0-3.059,2.48-5.539,5.54-5.539 c1.593,0,3.032,0.672,4.042,1.749c1.261-0.248,2.448-0.709,3.518-1.343c-0.413,1.292-1.292,2.378-2.437,3.064 c1.122-0.136,2.188-0.432,3.183-0.873C38.257,18.766,37.318,19.743,36.237,20.524z"/>
                                </svg>
                            </a>
                            <a 
                                target="_black" href="https://www.linkedin.com/company/evisa-ksa/?viewAsMember=true" 
                                className="text-[#403F68]
                                items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
                                rel="noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className=" fill-current stroke-current h-7 w-7"
                                    viewBox="0 0 50 50"
                                >
                                    <path d="M25,2C12.318,2,2,12.317,2,25s10.318,23,23,23s23-10.317,23-23S37.682,2,25,2z M18,35h-4V20h4V35z M16,17 c-1.105,0-2-0.895-2-2c0-1.105,0.895-2,2-2s2,0.895,2,2C18,16.105,17.105,17,16,17z M37,35h-4v-5v-2.5c0-1.925-1.575-3.5-3.5-3.5 S26,25.575,26,27.5V35h-4V20h4v1.816C27.168,20.694,28.752,20,30.5,20c3.59,0,6.5,2.91,6.5,6.5V35z"/>
                                </svg>
                            </a>
                            <a 
                                target="_black" href="" 
                                className="items-center text-sm relative h-8 pt-0.5 uppercase duration-200 flex justify-center flex-row hover:text-[#fff]"
                                rel="noreferrer">
                                    <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
                                    width="19.000000pt" viewBox="0 0 100.000000 100.000000"
                                    preserveAspectRatio="xMidYMid meet">
                                    <g transform="translate(0.000000,100.000000) scale(0.100000,-0.100000)"
                                    fill="#403F68" stroke="none">
                                    <path d="M492 989 c-18 -5 -50 -27 -72 -49 -80 -80 -78 -185 5 -350 37 -73
                                    120 -190 135 -190 15 0 84 97 128 180 98 183 92 314 -18 386 -43 29 -125 39
                                    -178 23z m123 -154 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80
                                    80 80 19 0 40 -9 55 -25z"/>
                                    <path d="M5 867 c-3 -6 -4 -176 -3 -376 l3 -364 129 -65 130 -65 120 60 119
                                    60 129 -60 128 -59 117 64 118 63 3 369 c1 218 -2 374 -7 379 -6 6 -44 -9 -99
                                    -39 l-90 -48 -11 -56 c-14 -71 -67 -181 -133 -276 -56 -81 -78 -99 -113 -90
                                    -52 13 -193 251 -216 365 l-11 60 -28 -14 c-27 -14 -34 -12 -148 45 -66 33
                                    -123 60 -126 60 -4 0 -9 -6 -11 -13z"/>
                                    </g>
                                </svg>
                            </a>
                        </div>
                    </div>
                  </div>
                  <div className='justify-center mx-auto md:text-center px-5 bg-[#403F68]'>
                      <p className='md:text-sm text-xs text-[#FFF] md:py-5 pt-5 py-3'>
                        Copyright &copy; 2024 Saudi Tourism Authority. All rights reserved
                      </p>
                  </div>
                </div>
              </div>
    );
}

export default Footer;
