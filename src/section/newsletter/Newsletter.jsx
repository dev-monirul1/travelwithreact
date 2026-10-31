import React from 'react'
import './newsletter.css'

const Newsletter = () => {
  return (
    <section className="newsletter">
        <div className="container">
            <div className="newsletter_gal">
                <div className="newsletter_gal_item">
                    <img src="./images/pic 12.png" alt="not found"/>
                </div>
                <div className="newsletter_gal_item">
                    <img src="./images/pic 13.png" alt="not found"/>
                </div>
            </div>
            <div className="newsletter_box">
                <div className="newsletter_box_img">
                    <img src="./images/pic 14.png" alt=""/>
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