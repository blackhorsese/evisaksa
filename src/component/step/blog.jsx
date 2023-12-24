// import React from 'react'
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";

// function Blog() {
//     const settings = {
//         dots: true,
//         infinite: true,
//         autoplay: true,
//         autoplaySpeed: 2000,
//         slidesToShow: 4,
//         slidesToScroll: 1,
//         pauseOnHover: true,

//         cssEase: "linear",
//         responsive: [
//           {
//             breakpoint: 1024,
//             settings: {
//               slidesToShow: 3,
//               slidesToScroll: 3,
//               infinite: true,
//               dots: true
//             }
//           },
//           {
//             breakpoint: 600,
//             settings: {
//               slidesToShow: 2,
//               slidesToScroll: 2,
//               initialSlide: 2
//             }
//           },
//           {
//             breakpoint: 480,
//             settings: {
//               slidesToShow: 1,
//               slidesToScroll: 1,
//               dots: true,
//             }
//           }
//         ]
//       };
//   return (
//     <>
//     <div className='mx-0 px-5 items-center md:py-28'>
//       <div data-aos="zoom-in-up" data-aos-delay="300" className='max-w-screen-2xl items-center mx-auto overflow-hidden'>
//         <h1 className='md:text-4xl text-3xl text-[#78006E]'>Know Before You Go</h1>
//         <Slider {...settings} className='flex grid-cols-4 items-center pt-5 text-[#000]'>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#78006E] hover:text-[#78006E]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//             className='py-5 justify-center items-center px-5 bg-[#f1f1f1] shadow-2xl'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <br/>
//             <div className='border-y py-3 mt-5 font-semibold mx-2 border-opacity-20 border-[#78006E] hover:text-[#78006E]'>
//               <a href=''>
//                 Learn More
//               </a>
//             </div>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//           <a href='/' 
//           className='py-5 justify-center items-center px-3'>
//             <img src='./saudi-arabian-architecture-mobile.jpg'/>
//             <h1 className='text-base font-semibold pt-5'>
//               About Saudi
//             </h1>
//             <p className='md:w-80 pt-3 text-sm text-[#000]'>
//               Arabic is the official language of Saudi Arabia and the primary language used in all dealings and public transactions.
//             </p>
//           </a>
//         </Slider>
//       </div>
//     </div>
//     </>
//   )
// }

// export default Blog;


import React from 'react'

function blog() {
  return (
    <>
    <div className='md:px-10 items-center mx-auto justify-center px-5 py-20'>
      <div className='max-w-screen-2xl mx-auto justify-center'>
        <h1 className='md:py-10 py-4 lg:text-4xl text-2xl font-displace'>
          Know Before You Go
        </h1>
        <div className='flex lg:grid-cols-4 pb-5 overflow-x-scroll xl:overflow-hidden mx-auto gap-5 md:gap-10 justify-between items-center'>
          <a href='/about-saudi' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
              <img className='w-96' src='./0024.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                  About Suadi
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/travel-safety-tips' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
              <img className='w-96' src='./0027.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                  Safety Travel Tips
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/useful-contacts' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
              <img className='w-96' src='./0025.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                  Useful Contacts
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
          <a href='/road-trip-essentials' className='justify-center hover:bg-[#f1f1f1] border-[#78006E] border-opacity-20 border rounded-xl shadow-xl'>
            <div className='px-3 py-4 items-center w-72 lg:w-[22rem]'>
              <img className='w-96' src='./0028.jpg' alt='images'/>
              <div className='pt-5 px-5'>
                <h1 className='font-semibold pb-5 lg:text-lg text-base'>
                  Road Trip Guide
                </h1>
                <p className='lg:text-base text-sm pt-3 border-t border-[#78006E] border-opacity-20 hover:text-[#78006E]'>
                  Learn More
                </p>
              </div>
            </div>
          </a>
        </div>
        <div className='lg:flex bg-[#78006E] items-center justify-between lg:mt-28 mt-20 rounded-md'>
          <div className='max-w-screen-2xl lg:text-base text-sm lg:px-20 text-white px-5 py-10'>
            <p>
              You're Almost There
            </p>
            <h1 className='lg:pt-5 pt-3 lg:text-2xl text-xl font-semibold'>
              Apply For Your eVisa Today
            </h1>
            <a
              href="/register"
              className="
              items-center lg:text-base text-sm bg-white rounded-full w-44 border-[#78006E] relative h-10 duration-200 mt-5 lg:px-8 md:px-4 px-4 flex flex-row text-[#78006E] font-semibold tracking-wide"
            >
              Apply Now
            </a>
          </div>
          <div>
            <img className='lg:h-72' src='./0029.jpg' alt='images'/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default blog