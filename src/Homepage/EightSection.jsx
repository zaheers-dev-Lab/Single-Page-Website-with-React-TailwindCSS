export default function EightSection() {
    return (
        <div className="w-full flex flex-col pt-2 pb-2 md:pb-10" >
            <div className="w-[95%] md:w-[100%] lg:w-[75%] flex flex-col rounded-xl md:flex-row items-center shadow-2xl self-center gap-y-3">
                <div className=" w-full md:w-1/2  flex flex-col gap-y-3 items-start p-2 md:pl-10 rounded-l-xl " >
                    <h2 className=" text-xl md:text-3xl font-semibold" >Reduce Back-Office Operational Costs with AI-driven Healthcare BPO</h2>
                    <p >At Logic BPO, we deliver high-performance healthcare business process outsourcing to resolve issues faster than you in-house team at an affordable investment, utilizing our professional expertise and AI-driven technologies.</p>
                    <button className="bg-[#1b3761] text-white pl-4 pr-4 pt-2 pb-2 rounded-2xl " >Get Free Consultation</button>
                </div>
                <div className=" w-full md:w-1/2 rounded-r-2xl" >
                    <img className=" md:ml-[15px] md:mb-[-16px]" src="https://logicbpo.com/wp-content/uploads/2024/06/picture.webp" alt="" />
                </div>
            </div>
        </div>
    )
}