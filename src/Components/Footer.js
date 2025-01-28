import React from 'react'
import logo from '../Assets/DRAY.png'
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
        <footer>
            <div className="foot-c">
                <div className="f-l">
                    <img src={logo} alt="" />
                    <h3>Racheal Obereniokuma</h3>
                    <h4>Product Designer</h4>
                    <p>Email me at</p>
                    <a href="mailto:rachyobereni@gmail.com">rachyobereni@gmail.com</a>
                </div>

                <div className="f-r">
                    <h2>Lets Talk!</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna morbi massa dictum tristique convallis pretium eleifend habitant. Libero a arcu purus, elit, volutpat in nunc amet. Fermentum risus vel dolor id scelerisque senectus et, id nunc. Consectetur metus tristique ullamcorper semper purus massa eget urna.</p>
                    <div className="f-icons">
                        <a href=""><FaLinkedinIn className="f-i"/></a>
                        <a href=""><FaFacebookF className="f-i"/></a>
                        <a href=""><CiInstagram className="f-i"/></a>
                        <a href=""><FaXTwitter className="f-i"/></a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer