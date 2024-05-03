import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify';
import axios from 'axios'
import { Helmet } from '../Components/Helmet/Helmet';


const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dropdown, setDropdown] = useState("");
  const [messages, setMessages] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post("/api/contact/register", {
        name,
        email,
        phone,
        dropdown,
        messages
      });
      if (res && res.data.success) {
        toast.success(res.data && res.data.message);
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };
  return (
    <>
      <Helmet title="Contact">
        <div className="all_items mt-28">
          <h1 className="text-center font-bold text-[32px]">Get In Touch With Us </h1>
          <p className="text-center my-5  font-normal 2xl:ml-[430px] 2xl:mr-[500px]  xl:mr-[340px] lg:ml-[250px] lg:mr-[240px] md:ml-[100px] md:mr-[50px] sm:ml-[100px] sm:mr-[90px] ml-[35px] mr-[45px] mt-5">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>


          <div className="form bg-[#252D3C] rounded-[7px] lg:ml-auto lg:mr-auto lg:max-w-fit sm:ml-10 sm:mr-10 ml-5 mr-5 mt-20">
            <form onSubmit={handleSubmit}>
              <div className="name_email sm:flex pt-10 sm:pl-10 pl-5">
                <div className="name sm:-0 mr-5">
                  <p className="text-white">First Name</p>

                  <input value={name} onChange={(e) => setName(e.target.value)} className="pl-5 py-2 outline-none rounded-[6px] bg-[#2C3444] text-white lg:w-[400px] md:w-[250px] sm:w-[200px] w-[100%] " type="text" placeholder="Input" required />
                </div>

                <div className="email sm:mr-10 sm:ml-[50px] mr-5 sm:mt-0 mt-7">
                  <p className="text-white">Email</p>
                  <input value={email} onChange={(e) => setEmail(e.target.value)} className="pl-5 py-2 outline-none rounded-[6px] bg-[#2C3444] text-white  lg:w-[400px] md:w-[250px] sm:w-[200px] w-[100%] " type="email" placeholder="Input" required />
                </div>
              </div>

              <div className="number_dropdown sm:flex pt-7 sm:pl-10 pl-5 sm:mr-0 mr-5">
                <div className="number">
                  <p className="text-white">Phone Number</p>
                  <input value={phone} onChange={(e) => setPhone(e.target.value)} className="pl-5 py-2 outline-none rounded-[6px] bg-[#2C3444] text-white lg:w-[400px] sm:w-[250px] w-[100%]" type="number" placeholder="+000" required />
                </div>

                <div className="dropdown sm:ml-[50px] sm:mt-0 mt-7  sm:mr-0 mr-5">
                  <p className="text-white">Get in touch with us</p>
                  <select value={dropdown} onChange={(e) => setDropdown(e.target.value)} required className=" pl-5 py-2 outline-none rounded-[6px] bg-[#2C3444] text-white lg:w-[400px] md:w-[250px] sm:w-[150px] w-[100%]">
                    <option value="dropdown1">Dropdown1</option>
                    <option value="dropdown2">Dropdown2</option>
                    <option value="dropdown2">Dropdown3</option>
                  </select></div>

              </div>


              <div className="message  pt-10 sm:pl-10 pl-5 sm:mr-10 mr-5">
                <p className="text-white">Message</p>
                <textarea value={messages} onChange={(e) => setMessages(e.target.value)} className="pl-5 py-2 outline-none rounded-[6px] bg-[#2C3444] text-white w-[100%] " name="" id="" cols="30" rows="10" placeholder="Hi! we are Lookscout" required></textarea>
              </div>


              <div class="tacbox text-white ml-10 mt-3">
                <input id="checkbox" type="checkbox" />
                <label for="checkbox"> I agree with<a href="#">Lookscout privacy policy</a>.</label>
              </div>
              <button type="submit" className='bg-[#437EF7] px-4 py-2 rounded-[7px] text-white font-semibold ml-10 my-5'>Sumbit</button>

            </form>
          </div >
        </div >
      </Helmet>
    </>
  )
}
export default Contact