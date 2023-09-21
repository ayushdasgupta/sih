import React from 'react'
import './navbar.css';
import logo from './imgs/Govt_of_gujrat_ logo.png'
import { Link } from 'react-router-dom';

const Navbar1 = () => {
  const handleMen=()=>{
        document.querySelector('.fa-bars').style.display='none';
        document.querySelector('.list').style.display='block';
        // document.querySelector('img').style.display='none';
        document.querySelector('.fa-x').style.display='block';
  }
  const handleCro=()=>{
        document.querySelector('.fa-bars').style.display='block';
        document.querySelector('.list').style.display='none';
        // document.querySelector('img').style.display='none';
        document.querySelector('.fa-x').style.display='none';
  }
  return (
    <nav className="navbar">
    <div className="logo">
        <Link to='/'><img src={logo} alt="logo"/></Link>
    </div>
    <div className="left">
        <ul className="list">
            <li><Link to="/signin">Sign in</Link></li>
            <li><Link to="/login">Login</Link></li>
        </ul>
    </div>
      <i onClick={handleMen}class="fa-solid fa-bars"></i>
      <i onClick={handleCro} class="fa-solid fa-x"></i>
</nav>
  )
}

export default Navbar1
