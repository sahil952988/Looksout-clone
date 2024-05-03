import React from 'react'
import icon from "../Assets/Icon.png"
import icon1 from "../Assets/Icon1.png"
import icon2 from "../Assets/Icon2.png"
const Features = () => {
  return (
    <>
      <div className="all_items mt-20">
        <h1 className="text-center font-bold text-[32px]">Messaging for all</h1>
        <p className="text-center mt-3 hidden lg:block">User generated content in real-time will have multiple touchpoints for offshoring.</p>


        <div className="features grid lg:grid-cols-4 sm:grid-cols-2  gap-16 lg:ml-32 ml-10 mr-5 mt-20 overflow-hidden">

          <div className="feature1  lg:w-[380px]">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon2} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Easier Work Organization</h1>
            <p className='text-[#5F6D7E]'>Efficiently unleash cross-media information without cross-media value. Quickly timely deliverables for real-time schemas. </p>
          </div>

          <div className="feature2 lg:ml-[100px] lg:w-[380px]">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Fast Connection</h1>
            <p className='text-[#5F6D7E]'>Completely pursue scalable customer cross- media through potentialities. Holistically quickly installed portals. </p>
          </div>

          <div className="feature3 lg:w-[380px] lg:ml-[250px]">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon1} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Stramlined Processes</h1>
            <p className='text-[#5F6D7E]'>Objectively innovate empowered scalable manufactured products whereas parallel platforms predominate extensible. </p>
          </div>

          <div className="feature4 w-[100%] lg:hidden">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon1} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Easier Integrations</h1>
            <p className='text-[#5F6D7E]'>Completely pursue scalable customer try through potentialities. Pontificate portals installed. Efficiently unleash information. </p>
          </div>

          <div className="feature5 w-[100%] lg:hidden">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon1} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Marketing Analytics</h1>
            <p className='text-[#5F6D7E]'>Phosfluorescently engage worldwide methodologies with web-enabled  Interactively coordinate. </p>
          </div>

          <div className="feature6 w-[100%]  lg:hidden">
            <p><img className='bg-[#437EF7] rounded-full py-2 px-2' src={icon1} alt="" /></p>
            <h1 className='text-[22px] font-semibold my-3'>Workflow builder</h1>
            <p className='text-[#5F6D7E]'>Collaboratively administrate turnkey service channels whereas virtual e-tailers. This  is objectively scalable metrics whereas. </p>
          </div>
        </div>
      </div>


    </>
  )
}
export default Features