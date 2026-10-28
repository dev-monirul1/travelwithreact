import React from 'react'
import logoimg from '../../assets/images/logoimg.png'
import './navbar.css'
import Image from '../../components/Image'
import Anchor from '../../components/Anchor'
import { menuData }  from '../../dummyData/menuData'




const Navbar = () => {
  return (
    <nav id="navbar">
        <div className="container">
            <div className="nav_wrapper">
                <div className="logo">
                    {/* <a href="#"> */}
                        {/* <img src={logoimg} alt="logo" /> */}
                        {/* <Image source={logoimg} alt="logo" style="logo_img" /> */}
                    {/* </a> */}
                    <Anchor href="/">
                        <Image source={logoimg} alt="logo" style="logo_img" />
                    </Anchor>
                </div>
                <div className="menu">
                    <ul>
                        {menuData.map((item, index)=>(
                            <li key={index}>
                            {/* <a href={item.url}>{item.label}</a> */}
                            <Anchor href={item.url}>
                                {item.label}
                            </Anchor>
                        </li>
                        ))}
                        
                    </ul>
                </div>
                <div className="nav_actions">
                    <a href="#" className="nav_action_item">
                        <i className="fa-solid fa-message"></i>
                    </a>
                    <a href="#" className="nav_action_item">
                        <i className="fa-solid fa-location-arrow"></i>
                    </a>
                    <a href="#" className="nav_action_item">
                        <i className="fa-solid fa-heart"></i>
                    </a>
                    <a href="#" className="nav_action_item">
                        <i className="fa-solid fa-plus"></i>
                    </a>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar