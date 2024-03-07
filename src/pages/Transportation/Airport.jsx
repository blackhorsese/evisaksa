import React from 'react'

export default function Airport() {
  return (
    <>
        <div className='mx-auto justify-center md:px-10 px-5 py-10'>
            <div className='max-w-screen-2xl justify-center mx-auto'>
                <h1 className='font-displace md:text-4xl text-2xl'>
                    Our Airports
                </h1>
                <div className='md:flex grid-cols-3 gap-10 xl:pt-10'>
                    <div className='border border-opacity-20 rounded-md pb-20 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white text-lg font-semibold py-4 px-3'>
                            International
                        </h1>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                King Khalid International Airport <a href='https://www.kkia.sa/en/Pages/default.aspx' target='_blank' className='text-[#0600FF]'>
                                (RUH)</a> - Riyadh
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                King Abdulaziz International Airport <a href='https://gaca.gov.sa/web/en-gb/airport/king-abdulaziz-international-airport' target='_blank' className='text-[#0600FF]'>
                                (JED)</a> - Jeddah
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                King Fahd International Airport <a href='https://kfia.gov.sa/' target='_blank' className='text-[#0600FF]'>
                                (DMM)</a> - Dammam
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                Prince Mohammad bin Abdulaziz International Airport <a href='https://www.madinahairport.com/en-EN/Pages/Main.aspx' target='_blank' className='text-[#0600FF]'>
                                (MED)</a> - Medina
                            </a>
                        </div>
                    </div>
                    <div className='border border-opacity-20 rounded-md pb-20 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white text-lg font-semibold py-4 px-3'>
                            Regional
                        </h1>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                Prince Sultan bin Abdulaziz Airport <a href='https://gaca.gov.sa/web/en-gb/airport/prince-sultan-bin-abdulaziz-airport' target='_blank' className='text-[#0600FF]'>
                                (TUU)</a> - Tabuk
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/al-jouf-aiport' target='_blank' className='text-[#0600FF]'>
                                (AJF)</a> - Al Jawf
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/hail-airport' target='_blank' className='text-[#0600FF]'>
                                (HAS)</a> - Hail
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                Prince Naif bin Abdulaziz Airport <a href='https://gaca.gov.sa/web/en-gb/airport/prince-naif-bin-abdulaziz-airport' target='_blank' className='text-[#0600FF]'>
                                (ELQ)</a> - Qassim
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                Prince Abdulmohsin bin Abdulaziz Airport <a href='https://gaca.gov.sa/web/en-gb/airport/prince-abdulmohsin-bin-abdulaziz-airport' target='_blank' className='text-[#0600FF]'>
                                (YNB)</a> - Yanbu
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/al-ahsa-airport' target='_blank' className='text-[#0600FF]'>
                                (HOF)</a> - Al Ahsa
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/taif-international-airport' target='_blank' className='text-[#0600FF]'>
                                (TIF)</a> - Taif
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                King Abdullah bin Abdulaziz Airport<a href='https://gaca.gov.sa/web/en-gb/airport/king-abdullah-bin-abdulaziz-airport' target='_blank' className='text-[#0600FF]'> (GIZ) </a> - Jazan
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/abha-airport-abha' target='_blank' className='text-[#0600FF]'>
                                (AHB)</a> - Abha
                            </a>
                        </div>
                    </div>
                    <div className='border border-opacity-20 rounded-md pb-20 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white text-lg font-semibold py-4 px-3'>
                            Domestic
                        </h1>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/gurayat-airport' target='_blank' className='text-[#0600FF]'>
                                (URY)</a> - Gurayat
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/turaif-airport' target='_blank' className='text-[#0600FF]'>
                                (TUI)</a> - Turaif
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/arar-airport' target='_blank' className='text-[#0600FF]'>
                                (RAE)</a> - Arar
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/neom-airport' target='_blank' className='text-[#0600FF]'>
                                (NUM)</a> - Neom Bay Airport
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/rafha-airport' target='_blank' className='text-[#0600FF]'>
                                (RAH)</a> - Rafha
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                Prince Abdulmajeed bin Abdulaziz Airport
                                <a href='https://gaca.gov.sa/web/en-gb/airport/prince-abdulmajeed-bin-abdulaziz-airport' target='_blank' className='text-[#0600FF]'> (ULH)
                                </a> - AIUla
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/al-qaisumah-airport' target='_blank' className='text-[#0600FF]'>
                                (AQI)</a> - AlQaisumah
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/aldwadmi-airport' target='_blank' className='text-[#0600FF]'>
                                (DWD)</a> - Dawadmi
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/scs/Satellite?c=Page&cid=1440406464565&locale=en_GB&pagename=GACA%2FPage%2FGACA_Airports_PT' target='_blank' className='text-[#0600FF]'>
                                (DHA)</a> - Dhahran
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>King Saud bin Abdulaziz Airport
                                <a href='https://gaca.gov.sa/web/en-gb/airport/king-saud-bin-abdulaziz-al-baha-airport' target='_blank' className='text-[#0600FF]'> (ABT)
                                </a> - Al Baha
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/wadi-al-dawasir-airport' target='_blank' className='text-[#0600FF]'>
                                (WAE)</a> - Wadi Al Dawasir
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/bisha-airport' target='_blank' className='text-[#0600FF]'>
                                (BHH)</a> - Bisha
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/nejran-airport' target='_blank' className='text-[#0600FF]'>
                                (EAM)</a> - Najran
                            </a>
                        </div>
                        <div className='pt-5 flex flex-row gap-2 px-5 items-center'>
                            <div className='bg-[#403F68] h-2 w-2 rounded-full'/>
                            <a className='text-sm'>
                                <a href='https://gaca.gov.sa/web/en-gb/airport/sharurah-airport' target='_blank' className='text-[#0600FF]'>
                                (SHW)</a> - Sharura
                            </a>
                        </div>
                    </div>
                </div>
                <div className='lg:flex bg-[#403F68] justify-between lg:mt-28 mt-20 rounded-md'>
                    <div className='max-w-screen-2xl lg:text-base text-sm lg:px-20 text-white px-5 py-10'>
                        <p>
                            For further information
                        </p>
                        <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                            Visit the General Authority of Civil Aviation website
                        </h1>
                        <a
                        href="https://gaca.gov.sa/web/en-gb/page/home" target='_blank'
                        className="
                        lg:text-base text-sm items-center bg-white rounded-full lg:w-44 w-40 border-[#403F68] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#0600FF] font-semibold tracking-wide"
                        >
                            Explore
                        </a>
                    </div>
                    <div>
                        <img className='lg:h-72' src='./plane_your_trip/transportation/Visit-the-General-Authority-of-Civil-Aviation-website.png' alt='images'/>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

