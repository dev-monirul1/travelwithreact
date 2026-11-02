import React from 'react'
import './destination2.css'
import Image from '../../components/Image'
import logoimg from '../../assets/images/logoimg.png'


const Destination2 = () => {
  return (
    <section id="destination2">
        <div className="container">
            <div className="destination2_wrapper">
                <div className="destination2_img">
                    <Image source={logoimg} alt="logo" style="logo_img" />
                </div>
                <div className="destination2_details">
                    <h4 className="sec_subtitle">
                        FEATURED DESTINATIONS
                    </h4>
                    <h2 className="sec_title">
                        TAKE ONLY MEMORIES, LEAVE ONLY FOOTPRINTS.
                    </h2>
                    <p className="peragraph">
                        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                        tincidunt ut laoreet dolore magna aliquam erat volutpat.
                    </p>
                </div>
            </div>
        </div>
        <div className="destination2_shape">
            <img src="./svg/destination2_shape.svg" alt="img"/>
        </div>
    </section>
  )
}

export default Destination2