import React from "react";
import './projects.css'
import { Link } from "react-router-dom";
import node from "../assets/nodejs.png";
import express from "../assets/express.png";
import party1 from "../assets/party1.png";
import party2 from "../assets/party2.png";
import mongo from "../assets/Mongo.png";
import cloud from "../assets/cloud.png";
import pro1 from "../assets/pro1.png";
import pro0 from "../assets/pro0.png";
import pro2 from "../assets/pro2.png";
import reactjs from "../assets/reactjs.png";
import tailwind from "../assets/tailwind.png";
import gsap from "../assets/gsap.png";
import framer from "../assets/framer.png";
import ochi1 from "../assets/ochi1.png";
import ochi2 from "../assets/ochi2.png";
import Nav from "./nav";
import Htmllogo from "../assets/HTML5.png";
import Csslogo from "../assets/csslogo.png";
import jslogo from "../assets/jslogo.png";
import bootstrap from "../assets/bootlogo.png";
import analytics from "../assets/analytics.png";
import firebase from "../assets/Firebase_Logo.png";
import horse1 from "../assets/horse1.png";
import horse2 from "../assets/horse2.png";
import horse3 from "../assets/horse3.png";
import horselogo from "../assets/horse-logo.png";
import pro3 from "../assets/pro3.png";
import gym from "../assets/gym.png";
import python from "../assets/Python.png";
import pandas from "../assets/Pandas.png";
import media from "../assets/media.png";
import opencv from "../assets/opencv.png";
import Footer from "./footer";


export default function Projects() {
    return (
        <div className="projectspage">
        <div className="proNav">
            <Nav />
            </div>
        <div>
            <h1 className="headP">Projects</h1>
        </div>
        <div className="projects">
            <div className="project">
                <img src={pro0} className="pro1"></img>
                <div>
                <h1 className="projectH">Project 1 : PartyHouse</h1>
                <p className="proP">Built a full-stack Airbnb clone ("Party-House") using database and cloud platforms for login-sign up, property listings, reviews, and ratings.</p>
                <p className="proP"> Learnt backend with Node, Mongo, Cloudinary and MVC framework </p>
                <div className="techs">
                <h1 className="projectH">techs used : </h1><div className="techs"><img className="node" src={node}></img><img className="express" src={express}></img><img className="mongo" src={mongo}></img><img className="mongo" src={cloud}></img></div>
                </div>
                <div><button className="button"><Link className="button" to="https://partyhouse.onrender.com/listings">Live Project</Link></button>  <button className="button" ><Link className="button" to="https://github.com/raoakash01/PartyHouse">Github</Link></button></div>
                </div>
                
            </div>
            <div className="images">
                <img className="party1" src={party1}></img>
                <img className="party2" src={party2}></img>
                </div>
                <div className="project">
                <img src={pro1} className="pro1 pmob"></img>
                <div className="project2">
                <h1 className="projectH">Project 2 : Ochi</h1>
                <p className="proP"> Developed a minimalist, single-page web application inspired by the award-winning Ochi.com, focusing 
on clean design and user experience.</p>
                <p className="proP">  Levelled-up minimalist design and React proficiency by building a single-page web app </p>
                <div className="techs ptech">
                <h1 className="projectH">techs used : </h1><div className="techs"><img className="mongo" src={reactjs}></img><img className="mongo tailwind" src={tailwind}></img><img className="mongo gsap" src={gsap}></img><img className="mongo framer" src={framer}></img></div>
                </div>
                
                <div><button className="button"><Link className="button" to="https://ochi-here.netlify.app/">Live Project</Link></button>  <button className="button" ><Link className="button" to="https://github.com/raoakash01/OCHI">Github</Link></button></div>
                
                </div>
                <img src={pro1} className="pro1 lmob"></img>
                
            </div>
            <div className="images">
                <img className="party1" src={ochi1}></img>
                <img className="ochi2" src={ochi2}></img>
                </div> 

                <div className="project3">
                <img src={pro2} className="pro1 trinity"></img>
                <div>
                <h1 className="projectH">Project 3 : Myhorse</h1>
                <p className="proP">Built a responsive website for start-up “HORSE” as a freelance project.</p>
                <p className="proP">  Learnt developing a live website with hosting with Google Analytics and Firebase </p>
                <div className="techs">
                <h1 className="projectH">techs used : </h1><div className="techs"><img className="htmllogo" src={Htmllogo}></img><img className="csslogo" src={Csslogo}></img><img className="htmllogo" src={jslogo}></img><img className="bootstaplogo" src={bootstrap}></img><img className="bootstaplogo" src={firebase}></img><img className="bootstaplogo" src={analytics}></img></div>
                </div>
                <div><button className="button"><Link className="button" to="https://myhorse.me/">Live Project</Link></button></div>
                </div>
                
            </div>
            <div className="images">
                <img className="party1" src={horse1}></img>
                <img className="horselogo" src={horselogo}></img>
                
                <img className="ochi2" src={horse3}></img>
                <img className="party2" src={horse2}></img>
                
                </div>   
        </div>
        <div className="project">
            
        <img src={pro3} className="pro3 pmob"></img>
                <div className="project2">
                <h1 className="projectH">Project 4 : Personal Trainer <b className="probold">'AI'</b></h1>
                <p className="proP"> Created a GUI for determining the correct postures and angles during exercises with the help of camera.</p>
                <p className="proP">   Built an AI fitness assistant using Python that analyses exercise form and provides real-time feedback. </p>
                <div className="techs">
                <h1 className="projectH">techs used : </h1><div className="techs"><img className="mongo" src={python}></img><img className="bootstaplogo" src={media}></img><img className="mongo" src={pandas}></img><img className="mongo" src={opencv}></img></div>
                </div>
                
                <div> <button className="button" ><Link className="button" to="https://github.com/raoakash01/Personal_Trainer">Github</Link></button></div>
                
                </div>
                <img src={pro3} className="pro3 lmob"></img>
                
            </div>
            <div className="images">
                <img className="party1" src={gym}></img>
                </div> 
                <Footer/>
        </div>
    )
}