import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <section id="footer">
        <div className="container">
            <div className="footer_wrapper">
                <div className="footer_item">
                    <h3 className="footer_title">QUICK LINKS</h3>
                    <ul className="footer_link">
                        <li>
                            <a href="#">Help</a>
                        </li>
                        <li>
                            <a href="#">About</a>
                        </li>
                        <li>
                            <a href="#">Press</a>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h3 className="footer_title">LEGAL STUFF</h3>
                    <ul className="footer_link">
                        <li>
                            <a href="#">Terms Of Use</a>
                        </li>
                        <li>
                            <a href="#">Cookies</a>
                        </li>
                        <li>
                            <a href="#">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#">Security Policy</a>
                        </li>
                        <li>
                            <a href="#">Money Back Guarantee</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h3 className="footer_title">OUR TEAM</h3>
                    <ul className="footer_link">
                        <li>
                            <a href="#">Testimonials</a>
                        </li>
                        <li>
                            <a href="#">Afﬁliates</a>
                        </li>
                        <li>
                            <a href="#">Partners</a>
                        </li>
                        <li>
                            <a href="#">Digital Marketing</a>
                        </li>
                    </ul>
                </div>
                <div className="footer_item">
                    <h3 className="footer_title">FEATURED SERVICES</h3>
                    <ul className="footer_link">
                        <li>
                            <a href="#">Local SEO</a>
                        </li>
                        <li>
                            <a href="#">Social Media Marketing</a>
                        </li>
                        <li>
                            <a href="#">Marketing Management</a>
                        </li>
                        <li>
                            <a href="#">Search Engine Optimization</a>
                        </li>
                        <li>
                            <a href="#">Free SEO Analysis</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="copyRight">
            <div className="container">
                <div className="copyRight_wrapper">
                    <p className="peragraph">Copyright 2023-2026 example.com </p>
                    <div className="footer_social">
                        <a href="#" className="nav_action_item">
                            <i className="fa-solid fa-message"></i>
                        </a>
                        <a href="#" className="nav_action_item">
                            <i className="fa-solid fa-location-arrow"></i>
                        </a>
                        <a href="#" className="nav_action_item">
                            <i className="fa-solid fa-heart"></i>
                        </a>
                        <a href="#" className="nav_action_item">
                            <i className="fa-solid fa-plus"></i>
                        </a>
                    </div>
                    <p className="peragraph">Terms of service Privacy policy ookie policy.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Footer