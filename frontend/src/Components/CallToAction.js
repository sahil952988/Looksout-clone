import React from 'react'
import twilio from "../Assets/Twilio.png"
import slack from "../Assets/Slack.png"
import google from "../Assets/Google.png"
import pinterest from "../Assets/Pinterest.png"
import mailchimp from "../Assets/Mailchimp.png"
import paypal from "../Assets/Paypal.png"
const CallToAction = () => {
  return (
    <>
      <div className="all_items bg-[#2B63D9] w-[100%]">
        <h1 className="text-white text-center pt-14 font-semibold">1% OF THE INDUSTRY</h1>
        <h1 className="text-white text-center text-[32px] font-semibold pt-3  2xl:ml-[530px] 2xl:mr-[500px]  xl:mr-[440px] lg:ml-[250px] lg:mr-[340px] md:ml-[200px] md:mr-[50px] sm:ml-[100px] sm:mr-[90px] ml-[45px] mr-[60px]">Welcome to your new digital reality that
          which will rock your world truly at all.</h1>

        <div className="auth sm:flex justify-center  md:space-x-3 py-5">
          <div className="Sigup_btn mx-5">
            <button className='text-[#437EF7] w-full bg-white px-4 py-2  rounded-[7px] font-semibold'>Sign Up</button>
          </div>

          <div className="login_btn sm:mt-0 mt-5 mx-5 ">
            <button className='bg-[#437EF7] w-full  px-4 py-2 rounded-[7px] text-white font-semibold'>Log In</button>
          </div>
        </div>



        <div className="popular_icons sm:grid lg:grid-cols-6 sm:grid-cols-4 gap-5 flex flex-col justify-center px-28 items-center pt-16">

          <div className="twilio_icon"><img src={twilio} alt="" /></div>
          <div className="slack_icon"><img src={slack} alt="" /></div>

          <div className="google_icon"><img src={google} alt="" /></div>

          <div className="paypal_icon"><img src={paypal} alt="" /></div>

          <div className="pinterest_icon sm:invisible lg:visible"><img src={pinterest} alt="" /></div>

          <div className="mailchamp_icon sm:invisible lg:visible"><img src={mailchimp} alt="" /></div>
        </div>

        <div className="smtolg_items sm:visible  lg:invisible invisible flex  justify-center gap-8 pb-16">
          <div className="pinterest_icon"><img src={pinterest} alt="" /></div>

          <div className="mailchamp_icon "><img src={mailchimp} alt="" /></div></div>

      </div>
    </>
  )
}
export default CallToAction