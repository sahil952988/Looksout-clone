import React from 'react'
import team1 from "../Assets/Image (1).png"
import team2 from "../Assets/Image (2).png"
import team3 from "../Assets/Image.png"
const TeamSection = () => {
  return (
    <>
      <div className="all_items  mt-20">
        <h1 className='text-center font-bold text-[32px]'>The Core Of Our Teams</h1>
        <p className='text-center font-normal 2xl:ml-[430px] 2xl:mr-[500px]  xl:mr-[340px] lg:ml-[250px] lg:mr-[240px] md:ml-[100px] md:mr-[50px] sm:ml-[100px] sm:mr-[90px] ml-[35px] mr-[45px] mt-5'>Organically grow the holistic world view of disruptive innovation via workplace diversity  and empowerment of people and great talent that truly rocks.</p>

        <div className="team_img grid lg:grid-cols-3 sm:grid-cols-2 gap-4 lg:ml-28 ml-10  mt-16">
          <div className="team1 mr-10">
            <img src={team3} alt="" />
            <h1 className='text-[22px] font-semibold'>Morgan Drew</h1>
            <p className='text-[#5F6D7E]'>Manager</p>
            <div className="contact_icons flex space-x-3 mt-2">
              <p><i class="fa-brands fa-twitter"></i></p>
              <p><i class="fa-brands fa-facebook"></i></p>
              <p><i class="fa-brands fa-linkedin"></i></p>
              <p><i class="fa-brands fa-telegram"></i></p>
            </div>
          </div>

          <div className="team2 mr-10">
            <img src={team1} alt="" />
            <h1 className='text-[22px] font-semibold'>Jeffery Walker</h1>
            <p className='text-[#5F6D7E]'>Lead Designer</p>
            <div className="contact_icons flex space-x-3 mt-2">
              <p><i class="fa-brands fa-twitter"></i></p>
              <p><i class="fa-brands fa-facebook"></i></p>
              <p><i class="fa-brands fa-linkedin"></i></p>
              <p><i class="fa-brands fa-telegram"></i></p>
            </div>
          </div>

          <div className="team3 mr-10">
            <img src={team2} alt="" />
            <h1 className='text-[22px] font-semibold'>Andrew Steve</h1>
            <p className='text-[#5F6D7E]'>UI/UX Designer</p>
            <div className="contact_icons flex space-x-3 mt-2">
              <p><i class="fa-brands fa-twitter"></i></p>
              <p><i class="fa-brands fa-facebook"></i></p>
              <p><i class="fa-brands fa-linkedin"></i></p>
              <p><i class="fa-brands fa-telegram"></i></p>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}
export default TeamSection