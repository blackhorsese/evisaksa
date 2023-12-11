import React from 'react'

export default function Train() {
  return (
    <>
        <div className='mx-auto justify-center md:px-10 px-5 py-10'>
            <div className='max-w-screen-2xl justify-center mx-auto'>
                <h1 className='md:text-4xl text-2xl'>
                    Train routes
                </h1>
                <div className='md:flex md:grid-cols-3 gap-10 md:pt-10'>
                    <div className='border border-opacity-20 rounded-md pb-5 md:mt-0 mt-5'>
                        <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                            Riyadh - Dammam Line
                        </h1>
                        <p className='pt-5 px-5 text-sm'>
                            Riyadh - Dammam connects Riyadh to the Eastern Region and passes through the following stations: Dammam, Abqaiq, Hofuf and Riyadh.
                        </p>
                    </div>
                    <div className='border border-opacity-20 rounded-md pb-5 md:mt-0 mt-10'>
                        <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                            The North Train
                        </h1>
                        <p className='pt-5 px-5 text-sm'>
                            The North Train connects Riyadh to the north of Saudi Arabia and serves the following stations: Riyadh, Al Majmaah, Qassim, Hail and Al Jouf.
                        </p>
                        <div className='mt-10 border-t mx-5 py-2 border-[#78006E] border-opacity-20'>
                            <a href='https://www.sar.com.sa/' target='_blank' className='text-[#78006E]'>
                                Learn more 
                            </a>
                        </div>
                    </div>
                    <div className='border border-opacity-20 rounded-md pb-5 md:mt-0 mt-10'>
                        <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                            Haramain Railway
                        </h1>
                        <p className='pt-5 px-5 text-sm'>
                            The Haramain High-Speed Railway is the latest and fastest train in the Middle East, operating between the holy cities of Makkah and Medina in western Saudi Arabia. It serves the following stations: Makkah, Jeddah, King Abdullah Economic City and Medina.
                        </p>
                        <div className='mt-10 border-t mx-5 py-2 border-[#78006E] border-opacity-20'>
                            <a href='https://sar.hhr.sa/home#' target='_blank' className='text-[#78006E]'>
                                Learn more 
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}