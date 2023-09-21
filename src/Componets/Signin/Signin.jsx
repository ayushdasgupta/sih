import React, { useState } from 'react'
import './signin.css'
import Navbar1 from '../Navbar 1/Navbar1'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

const Signin = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone_no, setphone_no] = useState("");
  const [student_id, setstudent_id] = useState("");
  const [institution_name, setinstitution_name] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpassword, setconfirmpassword] = useState("");

  const [office_name, setoffice_name] = useState("");
  const [office_id, setoffice_id] = useState("");
  const [office_address, setoffice_address] = useState("");
  
  const [intitution_name, setintitution_name] = useState("");
  const [intitution_code, setintitution_code] = useState("");
  const [intitution_address, setintitution_address] = useState("");
  
  const [organisation_name, setorganisation_name] = useState("");
  const [organisation_id, setorganisation_id] = useState("");
  const [organisation_address, setorganisation_address] = useState("");
  
  const dispatch=useDispatch();

  const {loading,error}=useSelector((state)=>state.student)
  const handleSub=(e)=>{
    e.preventDefault();
    dispatch(studentUser(name, email, phone_no,student_id,intitution_name, password));
  }

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
    <Navbar1/>
    <div id="main">
    <div id="user_type">
      <div id="selection_section1">
        <h2>Sign-in</h2>
        <h1>Select User Type</h1>
      </div>
      <div id="selection_icons">
        <div className="selection_icons">
          <i onClick={handleStu} className="fa-solid fa-user-graduate" />
          <p>Students</p>
        </div>
        <div className="selection_icons">
          <i onClick={handleOff} className="fa-solid fa-briefcase" />
          <p>Government Office</p>
        </div>
        <div className="selection_icons">
          <i onClick={handleInst} className="fa-solid fa-building-columns" />
          <p>Institution</p>
        </div>
        <div className="selection_icons">
          <i onClick={handleOrg} className="fa-solid fa-building" />
          <p>Organisation</p>
        </div>
      </div>
    </div>
    <div id="sign_in">
      <div id="student_container" onSubmit={handleSub} className="container_signin">
        <form className="form" action="">
          <div className="info">
            <div className="input_box">
              <input name="name" type="text" placeholder="Name" required="" />
            </div>
            <div className="input_box">
              <input name="email" type="email" placeholder="Email" required="" />
            </div>
            <div className="input_box">
              <input
                name="phone_no"
                type="number"
                placeholder="Phone Number"
                required=""
              />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="stuedent_id"
                type="number"
                placeholder="Student Id"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="institution_name"
                type="text"
                placeholder="Institution Name"
                required=""
              />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password "
                required=""
              />
            </div>
          </div>
          <button disabled={loading} type="submit" className="btn">
            Sign-in
          </button>
          <div>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div id="government_office_container" className="container_signin">
        <form className="form" action="">
          <div className="info">
            <div className="input_box">
              <input
                name="office_name"
                type="text"
                placeholder="Office Name"
                required=""
              />
            </div>
            <div className="input_box">
              <input name="email" type="email" placeholder="Email" required="" />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="office_id"
                type="number"
                placeholder="Office Id/Number"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="phone_no"
                type="number"
                placeholder="Phone Number"
                required=""
              />
            </div>
          </div>
          <div className="address_field">
            <div className="input_box">
              <input
                name="office_address"
                type="text"
                placeholder="Office Address"
                required=""
              />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password "
                required=""
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Sign-in
          </button>
          <div>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div id="institution_container" className="container_signin">
        <form className="form" action="">
          <div className="info">
            <div className="input_box">
              <input
                name="institution_name"
                type="text"
                placeholder="Institution Name"
                required=""
              />
            </div>
            <div className="input_box">
              <input name="email" type="email" placeholder="Email" required="" />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="institution_code"
                type="number"
                placeholder="Institution Code"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="phone_no"
                type="number"
                placeholder="Phone Number"
                required=""
              />
            </div>
          </div>
          <div className="address_field">
            <div className="input_box">
              <input
                name="institution_address"
                type="text"
                placeholder="Institution Address"
                required=""
              />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password "
                required=""
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Sign-in
          </button>
          <div>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
      <div id="organisation_container" className="container_signin">
        <form className="form" action="">
          <div className="info">
            <div className="input_box">
              <input
                name="organisation_name"
                type="text"
                placeholder="Organisation Name"
                required=""
              />
            </div>
            <div className="input_box">
              <input name="email" type="email" placeholder="Email" required="" />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="organisation_id"
                type="number"
                placeholder="Organisation Id"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="phone_no"
                type="number"
                placeholder="Phone Number"
                required=""
              />
            </div>
          </div>
          <div className="address_field">
            <div className="input_box">
              <input
                name="organisation_address"
                type="text"
                placeholder="Organisation Address"
                required=""
              />
            </div>
          </div>
          <div className="info">
            <div className="input_box">
              <input
                name="password"
                type="password"
                placeholder="Password"
                required=""
              />
            </div>
            <div className="input_box">
              <input
                name="confirm_password"
                type="password"
                placeholder="Confirm Password "
                required=""
              />
            </div>
          </div>
          <button type="submit" className="btn">
            Sign-in
          </button>
          <div>
            <p>
              Already have an account?
              <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  </div>
   <Footer/>
   </>
  )
}

export default Signin