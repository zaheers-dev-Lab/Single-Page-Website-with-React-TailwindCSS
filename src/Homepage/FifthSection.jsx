export default function FifthSection() {
    return (
        <div className="w-full flex flex-col pt-2 pb-2 md:pb-10" >
            <div className="w-[95%] md:w-[100%] md:p-2 lg:w-[75%] flex flex-col items-center self-center gap-y-3 ">
                <h2 className="lg:text-3xl text-[#1b3761] font-semibold text-2xl text-center w-full md:w-4/5 " >One-Stop Solution for All Your Healthcare Digital Marketing Needs</h2>
            </div>
            <div className="bg-cover bg-center flex flex-col items-center p-2 mt-5" style={{ backgroundImage: 'url(https://logicbpo.com/wp-content/uploads/2024/01/healthcare-bg-scaled.webp)' }}  >
                <div className="w-[95%] md:w-[100%] md:pt-10 pb-5 lg:w-[75%] flex flex-col md:flex-row items-center gap-x-3 ">
                    <div className=" w-full md:w-1/5 p-10 border-solid border border-white rounded-md" >
                        <p className="text-center text-4xl mb-3 " >📈</p>
                        <p className="text-center text-white" >Healthcare SEO</p>
                    </div>
                    <div className=" w-full md:w-1/5 p-10 border-solid border border-white rounded-md" >
                        <p className="text-center text-4xl mb-3 " >📺</p>
                        <p className="text-center text-white" >Healthcare Design</p>
                    </div>
                    <div className=" w-full md:w-1/5 p-10 pl-8 pr-8 border-solid border border-white rounded-md" >
                        <p className="text-center text-4xl mb-3 " >📢</p>
                        <p className="text-center text-white" >Healthcare Advertising</p>
                    </div>
                </div>
                <div className="w-[95%] md:w-[100%] pb-10 lg:w-[75%] flex flex-col md:flex-row items-center gap-x-3">
                    <div className=" w-full md:w-1/5 p-10 pl-5 pr-5 border-solid border border-white rounded-md" >
                        <p className="text-center text-4xl mb-3 " >👩‍💻</p>
                        <p className="text-center text-white" >Healthcare Development Services</p>
                    </div>
                    <div className=" w-full md:w-1/5 pt-10 pb-10 pl-5 pr-5 border-solid border border-white rounded-md" >
                        <p className="text-center text-4xl mb-3 " >🏢</p>
                        <p className="text-center text-white" >Healthcare Reputation Management</p>
                    </div>
                    <p className="text-white underline " >Our Digital Marketing Toolkit </p>
                </div>
            </div>
        </div>
    )
}