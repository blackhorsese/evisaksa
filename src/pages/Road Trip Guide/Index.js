import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from './Dashborad'
import About from './About'
import Payments from './Payments'
import Footer from "../../pages/Home Page/footer";

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
