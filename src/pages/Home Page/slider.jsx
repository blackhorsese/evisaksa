import React from 'react'
import Desktop from './Desktopslider'
import Mobile from './Mobileslider'

export default function slider() {
  return (
    <>
    <div className='hidden lg:block xl:block md:block'>
        <Desktop/>
    </div>
    <div className='block md:hidden lg:hidden xl:hidden'>
        <Mobile/>
    </div>
    </>
  )
}
