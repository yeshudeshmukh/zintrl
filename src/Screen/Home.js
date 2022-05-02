import React from "react";
import Navbar from "../Component/Navbar";
import LeftNavbar from "../Component/LeftNavbar";
import RightNavbar from "../Component/RightNavbar";
import Card from "../Component/Card";
 
const Home =()=>{
    return(
        <div>
            <Navbar/>
            <div className="main-grid">
                <div>
                    <RightNavbar/>
                </div>
                <div>
                    <Card/>
                </div>
                <div>
                    <LeftNavbar/>
                </div>
            </div>
        </div>
    )
}
export default Home;