import React from 'react'
import './Msg_us.css'

const Msg_us = () => {
  return (
    <section id="msg_us">
        <div className="container">
            <div className="msg_main_box">
                <div className="msg_us_wrapper">
                    <h2>How can we help?</h2>
                    <p className="peragraph">Our service team is available every day 24/7 Free diagnostics for all types of
                        work.</p>
                    <a href="#" className="msg_us_btn">
                        <button>Message Us!</button>
                    </a>

                </div>
                <img className="msg_img" src="./images/msg_shape.png" alt=""/>
            </div>
        </div>
    </section>
  )
}

export default Msg_us