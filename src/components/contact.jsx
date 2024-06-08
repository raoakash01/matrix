import React from "react";
import Nav from "./nav";
import Footer from "./footer";
import './contact.css'
import { Link } from "react-router-dom";
import { useForm, ValidationError } from '@formspree/react';


export default function Contact() {
    const [state, handleSubmit] = useForm("xjvnqzga");
  
    return (
        <div className="contactPage">
            <Nav/>
            <div className="container">
                <div className="styleText">
                <h1 className="contactH">Get in touch</h1>
                </div>
                <div className="contact">
                    <div className="detailsC">
                        <div><h1 className="contactP">Want to <b className="want">collaborate</b> ?<br/> Shoot an email or reach out my socials</h1></div>
                        <div className="mailnum">
                            <div className="mail">
                                <Link to={"mailto:raoakash269@gmail.com"}><i class="fas fa-envelope iconC"></i></Link>
                                <h3 className="mailH">raoakash2gmail.com</h3>
                            </div>
                            <div className="mail">
                                <Link to={"tel:+91-8094778725"}><i class="fas fa-phone iconC"></i></Link>
                                <h3 className="mailH">+91-8094778725</h3>
                            </div>
                            <div className="mail">
                                <Link><i class="fas fa-location-dot iconC"></i></Link>
                                <h3 className="mailH">Narnaul, Haryana</h3>
                            </div>
                        </div>
                        <div className="socials">
                            <h1 className="socialH">Socials</h1>
                        <hr className="line"/>
                        <div className="socialicons">
                        <Link  to="https://github.com/raoakash01"><i class="fab fa-github iconC"></i></Link>
                            <Link  to="https://www.linkedin.com/in/akash-rao-here/"><i class="fab fa-linkedin iconC"></i></Link>
                            <Link  to="https://www.instagram.com/rao._.akash/"><i class="fab fa-instagram iconC"></i></Link>
                            <Link  to="https://wa.me/8094778725"><i class="fab fa-whatsapp iconC"></i></Link>
                        </div>
                            
                        </div>
                        

                        
                    </div>
                    <div className="contactForm">
                        <div className="form">
                            <h1 className="formH">Connect & Create</h1>
                            <hr className="lineForm"/>
                            <form className="form1" onSubmit={handleSubmit}>
                                <label htmlFor="name" >Name</label>
                                <input type="text" placeholder="Name" id="name" name="name" required/><br/>
                                <label htmlFor="email">Email Address</label>
                                <input id="email" type="email" name="email" placeholder="Email" required/>
                                <ValidationError prefix="Email" field="email" errors={state.errors}/> <br/>
                                <textarea placeholder="Message" id="message" name="message" required></textarea>
                                <ValidationError prefix="Message" field="message"errors={state.errors}/><br/>
                                <button type="submit" disabled={state.submitting}>Send</button>
                            </form>
                        </div>
                    </div>
                </div>
                
            </div>
            <Footer/>
        </div>
    );
}
