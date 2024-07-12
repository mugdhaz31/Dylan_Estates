import React, { useState } from 'react'
import './Navbar.css'
import logo from './logo.png'
import {Link} from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <nav>
        <img className='logo' src={logo} alt='' />
        <ul className={isOpen ? 'nav-links open' : 'nav-links'}>

          {/* Linking pages using Link tag */}

          <li><Link className='linkpage' to="Homepage">PROPERTIES</Link></li>
          <li>MY DASHBOARD/ACTIVITY</li>
          <li><Link className='linkpage' to="PropertyListing">LIST YOUR PROPERTY</Link></li>
          <li>CONTACT US</li>
          <li>MORE</li>
          <li>|</li>
          <li className='symbol'><i class="fa-solid fa-language" ></i></li>
          <li className='symbol'><i class="fa-regular fa-user"></i></li>
        </ul>

        {/* Hamburger to minimize navbar for small screens */}
        
        <div className="hamburger" onClick={toggleMenu}>
          <i class="fa-solid fa-bars"></i>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
