import React from 'react'
import logo from '../Assets/DRAY.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
        <footer>
            <div className="foot-c">
                <div className="f-l">
                    <img src={logo} alt="" />
                    <h3>Racheal Obereniokuma</h3>
                    <h4>Product Designer</h4>
                    <p>Email: <a href="mailto:rachyobereni@gmail.com">rachyobereni@gmail.com</a></p>
                    
                    <p>location: Port Harcourt</p>
                    
                </div>

                <div className="f-r">
                    <h2>Lets Talk!</h2>
                    <p>Let’s Connect & Collaborate! <br /> I’m always open to exciting projects and collaborations. Let’s create something impactful together.</p>
                    <div className="f-icons">
                        <a href="https://www.linkedin.com/in/racheal-obereniokuma-2a529b19b/"><FaLinkedinIn className="f-i"/></a>
                        <a href="https://web.facebook.com/mhiz.racheal.735"><FaFacebookF className="f-i"/></a>
                        <a href="https://x.com/_designer_ray?s=21&t=Ihnv_t0hm5RyM4UUZ-IokA"><FaXTwitter className="f-i"/></a>
                        <a href="https://www.behance.net/rachyobereni"><FaBehance className="f-i"/></a>

                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer