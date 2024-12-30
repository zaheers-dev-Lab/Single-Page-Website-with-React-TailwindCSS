export default function ThirdComponent() {
    return (
        <div className="w-full flex flex-col items-center pt-2 pb-2 md:pt-[120px] md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex md:flex-row flex-col items-start gap-y-3 ">
                <div className="w-full md:w-1/3 bg-[#1b3761] pt-[150px] pb-[150px] pl-[50px] pr-[50px] rounded-2xl rounded-tr-[150px] flex flex-col md:mt-[-100px] md:mr-[-40px] z-0 gap-y-3  " >
                    <p className="text-white text-4xl font-bold" >The Solutions You Need</p>
                    <hr className="w-2/3 border-t-4 border-[#ed7722]" />
                    <p className="text-white">Re-imagine your healthcare growth with our industry-focused BPO and digital marketing solutions.</p>
                </div>
                <div className=" w-full md:w-1/3 bg-slate-200 " >
                    <img src="https://logicbpo.com/wp-content/uploads/2024/01/image-1-1.webp" alt="" />
                    <div className="p-5 md:p-10 md:pl-[60px] gap-y-3 flex flex-col " >
                        <h2 className="text-[#1b3761] font-semibold md:text-xl text-lg" >Healthcare BPO</h2>
                        <p className="text-sm" >Outsource all you non-clinical operations to expedite your timely reimbursements.</p>
                        <button className="bg-[#1b3761] text-white pl-6 pr-6 pt-1 pb-1 rounded " >See Medical BPO Solutions </button>
                    </div>
                </div>
                <div className=" w-full md:w-[32.4%] bg-slate-200 " >
                    <img src="https://logicbpo.com/wp-content/uploads/2024/01/image-2.webp" alt="" />
                    <div className="p-5 md:p-10 gap-y-3 flex flex-col " >
                        <h2 className="text-[#1b3761] font-semibold md:text-xl text-lg"  >Healthcare Digital Marketing</h2>
                        <p className="text-sm" >Expand your reach with our comprehensive suits of healthcare digital marketing solutions.</p>
                        <button className="bg-[#1b3761] text-white pl-6 pr-6 pt-1 pb-1 rounded " >Explore Marketing Services</button>
                    </div>
                </div>
            </div>
        </div>

    )
}