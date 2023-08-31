import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                <div className="footer-description">
                <h3>Dirección</h3>
                <p>Km 9.5 Carretera a Muxbal Guatemala, 01051, GT.</p>
                <p><a href="callto:+502 3174 6160">+502 3174 6160</a></p>
                <p><a href="mailto:info@boquiteo.com">info@boquiteo.com</a></p>
                </div>
            </div>             
                <div className="footer-column">
                    <div className="footer-socials">
                    {/* Replace # with your social media links */}
                    <a href="https://www.facebook.com/lapistarestaurante/" className="footer-social">
                        <img src="/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/lapista_/" className="footer-social">
                        <img src="/images/ig.svg" alt="Instagram" />
                    </a>
                </div>
                </div>
        </footer>
    )
}

export default Footer
