import React from 'react'

export default function Exploring() {
    return (
        <>
            <div className='justify-center mx-auto max-w-screen-2xl md:px-10 px-5 items-center py-10'>
                <h1 className='md:text-4xl text-2xl font-semibold'>
                    Keep exploring
                </h1>
                <div className='flex md:grid-cols-4 overflow-x-auto mx-auto gap-5 md:gap-10 py-10'>
                    <a href='/road-trip-essentials' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 py-4 w-72 lg:w-[22rem]'>
                            <img className='w-96' src='./0028.jpg' alt='images'/>
                            <div className='pt-5 px-5'>
                                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                    Road trip guide
                                </h1>
                                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                    Learn More
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='/about-saudi' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 py-4 w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./0024.jpg' alt='images'/>
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
                        <div className='px-3 py-4 w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./0027.jpg' alt='images'/>
                        <div className='pt-5 px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Travel Safety Advice
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                </div>

            </div>
        </>
    )
}
