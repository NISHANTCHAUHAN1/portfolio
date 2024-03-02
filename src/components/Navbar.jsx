import React, { useState } from 'react';
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaInstagram} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import Logo from '../assets/nish.logo.png';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [nav,SetNav] = useState(false);
  const handleClick = () => SetNav(!nav);
  return (
    <div className='fixed w-full h-{80px} flex justify-between items-center px-4 bg-[#0a192f] text-gray-300 '>
       <div>
         <img src={Logo} alt="logo" style={{width: '50px'}} />
       </div>

       {/* menu */}
        <ul className='hidden md:flex'>
          <li>
          <Link to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li>
          <Link to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li>
          <Link to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li>
          <Link to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>
          <li>
          <Link to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>

       {/* Hamburger  */}
       <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes/>}
       </div>

       {/* Mobile menu  */}
       <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
          <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
          <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
          <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
          <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='work' smooth={true} duration={500}>
            Work
          </Link>
          </li>

          <li className='py-6 text-4xl'>
          {' '}
          <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
          </li>
        </ul>

       {/* Social icons  */}
       <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#0a66c2]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://www.linkedin.com/in/nishant-chauhan-b76371255/">
                Linkedin <FaLinkedin size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#2b3137]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://github.com/NISHANTCHAUHAN1">
                Github <FaGithub size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#cd486b]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://www.instagram.com/_.sky_14/">
                Instagram <FaInstagram size={30} />
            </a>
          </li>

          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
            <a className='flex justify-between items-center w-full text-gray-300' 
            href="https://nishantchauhanresume.tiiny.site/">
                Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
       </div>
    </div>
  )
}

export default Navbar;
