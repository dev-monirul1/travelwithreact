import React from 'react'
import './package.css'
import { FaCheckCircle } from "react-icons/fa";

const Package = () => {
  return (
    <section id="package">
        <div className="package_shape">
            <img src="./images/packageshape.png" alt="img"/>
        </div>
        <div className="container">
            <div className="package_title">
                <h2 className="sec_title">Special Package</h2>
                <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
            </div>
            <div className="package_wrapper">
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3 className="sec_title">STARTER</h3>
                        <h3 className="sec_title price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li><FaCheckCircle /> <span>International Air Ticket.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Daily Continental Breakfast.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Lunch And Dinner</span>
                            </li>
                            <li><FaCheckCircle /> <span>City Tour with Guide</span>
                            </li>
                            <li><FaCheckCircle /> <span>09 Nights Hotel</span>
                            </li>
                            <li><FaCheckCircle /> <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a className="package_btn" href="#">GET STARTED</a>
                    </div>
                    <p className="peragraph trial">4 Days Trial Available</p>
                </div>
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3 className="sec_title">STARTER</h3>
                        <h3 className="sec_title price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li><FaCheckCircle /> <span>International Air Ticket.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Daily Continental Breakfast.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Lunch And Dinner</span>
                            </li>
                            <li><FaCheckCircle /> <span>City Tour with Guide</span>
                            </li>
                            <li><FaCheckCircle /> <span>09 Nights Hotel</span>
                            </li>
                            <li><FaCheckCircle /> <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a className="package_btn" href="#">GET STARTED</a>
                    </div>
                    <p className="peragraph trial">4 Days Trial Available</p>
                </div>
                <div className="package_item">
                    <div className="package_item_inner">
                        <h3 className="sec_title">STARTER</h3>
                        <h3 className="sec_title price">$9</h3>
                        <h5>Per Month</h5>
                        <ul>
                            <li><FaCheckCircle /> <span>International Air Ticket.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Daily Continental Breakfast.</span>
                            </li>
                            <li><FaCheckCircle /> <span>Lunch And Dinner</span>
                            </li>
                            <li><FaCheckCircle /> <span>City Tour with Guide</span>
                            </li>
                            <li><FaCheckCircle /> <span>09 Nights Hotel</span>
                            </li>
                            <li><FaCheckCircle /> <span>Desert Safari & BBQ Dinner</span>
                            </li>
                        </ul>
                        <a className="package_btn" href="#">GET STARTED</a>
                    </div>
                    <p className="peragraph trial">4 Days Trial Available</p>
                </div>

            </div>
        </div>
    </section>
  )
}

export default Package