import React from 'react'
import './gallary.css'
import Image from '../../components/Image'
import packageshape from '../../assets/images/packageshape.png'


const Gallary = () => {
  return (
    <section className="gallary">
        <div className="gal_shape">
            <Image source={packageshape} alt="package shape" style="package_shape_img" />
        </div>
        <div className="container">
            <div className="gal_title">
                <h2 className="sec_title">
                    Most Destinations
                </h2>
                <p className="peragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className="gal_wrapper">
                <div className="gal_item">
                    <div className="gal_item_inner large">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>North America</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner small">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>Cambodia</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                </div>
                <div className="gal_item">
                    <div className="gal_item_inner small">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>South America</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner large">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>Cape Town</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>

                </div>
                <div className="gal_item">
                    <div className="gal_item_inner large">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>Europe</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner small">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>South Africa</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                </div>
                <div className="gal_item">
                    <div className="gal_item_inner small">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>New York</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>
                    <div className="gal_item_inner large">
                        <Image source={packageshape} alt="package shape" style="package_shape_img" />
                        <div className="overlay">
                            <h3>Australia</h3>
                            <h6>Nice Place.</h6>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallary