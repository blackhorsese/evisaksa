import * as React from 'react';

export default function About() {

  return (
    <>
    <div className='mx-auto justify-center items-center md:px-10 px-5 xl:py-5 md:mt-72'>
        <div className='max-w-screen-2xl justify-center mx-auto'>
            <h1 className='font-displace md:text-4xl text-2xl md:py-10 py-5'>
                Traditions of Saudi Arabia
            </h1>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border'>
                <div className='w-full'>
                    <img className='' src='./0013.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                        Language
                    </h1>
                    <p className='pt-5 md:text-base text-sm'>
                        Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions. 
                        English serves as an informal second language in the Kingdom and is spoken by a large section of its society. 
                        All road signs are bilingual, showing information in both Arabic and English. 
                    </p>
                </div>
            </div>
            <div className='lg:flex items-center justify-between rounded-md md:gap-10 md:border mt-20'>
                <div className='w-full lg:hidden block'>
                    <img className='' src='./0014.jpg' alt='images'/>
                </div>
                <div className='md:px-10 md:max-w-screen-md'>
                    <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
                        Culture
                    </h1>
                    <p className='pt-5 md:text-base text-sm'>
                        Saudi Arabia’s rich heritage and traditions have been shaped by its position as a historic trade hub and the birthplace of Islam. In recent years, 
                        the Kingdom has undergone a significant cultural transformation, evolving centuy-old customs to fit the contemporary world we live in today.
                    </p>
                </div>
                <div className='w-full hidden lg:block'>
                    <img className='' src='./0014.jpg' alt='images'/>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
