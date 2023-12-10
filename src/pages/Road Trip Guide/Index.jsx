import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from '../../pages/Road Trip Guide/Dashborad'
import About from '../../pages/Road Trip Guide/About'
import Payments from './Payments'
import Footer from '../../component/footer'

export default function Index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Payments/>
    <Footer/>
    </>
  )
}
