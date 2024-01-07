import { Transition } from '@headlessui/react'
import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from "./Navlinks";
import Navlinksblack from "./Navlinksblack";


function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="header">
      <Logo isScrolled={isScrolled} />
      {/* Add your navigation items here */}
    </div>
  );
}

function Logo({ isScrolled }) {
  const [open, setOpen] = useState(false);
  const handleScrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {isScrolled ? (
            <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#] md:py-2 md:border-b bg-white">
              <div className='z-20 border-b pb-1 lg:block md:block hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                  <div className='flex'>
                    <a 
                      href="/contact-us" className="text-[#78006E] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
                      Contact Us
                    </a>
                  </div>
                </div>
              </div>
              <div className="mx-auto items-center duration-500 pt-2">
                <div className="flex items-center">
                  <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
                    <div className="z-20 flex-shrink-0 py-2 items-center duration-500">
                      <a href="/">
                        <img width={120} className='hidden md:block lg:block items-center duration-500' src='./blacklogo.png' alt='favicon.png'/>
                        <img width={100} className='block md:hidden lg:hidden items-center duration-500' src='./blacklogo.png' alt='favicon.png'/>
                      </a>
                    </div>
                    <div className="z-20 text-3xl md:hidden pt-3 px-3" onClick={() => setOpen(!open)}>
                      <ion-icon name={`${open ? "close" : "menu"}`}></ion-icon>
                    </div>
                    <div className="hidden lg:block w-full duration-500 scroll-smooth">
                      <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                        <div className='flex pl-8 items-center'>
                          <a
                            href="/"
                            className="
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#78006E] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide"
                          >
                            Home
                          </a>
                          <NavLinks />
                          <a
                            href="/register"
                            className="
                            items-center text-base md:text-sm bg-black bg-opacity-10 hover:bg-opacity-5 rounded-full border-[#78006E] relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#78006E] font-semibold tracking-wide"
                          >
                            Apply for eVisa
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile nav */}
              <ul className={`md:hidden bg-[#fff] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#78006E] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <NavLinks/>
                  <p className='text-sm px-8 text-[#000] pt-8'>
                    Planning a Trip to Saudi Arabia? Discover the Visa Application Process in a Few Simple Steps.
                  </p>
                <li>
                  <Link to="/register" className="hover:bg-[#78006E] border border-[#78006E] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Apply for eVisa
                  </Link>
                </li>
                <li> 
                  <Link to="/contact-us" className="hover:bg-[#78006E] border border-[#78006E] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </header>
      ) : (
        <header className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center md:py-2 hover:bg-[#111316]">
        <div className='md:border-b md:border-opacity-40 md:border-[#eeeeee] pb-1 lg:block md:block hidden'>
          <div className='max-w-screen-2xl mx-auto'>
            <div className='flex'>
              <a 
                href="/contact-us" className="text-[#fff] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
                  Contact Us
              </a>
            </div>
          </div>
        </div>
      <div className="mx-auto items-center duration-500 md:pt-8">
        <div className="flex items-center">
          <div className="flex items-center max-w-screen-2xl justify-between mx-auto w-full">
            <div className="z-30 flex-shrink-0 py-2 items-center duration-500">
              <a href="/">
                <img width={120} className='hidden md:block lg:block items-center duration-500' src='./Mainlogo.png' alt='favicon.png'/>
                <img width={100} className='block md:hidden lg:hidden items-center duration-500' src='./Mainlogo.png' alt='favicon.png'/>
              </a>
            </div>
            <div className="z-20 text-3xl md:hidden pt-3 px-3 text-white" onClick={() => setOpen(!open)}>
              <ion-icon className="" name={`${open ? "close" : "menu"}`}></ion-icon>
            </div>
            <div className="hidden lg:block w-full duration-500 scroll-smooth z-40">
              <div className="items-center flex flex-row space-x-2 justify-end duration-500">
                <div className='flex pl-8 items-center'>
                  <a
                    href="/"
                    className="
                    
                    items-center text-base md:text-sm md:hover:border-b border-[#78006E] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-bold tracking-wide"
                  >
                    Home
                  </a>
                  <Navlinksblack />
                  <a
                    href="/register"
                    className="
                    items-center text-base md:text-sm bg-black bg-opacity-10 hover:bg-opacity-5 rounded-full border-[#78006E] relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#fff] font-semibold tracking-wide"
                  >
                    Apply for eVisa
                  </a>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Mobile nav */}
        <ul className={`md:hidden bg-[#111316] fixed w-full top-0 overflow-y-auto bottom-0 py-20 duration-500 ${open ? "left-0" : "left-[-100%]"}
                `}
              >
                <li>
                  <Link to="/" className="tracking-wider hover:bg-[#1a1e24] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#78006E] text-[#fff] border-[#ffffff] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <Navlinksblack/>

                  <p className='text-sm px-8 text-[#C3CDD3] pt-8'>
                    Planning a Trip to Saudi Arabia? Discover the Visa Application Process in a Few Simple Steps.
                  </p>
                <li>
                  <Link to="/register" className="hover:bg-[#78006E] text-[#C3CDD3] border border-[#78006E] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Apply for eVisa
                  </Link>
                </li>
                <Link to="/contact-us" className="hover:bg-[#78006E] text-[#C3CDD3] border border-[#78006E] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact Us
                  </Link>
              </ul>
    </header>
      )}
    </>
  )};
export default Navbar;
