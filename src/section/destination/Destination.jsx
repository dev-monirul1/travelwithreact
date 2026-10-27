import React from 'react'
import './destination.css'
import destinationimg from '../../assets/images/destinationimg.png'
import { FaPlay } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaStarHalfAlt } from "react-icons/fa";

const Destination = () => {
  return (
    <section id="destination">
        <div className="container">
            <div className="destination_wrapper">
                <div className="destination_content">
                    <h4 className="sec_subtitle">
                        FEATURED DESTINATION
                    </h4>
                    <h2 className="sec_title">
                        CHOOSE <br /> THE PERFECT ACCOMMODATION.
                    </h2>
                    <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</p>
                </div>
                <div className="destination_video">
                    <img src={destinationimg} alt="" />
                    {/* <Image source={destinationimg} alt="img" /> */}
                    <a href="#" className="destination_video_Icon">
                        <FaPlay />
                    </a>
                </div>
            </div>
            <div className="book_now">
                <div className="location_price">
                    <div className="location">
                        <h4>TRAVEL LOCATION</h4>
                        <div className="star_wrapper">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStarHalfAlt />
                        </div>
                    </div>
                    <div className="price">
                        <p className="peragraph">Tour Price</p>
                        <span>$125,99</span>
                    </div>
                </div>
                <a className="book_now_btn" href="#">
                    Book now
                </a>
            </div>
        </div>
    </section>
  )
}

export default Destination