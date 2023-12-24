import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from '../../pages/Transportation/Dashborad'
import About from '../../pages/Transportation/About'
import Climate from './Climate'
import Airport from './Airport'
import Exploring from './Exploring'
import Train from './Train'
import Footer from '../../component/footer'

export default function Index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Airport/>
    <Climate/>
    <Train/>
    <Exploring/>
    <Footer/>
    </>
  )
}
