import React from 'react'
import Navbar1 from '../Navbar 1/Navbar1';
import Footer from '../Footer/Footer';
import './organisation_generate.css';

const Organisation_generate = () => {
    return (
        <>
            <Navbar1 />
            <div className="main">
                <div className="container">
                    <div className="innerbox">
                        <form action="" id="Org_form">
                            <label>Full Name</label>
                            <input
                                type="text"
                                id="Fname"
                                className="inputbox"
                                placeholder="Enter Full Name"
                            />
                            <br />
                            <br />
                            <label>Organization Name</label>
                            <input
                                type="text"
                                id="ORGname"
                                className="inputbox"
                                placeholder="Enter Organization Name"
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
                            <label>Organization Code</label>
                            <input
                                type="email"
                                id="ORGcode"
                                className="inputbox"
                                placeholder="Enter Organization code"
                            />
                            <br />
                            <br />
                            <label>CEO Name and Digital Signature</label>
                            <input
                                type="text"
                                id="CEOname"
                                className="inputbox"
                                placeholder="Enter CEO Name"
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

export default Organisation_generate