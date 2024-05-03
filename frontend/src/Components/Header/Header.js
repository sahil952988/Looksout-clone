import React, { useRef } from 'react'
import NavLogo from "../../Assets/NavLogo.png"
import "../../style/Header.css"
import { NavLink } from 'react-router-dom'

const Header = () => {

  const menuRef = useRef(null);

  const toggleMenu = () => menuRef.current.classList.toggle("menu__active");
  return (
    <>


      <div className="main-nav flex justify-between  mt-5">

        <div className="logo_img  ml-10 lg:hidden">
          <img src={NavLogo} alt="Logo" />
        </div>

        <section className="Navigation lg:relative absolute flex lg:flex-row flex-col lg:space-x-10   lg:py-5 md:z-0 z-[9999] lg:bg-transparent bg-[#437EF7] lg:w-auto w-[70%] lg:h-0 h-[100%] lg:space-y-0 space-y-7 font-semibold  text-center lg:mt-0 mt-[-20px]" ref={menuRef} onClick={toggleMenu} >
          <div className="logo_img ml-28  hidden lg:block ">
            <img src={NavLogo} alt="Logo" />
          </div>

          <p className=' lg:text-black text-white'><NavLink to='/Home'>Home</NavLink></p>
          <p className=' lg:text-black text-white'><NavLink to='/Home'>Our Products</NavLink></p>
          <div className='flex justify-center space-x-3 '><p className=' lg:text-black text-white'> <NavLink to='/Home'>Resources</NavLink></p> <p className=' lg:text-black text-white'><i class="fa-solid fa-chevron-down"></i></p></div>
          <p className=' lg:text-black text-white'><NavLink to='/Contact'>Contacts</NavLink></p>


        </section>

        <span className="mobile__menu cursor-pointer lg:hidden mr-10 text-[25px] ">
          <i class="fa-solid fa-bars" onClick={toggleMenu}></i>
        </span>


        <div className="auth  hidden lg:block mr-32 space-x-5">
          <button className='text-[#437EF7] font-semibold'>Sign Up</button>
          <button className='bg-[#437EF7] px-4 py-2 rounded-[7px] text-white font-semibold'>Log In</button>
        </div>

      </div>
    </>
  )
}
export default Header