import React from 'react'
import logo from "../../Assets/NavLogo.png"
import footerlogo from "../../Assets/Footerlogo.png"
const Footer = () => {
  return (
    <>
      <div className="footer_items mt-16 ">


        <div className=" grid lg:grid-cols-5 gap-5  grid-cols-2  2xl:ml-28 xl:ml-20 lg:ml-16 sm:ml-10 ml-5">

          <div className="logo absolute sm:relative  ">
            <img src={logo} alt="" />
            <p className='mt-3 sm:mr-20 text-[#5F6D7E]'>Generate outside the box thinking with the possibility to targtet the low.</p>
            <div className="contact_items flex sm:space-x-5 space-x-16 mt-3 text-[23px] ">
              <p><i class="fa-brands fa-facebook"></i></p>
              <p><i class="fa-brands fa-google"></i></p>
              <p><i class="fa-brands fa-apple"></i></p>
              <p><i class="fa-brands fa-instagram"></i></p>
            </div>
          </div>

          <div className="About hidden sm:block lg:hidden sm:visible md:visible sm:ml-[150px]">
            <h1 className='font-semibold mb-3'>About Us</h1>
            <div className="space-y-3">
              <p>Our Competition</p>
              <p>Channels</p>
              <p>Scale</p>
              <p>Watch the Demo</p>
            </div>
          </div>

          <div className="products sm:mt-0 mt-[150px] xl:ml-[100px]">
            <h1 className='font-semibold mb-3'>Products</h1>
            <div className="space-y-2">
              <p>Features</p>
              <p>Solution</p>
              <p>Integration</p>
              <p>Enterprise</p>
              <p>Solutions</p>
            </div>
          </div>

          <div className="Resources sm:mt-0 mt-[150px] sm:ml-[-100px] lg:ml-0 xl:ml-[50px]">
            <h1 className='font-semibold mb-3'>Resources</h1>
            <div className="space-y-2">
              <p>Partners</p>
              <p>Community</p>
              <p>Developer</p>
              <p>App</p>
              <p>Blog</p>
            </div>
          </div>

          <div className="Whychoose visible  hidden lg:block ">
            <p className='font-semibold mb-3'>Why Choose Us?</p>
            <div className="space-y-2">
              <p>Channels</p>
              <p>Scale</p>
              <p>Watch the Demo</p>
              <p>Our Competition</p>
            </div>
          </div >
          <div className="Whychoose sm:hidden">
            <p className='font-semibold mb-3'>Why Choose Us?</p>
            <div className="space-y-2">
              <p>Channels</p>
              <p>Scale</p>
              <p>Watch the Demo</p>
              <p>Our Competition</p>
            </div>
          </div >


          <div className="company sm:absolute  lg:relative relative md:ml-[550px] sm:ml-[450px] sm:mt-[200px] lg:mt-0 lg:ml-0 ">
            <h1 className='font-semibold mb-3'>Company</h1>
            <div className="space-y-2">
              <p>About Us</p>
              <p>News</p>
              <p>Leadership</p>
              <p>Media Kit</p>
            </div>
          </div >

        </div >

        <div className="footer_logo  mt-16">
          <div className="flex justify-center">
            <img className='bg-[#F5FAFF] rounded-full px-2 py-2' src={footerlogo} alt="" />
          </div>

          <p className='text-center mt-3 mb-10'>© 2023 Lookscout. All Rights Reserved.</p>
        </div>
      </div>
    </>
  )
}
export default Footer