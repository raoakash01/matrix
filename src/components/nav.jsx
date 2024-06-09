import React, { useState } from "react";
import { Link } from "react-router-dom";
import './home.css';
import './nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav">
            <div className="hamburger" onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className={`menu ${isOpen ? "active" : ""}`}>
                <Link className="link" to="/home" onClick={toggleMenu}>Matrix</Link>
                <Link className="link" to="/projects" onClick={toggleMenu}>Projects</Link>
                <Link className="link" to="/insights" onClick={toggleMenu}>Insights</Link>
                <Link className="link" to="/contact" onClick={toggleMenu}>Contact</Link>
            </div>
        </div>
    );
}
