import React from 'react'
import './govt_office_generate.css'
import Navbar1 from '../Navbar 1/Navbar1';
import Footer from '../Footer/Footer';

const Govt_office_generate = () => {
    return (
        <><Navbar1 />
            <div className="main">
                <div className="container">
                    <div className="innerbox">
                        <form action="" id="Gov_form">
                            <label>Full Name</label>
                            <input
                                type="text"
                                id="Fname"
                                className="inputbox"
                                placeholder="Enter Full Name"
                                name='holder_name'
                            />
                            <br />
                            <br />
                            <label>Govt. Office Name</label>
                            <input
                                type="text"
                                id="GOname"
                                className="inputbox"
                                placeholder="Enter Govt. Office Name"
                                name='office_name'
                            />
                            <br />
                            <br />
                            <label>Catagory</label>
                            <input
                                type="text"
                                id="catagory"
                                className="inputbox"
                                placeholder="Enter Catagory"
                                name='catagory'
                            />
                            <br />
                            <br />
                            <label>Office ID</label>
                            <input
                                type="text"
                                id="OFcode"
                                className="inputbox"
                                placeholder="Enter Office code"
                                name='office_id'
                            />
                            <br />
                            <br />
                            <label>Chief Officer Name and Digital Signature</label>
                            <input
                                type="text"
                                id="COname"
                                className="inputbox"
                                placeholder="Enter Chief Officer Name"
                                name='cho_name'
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

export default Govt_office_generate