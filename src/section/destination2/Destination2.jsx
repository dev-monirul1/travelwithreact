import React from 'react'
import './destination2.css'
import Image from '../../components/Image'
import destination2img from '../../assets/images/destination2img.png'
import destination2_shape from '../../assets/images/destination2_shape.svg'


const Destination2 = () => {
  return (
    <section id="destination2">
        <div className="container">
            <div className="destination2_wrapper">
                <div className="destination2_img">
                    <Image source={destination2img} alt="destination 2" style="destination2_img" />
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
            <Image source={destination2_shape} alt="destination 2 shape" style="destination2_shape_img" />
        </div>
    </section>
  )
}

export default Destination2