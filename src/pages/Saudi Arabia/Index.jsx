import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from '../../pages/Saudi Arabia/Dashborad'
import About from '../../pages/Saudi Arabia/About'
import Climate from './Climate'
import Payments from './Payments'
import Footer from '../../component/footer'

export default function Index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Climate/>
    <Payments/>
    <Footer/>
    </>
  )
}
