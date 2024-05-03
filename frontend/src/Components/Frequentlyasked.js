const Frequentlyasked = () => {
  return (
    <>
      <div className="all_items mt-20">
        <h1 className="text-[32px] font-bold text-center">Frequently asked questions</h1>

        <p className='text-center font-normal 2xl:ml-[430px] 2xl:mr-[500px]  xl:mr-[340px] lg:ml-[250px] lg:mr-[240px] md:ml-[100px] md:mr-[50px] sm:ml-[100px] sm:mr-[90px] ml-[35px] mr-[45px] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
      </div>



      <table className="2xl:ml-64 md:ml-10  ml-3 mr-3 my-10 ">

        <tr className=" border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4 "><h4 className="font-semibold text-[18px]">Authentification Issues</h4>
            <p className="text-[#5F6D7E]">Porttitor nec est nisi, id nunc.</p></td>
          <td className="md:pl-[200px]"><button className="text-[#437EF7] bg-[#F5FAFF] px-2 py-2 lg:ml-[430px] ml-20 md:mr-5">New</button></td>
        </tr>

        <tr className=" border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4">Mi est diam hendrerit ut ipsum, sodales aliquam mauris neque.</td>
          <td className="lg:flex lg:visible invisible lg:pl-[500px] md:pr-5">Updated Last Week
            <p className="text-[#5F6D7E] ml-6"><i class="fa-solid fa-chevron-down"></i></p></td>
        </tr>

        <tr className="ml-28 border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4">Cras vitae, scelerisque tortor augue.</td>
          <td className="flex lg:visible invisible lg:pl-[500px] md:pr-5">Updated Today
            <p className="text-[#5F6D7E] ml-14"><i class="fa-solid fa-chevron-down"></i></p></td>
        </tr>

        <tr className="ml-28 border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4">Venenatis malesuada turpis sit integer felis rhoncus dictum eget ut.</td>
          <td className="flex  lg:visible invisible  lg:pl-[500px] md:pr-5">Updated 2 days ago
            <p className="text-[#5F6D7E] ml-5"><i class="fa-solid fa-chevron-down"></i></p></td>
        </tr>

        <tr className="ml-28 border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4">Pretium ultricies donec non mollis senectus lectus libero tellus.</td>
          <td className="flex  lg:visible invisible  lg:pl-[500px] md:pr-5">Updated 3 days ago
            <p className="text-[#5F6D7E] ml-5"><i class="fa-solid fa-chevron-down"></i></p>
          </td>
        </tr>

        <tr className="ml-28 border-2 border-[#EAEBF0]">
          <td className="pl-5 py-4">Elit massa amet aenean ultrices vitae placerat augue.</td>
          <td className=" flex  lg:visible invisible lg:pl-[500px] md:pr-5">Updated 4 days ago
            <p className="text-[#5F6D7E] ml-5"><i class="fa-solid fa-chevron-down"></i></p></td>
        </tr>
      </table>

    </>
  )
}
export default Frequentlyasked