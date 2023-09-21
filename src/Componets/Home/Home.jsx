import React from 'react'
import Navbar1 from '../Navbar 1/Navbar1';
import './home.css'
import Footer from '../Footer/Footer';
const Home = () => {
  return (
    <>
    <Navbar1/>
    <div className="container_home">
        <h1 className='h1'>A system for all certification generation and validation system for Government Offices, Institutions and Organisation.<br/><br/>Ministry of Gujarat</h1>
    </div>
    <Footer/>
    </>
  )
}

export default Home;
