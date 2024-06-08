import React from "react";
import './home.css'
import  Nav  from "./nav";
import  Footer  from "./footer";

export default function Home() {
    return (
        <div className="main">
            <Nav/>
            <div className="center">
                <video className="intro" autoPlay loop >
                    <source src="https://d2rndhzlwwne8a.cloudfront.net/intro.mp4" type="video/mp4" />
                    
                </video>
                <h1  className="welcome">Welcome to the real world</h1>
                
            </div>
            <Footer/>
        
        </div>
    )
}