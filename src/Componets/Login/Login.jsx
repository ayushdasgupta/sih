import React from 'react'
import Navbar1 from '../Navbar 1/Navbar1'
import Footer from '../Footer/Footer'
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
    const handleStu=()=>{
        document.getElementById('student_container').style.display='block';
        document.getElementById('government_office_container').style.display='none';
        document.getElementById('institution_container').style.display='none';
        document.getElementById('organisation_container').style.display='none';
        document.querySelector(".fa-user-graduate").style.transform = 'scale(1.2)';
        document.querySelector(".fa-briefcase").style.transform = 'scale(1)';
        document.querySelector(".fa-building-columns").style.transform = 'scale(1)';
        document.querySelector(".fa-building").style.transform = 'scale(1)';
      }
      const handleOff=()=>{
        document.getElementById('student_container').style.display='none';
        document.getElementById('government_office_container').style.display='block';
        document.getElementById('institution_container').style.display='none';
        document.getElementById('organisation_container').style.display='none';
        document.querySelector(".fa-user-graduate").style.transform = 'scale(1)';
        document.querySelector(".fa-briefcase").style.transform = 'scale(1.2)';
        document.querySelector(".fa-building-columns").style.transform = 'scale(1)';
        document.querySelector(".fa-building").style.transform = 'scale(1)';
      }
      const handleInst=()=>{
        document.getElementById('student_container').style.display='none';
        document.getElementById('government_office_container').style.display='none';
        document.getElementById('institution_container').style.display='block';
        document.getElementById('organisation_container').style.display='none';
        document.querySelector(".fa-user-graduate").style.transform = 'scale(1)';
        document.querySelector(".fa-briefcase").style.transform = 'scale(1)';
        document.querySelector(".fa-building-columns").style.transform = 'scale(1.2)';
        document.querySelector(".fa-building").style.transform = 'scale(1)';
      }
      const handleOrg=()=>{
        document.getElementById('student_container').style.display='none';
        document.getElementById('government_office_container').style.display='none';
        document.getElementById('institution_container').style.display='none';
        document.getElementById('organisation_container').style.display='block';
        document.querySelector(".fa-user-graduate").style.transform = 'scale(1)';
        document.querySelector(".fa-briefcase").style.transform = 'scale(1)';
        document.querySelector(".fa-building-columns").style.transform = 'scale(1)';
        document.querySelector(".fa-building").style.transform = 'scale(1.2)';
      }
    return (
        <>
            <Navbar1 />
            <div id="main">
                <div id="user_type1">
                    <div id="selection_section1">
                        <h2>Login</h2>
                        <h1>Select User Type</h1>
                    </div>
                    <div id="selection_icons1">
                        <div className="selection_icons1">
                            <i onClick={handleStu} id="icons1" className="fa-solid fa-user-graduate" />
                            <p>Students</p>
                        </div>
                        <div className="selection_icons1">
                            <i onClick={handleOff} id="icons1" className="fa-solid fa-briefcase" />
                            <p>Government Office</p>
                        </div>
                        <div className="selection_icons1">
                            <i onClick={handleInst} id="icons1" className="fa-solid fa-building-columns" />
                            <p>Institution</p>
                        </div>
                        <div className="selection_icons1">
                            <i onClick={handleOrg} id="icons1" className="fa-solid fa-building" />
                            <p>Organisation</p>
                        </div>
                    </div>
                </div>
                <div id="login">
                    <div id="student_container" className="container_login">
                        <form className="form1" action="">
                            <div className="input_box1">
                                <input name="email" type="email" placeholder="Email" required="" />
                            </div>
                            <div className="input_box1">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required=""
                                />
                            </div>
                            <a href="#">Forgot Password?</a>
                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div>
                                <p>
                                    Don't have an account?
                                    <Link to="/signin">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div id="government_office_container" className="container_login">
                        <form className="form" action="">
                            <div className="input_box1">
                                <input name="email" type="text" placeholder="Email" required="" />
                            </div>
                            <div className="input_box1">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required=""
                                />
                            </div>
                            <a href="#">Forgot Password?</a>
                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div>
                                <p>
                                    Don't have an account?
                                    <Link to="/signin">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div id="institution_container" className="container_login">
                        <form className="form" action="">
                            <div className="input_box1">
                                <input name="email" type="text" placeholder="Email" required="" />
                            </div>
                            <div className="input_box1">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required=""
                                />
                            </div>
                            <a href="#">Forgot Password?</a>
                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div>
                                <p>
                                    Don't have an account?
                                    <Link to="/signin">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div id="organisation_container" className="container_login">
                        <form className="form" action="">
                            <div className="input_box1">
                                <input name="email" type="text" placeholder="Email" required="" />
                            </div>
                            <div className="input_box1">
                                <input
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required=""
                                />
                            </div>
                            <a href="#">Forgot Password?</a>
                            <button type="submit" className="btn">
                                Login
                            </button>
                            <div>
                                <p>
                                    Don't have an account?
                                    <Link to="/signin">Sign in</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Login