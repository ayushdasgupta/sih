import React from 'react'
import Footer from '../Footer/Footer'
import Navbar1 from '../Navbar 1/Navbar1'
import './student_dahboard.css';

const Student_dahboard = () => {
    // const handleFile=(event)=>{
    //     console.log(`Selected file - ${event.target.files[0].name}`);
    // }
    return (
       <>
        <Navbar1/>
        <div id="main">
            <div className="container">
                <form id="Upload">
                    <input type="file" id="selectedFile" style={{ display: "none" }} />
                    <input
                        type="button"
                        id="input-file"
                        defaultValue="+ Upload Certificate"
                        // onChange={handleFile}
                    />
                    <input type="submit" id="submit" />
                </form>
                <div id="innerbox">
                    <div className="box">
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                    </div>
                    <div className="box">
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                        <iframe
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHZAq08u4YaR0Jsu2CgeptdxC74y-9QEeFYEAb6YHP&s"
                            frameBorder={0}
                        />
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
       </>
    )
}

export default Student_dahboard