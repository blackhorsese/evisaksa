import * as React from 'react';

export default function About() {

  return (
    <>
    <div className='mx-auto justify-center items-center md:px-10 px-5 xl:py-5 md:mt-72'>
        <div className='max-w-screen-2xl justify-center mx-auto'>
            <div className='items-center justify-center'>
                <div className='justify-center'>
                    <h1 className='py-5 lg:text-5xl text-3xl text-[#78006E] font-displace'>
                        Book your flight and hotel
                    </h1>
                    <div className='md:max-w-screen-lg justify-center'>
                        <a className='pt-5 md:max-w-screen-xl xl:text-base lg:text-base md:text-base text-sm'>
                            There are dozens of major airports and airlines that can give you access to almost every part of Saudi. Whether you are looking for a beach resort, a desert getaway, or an urban experience, Saudi’s hotels are plentiful and marked by superior hospitality. The largest national airlines are
                            <a href="https://www.saudia.com/" target="_blank" className='text-[#78006E]'> Saudia,
                            </a>
                            <a href="https://www.flynas.com/en" target="_blank" className='text-[#78006E]'> Flynas
                            </a> and
                            <a className='text-[#78006E]' href="https://www.flyadeal.com/en" target="_blank"> Flyadeal.
                            </a>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
