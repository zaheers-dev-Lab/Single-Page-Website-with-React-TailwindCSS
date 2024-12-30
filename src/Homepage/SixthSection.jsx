import { useState } from "react";
export default function SixthSection() {
    const [allchecked, setAllChecked] = useState([]);
    function handleChange(e) {
        if (e.target.checked) {
            setAllChecked([...allchecked, e.target.value]);
        } else {
            setAllChecked(allchecked.filter((item) => item !== e.target.value));
        }
    }

    return (
        <div className="w-full flex flex-col items-center pt-2 pb-2 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-10 lg:w-[75%] flex flex-col items-center gap-y-3 bg-[#1b3761] p-4 rounded-md">
                <h2 className="lg:text-3xl text-white font-semibold text-2xl text-center w-full md:w-2/5 " >Ready to Speak to a Healthcare Growth Expert for FREE?</h2>
                <p className="text-center w-full text-white" >Yes, I need help with:</p>
                <form action="" className="w-full md:w-4/6 flex flex-col md:gap-y-3 " >
                    <div className="flex md:flex-row flex-col w-full text-white gap-x-8 justify-center " >
                        <label ><input onChange={handleChange} type="checkbox" value="Digital Marketing" className="text-white" /> Digital Marketing</label>
                        <label ><input onChange={handleChange} type="checkbox" value="PPC & Lead Generation" className="text-white" /> PPC & Lead Generation</label>
                        <label ><input onChange={handleChange} type="checkbox" value="Website Development" className="text-white" /> Website Development</label>
                    </div>
                    <div className="flex md:flex-row flex-col w-full text-white gap-x-8 justify-center " >
                        <label ><input onChange={handleChange} type="checkbox" value="Reputation Management" className="text-white" /> Reputation Management</label>
                        <label ><input onChange={handleChange} type="checkbox" value="Search Engine Optimization" className="text-white" /> Search Engine Optimization</label>
                        <label ><input onChange={handleChange} type="checkbox" value="Website Design" className="text-white" /> Website Design</label>
                    </div>
                    <div className="flex md:flex-row flex-col w-full text-white gap-x-8 justify-center " >
                        <label ><input onChange={handleChange} type="checkbox" value="Social Media Marketing" className="text-white" /> Social Media Marketing</label>
                        <label ><input onChange={handleChange} type="checkbox" value="Local SEO / PR" className="text-white" /> Local SEO / PR</label>
                        <label ><input onChange={handleChange} type="checkbox" value="Hav'nt decided yet!" className="text-white" /> Have'nt decided yet!</label>
                    </div>
                    <div className="flex flex-col md:flex-row justify-center gap-x-3 ">
                        <div className="flex flex-col gap-y-2" >
                            <label className="text-white" htmlFor="">Name *</label>
                            <input className=" p-2 rounded outline-none "  type="text" placeholder="Your Name" />
                        </div>
                        <div className="flex flex-col gap-y-2" >
                            <label className="text-white" htmlFor="">Email *</label>
                            <input className=" p-2 rounded outline-none "  type="text" placeholder="Your Email" />
                        </div>
                        <div className="flex flex-col gap-y-2" >
                            <label className="text-white" htmlFor="">Phone Number *</label>
                            <input className=" p-2 rounded outline-none "  type="text" placeholder="Your Phone Number" />
                        </div>
                    </div>
                    <div className="flex justify-center mt-3" >
                        <button className="bg-[#ed7722] text-white rounded pl-4 pr-4 pt-2 pb-2" >Get Free Consultation</button>
                    </div>
                </form>
                {/* <div> All checked values are {allchecked.join(",")} </div> */}
            </div >
        </div >
    )
}