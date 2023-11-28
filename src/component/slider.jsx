import React, { useState, useEffect } from 'react';

const slides = [
    {
        eachSlide: 'url(./trewrdf.jpg)',
        heading: 'Welcome to the Saudi eVisa Portal',
        text:'Planning a Trip to Saudi Arabia? Discover the Visa Application Process in a Few Simple Steps...'
    },

    {
        eachSlide: 'url(./pexels-shahbaz-hussain-4744570.jpg)',
        heading: 'Al-Makkah',
        text: 'The Grand Mosque receives great care, using the finest materials and innovative technologies to serve pilgrims, whose number exceeds millions per year. Over 24 hours, every day of the year, tranquility dominates the souls of visitors to the Grand Mosque in Makkah, and preachers and worshipers are found in every corner of it, as they visit the place with sincere hope and overwhelming longing.'
    },

    {
        eachSlide: 'url(./masjid-al-juranah-in-makkah_crop-1160x650.webp)',
        heading: "Masjid Al-Ji'ranah",
        text:"Mosques in Makkah receive special attention, especially those associated with the life of the Prophet Mohammad (PBUH). Among these mosques is Masjid Al- Ji'ranah, located in the east of Makkah. It is characterized by modern architecture that preserves heritage details, which take you back to the time of its construction. The area of Al Ji'ranah is 430 square meters and can accommodate about 1,000 people. Muslims can visit Al- Ji'ranah to pray at any time."
    },

    {
        eachSlide: 'url(./dsadsad.jpg)',
        heading: 'Tabuk',
        text:"Tabuk station is one of the main stations of the Hijaz Railway, and it is the third largest station in the area after the stations of Madinah and Al-Ula. It contains 13 buildings aimed at serving the pilgrims going to Makkah, and seeks to provide means of comfort for them in several facilities, such as: the hospital, rest areas, and quarantine health. The station has turned into a museum that tells about ancient times and a unique Islamic achievement."
    },
];

const Dashboard = () => {
    const [active, setActive] = useState(0);
    const max = slides.length;

    const intervalBetweenSlides = () => setActive(active === max - 1 ? 0 : active + 1)

    useEffect(() => {
        const interval = setInterval(() => intervalBetweenSlides(), 8000);
        return () => clearInterval(interval);
    }, [active]);

    const nextOne = () => active < max - 1 && setActive(active + 1)

    const prevOne = () => active > 0 && setActive(active - 1)

    const isActive = value => active === value && 'active'

    const setSliderStyles = () => {
        const transition = active * - 100;
        
        return {
          width: ( slides.length * 100 ) + 'vw',
          transform: 'translateX(' + transition + 'vw)'
        }
    }

    const renderSlides = () => slides.map((item, index) => (
        <div 
            className='each-slide items-center' 
            key={ index } 
            style={{ backgroundImage: item.eachSlide }}>
            <div data-aos="fade-right" data-aos-delay="300" data-aos-duration="400"  data-aos-easing="ease-in-sine" 
            className='text-white bg-black bg-opacity-50 lg:mx-44 lg:mt-80 md:py-8 md:pt-16 mt-32 items-center py-5 mx-10 px-5 justify-center text-center relative'>
                <h1 className="slide-heading md:text-6xl text-2xl text-white md:max-w-2xl mx-auto justify-center font-displace">{item.heading}</h1>
                <p className="slide-text md:text-lg text-sm py-5 max-w-screen-md mx-auto justify-center ">{item.text}</p>
            </div>
        </div> 
    ));


    const renderDots = () => slides.map((slide, index) => (
        <li 
            className={ isActive(index) + ' dots' }   
            key={ index }>
                <button onClick={ () => setActive(index) }>
                <span style={{ color: isActive(index) ? '#78006E' : '#FFFFFF' }}>{/* Green for active, white for inactive */} &#9679;</span>
                </button>
        </li> 
    ));

    const renderArrows = () => (
        <React.Fragment>
            <button 
                type='button'
                className='arrows prev md:px-5' 
                onClick={ () => prevOne() } >
                <svg fill='#78006E' width='50' height='50' viewBox='0 0 24 24'>
                    <path d='M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
            <button 
                type='button'
                className='arrows next md:px-5' 
                onClick={ () => nextOne() } > 
                <svg fill='#78006E' height='50' viewBox='0 0 24 24' width='50'>
                    <path d='M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z'/>
                    <path d='M0 0h24v24H0z' fill='none'/>
                </svg>
            </button>
        </React.Fragment>
    )

    return (
        <section className='slider'>
            <div 
                className='wrapper' 
                style={ setSliderStyles() }>
                { renderSlides() }
            </div>
            { renderArrows() }
            <ul className='dots-container'>
                { renderDots() }
            </ul>
        </section>
    );
};

  export default Dashboard;