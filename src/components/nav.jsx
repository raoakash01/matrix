import React from "react";
import { Link } from "react-router-dom";
import './home.css'
import './nav.css'

export default function Nav() {
    return (
            <div className="nav">
                    <Link className="link" to="/home">Matrix</Link>
                    <Link className="link" to="/projects">Projects</Link>
                    <Link className="link" to="/insights">Insights</Link>
                    <Link className="link" to="/contact">Contact</Link>
                
            </div>
    )
}