import React from "react";
import './footer.css'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div className="footer">
            <div className="msg"><Link className="link" to="/contact">Leave a message</Link></div>
            <p className="copyright">© 2024. Built with 💜 by RAOAKASH</p>
        </div>
    )
}