import React from 'react'
import './brand.css'
import Image from '../../components/Image'
import brandimg1 from '../../assets/images/brandimg1.png'
import brandimg2 from '../../assets/images/brandimg2.png'
import brandimg3 from '../../assets/images/brandimg3.png'
import brandimg4 from '../../assets/images/brandimg4.png'

const Brand = () => {
  return (
    <section id="brand">
        <div className="container">
            <div className="brand_wrapper">
                <div className="brand_item">
                    <Image source={brandimg1} alt="Brand Image 1" />
                </div>
                <div className="brand_item">
                    <Image source={brandimg2} alt="Brand Image 2" />
                </div>
                <div className="brand_item">
                    <Image source={brandimg3} alt="Brand Image 3" />
                </div>
                <div className="brand_item">
                    <Image source={brandimg4} alt="Brand Image 4" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Brand