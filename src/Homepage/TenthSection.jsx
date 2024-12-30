export default function TenthSection() {
    return (
        <div className="w-full flex flex-col pt-10  bg-[#1b3761] mb-[80px]" >
            <div className="w-[95%] md:w-[100%] lg:w-[75%] flex flex-col md:flex-row items-center self-center gap-y-10 ">
                <div className="w-full md:w-1/2 flex flex-col gap-y-2 justify-center">
                    <h2 className="text-white font-semibold text-xl md:text-3xl md:w-3/4" >Grow Your Healthcare Facility in Record Time</h2>
                    <p className="text-white" >You've always wanted to grow your hospital or practice faster! But nothing substantial happened because you were busy taking much-needed care of your patients. That's where LogicBPO comes in to help you unlock growth in record time without you lifting a finger.</p>
                </div>
                <div className="w-full md:w-1/2 flex flex-col gap-y-2 items-center">
                    <div className="bg-slate-200 p-5 md:p-10 flex flex-col gap-y-3 md:w-[60%] w-full rounded-md mb-[-40px]" >
                        <h2 className="text-center text-[#1B3761] font-semibold text-xl">Schedule a Growth Session</h2>
                        <input className="p-2 rounded-md"  type="text" placeholder="Name"  />
                        <input className="p-2 rounded-md"  type="text" placeholder="Email Address"  />
                        <input className="p-2 rounded-md"  type="text" placeholder='Phone Number' />
                        <input className="p-2 rounded-md"  type="text" placeholder="Your Healthcare Facility's Name" />
                        <input className="p-2 rounded-md"  type="text" placeholder="Monthly Budget" />
                        <button className="bg-[#ED7722] p-2 text-white rounded-md" >Unlock Growth Now</button>
                    </div>
                </div>
            </div>
        </div>
    )
}