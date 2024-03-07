import React from 'react'

export default function Payments() {
  return (
    <>
        <div className='mx-auto justify-center items-center md:px-10 px-5 py-10'>
            <div className='max-w-screen-2xl justify-center mx-auto'>
                <h1 className='font-displace md:text-4xl text-2xl md:py-10 py-5'>
                    Currency & Payments
                </h1>
                <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border'>
                    <div className='w-full'>
                        <img className='' src='./travel_essential/about_saudi/exchange_and_transactions.png' alt='images'/>
                    </div>
                    <div className='md:px-10 md:max-w-screen-md'>
                        <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                            Exchange and transactions
                        </h1>
                        <p className='pt-5 md:text-base text-sm'>
                            Currency exchange and transactions are easy in Saudi Arabia. Saudi Arabia’s national currency is the Saudi riyal (ر.س SAR), which is subdivided into 100 halala.
                            You’ll receive notes in denominations of five riyals, ten riyals, 50 riyals, 100 riyals and 500 riyals; and coins in one riyal, two riyals, 50 halala, 25 halala, 10 halala, 5 halala and 1 halala.
                        </p>
                    </div>
                </div>
                <div className='md:flex gap-10 items-center mx-auto py-20'>
                    <div className='border border-opacity-20 rounded-md xl:pb-20 pb-5 max-w-md xl:h-80 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                            Currency Exchange
                        </h1>
                        <p className='py-5 px-5 md:text-base text-sm'>
                            All banks in the kingdom offer currency exchange services. Exchange bureaus are located at airports, some shopping centers and various other locations throughout the country. Credit card, such as Visa, MasterCard and American Express are accepted throughout the kingdom. ATMs are also widely available.
                        </p>
                    </div>
                    <div className='border border-opacity-20 rounded-md xl:pb-20 pb-5 max-w-md xl:h-80 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                            Send and receive money
                        </h1>
                        <p className='py-5 px-5 md:text-base text-sm'>
                            You can send or receive money in Saudi Arabia by transferring funds online or through a bank that offers fast money transfer services, all of which are subject to the rules and regulations of the Saudi Arabian Monetary Authority (SAMA).
                        </p>
                    </div>
                    <div className='border border-opacity-20 rounded-md xl:pb-20 pb-5 max-w-md xl:h-80 md:mt-0 mt-5'>
                        <h1 className='bg-[#403F68] text-white md:text-lg text-base font-semibold py-4 px-3'>
                            Taxes
                        </h1>
                        <p className='py-5 px-5 md:text-base text-sm'>
                            Saudi Arabia imposes an indirect tax of 15% (VAT) on all goods and services purchased and sold by enterprises. There are some exceptions.
                        </p>
                    </div>
                </div>
                <div className='lg:flex bg-[#403F68] items-center justify-between lg:mt-28 rounded-md'>
                    <div className='max-w-screen-2xl lg:text-base text-sm lg:px-20 text-white px-5 py-10'>
                        <p>
                            Violations and penalties
                        </p>
                        <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                            Rules of behaviour in KSA
                        </h1>
                        <a
                        href="/VIOLATIONSTOPUBLICDECENCYANDPENALTIES_EN.pdf"
                        className="
                        items-center lg:text-base text-sm bg-white rounded-full lg:w-44 w-40 border-[#403F68] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#403F68] font-semibold tracking-wide"
                        >
                            Download
                        </a>
                    </div>
                    <div>
                        <img className='lg:h-72' src='./travel_essential/about_saudi/rules_of_behaviour-in-ksa.png' alt='images'/>
                    </div>
                </div>
                <h1 className='md:text-4xl text-2xl pt-32 font-semibold'>
                    Keep exploring
                </h1>
                <div className='flex md:grid-cols-4 overflow-x-auto mx-auto gap-5 md:gap-10 items-center py-10'>
                    <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#403F68] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                            <img className='w-96' src='./0027.jpg' alt='images'/>
                            <div className='pt-5 md:text-base text-sm px-5'>
                                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                    Safety Travel Tips
                                </h1>
                                <p className='lg:text-base text-sm pt-3 border-t border-[#403F68] border-opacity-20 hover:text-[#403F68]'>
                                    Learn More
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='/useful-contacts' className='justify-center hover:bg-[#f1f1f1] border-[#403F68] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./0025.jpg' alt='images'/>
                        <div className='pt-5 md:text-base text-sm px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Useful Contacts
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#403F68] border-opacity-20 hover:text-[#403F68]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                    <a href='/road-trip-essentials' className='justify-center hover:bg-[#f1f1f1] border-[#403F68] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./0028.jpg' alt='images'/>
                        <div className='pt-5 md:text-base text-sm px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Road Trip Guide
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#403F68] border-opacity-20 hover:text-[#403F68]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </>
  )
}

