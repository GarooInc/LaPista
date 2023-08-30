import React from "react"
import "./Footer.css" // Make sure to create a Footer.css file for styles

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-left">
                <img src="/images/logo.png" alt="Logo" className="footer-logo" />
                <p className="footer-description">Lorem ipsum dolor sit amet consectetur. Lacus urna consectetur nunc porttitor morbi. Tristique pellentesque id nec viverra.</p>
                <p className="footer-copyright">© 2023 Garoo Inc. All Rights Reserved.</p>
            </div>
            <div className="footer-right">
                <div className="footer-column">
                    <h4>Menú</h4>
                    <a href="#">About Us</a>
                    <a href="#">We´re Hiring</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-column">
                    <h4>Service</h4>
                    <a href="#">About Us</a>
                    <a href="#">We´re Hiring</a>
                    <a href="#">Privacy Policy</a>
                </div>
                <div className="footer-column">
                    <h4>Social</h4>
                    <div className="footer-socials">
                    {/* Replace # with your social media links */}
                    <a href="#" className="footer-social">
                        <img src="/images/fb.svg" alt="Facebook" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/tw.svg" alt="twitter" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/li.svg" alt="linkedin" />
                    </a>
                    <a href="#" className="footer-social">
                        <img src="/images/ig.svg" alt="Instagram" />
                    </a>
                </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
