import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from '../../pages/Travel Advice/Dashboard'
import About from '../../pages/Travel Advice/About'
import Faqs from '../../pages/Travel Advice/Faqs'
import Footer from '../../component/footer'

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