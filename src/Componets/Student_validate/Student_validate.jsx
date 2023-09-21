import React from 'react'
import Navbar1 from '../Navbar 1/Navbar1';
import Footer from '../Footer/Footer';
import './student_validate.css'
const Student_validate = () => {
  return (
    <>
    <Navbar1/>
    <div id="container">
  <div id="sub_container">
    <div className="sub_sub_container">
      <form action="" id="form_main">
        <div className="up_document">
          <label htmlFor="up_d_file">
            <h1>Upload Document:</h1>
          </label>
          <input type="file" id="up_d_file" />
        </div>
        <br />
        <br />
        <div className="u_id">
          <label htmlFor="text">
            <h1>Enter Uniqe ID:</h1>
          </label>
          <input
            type="text"
            id="text"
            className="textc"
            placeholder="Enter valid ID code..."
          />
        </div>
        <br />
        <br />
        <div className="or">
          <h1>-or-</h1>
        </div>
        <div className="qr_code">
          <input type="hidden" name="MAX_FILE_SIZE" defaultValue={1048576} />
          <h1>Upload QR code file: </h1>
          <input name="file" type="file" id="qr_file" />
          {/* <input type="submt" value="Sumit " id="val_certificate" />  */}
          <button className="val_certificate">
            <h2>Upload</h2>
          </button>
        </div>
      </form>
    </div>
  </div>
</div>

    <Footer/>
    </>

  )
}

export default Student_validate