import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from './Dashboard'
import About from './About'
import Faqs from './Faqs'
import Footer from "../../pages/Home Page/footer";

export default function Index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Faqs/>
    <Footer/>
    </>
  )
}