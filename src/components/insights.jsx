import React from "react";
import akash from "../assets/pro3.png"
import Nav from "./nav";
import Footer from "./footer";
import './insights.css'
import { Link } from "react-router-dom";
import py from "../assets/py.png";
import htmlwhite from "../assets/htmlwhite.png";
import csswhite from "../assets/csswhite.png";
import jswhite from "../assets/jswhite.png";
import java from "../assets/java.png";
import cpp from "../assets/cpp.png";
import nodewhite from "../assets/nodewhite.png";
import reactwhite from "../assets/reactw.png";
import mongow from "../assets/monogow.png";
import bootw from "../assets/bootw.png";
import tailw from "../assets/tailw.png";
import expressw from "../assets/expressw.png";
import firew from "../assets/firew.png";
import analyticw from "../assets/analyticw.png";
import illustratorw from "../assets/illuw.png";
import xdw from "../assets/xdw.png";
import vmw from "../assets/vmw.png";
import anw from "../assets/anw.png";
import sqlw from "../assets/sqlw.png";
import cert1 from "../assets/apna.jpg";
import cert2 from "../assets/rice.jpg";
import cert3 from "../assets/uci.jpg";
import apnalogo from "../assets/apnalogo.png";
import ucilogo from "../assets/ucilogo.png";
import ricelogo from "../assets/ricelogo.png";
import dia from "../assets/dia.jpg";
export default function Insights() {
    return (
        <div className="wholepage">
            <Nav />
            <div className="insights">
                <div>
                <div className="details">
                <h1 className="introH">I am <b className="name">Akash</b> Rao</h1>
                <p className="des"> a passionate and innovative Computer Science & Engineering student at Lovely Professional University, Punjab. 
                My academic journey, coupled with hands-on projects in full-stack web development and artificial intelligence, has equipped me with a 
                robust skill set in technologies such as ReactJS, NodeJS, and Python.</p>
                <p className="des">I am passionate about continuous learning and love to explore new skills. Beyond tech, I have a deep passion for cars and the 
                engineering behind them, which often inspires my problem-solving approach.</p>
                
                </div>
                <div className="textbutton">
                <h1 className="introI">Explore my projects on </h1><Link className=" git mobile" exact  to="https://github.com/raoakash01"><i class="fab fa-github "></i> Github</Link>
                </div><div className="textbutton"><h1 className="introI"> connect with me on </h1><Link className="linked mobile" exact to="https://www.linkedin.com/in/akash-rao-here/"><i class="fab fa-linkedin"></i> LinkedIn</Link></div>
                </div>
                <img className="myimg" src={akash}></img>
            </div>
            <div className="Skills"><h1 className="Shead">Skill Set</h1>
            <div className="techimgs">
            
            <img className="imgtech" src={htmlwhite}></img>
            <img className="imgtech" src={csswhite}></img>
            <img className="imgtech tech5" src={bootw}></img>
            <img className="imgtech tech6" src={tailw}></img>
            <img className="imgtech" src={jswhite}></img>
            <img className="imgtech tech6" src={expressw}></img>
            <img className="imgtech tech3" src={nodewhite}></img>
            <img className="imgtech tech2" src={reactwhite}></img>
            <img className="imgtech tech4" src={mongow}></img>
            <img className="imgtech tech2" src={sqlw}></img>
            <img className="imgtech tech7" src={firew}></img>
            <img className="imgtech tech6" src={analyticw}></img>
            <img className="imgtech tech2" src={py}></img>
            <img className="imgtech tech2" src={cpp}></img>
            <img className="imgtech " src={java}></img>
            <img className="imgtech " src={illustratorw}></img>
            <img className="imgtech" src={xdw}></img>
            <img className="imgtech tech5" src={vmw}></img>
            <img className="imgtech tech5" src={anw}></img>
            </div>
            </div>

            <div className="certificates">
                <h1 className="Chead">Certificates</h1>
                <div className="cert">
                    <div className="textcer">
                    <h1 className="certH">Full Stack Web Development</h1>
                    <p className="certP">by APNA COLLEGE</p>
                    </div>
                    
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img className="apnalogo" src={apnalogo}></img>
                        </div>
                        <div class="flip-card-back">
                        <img class="certimg" src={cert1} alt="Certificate Image"></img>
                        </div>
                    </div>
                    </div>
                    
                </div>
                <div className="cert">
                <div className="textcer Mcert">
                    <h1 className="certH">Managing Project Risks and Changes</h1>
                    <p className="certP">by University of California, Irvine</p>
                    </div>
                    
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img className="ucilogo" src={ucilogo}></img>
                        </div>
                        <div class="flip-card-back">
                        <img class="certimg" src={cert3} alt="Certificate Image"></img>
                        </div>
                    </div>
                    </div>
                    <div className="textcer Lcert">
                    <h1 className="certH">Managing Project Risks and Changes</h1>
                    <p className="certP">by University of California, Irvine</p>
                    </div>
                </div>
                <div className="cert">
                    <div className="textcer ">
                    <h1 className="certH lcert"> Engineering Project Management: Scope, Time and
                    Cost Management</h1>
                    <h1 className="certH Mcert"> Engineering Project Management:<br/> Scope, Time and
                    Cost Management</h1>
                    <p className="certP">by RICE University</p>
                    </div>
                    
                    <div class="flip-card">
                    <div class="flip-card-inner">
                        <div class="flip-card-front">
                        <img className="apnalogo" src={ricelogo}></img>
                        </div>
                        <div class="flip-card-back">
                        <img class="certimg" src={cert2} alt="Certificate Image"></img>
                        </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>
            <div className="cv">
                <button className="button buttonCV"><Link  to="https://drive.google.com/file/d/1U48KxamNDhMPO_kutowetzsbeTkGFZfE/view?usp=sharing">Download CV</Link></button>
            </div>
            <div className="dialog">
                <img className="dialogImg" src={dia}></img>
            </div>
            <Footer />
        </div>
    )
}