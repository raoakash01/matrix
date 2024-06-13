import React from "react";
import './home.css';
import Nav from "./nav";
import Footer from "./footer";
import { Helmet } from 'react-helmet-async';

export default function Home() {
    return (
        <div className="main">
            <Helmet>
        <title>My Portfolio Website</title>
        <meta name="description" content="This is my portfolio website showcasing my projects and skills." />
        <meta name="keywords" content="portfolio, web developer, projects, skills" />
        <meta name="author" content="Akash" />
        <meta property="og:title" content="Akash - Web Developer" />
        <meta property="og:description" content="This is my portfolio website showcasing my projects and skills." />
      </Helmet>
            <div className="center">
            <Nav />
                <video className="intro" autoPlay loop>
                    <source src="https://d2rndhzlwwne8a.cloudfront.net/intro.mp4" type="video/mp4" />
                </video>
                <h1 className="welcome">Welcome to the real world</h1>
            </div>
            <Footer />
        </div>
    );
}
