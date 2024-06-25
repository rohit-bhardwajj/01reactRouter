import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header/>
    <Outlet/>  {/* moto is to keep header & footer unchanged and change only other parts */}
    <Footer/> {/* as in outlet we can change things*/}
    </>
  )
}

export default Layout