import * as React from 'react';

export default function About() {

  return (
    <>
    <div className='mx-auto justify-center items-center md:px-10 px-5 xl:py-5 md:mt-72'>
        <div className='max-w-screen-2xl justify-center mx-auto'>
            <div className='items-center justify-center'>
                <div className='justify-center'>
                    <h1 className='py-5 lg:text-5xl text-3xl text-[#78006E] font-displace'>
                        Routes, rental cars and local tips
                    </h1>
                    <p className='text-[#3a3a3a] font-semibold md:text-lg'>
                        Here's everything you need to know for an unforgettable road trip adventure
                    </p>
                    <br/>
                    <div className='md:max-w-screen-lg justify-center'>
                        <a className='pt-5 md:max-w-screen-xl md:text-base text-sm'>
                            With its vast ochre deserts, rugged green mountains and glorious coastline, Saudi Arabia is a country made for road tripping. Not only does it offer a kaleidoscope of landscapes and experiences, but opportunities abound to get out and experience them. Spend your days soaking up scenery, history and vibrant cosmopolitanism, as you weave in and out of cities, explore ancient villages or embark on outdoor adventures. Stop to bask on sandy beaches, browse traditional souqs, or feast your way through delicious local dishes as you set your own pace. There’s a route for everyone, whether family travelers, outdoor explorers, history buffs or cultural connoisseurs. Arabia has an allure that few destinations can match. But before you throw your luggage in the trunk and hit the open road, you’ll want to be prepared. Here, we offer a practical guide to the tools and tips you need for an unforgettable road trip, no matter the route you pick.
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className='max-w-screen-2xl justify-center mx-auto'>
            <h1 className='font-displace md:text-4xl text-2xl md:py-10 py-5 pt-10 md:pt-0'>
                Getting started
            </h1>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border'>
                <div className='w-full'>
                    <img className='' src='./map.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                        Map your route
                    </h1>
                    <p className='pt-5 md:text-base text-sm'>
                        Top of the list is choosing your trip. Whether you’re planning to head south down the Red Sea coast or to cruise between cities, you’ll want a rough schedule to your days. Plot your route around where you’ll sleep each night and any anchor sights – think famous landmarks or must-see spots – and leave the rest of your trip free for spur-of-the-moment detours. If something catches your eye, veer off your intinerary and explore it. Some of the best adventures are unplanned.
                    </p>
                </div>
            </div>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border mt-20'>
                <div className='w-full lg:hidden block'>
                    <img className='' src='./Renting.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                        Rent your wheels
                    </h1>
                    <p className='pt-5 md:text-base text-sm'>
                        Renting a car is the easiest way to get on the road. Saudi has a range of car hire companies and the process of renting is straightforward. Drivers need to be 25 or over, and to have held their licence for more than a year. Saudi residents will need to bring along a valid driver’s licence and ID, and tourists will also need their passport. Rules vary with foreign renters, so check ahead with the hire firm to confirm the paperwork you’ll need. If you plan to drive in shifts, make sure the insurance policy covers multiple drivers, and consider a 4WD if offroad jaunts are on the cards.
                    </p>
                </div>
                <div className='w-full hidden lg:block'>
                    <img className='' src='./Renting.jpg' alt='images'/>
                </div>
            </div>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border mt-20'>
                <div className='w-full'>
                    <img className='' src='./comfortable.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                        Car health 101
                    </h1>
                    <p className='pt-5 md:text-base text-sm'>
                        Comfortable cruising needs a well-serviced car. If you plan to take your own ride, ensure the battery, brakes, lights and engine are in good working order, and check your oil and tire pressure (not forgetting the spare). An in-car emergency kit is also worth considering: spare keys, jump cables and a battery charger could mean the difference between a short stop, and a derailed day.
                    </p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
