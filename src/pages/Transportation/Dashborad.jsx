import React from 'react'

export default function Art() {
  return (
    <>
        <div className='duration-500'>
            <div className='bg-local md:h-32 h-44'>
                <img className='z-0 duration-500 w-full object-cover h-[12rem] md:h-[36rem]' src='./plane_your_trip/transportation/transportation.png' alt='images'/>
            </div>
            <div className='md:px-16 mx-auto justify-center overflow-hidden px-5 lg:text-center'>
                <div className='text-[#000] md:text-white md:py-20 mt-12 md:mt-16 md:pb-0'>
                    <div className='lg:text-center mx-auto'>
                        <h1 className='second xl:text-7xl lg:text-6xl md:text-5xl text-base tracking-wider duration-500 xl:font-displace lg:font-displace md:font-displace'>
                            Transportation
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}