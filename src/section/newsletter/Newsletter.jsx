import React from 'react'
import './newsletter.css'
import Image from '../../components/Image'
import newsletterimg1 from '../../assets/images/newsletterimg1.jpg'
import newsletterimg2 from '../../assets/images/newsletterimg2.jpg'

const Newsletter = () => {
  return (
    <section id="newsletter">
        <div className="container">
            <div className="newsletter_gal">
                <div className="newsletter_gal_item">
                    <Image source={newsletterimg1} alt="newsletterimg1" style="newsletterimg1_img" />
                </div>
                <div className="newsletter_gal_item">
                    <Image source={newsletterimg2} alt="newsletterimg2" style="newsletterimg2_img" />
                </div>
            </div>
            <div className="newsletter_box">
                <div className="newsletter_box_img">
                    <Image source={logoimg} alt="logo" style="logo_img" />
                </div>
                <div className="newsletter_box_form">
                    <h4 className="sec_subtitle">
                        SUBSCRIBE FOR OFFERS
                    </h4>
                    <h2 className="sec_title">
                        TO GET ALL NEWS SUBSCRIBE OUR NEWSLETTER
                    </h2>
                    <form className="newsletter_form">
                        <div className="form_group">
                            <input type="email" placeholder="Enter Your Email"/>
                            <i className="fa-regular fa-envelope"></i>
                        </div>
                        <button>Let's Go</button>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Newsletter