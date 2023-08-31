import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                <div className="footer-description">
                <h3>Dirección</h3>
                <p>Km 9.5 Carretera a MuxbalGuatemala, 01051, GT,
                (502) 31746160 info@boquiteo.com</p>
                </div>
            </div>             
                <div className="footer-column">
                    <div className="footer-socials">
                    {/* Replace # with your social media links */}
                    <a href="#" className="footer-social">
                        <img src="/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/tw.svg" alt="twitter" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/ig.svg" alt="Instagram" />
                    </a>
                </div>
                </div>
        </footer>
    )
}

export default Footer
