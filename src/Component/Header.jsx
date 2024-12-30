export default function Header() {
    return (
        <div>
            <div className="bg-[#ED7722] w-full flex flex-col items-center pt-2 pb-2" >
                <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex justify-end items-center " >
                    <p className="text-white font-semibold ">Contact us | 📞 888-987-5565</p>
                </div>
            </div>
            <div className="bg-white w-full flex flex-col items-center pt-2 pb-2" >
                <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex justify-between items-center " >
                    <img src="https://logicbpo.com/wp-content/uploads/2024/01/logo-1.svg" alt="" />
                    <div className="md:flex gap-x-4 hidden" > <p>Healthcare Marketing</p> <p>Specialties</p> <p>Healthcare BPO</p> <p>Blogs</p> </div>
                    <button className="bg-[#ED7722] text-white p-1 pl-4 pr-4 rounded-md" >Talk to an Expert</button>
                </div>
            </div>
        </div>
    )
}