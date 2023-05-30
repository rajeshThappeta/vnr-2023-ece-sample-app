import React from 'react'
import Header from '../components/header/Header';
import Footer from '../components/footer/Footer'
import { Outlet } from 'react-router-dom';
import bgImg from '../images/bg-1.jpeg'

function RootLayout() {




  return (
    <div>
      
        <Header />
       
            <div className='main '>
                <Outlet />
            </div>
        <Footer />
    </div>
  )
}

export default RootLayout