import React, { useState } from 'react';
import logo from '../Assets/DRAY.png'
import { Link } from 'react-router-dom'
import ab1 from '../Assets/yellow-bg.png'
import { FaBars } from "react-icons/fa";
import { RiCloseFill } from "react-icons/ri";

const Header = () => {

  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const [click, setClick] = useState(false);
  const handleClick = () => {
    setClick(!click);
    setDropdownOpen(!isDropdownOpen);
    document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling
    // document.body.classList.toggle('no-scroll', !click);
    // document.body.style.overflow = click ? 'auto' : 'hidden'; // Disable or enable scrolling

    

  }

  const closeMenuBar = () => {
    setClick(false);
    document.body.style.overflow = 'auto'; // Enable scrolling

  };


  const [activeNav, setActiveNav] = useState('/')



  return (
    <div>
        <img src={ab1} className='ab-bg' />
        <header>
            <nav>
                <img src={logo} alt="" />

                <div className='bars' onClick={handleClick}>
                  {click ? (<RiCloseFill id='close' />) : (<FaBars id='bar' />)}
                </div>

                <ul  className={click ? 'active' : 'menu'}>
                    <li><a href="#contacts" onClick={closeMenuBar}>Contact</a></li>
                    <li><a href="#services" onClick={closeMenuBar}>Services</a></li>
                    <li><a href="#aboutme" onClick={closeMenuBar}>About</a></li>
                    <li><Link to="/project" onClick={closeMenuBar}>Project</Link></li>
                </ul>
            </nav>
        </header>

        <div className={click ? 'cover' : 'cover active'}></div>

    </div>
  )
}

export default Header