import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import NavLinks from "../../component/Header/Navlinks";


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
            <header onClick={handleScrollToTop} className="fixed z-10 md:px-10 px-3 w-full duration-500 mx-auto items-center bg-[#] md:py-2 border-b bg-white">
              <div className='z-20 border-b pb-1 lg:block md:block hidden'>
                <div className='max-w-screen-2xl mx-auto'>
                  <div className='flex'>
                    <a 
                      href="/contact-us" className="text-[#403f68] hover:font-semibold items-center relative h-6 text-xs duration-200 px-8 flex rounded-sm">
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
                            
                            items-center text-base md:text-sm md:hover:border-b border-[#403f68] relative h-8 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#000] font-bold tracking-wide"
                          >
                            Home
                          </a>
                          <NavLinks />
                          <a
                            href="/register"
                            className="
                            items-center text-base md:text-sm bg-black bg-opacity-10 hover:bg-opacity-5 rounded-full border-[#403f68] relative h-10 duration-200 lg:px-8 md:px-4 px-4 flex justify-center flex-row text-[#403f68] font-semibold tracking-wide"
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
                  <Link to="/" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#403f68] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Home
                  </Link>
                </li>
                <NavLinks/>
                <li>
                  <Link to="/register" className="tracking-wider hover:bg-[#f1f1f1] px-8 py-3 flex flex-row items-center duration-200 border-b hover:text-[#403f68] text-[#000] border-[#000] border-opacity-10 text-sm font-semibold">
                    Apply for eVisa
                  </Link>
                </li>
                  <p className='text-sm px-8 text-[#000] pt-8'>
                    Planning a Trip to Saudi Arabia? Discover the Visa Application Process in a Few Simple Steps.
                  </p>
                <li>
                  <Link to="/contact-us" className="hover:bg-[#403f68] border border-[#403f68] items-center relative h-10 mt-8 tracking-wider duration-200 mx-10 justify-center flex rounded-sm">
                    Contact us
                  </Link>
                </li>
              </ul>
            </header>
    </>
  )};
export default Navbar;