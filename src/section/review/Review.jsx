import React from 'react'
import './review.css'
import Image from '../../components/Image'
import reviewimg1 from '../../assets/images/reviewimg1.jpg'
import reviewimg2 from '../../assets/images/reviewimg2.jpg'
import reviewimg3 from '../../assets/images/reviewimg3.jpg'
// import reviewimg4 from '../../assets/images/reviewimg4.png'
// import reviewimg5 from '../../assets/images/reviewimg5.png'



const Review = () => {
  return (
    <section className="review">
        <div className="review_shape">
            <img src="./images/packageshape.png" alt=""/>
        </div>
        <div className="container review_container">
            <div className="review_heading">
                <h2 className="sec_title">
                    CUSTOMER WORDS
                </h2>
                <p className="peragraph">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut
                    laoreet dolore magna aliquam erat volutpat.
                </p>
            </div>
            <div className="review_wrapper">
                <div className="review_item">
                    <div className="review_img">
                        <Image source={reviewimg1} alt="Review Image 1" style='review_img1' />
                    </div>
                    <div className="review_details">
                        <h4>Victoria Wotton</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        <Image source={reviewimg2} alt="Review Image 2" style='review_img2' />
                    </div>
                    <div className="review_details">
                        <h4>Sonia Marmeladova</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        <Image source={reviewimg3} alt="Review Image 3" style='review_img3' />
                    </div>
                    <div className="review_details">
                        <h4>Hindley Earnshaw</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        {/* <Image source={reviewimg4} alt="Review Image 4" /> */}
                    </div>
                    <div className="review_details">
                        <h4>Catherine Earnshaw</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        {/* <Image source={reviewimg5} alt="Review Image 5" /> */}
                    </div>
                    <div className="review_details">
                        <h4>Isabella Linton</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
                <div className="review_item">
                    <div className="review_img">
                        {/* <Image source={reviewimg6} alt="Review Image 6" /> */}
                    </div>
                    <div className="review_details">
                        <h4>Jennifer Williams</h4>
                        <h5>Traveler, Guide</h5>
                        <div className="review_rating">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                        <p className="peragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy
                            nibh euismod tincidunt ut laoreet.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Review