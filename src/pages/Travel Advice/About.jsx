import * as React from 'react';

export default function About() {

  return (
    <>
    <div className='mx-auto justify-center items-center md:px-10 px-5 xl:py-5 md:mt-72'>
        <div className='max-w-screen-xl justify-center mx-auto'>
            <h1 className='font-displace md:text-4xl text-2xl md:py-10 py-5'>
                Travel Advice
            </h1>
            <p className='md:pt-5 md:text-base text-sm'>
                The traveler within us is always planning that next trip. Across Saudi, hotels, restaurants and tourist attractions are open and ready to be enjoyed. Of course, the best way to make the most of any trip is to stay up to speed on the latest health and travel advice, and to take practical precautions. So, whether you’re planning a luxury getaway or a cross-country road trip, here are some tips to make your Saudi adventure worry- and stress-free.
            </p>
            <div className='w-full md:py-20 py-5'>
                <img className='' src='./thetraveler.jpg' alt='images'/>
            </div>
            <h1 className='md:text-4xl text-2xl font-semibold'>
                Is Saudi Safe?
            </h1>
            <p className='pt-5 md:text-base text-sm'>
                Yes, Saudi is safe for male and female tourists. (For more information pertaining to women in Saudi, click here.) Saudi has opened its doors wide to receive tourists from countries all over the world. In fact, in light of the new openness, the Saudia Group of airlines recently announced flights to 25 international destinations. Of course, as with travel to any other country in the world, be respectful of local laws and culture, including specific customs around Ramadan, and be mindful of your surroundings. Also be sure to consult travel advisories before your trip. 
            </p>
            <br/>
            <br/>
            <h1 className='md:text-4xl text-2xl font-semibold'>
                Stay Informed
            </h1>
            <p className='pt-5 md:text-base text-sm'>
                Following government guidelines can provide the latest advice about travel to and within Saudi. The Saudi Ministry of Health has a dedicated mobile app, Mawid, which offers current healthcare recommendations, as well as a hotline available at 937. You can also visit the ministry’s website for the most recent news on travel policies.
            </p>
            <br/>
            <br/>
            <h1 className='md:text-4xl text-2xl font-semibold'>
                What to Do in Case of Emergency When You’re in Saudi
            </h1>
            <p className='pt-5 md:text-base text-sm'>
                In case of an emergency, dial 999 for the police. For an ambulance, dial 997. Looking for something else? Here are some other useful contacts, including the Highway Patrol.
            </p>
        </div>
            <div className='max-w-screen-2xl mx-auto justify-center'>
                <h1 className='md:text-4xl text-2xl pt-32 font-semibold'>
                    Keep exploring
                </h1>
                <div className='flex md:grid-cols-4 overflow-x-auto mx-auto gap-5 md:gap-10 items-center py-10'>
                    <a href='./' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                            <img className='w-96' src='./2.webp' alt='images'/>
                            <div className='pt-5 md:text-base text-sm px-5'>
                                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                 About Saudi
                                </h1>
                                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                                </p>
                            </div>
                        </div>
                    </a>
                    <a href='./' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./3.jpg' alt='images'/>
                        <div className='pt-5 md:text-base text-sm px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Useful Contacts
                            </h1>
                            <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                                Learn More
                            </p>
                        </div>
                        </div>
                    </a>
                    <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
                        <div className='px-3 lg:h-96 h-80 py-4 items-center w-72 lg:w-[22rem]'>
                        <img className='w-96' src='./4.png' alt='images'/>
                        <div className='pt-5 md:text-base text-sm px-5'>
                            <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                                Safety Travel Tips
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
    </>
  )
}