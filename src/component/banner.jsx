import React from 'react'
import Navbar from './Header/navbar'
import Slider from './slider'

export default function banner() {
  return (
    <>
      <Navbar />
      <Slider className='z-0'/>
      <div className='md:py-10 max-w-screen-2xl mx-auto justify-center items-center bg-[#78006E] text-white md:mt-20 md:px-10 px-5'>
        <div className="md:flex justify-between md:px-20 items-center py-8 text-center md:text-left">
          <div className="flex gap-5 items-center">
            <h6 className="font-displace text-4xl">
              01 .
            </h6>
            <p className="">
              Fill the application
            </p>
          </div>

          <div className="flex gap-5 items-center mt-3 md:mt-0">
            <h6 className="font-displace text-4xl">
              02 .
            </h6>
            <p className="">
              Pay the Visa fee
            </p>
          </div>
          <div className="flex gap-5 items-center mt-3 md:mt-0">
            <h6 className="font-displace text-4xl">
              03 .
            </h6>
            <p className="">
              Get your online Visa
            </p>
          </div>
          <div className='mt-10 md:mt-0'>
            <a href='./register'
              className="items-center py-3 px-14 hover:border-2 duration-300 rounded-full border"
            >
              APPLY NOW
            </a>
          </div>
        </div>
      </div>

    </>
  )
}