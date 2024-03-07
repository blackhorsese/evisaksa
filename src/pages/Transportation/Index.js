import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from './Dashborad'
import About from './About'
import Climate from './Climate'
import Airport from './Airport'
import Exploring from './Exploring'
import Train from './Train'
import Footer from "../../pages/Home Page/footer";

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
