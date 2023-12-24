import React from 'react'
import Navbar from './Header/navbar'
import Slider from './slider'

export default function banner() {
  return (
    <>
      <Navbar />
      <Slider className='z-0'/>
      <div className='justify-center mx-auto items-center bg-[#78006E] text-white xl:mt-0 xl:px-20 xl:py-10 xl:mx-0 lg:mx-0 lg:py-5 lg:mt-0 md:px-8 md:mx-0 md:mt-0 md:py-5 px-10'>
        <div className="xl:flex lg:flex md:flex justify-between mx-auto xl:px-20 md:px-10 items-center py-8 xl:text-left">
          <div className="flex gap-5 items-center">
            <h6 className="font-displace xl:text-4xl text-2xl">
              01 .
            </h6>
            <p className="text-sm xl:text-base">
              Fill the application
            </p>
          </div>

          <div className="flex gap-5 items-center mt-3 xl:mt-0">
            <h6 className="xl:text-4xl text-2xl font-displace">
              02 .
            </h6>
            <p className="text-sm xl:text-base">
              Pay the Visa fee
            </p>
          </div>
          <div className="flex gap-5 items-center mt-3 xl:mt-0">
            <h6 className="xl:text-4xl text-2xl font-displace">
              03 .
            </h6>
            <p className="text-sm xl:text-base">
              Get your online Visa
            </p>
          </div>
          <div className='mt-8 xl:mt-0 lg:mt-0 md:mt-0'>
            <a href='./register'
              className="items-center py-2 xl:px-14 md:px-5 px-8 text-xs xl:text-base hover:border-2 duration-300 border"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>

    </>
  )
}