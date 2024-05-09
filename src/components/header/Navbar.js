import React, {useState, useEffect} from 'react'
import {Link} from "react-router-dom"
import logoImage from "../image/logo.png"
import { IoMenu } from "react-icons/io5";
import "../style/style.css"
import Fade from 'react-reveal/Fade'

const Navbar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);

  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 600) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <div className='nav-container'>
    <nav className='nav-main'>
       <div className='logo-main'>
      <img className='logo' src={logoImage}  alt='logo'  />    
    </div>  
     <div className='nav-link-main'>
        <Link className='nav-link'>Home</Link>
        <Link className='nav-link'  >Flashcard</Link>
        <Link  className='nav-link'  >contact</Link>
        <Link  className='nav-link'  >FAQ</Link>
        <Link className='nav-login' >Login</Link>
    
     
     </div>
     <div className='hamburger-menu' onClick={toggleMenu}>
              <IoMenu/>
            </div>
               
            <div className={`mobile-menu ${isMenuOpen ? 'open' : ''}`}>
              <Fade left>
            <Link className='nav-link-menu' onClick={closeMenu}>Home</Link>
        <Link className='nav-link-menu' onClick={closeMenu} >Flashcard</Link>
        <Link className='nav-link-menu' onClick={closeMenu} >contact</Link>
        <Link  className='nav-link-menu' onClick={closeMenu} >FAQ</Link>
        <Link className='nav-link-menu' onClick={closeMenu}>Login</Link>
        </Fade>
      </div>
       
    </nav>

    </div>
  )
}

export default Navbar