import React from 'react'
import Navbar1 from '../Navbar 1/Navbar1';
import Footer from '../Footer/Footer';
import './institute_generate.css'
const Institute_generate = () => {
    return (
        <>
        <Navbar1/>
            <div className="main">
                <div className="container">
                    <div className="innerbox">
                        <form action="" id="Ins_form">
                            <label>Full Name</label>
                            <input
                                type="text"
                                id="Fname"
                                className="inputbox"
                                placeholder="Enter Full Name"
                            />
                            <br />
                            <br />
                            <label>Institute Name</label>
                            <input
                                type="text"
                                id="INSname"
                                className="inputbox"
                                placeholder="Enter Institute Name"
                            />
                            <br />
                            <br />
                            <label>Catagory</label>
                            <input
                                type="text"
                                id="catagory"
                                className="inputbox"
                                placeholder="Enter Catagory"
                            />
                            <br />
                            <br />
                            <label>Institute Code</label>
                            <input
                                type="email"
                                id="INScode"
                                className="inputbox"
                                placeholder="Enter Institute code"
                            />
                            <br />
                            <br />
                            <label>Director Name and Digital Signature</label>
                            <input
                                type="text"
                                id="Dname"
                                className="inputbox"
                                placeholder="Enter Director Name"
                            />
                            <br />
                            <input type="file" accept="image/*" id="input-file" />
                            <br />
                            <br />
                            <input type="submit" id="submit" defaultValue="Submit" />
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Institute_generate