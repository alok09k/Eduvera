import React from 'react'
import './Navbar.css'
import eduvera from '../../assets/eduvera.png'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-scroll';
import menu_icon from '../../assets/menu-icon.png'

function Navbar() {

  const [sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY > 100 ? setSticky(true) : setSticky(false) 
    })
  }, []);

  const [mobileMenu,setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true)
  }

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ""}`}>
      <Link to='hero' smooth={true} offset={0} duration={500}>
        <img src={eduvera} alt="" className='logo'/>
      </Link>
      <ul className={mobileMenu ? " " : 'mobile-menu'}>
        <li> <Link to='hero' smooth={true} offset={0} duration={500} >Home</Link></li>
        <li> <Link to='programs' smooth={true} offset={-250} duration={500} >Program</Link></li>
        <li> <Link to='about' smooth={true} offset={-150} duration={500} >About us</Link></li>
        <li> <Link to='campus' smooth={true} offset={-260} duration={500} >Campus</Link></li>
        <li> <Link to='testimonial' smooth={true} offset={-260} duration={500} >Testimonials</Link></li>
        <li>
          <button className='btn'>
          <Link to='contact' smooth={true} offset={-260} duration={500} >Contact us</Link>
          </button>
        </li>
      </ul>
      <img src={menu_icon} alt="" className='menu-icon' onClick={toggleMenu} />
    </nav>
  )
}

export default Navbar