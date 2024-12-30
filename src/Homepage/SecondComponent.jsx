export default function SecondComponent() {
    return (
        <div className="w-full flex flex-col items-center pt-2 pb-2 md:pt-10 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex gap-x-10 md:flex-row flex-col items-center">
                <div className="w-full md:w-1/2 flex flex-col gap-y-3 " >
                    <h2 className="lg:text-3xl text-[#1b3761] font-semibold text-2xl " >Logic BPO - Built to Reduce Your Healthcare BPO and Digital Marketing Headaches</h2>
                    <img src="https://logicbpo.com/wp-content/uploads/2024/01/image-1.webp" alt="" />
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-y-4 " >
                    <h2 className="lg:text-3xl text-black font-semibold text-2xl ">Delivering oerational excellence and commendable digital growth across all 50 states of the U.S</h2>
                    <hr className='w-3/5 border-t-4 border-[#ed7722] ' />
                    <p>With 22+ years of successful outcomes in healthcare BPO and healthcare digital marketing, we are always resolving your medical business process outsourcing hassle across all 6 time zones within 50 states in the US.</p>
                    <div className="flex gap-x-2 md:gap-x-5" >
                        <div className="bg-slate-200 p-4 rounded w-1/3 " >
                            <p className=" text-2xl md:text-5xl font-semibold text-[#1b3761]" > <span>120</span>k </p>
                            <p className=" text-sm md:text-base " >Healthcare Industry Experts</p>
                        </div>
                        <div className="bg-slate-200 p-4 rounded w-1/3 " >
                            <p className=" text-2xl md:text-5xl font-semibold text-[#1b3761]" > <span>3500</span>+ </p>
                            <p className=" text-sm md:text-base " >Automation Solutions</p>
                        </div>
                        <div className="bg-slate-200 p-4 rounded w-1/3 " >
                            <p className=" text-2xl md:text-5xl font-semibold text-[#1b3761]" > <span>35</span>% </p>
                            <p className=" text-sm md:text-base " >Revenue Increase</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}