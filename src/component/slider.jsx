import React from 'react'
import Desktop from './step/Desktopslider'
import Mobile from './step/Mobileslider'

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
