import React from 'react'
import workspace_img from "../Assets/Workspace.png"

const LefttoRight = () => {
  return (
    <>
      <div className="all_items mt-20 lg:flex lg:ml-28 ml-10">

        <div className="left_items mt-20 lg:w-[55%]">
          <h1 className='font-semibold lg:text-[32px] text-[28px] 2xl:mr-[400px] xl:mr-[200px] lg:mr-[50px]'>Demonstrate branding consequently think outside</h1>

          <p className='text-[#5F6D7E] mt-5 2xl:mr-[300px] xl:mr-[200px] lg:mr-[100px] hidden lg:block'>Velit purus egestas tellus phasellus. Mattis eget sed faucibus magna vulputate pellentesque a diam tincidunt. Aenean malesuada tellus tellus faucibus mauris quisque mauris in.</p>

          <div className="check_items space-y-2 mt-5">
            <div className='flex space-x-2'>
              <p className='text-[#437EF7]'><i class="fa-solid fa-check"></i></p>
              <h5>  Enterprise-grade security</h5>
            </div>

            <div className='flex space-x-2'>
              <p className='text-[#437EF7]'><i class="fa-solid fa-check"></i></p>
              <h5> 99.9% guaranteed uptime SLA</h5>
            </div>

            <div className='flex space-x-2'>
              <p className='text-[#437EF7]'><i class="fa-solid fa-check"></i></p>
              <h5>Designated customer success team</h5>
            </div>
          </div>

          <button className='bg-[#437EF7] px-[18px] py-[10px] rounded-[8px] text-white mt-5 mb-10'>Start Now <i class="fa-solid fa-arrow-right"></i></button>
        </div>


        <div className="right_items mr-10">
          <img className='w-[100%]' src={workspace_img} alt="" />
        </div>
      </div>
    </>
  )
}
export default LefttoRight