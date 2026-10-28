import React from 'react'

import bannerimg from '../../assets/images/bannerimg.jpg'
import './banner.css'
import { FaSearch } from "react-icons/fa";
import { FiMapPin } from "react-icons/fi";
import Peragrph from "../../components/Peragrph"
import Input from '../../components/Input'; 

const Banner = () => {
  return (
    <section id="banner" style={{backgroundImage: `url(${bannerimg})`}}>
        <div className="container">
            <div className="banner_wrapper">
                <h1>CHOOSE <br /> THE PERFECT DESTINATIONS.</h1>
                <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation.</p>
                <Peragrph style="peragraph" text="Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                    euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                    nostrud exerci tation." />
                <form action="">
                    <div className="form_inner">
                        <div className="banner_search">
                            {/* <input type="text" placeholder="Enter Your Location" /> */}
                            <Input type='text' placeholder="Enter Your Location" />
                            <FaSearch />
                        </div>
                        <div className="map_circle">
                            <FiMapPin />

                        </div>
                    </div>

                </form>
            </div>
        </div>
    </section>
  )
}

export default Banner