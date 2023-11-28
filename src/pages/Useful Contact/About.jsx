import * as React from 'react';

export default function About() {

  return (
    <>
        <div className='mx-auto justify-center items-center md:px-10 px-5 py-20 md:py-40 md:mt-20'>
            <div className='max-w-screen-2xl justify-center mx-auto'>
                <div className='lg:flex grid-cols-3 items-center justify-between rounded-md md:gap-10 md:border mt-20 bg-[#78006E] text-white'>
                    <div className='w-full lg:hidden block'>
                        <img className='' src='./1.jpg' alt='images'/>
                    </div>
                    <div className='md:px-10 px-5 py-5'>
                        <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                            Emergency numbers
                        </h1>
                        <p className='text-sm font-semibold py-3'>
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
                    <div className='w-full hidden lg:block md:max-w-5xl'>
                        <img className='' src='./1.jpg' alt='images'/>
                    </div>
                </div>
                <div className='md:flex gap-10 items-center mx-auto py-20'>
                        <div className='border border-opacity-20 rounded-md pb-20 max-w-md h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                                Tourism
                            </h1>
                            <div className='px-5 pt-10 text-sm'>
                                <p className='pt-2 font-semibold'>
                                    Tourism Call Center: 930
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Tourism International Call Center: +966920000890
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Najm Company: 920000560
                                </p>
                                <p className='pt-2 font-semibold'>
                                    General Directorate of Passports: 992
                                </p>
                            </div>
                        </div>
                        <div className='border border-opacity-20 rounded-md pb-20 max-w-md h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                                Consumer services
                            </h1>
                            <div className='px-5 pt-10 text-sm'>
                                <p className='pt-2 font-semibold'>
                                    Municipal services: 940
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Electricity company emergency: 933
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Ministry of Transport emergency: 938
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Ministry of Commerce consumer call center: 1900
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Ministry of Hajj and Umrah, Customer Service: +966920002814
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Consumer protection: 935
                                </p>
                            </div>
                        </div>
                        <div className='border border-opacity-20 rounded-md pb-20 max-w-md h-80 md:mt-0 mt-5'>
                            <h1 className='bg-[#78006E] text-white text-lg font-semibold py-4 px-3'>
                                Public security
                            </h1>
                            <div className='px-5 pt-10 text-sm'>
                                <p className='pt-2 font-semibold'>
                                    Saudi Public Security: 989
                                </p>
                                <p className='pt-2 font-semibold'>
                                    General enquiries: 905
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Emergency medical consultation: 937
                                </p>
                                <p className='pt-2 font-semibold'>
                                    Ministry of Commerce consumer call center: 1900
                                </p>
                                <p className='pt-2 font-semibold'>
                                    General Directorate of Narcotics Control: 995
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border mt-20 text-black'>
                    <div className='w-full lg:hidden block'>
                        <img className='' src='./1.jpg' alt='images'/>
                    </div>
                    <div className='md:px-10 px-5 py-5'>
                        <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                            Telephone code and providers
                        </h1>
                        <p className='text-sm pt-5'>
                            Saudi Arabia’s country code is 00966 There are three mobile network providers in Saudi Arabia. These are:
                        </p>
                        <p className='text-sm font-semibold pt-2'>
                            - STC
                        </p>
                        <p className='text-sm font-semibold pt-2'>
                            - Mobily
                        </p>
                        <p className='text-sm font-semibold pt-2'>
                            - Zain
                        </p>
                    </div>
                    <div className='w-full hidden lg:block md:max-w-5xl'>
                        <img className='' src='./1.jpg' alt='images'/>
                    </div>
                </div>
                <div className='max-w-screen-2xl mx-auto justify-center'>
                <h1 className='md:text-4xl text-2xl pt-32 font-semibold'>
                    Keep exploring
                </h1>
                <div className='flex md:grid-cols-4 overflow-x-auto mx-auto gap-5 md:gap-10 items-center py-10'>
                    <a href='/about-saudi' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                            <img className='w-96' src='./2.webp' alt='images'/>
                            <div className='pt-5 px-5'>
                                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                 About Saudi
                                </h1>
                                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./3.jpg' alt='images'/>
                        <div className='pt-5 px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Safety travel tips
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                    <a href='./' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./4.png' alt='images'/>
                        <div className='pt-5 px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Travel Regulations
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}