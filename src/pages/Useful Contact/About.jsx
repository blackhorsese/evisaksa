import * as React from 'react';

export default function About() {

  return (
    <>
        <div className='mx-auto justify-center items-center md:px-10 px-5 py-5 md:mt-72'>
            <div className='max-w-screen-2xl justify-center mx-auto'>
                <div className='xl:flex lg:grid lg:grid-cols-2 md:grid-cols-2  gap-10 items-center mx-auto md:py-20 py-10'>
                    <div className='border border-opacity-20 rounded-md md:pb-20 pb-10 max-w-md md:h-80 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                            Emergency numbers
                        </h1>
                        <div className='px-5 md:pt-10 pt-5 text-sm'>
                            <p className='text-sm font-semibold'>
                                Police:
                            </p>
                            <p className='text-sm'>
                                Makkah, Riyadh and Eastern provinces: 911
                            </p>
                            <p className='text-sm'>
                                All other provinces of the Kingdom: 999
                            </p>
                            <p className='text-sm'>
                                Saudi Ambulance: 997
                            </p>
                            <p className='text-sm'>
                                Civil Defense: 998
                            </p>
                            <p className='text-sm'>
                                For traffic accidents: 993
                            </p>
                            <p className='text-sm'>
                                Highway Patrol: 996
                            </p>
                            <p className='text-sm'>
                                MBorder Guard: 994
                            </p>
                        
                        </div>    
                    </div>
                        <div className='border border-opacity-20 rounded-md md:pb-20 pb-10 max-w-md md:h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                                Tourism
                            </h1>
                            <div className='px-5 md:pt-10 pt-5 text-sm'>
                                <p className='pt-2 md:font-semibold'>
                                    Tourism Call Center: 930
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Tourism International Call Center: +966920000890
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Najm Company: 920000560
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    General Directorate of Passports: 992
                                </p>
                            </div>
                        </div>
                        <div className='border border-opacity-20 rounded-md md:pb-20 pb-10 max-w-md md:h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                                Consumer services
                            </h1>
                            <div className='px-5 md:pt-10 pt-5 text-sm'>
                                <p className='pt-2 md:font-semibold'>
                                    Municipal services: 940
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Electricity company emergency: 933
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Ministry of Transport emergency: 938
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Ministry of Commerce consumer call center: 1900
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Ministry of Hajj and Umrah, Customer Service: +966920002814
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Consumer protection: 935
                                </p>
                            </div>
                        </div>
                        <div className='border border-opacity-20 rounded-md md:pb-20 pb-10 max-w-md md:h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                                Public security
                            </h1>
                            <div className='px-5 md:pt-10 pt-5 text-sm'>
                                <p className='pt-2 md:font-semibold'>
                                    Saudi Public Security: 989
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    General enquiries: 905
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Emergency medical consultation: 937
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    Ministry of Commerce consumer call center: 1900
                                </p>
                                <p className='pt-2 md:font-semibold'>
                                    General Directorate of Narcotics Control: 995
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}