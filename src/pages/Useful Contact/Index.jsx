import React from 'react'
import Navbar from '../../component/Header/navbar'
import Dashboard from '../../pages/Useful Contact/Dashboard'
import About from '../../pages/Useful Contact/About'
import Footer from '../../component/footer'

export default function Index() {
  return (
    <>
    <Navbar/>
    <Dashboard/>
    <About/>
    <Footer/>
    </>
  )
}